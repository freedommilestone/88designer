'use client';

import { useEffect } from 'react';

export default function ErrorTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Function to report errors
    const reportError = (error: Error | string, context?: string) => {
      console.error(`[ErrorTracker] ${context || 'Uncaught error'}:`, error);
      
      // You could also send this to a backend API endpoint
      // fetch('/api/error-logging', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     message: error instanceof Error ? error.message : error,
      //     stack: error instanceof Error ? error.stack : undefined,
      //     context,
      //     url: window.location.href,
      //     userAgent: navigator.userAgent,
      //     timestamp: new Date().toISOString()
      //   })
      // }).catch(e => console.error('Failed to report error:', e));
    };

    // Global error handler
    const handleGlobalError = (event: ErrorEvent) => {
      event.preventDefault();
      reportError(event.error || event.message, 'window.onerror');
    };

    // Unhandled promise rejection handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      event.preventDefault();
      reportError(event.reason, 'unhandledrejection');
    };

    // Add event listeners
    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Console error interceptor
    const originalConsoleError = console.error;
    console.error = (...args) => {
      // Log original error
      originalConsoleError.apply(console, args);
      
      // Report error if it's an Error object
      const errorObjects = args.filter(arg => arg instanceof Error);
      if (errorObjects.length > 0) {
        reportError(errorObjects[0], 'console.error');
      }
    };

    return () => {
      // Clean up
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      console.error = originalConsoleError;
    };
  }, []);

  // This component doesn't render anything
  return null;
} 