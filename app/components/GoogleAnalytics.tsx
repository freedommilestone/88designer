'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

// Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Define gtag function if it doesn't exist
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: any[]) {
        window.dataLayer.push(args);
      };
    }
  }, []);

  useEffect(() => {
    // Check if components are mounted and we're in a browser environment
    if (!pathname || typeof window === 'undefined') return;
    
    try {
      // Make sure gtag is defined before using it
      if (typeof window.gtag === 'function') {
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    } catch (error) {
      // Safely log the error without breaking the app
      console.error('Google Analytics error:', error);
    }
  }, [pathname, searchParams]);

  return (
    <React.Fragment>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onError={(e) => {
          console.error('Google Analytics script failed to load:', e);
        }}
        onLoad={() => {
          try {
            // Initialize gtag once the script is loaded
            window.dataLayer = window.dataLayer || [];
            // Use arrow function instead of function declaration
            const gtag = (...args: any[]) => {
              window.dataLayer.push(args);
            };
            window.gtag = gtag;
            window.gtag('js', new Date());
            window.gtag('config', GA_MEASUREMENT_ID);
          } catch (error) {
            console.error('Failed to initialize Google Analytics:', error);
          }
        }}
      />
    </React.Fragment>
  );
} 