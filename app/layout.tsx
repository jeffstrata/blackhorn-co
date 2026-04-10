import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blackhorn Co. — Premium Skull Art from Alberta, Canada',
  description:
    'Hand-cleaned, artist-painted animal skull art crafted in Alberta, Canada. Longhorn, bison, yak, ram and more. Ready-to-ship and custom commissions available.',
  keywords: [
    'skull art',
    'western decor',
    'Alberta skull art',
    'longhorn skull',
    'bison skull',
    'painted skull',
    'western wall art',
    'custom skull commission',
  ],
  openGraph: {
    title: 'Blackhorn Co. — Premium Skull Art',
    description: 'Hand-cleaned. Artist-Painted. One of a Kind.',
    siteName: 'Blackhorn Co.',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
