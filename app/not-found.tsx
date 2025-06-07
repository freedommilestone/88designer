import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ maxWidth: '500px', marginBottom: '2rem' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        style={{
          backgroundColor: '#3182ce',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.25rem',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
} 