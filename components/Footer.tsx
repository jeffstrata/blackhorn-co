import { Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#1A1A1A] py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Blackhorn Co."
              className="h-20 w-auto object-contain"
            />
            <p className="font-body text-[#A8A29E] text-sm mt-2">
              Hand-cleaned skull art from Alberta, Canada.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/blackhornco"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-[#242424] hover:border-[#B87333]/50 flex items-center justify-center text-[#A8A29E] hover:text-[#B87333] transition-all duration-200"
              aria-label="Blackhorn Co. on Instagram"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:hello@blackhornco.ca"
              className="w-10 h-10 border border-[#242424] hover:border-[#B87333]/50 flex items-center justify-center text-[#A8A29E] hover:text-[#B87333] transition-all duration-200"
              aria-label="Email Blackhorn Co."
            >
              <Mail size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{
            background:
              'linear-gradient(90deg, transparent, #242424, transparent)',
          }}
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-body text-[#A8A29E] text-xs">
            &copy; {new Date().getFullYear()} Blackhorn Co. All rights reserved.
          </p>
          <p className="font-body text-[#A8A29E]/50 text-xs">
            All prices in CAD. Shipping available across Canada.
          </p>
        </div>
      </div>
    </footer>
  )
}
