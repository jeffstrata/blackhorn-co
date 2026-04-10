'use client'

import { useState, useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'
import { products, type ProductCategory } from '../data/products'

const CATEGORIES: ('All' | ProductCategory)[] = [
  'All',
  'Longhorn',
  'Bison',
  'Yak',
  'Ram',
  'Small Skulls',
  'Other',
]

// Placeholder shown when no product photo has been added yet
function SkullPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#111]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/emblem.jpeg"
        alt=""
        aria-hidden="true"
        className="w-3/5 h-3/5 object-contain opacity-30"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  )
}

export default function Collection() {
  const [activeFilter, setActiveFilter] = useState<'All' | ProductCategory>('All')
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

  const filtered =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.category === activeFilter)

  const handleInquire = (productName: string) => {
    const subject = encodeURIComponent(`Inquiry: ${productName}`)
    const body = encodeURIComponent(
      `Hi Blackhorn Co.,\n\nI'm interested in "${productName}" from your collection. Could you provide more details or confirm availability?\n\nThank you!`
    )
    window.location.href = `mailto:hello@blackhornco.ca?subject=${subject}&body=${body}`
  }

  return (
    <section id="collection" ref={sectionRef} className="py-24 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-body text-xs font-medium tracking-[0.35em] uppercase text-[#B87333] mb-4">
            Ready to Ship
          </p>
          <h2
            className="font-display font-bold text-[#FAF7F2] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            The Collection
          </h2>
          <div className="copper-divider" />
          <p className="font-body text-[#A8A29E] mt-6 max-w-lg mx-auto text-base">
            Each piece is hand-cleaned and painted by Alberta-based artists.
            No two are alike.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-body text-xs font-medium tracking-widest uppercase px-5 py-2.5 transition-all duration-200 border ${
                activeFilter === cat
                  ? 'bg-[#B87333] border-[#B87333] text-[#0F0F0F]'
                  : 'border-[#242424] text-[#A8A29E] hover:border-[#B87333]/50 hover:text-[#FAF7F2] bg-transparent'
              }`}
              style={{ letterSpacing: '0.12em' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-[#A8A29E] font-body py-16">
            No pieces in this category right now — check back soon or{' '}
            <a
              href="mailto:hello@blackhornco.ca?subject=Custom%20Order%20Inquiry"
              className="text-[#B87333] hover:text-[#D4894A] underline"
            >
              request a custom order
            </a>
            .
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, index) => (
              <article
                key={product.id}
                className="reveal group relative bg-[#1A1A1A] border border-[#242424] overflow-hidden transition-all duration-300 hover:border-[#B87333]/40"
                style={{
                  transitionDelay: `${(index % 3) * 60}ms`,
                  boxShadow: '0 0 0 0 rgba(184,115,51,0)',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow =
                    '0 8px 40px rgba(184,115,51,0.12)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow =
                    '0 0 0 0 rgba(184,115,51,0)'
                }}
              >
                {/* Image area — square aspect ratio */}
                <div className="relative aspect-square bg-[#141414] overflow-hidden">
                  {product.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={product.image}
                      alt={`${product.name} — ${product.category} skull art by Blackhorn Co.`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <SkullPlaceholder />
                    </div>
                  )}

                  {/* Sold badge */}
                  {product.status === 'sold' && (
                    <div className="absolute inset-0 bg-[#0F0F0F]/70 flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-[#FAF7F2]/60 rotate-[-20deg] border-2 border-[#FAF7F2]/30 px-4 py-1 tracking-widest">
                        SOLD
                      </span>
                    </div>
                  )}

                  {/* Category tag overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="font-body text-[10px] font-semibold tracking-widest uppercase bg-[#0F0F0F]/80 text-[#B87333] px-2.5 py-1">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="font-display font-semibold text-[#FAF7F2] text-xl mb-1 leading-tight">
                    {product.name}
                  </h3>
                  <p className="font-body text-[#A8A29E] text-sm mb-4 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="font-display text-[#B87333] font-semibold text-lg">
                      ${product.price.toLocaleString('en-CA')} CAD
                    </p>

                    {product.status === 'available' ? (
                      <button
                        onClick={() => handleInquire(product.name)}
                        className="group/btn flex items-center gap-2 px-4 py-2 bg-transparent border border-[#B87333]/50 text-[#B87333] hover:bg-[#B87333] hover:text-[#0F0F0F] hover:border-[#B87333] font-body text-xs font-semibold tracking-widest uppercase transition-all duration-200"
                        style={{ letterSpacing: '0.12em' }}
                        aria-label={`Inquire about ${product.name}`}
                      >
                        <Mail size={13} />
                        Inquire
                      </button>
                    ) : (
                      <span className="font-body text-xs font-medium tracking-widest uppercase text-[#A8A29E]/50">
                        Sold
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal">
          <p className="font-body text-[#A8A29E] mb-4 text-sm">
            Don&apos;t see exactly what you&apos;re looking for?
          </p>
          <a
            href="mailto:hello@blackhornco.ca?subject=Custom%20Order%20Inquiry&body=Hi%20Blackhorn%20Co.%2C%0A%0AI%27m%20interested%20in%20a%20custom%20piece.%20Could%20you%20tell%20me%20more%20about%20the%20commission%20process%3F"
            className="inline-block px-8 py-3.5 border border-[#B87333]/40 text-[#B87333] hover:bg-[#B87333]/10 font-body text-xs font-semibold tracking-widest uppercase transition-all duration-200"
            style={{ letterSpacing: '0.15em' }}
          >
            Request a Custom Piece
          </a>
        </div>
      </div>
    </section>
  )
}
