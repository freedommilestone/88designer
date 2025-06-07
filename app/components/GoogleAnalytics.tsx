"use client"

import Script from "next/script"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && typeof window.gtag !== "undefined") {
      const url = pathname + (searchParams?.toString() || "")
      window.gtag("config", "G-PTR0BBH9L3", {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-PTR0BBH9L3`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PTR0BBH9L3', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
} 