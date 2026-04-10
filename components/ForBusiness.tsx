'use client'

import { useEffect, useRef } from 'react'
import { Utensils, Home, Paintbrush, Building2 } from 'lucide-react'

const clientTypes = [
  {
    icon: Utensils,
    label: 'Restaurants & Bars',
    description: 'Create atmosphere that guests talk about long after they leave.',
  },
  {
    icon: Home,
    label: 'Airbnb & Vacation Rentals',
    description: 'Set your listing apart with western art that earns 5-star reviews.',
  },
  {
    icon: Paintbrush,
    label: 'Interior Designers',
    description: 'Source bespoke western art for your client projects. Bulk pricing available.',
  },
  {
    icon: Building2,
    label: 'Commercial Spaces',
    description: 'Breweries, lodges, offices — we source art to fit your brand.',
  },
]

export default function ForBusiness() {
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
      id="for-business"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: '#111009' }}
    >
      {/* Copper glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(184,115,51,0.07) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-body text-xs font-medium tracking-[0.35em] uppercase text-[#B87333] mb-4">
            Trade & Commercial
          </p>
          <h2
            className="font-display font-bold text-[#FAF7F2] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            For Restaurants, Bars
            <br />
            <span className="italic">&amp; Designers</span>
          </h2>
          <div className="copper-divider" />
          <p className="font-body text-[#A8A29E] mt-6 max-w-xl mx-auto text-base leading-relaxed">
            Looking to make a statement in your space? We work with restaurants,
            breweries, Airbnb hosts, and interior designers to source custom skull
            art that fits your brand. Bulk pricing available for multi-piece orders.
          </p>
        </div>

        {/* Client types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clientTypes.map((type, i) => (
            <div
              key={type.label}
              className="reveal border border-[#242424] bg-[#1A1A1A] p-6 text-center hover:border-[#B87333]/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 border border-[#B87333]/25 bg-[#0F0F0F] flex items-center justify-center mx-auto mb-4">
                <type.icon size={20} className="text-[#B87333]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-[#FAF7F2] text-lg mb-2">
                {type.label}
              </h3>
              <p className="font-body text-[#A8A29E] text-sm leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <a
            href="mailto:hello@blackhornco.ca?subject=Business%20%2F%20Bulk%20Quote%20Request&body=Hi%20Blackhorn%20Co.%2C%0A%0AI%27m%20interested%20in%20sourcing%20skull%20art%20for%20my%20business.%20Here%27s%20some%20context%3A%0A%0ABusiness%20type%3A%20%0ANumber%20of%20pieces%20needed%3A%20%0AStyle%20%2F%20aesthetic%3A%20%0ATimeline%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
            className="inline-block px-10 py-4 bg-[#B87333] hover:bg-[#D4894A] text-[#0F0F0F] font-body font-semibold text-sm tracking-widest uppercase transition-all duration-200"
            style={{ letterSpacing: '0.15em' }}
          >
            Get a Quote
          </a>
          <p className="font-body text-[#A8A29E] text-xs mt-4">
            Volume discounts available for orders of 3+ pieces.
          </p>
        </div>
      </div>
    </section>
  )
}
