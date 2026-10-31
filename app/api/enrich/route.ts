import { NextResponse } from 'next/server'

const blockedKeys = new Set(['password', 'passwords', 'secret', 'token', 'api_key', 'access_token'])

function sanitizeResult(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sanitizeResult)
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key]) => !blockedKeys.has(key.toLowerCase()))
      .map(([key, entry]) => [key, sanitizeResult(entry)]),
  )
}

export async function POST(request: Request) {
  const spiderFootUrl = process.env.SPIDERFOOT_URL
  const spiderFootKey = process.env.SPIDERFOOT_API_KEY
  if (!spiderFootUrl || !spiderFootKey) return NextResponse.json({ error: 'Enrichment is not configured.' }, { status: 503 })

  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (!email || !email.includes('@')) return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })

  const headers = { accept: 'application/json', authorization: `Bearer ${spiderFootKey}` }
  const startResponse = await fetch(`${spiderFootUrl.replace(/\/$/, '')}/startscan`, {
    method: 'POST',
    headers: { ...headers, 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ scanname: `public-email-${Date.now()}`, scantarget: email, usecase: 'passive' }),
    cache: 'no-store',
  })
  if (!startResponse.ok) return NextResponse.json({ error: 'The enrichment request could not be started.' }, { status: 502 })

  const started = await startResponse.json()
  const scanId = started?.id ?? started?.scan_id ?? started?.scanId
  if (!scanId) return NextResponse.json({ error: 'The enrichment service returned no scan id.' }, { status: 502 })

  const baseUrl = spiderFootUrl.replace(/\/$/, '')
  for (let attempt = 0; attempt < 3; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, attempt === 0 ? 700 : 1200))
    const statusResponse = await fetch(`${baseUrl}/scanstatus?id=${encodeURIComponent(scanId)}`, { headers, cache: 'no-store' })
    if (!statusResponse.ok) continue
    const status = await statusResponse.json()
    if (status?.status === 'FINISHED' || status?.status === 2 || status?.complete === true) {
      const resultsResponse = await fetch(`${baseUrl}/scanexportjsonmulti?ids=${encodeURIComponent(scanId)}`, { headers, cache: 'no-store' })
      if (!resultsResponse.ok) return NextResponse.json({ error: 'The scan completed without readable results.' }, { status: 502 })
      const results = await resultsResponse.json()
      return NextResponse.json({ status: 'complete', result: sanitizeResult(Array.isArray(results) ? results : results?.results ?? []) })
    }
  }

  return NextResponse.json({ status: 'processing', scanId })
}
