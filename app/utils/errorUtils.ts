'use client';

// Safe version of accessing window properties
export const safeWindow = (callback: (win: Window) => any, fallback?: any) => {
  if (typeof window !== 'undefined') {
    try {
      return callback(window);
    } catch (error) {
      console.error('Error accessing window property:', error);
      return fallback;
    }
  }
  return fallback;
};

// Safe version of executing client-side code
export const safeClientSide = <T>(fn: () => T, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  
  try {
    return fn();
  } catch (error) {
    console.error('Error in client-side code:', error);
    return fallback;
  }
};

// Check if running on the client
export const isClient = typeof window !== 'undefined';

// Initialize global error handler
export const initGlobalErrorHandler = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      console.error('Global error caught:', event.error);
      // You could send this to a monitoring service
    });
    
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      // You could send this to a monitoring service
    });
  }
};

// Safe localStorage wrapper
export const safeStorage = {
  getItem: (key: string, fallback: any = null) => {
    return safeClientSide(() => {
      const value = localStorage.getItem(key);
      return value !== null ? value : fallback;
    }, fallback);
  },
  setItem: (key: string, value: string): boolean => {
    return safeClientSide(() => {
      localStorage.setItem(key, value);
      return true;
    }, false);
  }
}; 