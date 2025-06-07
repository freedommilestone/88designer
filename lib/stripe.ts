import { Stripe, loadStripe } from '@stripe/stripe-js';

// Use test key for development and live key for production
// The key should be stored in environment variables in production
const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_51O9gAHEDBM5LpSKOsW7qbjvUAblZtcOvg3zYOIV1SbmLQmX5jMzJPnS2vBscr7j7CrJ77hBTH9mJTqWW5dMm8qFM00cYsGrr3T';

// Create a singleton to avoid multiple instances
let stripePromise: Promise<Stripe | null>;

// Function to load the Stripe.js script and initialize with the publishable key
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripePublicKey);
  }
  return stripePromise;
}; 