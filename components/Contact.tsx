'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Instagram, Clock } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const revealEls = sectionRef.current?.querySelectorAll('.reveal')
    revealEls?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Netlify form handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setSubmitted(true)
    } catch {
      // Fallback: open mailto link
      const name = data.get('name') || ''
      const email = data.get('email') || ''
      const message = data.get('message') || ''
      const interest = data.get('interest') || ''
      const subject = encodeURIComponent(`[${interest}] Message from ${name}`)
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`
      )
      window.location.href = `mailto:hello@blackhornco.ca?subject=${subject}&body=${body}`
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 bg-[#1A1A1A] relative overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 80%, rgba(184,115,51,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-body text-xs font-medium tracking-[0.35em] uppercase text-[#B87333] mb-4">
            Reach Out
          </p>
          <h2
            className="font-display font-bold text-[#FAF7F2] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Get In Touch
          </h2>
          <div className="copper-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left: Contact info */}
          <div className="lg:col-span-2 reveal">
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-semibold text-[#FAF7F2] text-xl mb-4">
                  Let&apos;s Talk
                </h3>
                <p className="font-body text-[#A8A29E] text-sm leading-relaxed">
                  Whether you&apos;re inquiring about an existing piece, starting a
                  custom commission, or planning a commercial order — we want to
                  hear from you.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#B87333]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-[#B87333]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-[#A8A29E] text-xs uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@blackhornco.ca"
                    className="font-body text-[#FAF7F2] hover:text-[#B87333] transition-colors text-sm"
                  >
                    hello@blackhornco.ca
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#B87333]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Instagram size={16} className="text-[#B87333]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-[#A8A29E] text-xs uppercase tracking-widest mb-1">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/blackhornco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[#FAF7F2] hover:text-[#B87333] transition-colors text-sm"
                  >
                    @blackhornco
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#B87333]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={16} className="text-[#B87333]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-[#A8A29E] text-xs uppercase tracking-widest mb-1">
                    Response Time
                  </p>
                  <p className="font-body text-[#FAF7F2] text-sm">
                    Typically within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3 reveal" style={{ transitionDelay: '100ms' }}>
            {submitted ? (
              <div className="border border-[#B87333]/30 bg-[#0F0F0F] p-10 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-14 h-14 border border-[#B87333]/30 flex items-center justify-center">
                  <Mail size={22} className="text-[#B87333]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-[#FAF7F2] text-2xl">
                  Message Sent
                </h3>
                <p className="font-body text-[#A8A29E] text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Netlify hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human:{' '}
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="font-body text-[#A8A29E] text-xs uppercase tracking-widest block mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-[#0F0F0F] border border-[#242424] focus:border-[#B87333] text-[#FAF7F2] font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#A8A29E]/30"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="font-body text-[#A8A29E] text-xs uppercase tracking-widest block mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-[#0F0F0F] border border-[#242424] focus:border-[#B87333] text-[#FAF7F2] font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#A8A29E]/30"
                    />
                  </div>
                </div>

                {/* Interest dropdown */}
                <div>
                  <label
                    htmlFor="interest"
                    className="font-body text-[#A8A29E] text-xs uppercase tracking-widest block mb-2"
                  >
                    I&apos;m Interested In *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full bg-[#0F0F0F] border border-[#242424] focus:border-[#B87333] text-[#FAF7F2] font-body text-sm px-4 py-3 outline-none transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23A8A29E' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                    }}
                  >
                    <option value="" disabled>
                      Select an option...
                    </option>
                    <option value="Buying from the collection">
                      Buying from the collection
                    </option>
                    <option value="Custom order commission">Custom order commission</option>
                    <option value="Bulk / business inquiry">Bulk / business inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="font-body text-[#A8A29E] text-xs uppercase tracking-widest block mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you're looking for..."
                    className="w-full bg-[#0F0F0F] border border-[#242424] focus:border-[#B87333] text-[#FAF7F2] font-body text-sm px-4 py-3 outline-none transition-colors resize-none placeholder:text-[#A8A29E]/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#B87333] hover:bg-[#D4894A] disabled:bg-[#B87333]/50 text-[#0F0F0F] font-body font-semibold text-sm tracking-widest uppercase transition-all duration-200"
                  style={{ letterSpacing: '0.15em' }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="font-body text-[#A8A29E] text-xs text-center">
                  We typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
