import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key from environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error('Stripe secret key is not set in environment variables.');
}

const stripe = new Stripe(stripeSecretKey || '', {
  apiVersion: '2023-10-16' as any,
});

// This function handles POST requests to /api/stripe
export async function POST(req: NextRequest) {
  try {
    if (!stripeSecretKey) {
      return NextResponse.json({ error: 'Stripe API key is not configured.' }, { status: 500 });
    }

    const body = await req.json();
    const { items, returnUrl } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Please provide an array of items' },
        { status: 400 }
      );
    }

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: item.description,
            images: item.image ? [item.image] : undefined,
          },
          unit_amount: item.price * 100, // Stripe requires amount in cents
        },
        quantity: item.quantity || 1,
      })),
      mode: 'payment',
      success_url: `${returnUrl || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${returnUrl || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/payment/cancel`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating Stripe checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}

// This function handles GET requests to /api/stripe
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { message: 'Please use POST method for this endpoint' },
    { status: 405 }
  );
} 