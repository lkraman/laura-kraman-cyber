import { NextResponse } from 'next/server'

const LAMPYRE_URL = 'https://account.lampyre.io/api/1.6'

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
  const apiKey = process.env.LAMPYRE_API_KEY
  if (!apiKey) return NextResponse.json({ error: 'Enrichment is not configured.' }, { status: 503 })

  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (!email || !email.includes('@')) return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })

  const startUrl = `${LAMPYRE_URL}/find/by-token?token=${encodeURIComponent(apiKey)}&email=${encodeURIComponent(email)}`
  const startResponse = await fetch(startUrl, { headers: { accept: 'application/json' }, cache: 'no-store' })
  if (!startResponse.ok) return NextResponse.json({ error: 'The enrichment request could not be started.' }, { status: 502 })

  const started = await startResponse.json()
  const requestUuid = started?.request_uuid
  if (!requestUuid) return NextResponse.json({ error: 'The enrichment service returned no request id.' }, { status: 502 })

  for (let attempt = 0; attempt < 3; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, attempt === 0 ? 700 : 1200))
    const resultResponse = await fetch(`${LAMPYRE_URL}/find/${encodeURIComponent(requestUuid)}/by-token?token=${encodeURIComponent(apiKey)}`, {
      headers: { accept: 'application/json' },
      cache: 'no-store',
    })
    if (!resultResponse.ok) continue
    const result = await resultResponse.json()
    if (result?.status === 2) return NextResponse.json({ status: 'complete', result: sanitizeResult(result.result ?? []) })
    if (result?.status === 3) return NextResponse.json({ status: 'failed' }, { status: 502 })
  }

  return NextResponse.json({ status: 'processing' })
}
