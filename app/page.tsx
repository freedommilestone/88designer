'use client';

import React, { useEffect, useState } from 'react';
import { initGlobalErrorHandler, isClient } from './utils/errorUtils';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set up global error handlers
  useEffect(() => {
    // Initialize global error handlers
    initGlobalErrorHandler();
    
    // Mark component as loaded
    setIsLoaded(true);
    
    // Log browser info for debugging
    if (isClient) {
      console.log('Browser info:', {
        userAgent: window.navigator.userAgent,
        language: window.navigator.language,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      });
    }
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ marginBottom: '1rem' }}>
        Welcome to 88 Web Design
      </h1>
      <p style={{ maxWidth: '600px', marginBottom: '2rem' }}>
        Professional web development services for your business
      </p>
      {isLoaded && (
        <div style={{ 
          marginTop: '2rem',
          padding: '1rem',
          border: '1px solid #eaeaea',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9' 
        }}>
          Client-side rendering is working correctly
        </div>
      )}
    </div>
  );
} 