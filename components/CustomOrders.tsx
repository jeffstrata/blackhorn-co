'use client'

import { useEffect, useRef } from 'react'
import { Search, Palette, Package } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Choose Your Skull',
    description:
      'Select the species and size that fits your space — longhorn, bison, yak, ram, and more. We\'ll help you find the right canvas for your vision.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design Consultation',
    description:
      'We connect you with our network of Alberta-based artists to bring your vision to life. Share references, colours, and ideas — they handle the rest.',
  },
  {
    number: '03',
    icon: Package,
    title: 'Handcrafted & Delivered',
    description:
      'Your one-of-a-kind piece is carefully packaged and shipped anywhere in Canada. Every commission comes with a certificate of authenticity.',
  },
]

export default function CustomOrders() {
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
      id="custom-orders"
      ref={sectionRef}
      className="py-24 px-6 bg-[#1A1A1A] relative overflow-hidden"
    >
      {/* Subtle copper glow left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(184,115,51,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-body text-xs font-medium tracking-[0.35em] uppercase text-[#B87333] mb-4">
            Made for You
          </p>
          <h2
            className="font-display font-bold text-[#FAF7F2] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Commission a Custom Piece
          </h2>
          <div className="copper-divider" />
          <p className="font-body text-[#A8A29E] mt-6 max-w-2xl mx-auto text-base leading-relaxed">
            Can&apos;t find the right piece in our collection? We work with a network
            of talented Alberta-based artists to create fully custom painted skulls.
            You choose the skull, you choose the vision — they paint something
            the world has never seen before.
          </p>
        </div>

        {/* Pricing callout */}
        <div className="border border-[#B87333]/25 bg-[#0F0F0F]/50 p-6 md:p-8 mb-16 text-center reveal">
          <p className="font-body text-[#A8A29E] text-sm mb-2 tracking-widest uppercase">
            Custom Order Pricing
          </p>
          <p className="font-display text-[#FAF7F2] font-semibold" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            Starting at <span className="text-[#B87333]">$350 CAD</span> for custom painting
          </p>
          <p className="font-body text-[#A8A29E] text-sm mt-2">
            Plus base skull price & shipping. Final price depends on species, size, and complexity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal relative text-center md:text-left"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px"
                  style={{
                    background: 'linear-gradient(90deg, #B87333, transparent)',
                    opacity: 0.2,
                  }}
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-col items-center md:items-start gap-4">
                {/* Icon + Number */}
                <div className="relative">
                  <div className="w-14 h-14 border border-[#B87333]/30 bg-[#1A1A1A] flex items-center justify-center">
                    <step.icon size={22} className="text-[#B87333]" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 font-display text-xs font-bold text-[#B87333]/40">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-[#FAF7F2] text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-[#A8A29E] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <a
            href="mailto:hello@blackhornco.ca?subject=Custom%20Order%20Inquiry&body=Hi%20Blackhorn%20Co.%2C%0A%0AI%27d%20like%20to%20start%20a%20custom%20commission.%20Here%27s%20what%20I%20have%20in%20mind%3A%0A%0ASpecies%2FType%3A%20%0ASize%20preference%3A%20%0ADesign%20ideas%2Freferences%3A%20%0ABudget%20range%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#B87333] hover:bg-[#D4894A] text-[#0F0F0F] font-body font-semibold text-sm tracking-widest uppercase transition-all duration-200"
            style={{ letterSpacing: '0.15em' }}
          >
            Start Your Custom Order
          </a>
          <p className="font-body text-[#A8A29E] text-xs mt-4">
            We&apos;ll reply within 24 hours to discuss your vision.
          </p>
        </div>
      </div>
    </section>
  )
}
