"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { getStripe } from '@/lib/stripe';

interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  quantity?: number;
}

interface CheckoutButtonProps extends ButtonProps {
  products: Product[];
  returnUrl?: string;
  text?: string;
}

export function CheckoutButton({
  products,
  returnUrl,
  text = "Checkout",
  className,
  disabled,
  ...props
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    try {
      setLoading(true);

      // Check if we have products to checkout
      if (!products || products.length === 0) {
        throw new Error('No products to checkout');
      }

      // Create a checkout session via the API
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: products,
          returnUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // If we have a URL, redirect the user
      if (data.url) {
        window.location.href = data.url;
        return;
      }

      // Otherwise, get Stripe and redirect via Checkout
      const stripe = await getStripe();
      if (!stripe) throw new Error('Failed to load Stripe');

      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Failed to process checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      className={className}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
        </>
      ) : (
        text
      )}
    </Button>
  );
} 