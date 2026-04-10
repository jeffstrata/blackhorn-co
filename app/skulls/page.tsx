import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import FullCollection from '../../components/FullCollection'

export const metadata: Metadata = {
  title: 'All Skulls for Sale — Blackhorn Co.',
  description:
    'Browse the full Blackhorn Co. inventory — hand-cleaned longhorn, bison, yak, ram and more. Natural bone and artist-painted pieces, all sourced in Alberta. Ready to ship.',
}

export default function SkullsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <div className="bg-[#0F0F0F] pt-32 pb-12 px-6 text-center border-b border-[#B87333]/10">
          <p className="font-body text-xs font-medium tracking-[0.35em] uppercase text-[#B87333] mb-4">
            Full Inventory
          </p>
          <h1
            className="font-display font-bold text-[#FAF7F2] mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            All Available Skulls
          </h1>
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, #B87333 40%, #B87333 60%, transparent 100%)',
              opacity: 0.3,
              maxWidth: '120px',
              margin: '0 auto',
            }}
          />
          <p className="font-body text-[#A8A29E] mt-6 max-w-lg mx-auto text-base">
            Every piece hand-cleaned and sourced in Alberta. Filter by species or finish below.
          </p>
          <a
            href="/"
            className="inline-block mt-6 font-body text-xs text-[#A8A29E]/50 hover:text-[#B87333] tracking-widest uppercase transition-colors"
          >
            ← Back to Home
          </a>
        </div>

        <FullCollection />
      </main>
      <Footer />
    </>
  )
}
