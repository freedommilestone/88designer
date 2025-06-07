import React, { Suspense } from 'react';
import { Metadata } from 'next';
import GoogleAnalytics from './components/GoogleAnalytics';
import ErrorTracker from './components/ErrorTracker';
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

// Component for error tracking
function ErrorTrackerWrapper() {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary fallback={<div />}>
        <ErrorTracker />
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
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service
    console.error('Client error caught by ErrorBoundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }
    
    return this.props.children;
  }
}

// Client refresh button component
const RefreshButton = () => {
  return (
    <a 
      href="/"
      style={{
        display: 'inline-block',
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#3182ce',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}
    >
      Refresh Page
    </a>
  );
};

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
        {/* Preconnect to Google domains to improve performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body>
        {/* Error tracking component */}
        <ErrorTrackerWrapper />
        
        {/* Wrap analytics in its own error boundary */}
        <AnalyticsWrapper />
        
        {/* Wrap main content in an error boundary */}
        <ErrorBoundary 
          fallback={
            <div style={{ 
              padding: '20px', 
              textAlign: 'center',
              margin: '2rem auto',
              maxWidth: '600px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h2>Something went wrong</h2>
              <p>We're sorry, but something went wrong. Please refresh the page to try again.</p>
              <RefreshButton />
            </div>
          }
        >
          <main>
            {children}
          </main>
        </ErrorBoundary>
      </body>
    </html>
  );
} 