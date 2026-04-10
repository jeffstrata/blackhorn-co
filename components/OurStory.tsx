'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: '250+', label: 'Skulls Crafted' },
  { value: '100%', label: 'Alberta-Based Artists' },
  { value: 'Ethically', label: 'Sourced & Cleaned' },
]

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="py-24 px-6 bg-[#0F0F0F] relative overflow-hidden"
    >
      {/* Decorative copper line — right edge */}
      <div
        className="absolute right-0 top-24 bottom-24 w-px pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #B87333, transparent)',
          opacity: 0.15,
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="reveal">
            <p className="font-body text-xs font-medium tracking-[0.35em] uppercase text-[#B87333] mb-4">
              Alberta Roots
            </p>
            <h2
              className="font-display font-bold text-[#FAF7F2] mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Our Story
            </h2>
            <div className="w-12 h-0.5 bg-[#B87333] mb-8" />

            <div className="space-y-5 font-body text-[#A8A29E] text-base leading-relaxed">
              <p>
                Blackhorn Co. was born from a deep respect for the land and the animals
                that shape the Alberta landscape. What started as a passion for preserving
                the natural beauty of bone became something far greater — a craft, a
                community, and a movement to turn raw, ethically sourced skulls into
                pieces of western art that demand to be seen.
              </p>
              <p>
                Every skull we work with is hand-cleaned and prepared with care before it
                ever reaches an artist&apos;s hands. We partner with a curated network of local
                Alberta painters — each bringing their own voice to the canvas of bone.
                The result is art that carries both the weight of nature and the soul of
                human creativity. No two pieces are ever the same. That&apos;s not a tagline.
                That&apos;s a fact.
              </p>
              <p>
                Whether you&apos;re looking for a statement piece for your restaurant, the
                perfect conversation starter for your Airbnb, or something entirely custom
                made for your home — Blackhorn Co. exists to bring the rugged beauty of
                the Canadian west into your space.
              </p>
            </div>
          </div>

          {/* Right — Stats + Image placeholder */}
          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            {/* Image placeholder */}
            <div
              className="relative aspect-square bg-[#1A1A1A] border border-[#242424] mb-8 flex items-center justify-center"
              aria-label="Photo of our studio or artist at work — coming soon"
            >
              <div className="text-center px-8">
                <div className="w-16 h-16 border border-[#B87333]/30 mx-auto mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 opacity-30" aria-hidden="true">
                    <rect x="4" y="4" width="32" height="32" stroke="#B87333" strokeWidth="1.5" />
                    <path d="M4 28l10-10 6 6 6-8 10 10" stroke="#B87333" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="13" cy="15" r="3" stroke="#B87333" strokeWidth="1.5" />
                  </svg>
                </div>
                <p className="font-body text-[#A8A29E]/40 text-xs tracking-widest uppercase">
                  Studio photo coming soon
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#B87333]/40" aria-hidden="true" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#B87333]/40" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#B87333]/40" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#B87333]/40" aria-hidden="true" />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center border-t border-[#242424] pt-4">
                  <p className="font-display font-bold text-[#B87333] text-2xl mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-[#A8A29E] text-xs tracking-wide leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
