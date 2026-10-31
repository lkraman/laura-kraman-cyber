'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Check, Mail } from 'lucide-react'

export function ContactCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent('Resume page visitor')
    const body = encodeURIComponent(`A visitor requested contact from the resume page.\n\nEmail: ${email}`)
    window.location.href = `mailto:Laurakraman01@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="contact-capture">
      <p className="capture-label"><Mail size={14} /> Want to connect?</p>
      <p className="capture-copy">Tell Laura where to follow up. Your email is used only to open a message to Laura and is not stored by this site.</p>
      {submitted ? (
        <p className="capture-success" role="status"><Check size={16} /> Your email was handed to your mail client.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="visitor-email">Your email address</label>
          <div className="capture-row">
            <input id="visitor-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <button type="submit" aria-label="Email Laura"><ArrowUpRight size={17} /></button>
          </div>
        </form>
      )}
    </div>
  )
}
