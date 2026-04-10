'use client'

import { useEffect, useRef } from 'react'
import { Mail } from 'lucide-react'
import { products, type ProductFinish } from '../data/products'

// Top 3 available skulls by price
const featured = products
  .filter((p) => p.status === 'available')
  .sort((a, b) => b.price - a.price)
  .slice(0, 3)

function SkullPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#111]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/emblem.png" alt="" aria-hidden="true" className="w-1/2 h-1/2 object-contain opacity-20" />
    </div>
  )
}

function handleInquire(productName: string, finish: ProductFinish) {
  const subject = encodeURIComponent(`Inquiry: ${productName}`)
  const body = encodeURIComponent(
    `Hi Blackhorn Co.,\n\nI'm interested in "${productName}" (${finish === 'natural' ? 'Natural Bone' : 'Artist Painted'}) from your collection. Could you confirm availability and provide details?\n\nThank you!`
  )
  window.location.href = `mailto:hello@blackhornco.ca?subject=${subject}&body=${body}`
}

export default function Collection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }) },
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal')?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="collection" ref={sectionRef} className="py-24 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="font-body text-xs font-medium tracking-[0.35em] uppercase text-[#B87333] mb-4">
            Featured Pieces
          </p>
          <h2 className="font-display font-bold text-[#FAF7F2] mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            The Collection
          </h2>
          <div className="copper-divider" />
          <p className="font-body text-[#A8A29E] mt-6 max-w-lg mx-auto text-base">
            Hand-cleaned skulls in natural bone and artist-painted pieces, sourced and prepared in Alberta.
          </p>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((product, index) => (
            <article
              key={product.id}
              className="reveal group relative bg-[#1A1A1A] border border-[#242424] overflow-hidden transition-all duration-300 hover:border-[#B87333]/40"
              style={{ transitionDelay: `${index * 80}ms`, boxShadow: '0 0 0 0 rgba(184,115,51,0)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(184,115,51,0.12)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(184,115,51,0)' }}
            >
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

                <div className="absolute top-3 left-3">
                  <span className="font-body text-[10px] font-semibold tracking-widest uppercase bg-[#0F0F0F]/80 text-[#B87333] px-2.5 py-1">
                    {product.category}
                  </span>
                </div>

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

              <div className="p-5">
                <h3 className="font-display font-semibold text-[#FAF7F2] text-xl mb-1 leading-tight">{product.name}</h3>
                <p className="font-body text-[#A8A29E] text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="font-display text-[#B87333] font-semibold text-lg">
                    ${product.price.toLocaleString('en-CA')} CAD
                  </p>
                  <button
                    onClick={() => handleInquire(product.name, product.finish)}
                    className="flex items-center gap-2 px-4 py-2 bg-transparent border border-[#B87333]/50 text-[#B87333] hover:bg-[#B87333] hover:text-[#0F0F0F] hover:border-[#B87333] font-body text-xs font-semibold tracking-widest uppercase transition-all duration-200"
                    style={{ letterSpacing: '0.12em' }}
                  >
                    <Mail size={13} />
                    Inquire
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* See All CTA */}
        <div className="reveal text-center">
          <a
            href="/skulls"
            className="inline-block px-10 py-4 border border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-[#0F0F0F] font-body font-semibold text-xs uppercase tracking-widest transition-all duration-200"
            style={{ letterSpacing: '0.18em' }}
          >
            See All Available Skulls →
          </a>
          <p className="font-body text-[#A8A29E]/40 text-xs mt-3 tracking-widest uppercase">
            {products.filter((p) => p.status === 'available').length} pieces ready to ship
          </p>
        </div>

      </div>
    </section>
  )
}
