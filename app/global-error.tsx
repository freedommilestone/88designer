'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Log the error to the console
  React.useEffect(() => {
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
        }}>
          <div style={{
            maxWidth: '600px',
            padding: '2rem',
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}>
            <h1 style={{ color: '#e53e3e', marginBottom: '1rem' }}>Something went wrong!</h1>
            <p style={{ marginBottom: '1.5rem' }}>
              We're sorry, but there was an error loading the application. Our team has been notified.
            </p>
            <div style={{ marginBottom: '1.5rem' }}>
              <details style={{ 
                marginTop: '1rem', 
                padding: '1rem', 
                backgroundColor: '#f8f9fa',
                borderRadius: '4px' 
              }}>
                <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Error details</summary>
                <p style={{ marginTop: '0.5rem', fontFamily: 'monospace', wordBreak: 'break-word' }}>
                  {error.message}
                  {error.stack && (
                    <span style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.8rem' }}>
                      {error.stack}
                    </span>
                  )}
                </p>
              </details>
            </div>
            <button
              onClick={reset}
              style={{
                backgroundColor: '#3182ce',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.25rem',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 