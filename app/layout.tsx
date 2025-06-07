import React, { Suspense } from 'react';
import { Metadata } from 'next';
import GoogleAnalytics from './components/GoogleAnalytics';
import './globals.css';

export const metadata: Metadata = {
  title: '88 Web Design | Professional Web Development',
  description: 'Professional web design and development services. Get a modern, responsive website for your business.',
  viewport: 'width=device-width, initial-scale=1',
};

// Component for handling any errors in the GoogleAnalytics component
function AnalyticsWrapper() {
  return (
    <Suspense fallback={null}>
      {/* Wrap in error boundary */}
      <ErrorBoundary fallback={<div />}>
        <GoogleAnalytics />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple error boundary component
class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  fallback: React.ReactNode;
}> {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service
    console.error('Client error caught by ErrorBoundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    
    return this.props.children;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AnalyticsWrapper />
        <ErrorBoundary fallback={
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Something went wrong</h2>
            <p>Please refresh the page to try again</p>
          </div>
        }>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
} 