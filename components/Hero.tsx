'use client'

import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToCollection = () => {
    const el = document.querySelector('#collection')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0F0F0F' }}
    >
      {/* Background: dark textured placeholder (replace with real hero image) */}
      {/* To add a hero photo: set background-image to url('/images/hero.jpg') below */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 60% 40%, #1e1208 0%, #0F0F0F 55%), radial-gradient(ellipse at 30% 70%, #1a1008 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle vignette grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M60 0v60M0 60h60' stroke='%23B87333' stroke-width='0.5'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* Copper gradient glow — upper right */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 20%, rgba(184,115,51,0.07) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Emblem watermark — large background element */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/emblem.png"
          alt=""
          className="w-[65vw] max-w-2xl opacity-[0.06]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo — centerpiece */}
        <div className="flex justify-center mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Blackhorn Co."
            className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto"
          />
        </div>

        {/* Location tag */}
        <p
          className="font-body text-xs font-medium tracking-[0.35em] uppercase text-[#B87333] mb-6"
          style={{ letterSpacing: '0.3em' }}
        >
          Alberta, Canada
        </p>

        {/* Main headline */}
        <h1
          className="font-display font-bold text-[#FAF7F2] leading-[1.05] mb-6"
          style={{
            fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
            textShadow: '0 2px 40px rgba(0,0,0,0.5)',
          }}
        >
          Premium Skull Art.
          <br />
          <span className="italic" style={{ color: '#B87333' }}>Hand-Cleaned.</span>
          {' '}One of a Kind.
        </h1>

        {/* Sub-headline */}
        <p
          className="font-body text-[#A8A29E] mb-10 max-w-xl mx-auto"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', lineHeight: 1.7 }}
        >
          Premium skull art crafted by Alberta&apos;s finest artists.
          <br className="hidden sm:block" />
          Ready-to-ship inventory and custom commissions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToCollection}
            className="group relative px-8 py-4 bg-[#B87333] hover:bg-[#D4894A] text-[#0F0F0F] font-body font-semibold text-sm tracking-widest uppercase transition-all duration-200 overflow-hidden"
            style={{ letterSpacing: '0.15em' }}
          >
            <span className="relative z-10">Browse Collection</span>
            <span className="absolute inset-0 bg-[#D4894A] translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
          </button>

          <button
            onClick={() => {
              const el = document.querySelector('#custom-orders')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 border border-[#B87333]/40 text-[#FAF7F2] hover:border-[#B87333] font-body font-medium text-sm tracking-widest uppercase transition-all duration-200"
            style={{ letterSpacing: '0.15em' }}
          >
            Custom Orders
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToCollection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#A8A29E] hover:text-[#B87333] transition-colors duration-200 animate-bounce"
        aria-label="Scroll to collection"
      >
        <ChevronDown size={24} strokeWidth={1.5} />
      </button>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0F0F0F)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
