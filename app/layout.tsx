import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

export const fontSans = {
  variable: '--font-sans',
  family: 'var(--font-sans)',
}

export const fontDisplay = {
  variable: '--font-serif',
  family: 'var(--font-serif)',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ipcssouthsudan.org'),
  title: {
    default:
      'IPCS South Sudan | Promoting Peace, Participation and Accountable Governance',
    template: '%s | IPCS South Sudan',
  },
  description:
    'The Institute for Promotion of Civil Society (IPCS) works to promote peace, informed citizenship, citizen participation, accountable governance, civil society strengthening, and sustainable community development in South Sudan.',
  keywords: [
    'IPCS',
    'South Sudan',
    'civil society',
    'peacebuilding',
    'accountable governance',
    'child protection',
    'community development',
    'NGO',
    'citizen participation',
  ],
  authors: [{ name: 'Institute for Promotion of Civil Society' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'IPCS South Sudan',
    title:
      'IPCS South Sudan | Promoting Peace, Participation and Accountable Governance',
    description:
      'IPCS works with communities, civil society organizations, leaders and partners to promote peace, development, accountability, inclusion and sustainable positive change in South Sudan.',
    images: [
      {
        url: '/images/hero-community.png',
        width: 1200,
        height: 630,
        alt: 'South Sudanese community members gathered for a peaceful community meeting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPCS South Sudan',
    description:
      'Promoting peace, participation and accountable governance in South Sudan.',
    images: ['/images/hero-community.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0c4a6e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Public+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
