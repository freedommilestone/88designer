# Modern web template site

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/freedommilestones-projects/v0-modern-web-template-site)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/kdMErK7zVVe)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/freedommilestones-projects/v0-modern-web-template-site](https://vercel.com/freedommilestones-projects/v0-modern-web-template-site)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/kdMErK7zVVe](https://v0.dev/chat/projects/kdMErK7zVVe)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

# 88 Designer

## Stripe Integration

This project includes Stripe integration for processing payments. Follow these steps to set up Stripe:

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Copy `.env.local.example` to `.env.local` and update with your Stripe API keys:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
   STRIPE_SECRET_KEY=sk_test_your_secret_key
   ```

### Stripe Features Implemented

- Checkout button component for easy reuse across the application
- Stripe API endpoint for creating checkout sessions
- Success and failure pages for payment flows
- Example pricing page showing the implementation

### Testing Stripe Integration

For testing, you can use the following test card numbers:

- **Success**: 4242 4242 4242 4242
- **Requires Authentication**: 4000 0025 0000 3155
- **Declined**: 4000 0000 0000 9995

Use any future expiration date, any 3-digit CVC, and any postal code.

### Stripe Webhook (Optional)

For production use, set up Stripe webhooks to handle post-payment events:

1. Create a webhook endpoint in the Stripe Dashboard
2. Point it to your production domain at `/api/stripe/webhook`
3. Add the webhook secret to your `.env.local`:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
   ```
4. Implement the webhook handler in `app/api/stripe/webhook/route.ts`
