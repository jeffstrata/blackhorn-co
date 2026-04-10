'use client'

import { useState, useEffect, useRef } from 'react'
import { Mail, Paintbrush } from 'lucide-react'
import { products, type ProductCategory, type ProductFinish } from '../data/products'

const ANIMAL_FILTERS: ('All' | ProductCategory)[] = [
  'All',
  'Longhorn',
  'Bison',
  'Yak',
  'Ram',
  'Small Skulls',
  'Other',
]

const FINISH_FILTERS: ('All' | ProductFinish)[] = ['All', 'natural', 'painted']

const FINISH_LABELS: Record<'All' | ProductFinish, string> = {
  All: 'All Finishes',
  natural: 'Natural Bone',
  painted: 'Artist Painted',
}

// Placeholder shown when no product photo has been added yet
function SkullPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#111]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/emblem.png"
        alt=""
        aria-hidden="true"
        className="w-1/2 h-1/2 object-contain opacity-20"
      />
    </div>
  )
}

export default function Collection() {
  const [activeAnimal, setActiveAnimal] = useState<'All' | ProductCategory>('All')
  const [activeFinish, setActiveFinish] = useState<'All' | ProductFinish>('All')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const revealEls = sectionRef.current?.querySelectorAll('.reveal')
    revealEls?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const filtered = products.filter((p) => {
    const animalMatch = activeAnimal === 'All' || p.category === activeAnimal
    const finishMatch = activeFinish === 'All' || p.finish === activeFinish
    return animalMatch && finishMatch
  })

  const handleInquire = (productName: string, finish: ProductFinish) => {
    const subject = encodeURIComponent(`Inquiry: ${productName}`)
    const body = encodeURIComponent(
      `Hi Blackhorn Co.,\n\nI'm interested in "${productName}" (${finish === 'natural' ? 'Natural Bone' : 'Artist Painted'}) from your collection. Could you confirm availability and provide details?\n\nThank you!`
    )
    window.location.href = `mailto:hello@blackhornco.ca?subject=${subject}&body=${body}`
  }

  return (
    <section id="collection" ref={sectionRef} className="py-24 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 reveal">
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
            Hand-cleaned skulls in natural bone, and artist-painted pieces ready to ship.
            Every one sourced and prepared in Alberta.
          </p>
        </div>

        {/* ── Commission Custom Artwork Banner ── */}
        <div className="reveal mb-12">
          <div
            className="relative border border-[#B87333]/30 bg-[#1A1A1A] overflow-hidden px-6 py-7 md:px-10 md:py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            {/* Copper glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 0% 50%, rgba(184,115,51,0.08) 0%, transparent 60%)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex items-start gap-5">
              <div className="w-11 h-11 border border-[#B87333]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Paintbrush size={18} className="text-[#B87333]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display font-semibold text-[#FAF7F2] text-xl mb-1">
                  Commission Custom Artwork
                </p>
                <p className="font-body text-[#A8A29E] text-sm leading-relaxed max-w-lg">
                  Want something truly one-of-a-kind? We work with Alberta&apos;s finest artists
                  to hand-paint any skull to your vision. Starting at{' '}
                  <span className="text-[#B87333]">$350 CAD</span> for painting, plus the skull.
                </p>
              </div>
            </div>

            <a
              href="mailto:hello@blackhornco.ca?subject=Custom%20Artwork%20Commission&body=Hi%20Blackhorn%20Co.%2C%0A%0AI%27d%20like%20to%20commission%20a%20custom%20painted%20skull.%20Here%27s%20what%20I%27m%20thinking%3A%0A%0ASpecies%2FType%3A%20%0ADesign%20ideas%2Freferences%3A%20%0ABudget%3A%20%0A%0AThanks!"
              className="relative z-10 flex-shrink-0 px-7 py-3.5 bg-[#B87333] hover:bg-[#D4894A] text-[#0F0F0F] font-body font-semibold text-xs tracking-widest uppercase transition-all duration-200 whitespace-nowrap"
              style={{ letterSpacing: '0.15em' }}
            >
              Start a Commission
            </a>
          </div>
        </div>

        {/* ── Filters ── */}
        <div className="reveal mb-10 space-y-3">
          {/* Finish filter */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-body text-[10px] uppercase tracking-widest text-[#A8A29E]/50 w-full sm:w-auto sm:mr-2">
              Finish
            </span>
            {FINISH_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFinish(f)}
                className={`font-body text-xs font-medium tracking-widest uppercase px-4 py-2 transition-all duration-200 border ${
                  activeFinish === f
                    ? f === 'natural'
                      ? 'bg-[#D4C5A9] border-[#D4C5A9] text-[#0F0F0F]'
                      : 'bg-[#B87333] border-[#B87333] text-[#0F0F0F]'
                    : 'border-[#242424] text-[#A8A29E] hover:border-[#B87333]/50 hover:text-[#FAF7F2] bg-transparent'
                }`}
                style={{ letterSpacing: '0.12em' }}
              >
                {FINISH_LABELS[f]}
              </button>
            ))}
          </div>

          {/* Animal filter */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-body text-[10px] uppercase tracking-widest text-[#A8A29E]/50 w-full sm:w-auto sm:mr-2">
              Species
            </span>
            {ANIMAL_FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveAnimal(cat)}
                className={`font-body text-xs font-medium tracking-widest uppercase px-4 py-2 transition-all duration-200 border ${
                  activeAnimal === cat
                    ? 'bg-[#B87333] border-[#B87333] text-[#0F0F0F]'
                    : 'border-[#242424] text-[#A8A29E] hover:border-[#B87333]/50 hover:text-[#FAF7F2] bg-transparent'
                }`}
                style={{ letterSpacing: '0.12em' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-[#A8A29E] mb-4">
              No pieces match that combination right now.
            </p>
            <button
              onClick={() => { setActiveAnimal('All'); setActiveFinish('All') }}
              className="font-body text-xs text-[#B87333] hover:text-[#D4894A] underline uppercase tracking-widest transition-colors"
            >
              Clear filters
            </button>
          </div>
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
                      alt={`${product.name} — ${product.category} skull by Blackhorn Co.`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                      <SkullPlaceholder />
                    </div>
                  )}

                  {/* Sold overlay */}
                  {product.status === 'sold' && (
                    <div className="absolute inset-0 bg-[#0F0F0F]/70 flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-[#FAF7F2]/60 rotate-[-20deg] border-2 border-[#FAF7F2]/30 px-4 py-1 tracking-widest">
                        SOLD
                      </span>
                    </div>
                  )}

                  {/* Top-left: species tag */}
                  <div className="absolute top-3 left-3">
                    <span className="font-body text-[10px] font-semibold tracking-widest uppercase bg-[#0F0F0F]/80 text-[#B87333] px-2.5 py-1">
                      {product.category}
                    </span>
                  </div>

                  {/* Top-right: finish badge */}
                  <div className="absolute top-3 right-3">
                    {product.finish === 'painted' ? (
                      <span className="font-body text-[10px] font-semibold tracking-widest uppercase bg-[#B87333] text-[#0F0F0F] px-2.5 py-1">
                        Painted
                      </span>
                    ) : (
                      <span className="font-body text-[10px] font-semibold tracking-widest uppercase bg-[#0F0F0F]/80 text-[#D4C5A9] border border-[#D4C5A9]/30 px-2.5 py-1">
                        Natural
                      </span>
                    )}
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
                        onClick={() => handleInquire(product.name, product.finish)}
                        className="flex items-center gap-2 px-4 py-2 bg-transparent border border-[#B87333]/50 text-[#B87333] hover:bg-[#B87333] hover:text-[#0F0F0F] hover:border-[#B87333] font-body text-xs font-semibold tracking-widest uppercase transition-all duration-200"
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
      </div>
    </section>
  )
}
