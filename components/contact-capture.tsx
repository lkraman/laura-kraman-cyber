'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Check, Mail } from 'lucide-react'

export function ContactCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

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
      setSubmitted(true)
      setEmail('')
      setStatus('idle')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-capture">
      <p className="capture-label"><Mail size={14} /> Want to connect?</p>
      <p className="capture-copy">Your email is used only to improve identity matching through the authorized enrichment service. Nothing is saved by this site.</p>
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
    </div>
  )
}
