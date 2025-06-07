import React from 'react';

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <div style={{
        display: 'inline-block',
        position: 'relative',
        width: '80px',
        height: '80px',
      }}>
        <div style={{
          position: 'absolute',
          top: '33px',
          width: '13px',
          height: '13px',
          borderRadius: '50%',
          background: '#3182ce',
          animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
          left: '8px',
          animation: 'lds-ellipsis1 0.6s infinite',
        }}></div>
        <div style={{
          position: 'absolute',
          top: '33px',
          width: '13px',
          height: '13px',
          borderRadius: '50%',
          background: '#3182ce',
          animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
          left: '8px',
          animation: 'lds-ellipsis2 0.6s infinite',
        }}></div>
        <div style={{
          position: 'absolute',
          top: '33px',
          width: '13px',
          height: '13px',
          borderRadius: '50%',
          background: '#3182ce',
          animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
          left: '32px',
          animation: 'lds-ellipsis2 0.6s infinite',
        }}></div>
        <div style={{
          position: 'absolute',
          top: '33px',
          width: '13px',
          height: '13px',
          borderRadius: '50%',
          background: '#3182ce',
          animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
          left: '56px',
          animation: 'lds-ellipsis3 0.6s infinite',
        }}></div>
      </div>
      <style jsx>{`
        @keyframes lds-ellipsis1 {
          0% { transform: scale(0); }
          100% { transform: scale(1); }
        }
        @keyframes lds-ellipsis3 {
          0% { transform: scale(1); }
          100% { transform: scale(0); }
        }
        @keyframes lds-ellipsis2 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(24px, 0); }
        }
      `}</style>
    </div>
  );
} 