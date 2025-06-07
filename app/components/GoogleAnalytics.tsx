'use client';

import React, { useEffect, useState } from 'react';
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
  const [loadError, setLoadError] = useState<string | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Initialize gtag safely
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      
      // Define dataLayer and gtag function if they don't exist
      window.dataLayer = window.dataLayer || [];
      // Define a safe version of gtag that won't crash if something goes wrong
      const safeGtag = (...args: any[]) => {
        try {
          window.dataLayer.push(args);
        } catch (err) {
          console.error('Error in gtag function:', err);
        }
      };
      
      // Assign our safe function to window.gtag
      window.gtag = safeGtag;
      
      // Log success
      console.log('Google Analytics initialized safely');
    } catch (err) {
      console.error('Failed to initialize gtag:', err);
      setLoadError('Failed to initialize Google Analytics');
    }
  }, []);

  // Page view tracking
  useEffect(() => {
    try {
      // Ensure we have what we need before attempting to use gtag
      if (!pathname || typeof window === 'undefined' || !window.gtag) return;
      
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      
      // Safely call gtag
      try {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
        });
        console.log('Page view tracked:', url);
      } catch (err) {
        console.error('Error tracking page view:', err);
      }
    } catch (err) {
      console.error('Failed in page view tracking effect:', err);
    }
  }, [pathname, searchParams]);

  // If there was an error, render nothing but log it
  if (loadError) {
    console.error('GoogleAnalytics component error:', loadError);
    return null;
  }

  return (
    <React.Fragment>
      {/* Add nonce and other security attributes if needed */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onError={(e) => {
          console.error('Google Analytics script failed to load:', e);
          setLoadError('Script load failed');
        }}
        onLoad={() => {
          try {
            console.log('Google Analytics script loaded');
            
            // Initialize gtag once the script is loaded
            window.dataLayer = window.dataLayer || [];
            // Use arrow function instead of function declaration
            const gtag = (...args: any[]) => {
              try {
                window.dataLayer.push(args);
              } catch (err) {
                console.error('Error in gtag onLoad function:', err);
              }
            };
            window.gtag = gtag;
            
            // Initialize GA
            window.gtag('js', new Date());
            window.gtag('config', GA_MEASUREMENT_ID);
            
            console.log('Google Analytics fully initialized');
          } catch (error) {
            console.error('Failed to initialize Google Analytics in onLoad:', error);
            setLoadError('Failed to initialize in onLoad handler');
          }
        }}
      />
    </React.Fragment>
  );
} 