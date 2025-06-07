# Deploying to Vercel with CLI

This guide provides step-by-step instructions for deploying your 88designer website to Vercel using the Vercel CLI.

## Prerequisites

- Node.js (v16 or later)
- npm
- Git
- Vercel account

## Steps to Deploy

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Log in to Vercel

```bash
vercel login
```

This will open a browser window asking you to log in to your Vercel account.

### 3. Configure Environment Variables

Create a `.env` file in your project root with all required environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_SITE_URL=your-production-url
```

### 4. Deploy

Run the following command in your project directory:

```bash
vercel
```

The CLI will guide you through the deployment process with a series of questions:

- Set up and deploy? → Yes
- Which scope? → Select your account or team
- Link to existing project? → Select Yes if you've deployed before, No if this is the first time
- What's your project name? → Press Enter to use the default (directory name) or type a custom name
- In which directory is your code located? → Press Enter to use the current directory (`.`)
- Want to override the settings? → Select Yes to configure build settings
- Build command → `npm run build`
- Output directory → `.next`
- Development command → `npm run dev`

### 5. Configure Environment Variables in Vercel

When prompted about environment variables, you can either:

- Let the CLI upload your `.env` file (this will only include variables marked for production)
- Manually add environment variables in the Vercel dashboard

### 6. Production Deployment

After the initial deployment, when you're ready for production:

```bash
vercel --prod
```

This will deploy to your production environment.

## Checking Your Deployment

After deployment completes, Vercel will provide a URL to your deployed app. Visit it to ensure everything is working correctly.

## Vercel Dashboard

You can manage your deployment from the Vercel dashboard:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Under the "Settings" tab, you can configure:
   - Environment Variables
   - Domain settings
   - Build & Development settings
   - Integration with GitHub for automatic deployments

## Troubleshooting

### Build Failures

If your build fails, check:
- The Vercel build logs for specific errors
- Ensure all environment variables are properly set
- Check for unsupported dependencies or configurations

### Runtime Errors

If the site deploys but doesn't work correctly:
- Check browser console for JavaScript errors
- Verify API endpoints are working
- Ensure environment variables are correct for the production environment

### Supabase Connection Issues

- Verify your Supabase URL and key
- Check if your Supabase security policies allow connections from your deployed domain

### Stripe Issues

- Ensure your Stripe key is correctly set as an environment variable
- Check that webhook endpoints are properly configured in your Stripe dashboard 