import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/lib/AuthContext'
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata: Metadata = {
  title: '88 Web Designs - Free Websites for Small Businesses',
  description: 'Get a free professional website for your small business. Mobile-friendly designs optimized for lead generation and customer engagement.',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <GoogleAnalytics />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
