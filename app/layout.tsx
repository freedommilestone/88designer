import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '88 Web Designs',
  description: 'Professional website design and development',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden w-full">
      <body className="overflow-x-hidden max-w-[100vw]">
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BX2NBP00ZN" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BX2NBP00ZN');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
