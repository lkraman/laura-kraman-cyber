'use client'

import { FormEvent, ReactNode, useState } from 'react'
import { ArrowUpRight, Check, Mail } from 'lucide-react'

function formatLabel(value: string) {
  return value.replaceAll('_', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function LiveResults({ results }: { results: unknown[] }) {
  const rows = results.flatMap((entry) => {
    if (!entry || typeof entry !== 'object') return []
    return Object.entries(entry as Record<string, unknown>).filter(([, value]) => ['string', 'number', 'boolean'].includes(typeof value))
  })

  return (
    <div className="live-results" aria-live="polite">
      <p className="results-heading">Public matches for this email</p>
      {rows.length > 0 ? rows.map(([key, value], index) => (
        <div className="result-row" key={`${key}-${index}`}><span>{formatLabel(key)}</span><strong>{String(value)}</strong></div>
      )) : <p className="results-empty">No public matches were returned.</p>}
    </div>
  )
}

export function ContactCapture({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [results, setResults] = useState<unknown[]>([])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/enrich', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) throw new Error('Enrichment failed')
      const payload = (await response.json()) as { result?: unknown[] }
      setResults(Array.isArray(payload.result) ? payload.result : [])
      setSubmitted(true)
      setEmail('')
      setStatus('idle')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-capture">
      <p className="capture-label"><Mail size={14} /> Public context lookup</p>
      <p className="capture-copy">Enter your email and quickly find your publicly sourced info. The lookup may display your IP address, name, phone, related emails, usernames, public social profiles, images, websites, and workplaces. No results will be saved by this site.</p>
      {submitted ? (
        <p className="capture-success" role="status"><Check size={16} /> Identity matching request received. No email was stored by this site.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="visitor-email">Your email address</label>
          <div className="capture-row">
            <input id="visitor-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <button type="submit" aria-label="Submit email for identity matching" disabled={status === 'loading'}>{status === 'loading' ? '…' : <ArrowUpRight size={17} />}</button>
          </div>
          {status === 'error' && <p className="capture-error" role="alert">The matching request could not be completed. Please try again.</p>}
        </form>
      )}
      {submitted && (
        <div className="intel-results">
          {results.length > 0 ? <LiveResults results={results} /> : children}
        </div>
      )}
    </div>
  )
}
