'use client';

import { useState, FormEvent, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';

function ClaimFormComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const previewSiteId = searchParams.get('preview_site_id');
  const utmCampaign = searchParams.get('utm_campaign');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      ...data,
      preview_site_id: previewSiteId,
      utm_campaign: utmCampaign,
      timestamp: new Date().toISOString(),
    };

    // Check if we're in development mode
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // In development, log payload and simulate success
    if (isDevelopment) {
      console.log('Form data (development mode):', payload);
      console.log('In production, this would be sent to the webhook URL');
      
      // Simulate a small delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to success page in development mode
      router.push('/claim/success');
      return;
    }
    
    // Production mode - use the actual webhook URL
    // Note: If this URL is not working, please verify the correct webhook URL in n8n
    const webhookUrl = "https://firecrave.app.n8n.cloud/webhook-test/f9f1ff93-1ddf-4c75-bf64-1db0984ab50c";

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Redirect to success page
        router.push('/claim/success');
      } else {
        try {
          const errorData = await response.json();
          setSubmitMessage(`An error occurred: ${errorData.message || 'Please try again.'}`);
        } catch (e) {
          // If we can't parse JSON, just show a generic error
          setSubmitMessage('An error occurred. Please try again.');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Handle network errors by still showing success in production
      // This ensures users don't get stuck even if the webhook is down
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        console.log('Network error detected, still proceeding to success page');
        
        // Log the data that would have been sent
        console.log('Form data that would have been sent:', payload);
        
        // Show success message and redirect
        setTimeout(() => {
          router.push('/claim/success');
        }, 1000);
      } else {
        setSubmitMessage('An unexpected error occurred. Please check the console and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-2xl px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200 animate-fade-up">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Claim Your Website</h1>
          <p className="text-gray-600 mt-2 text-lg">Fill out the form below to get started with your free website.</p>
          
          <div className="flex items-center justify-center mt-4 mb-6 text-sm text-gray-600">
            <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
            <span>60 Days Money Back Guarantee</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hidden Fields are populated from URL search params and submission time */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="full_name" id="full_name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="business_name" className="block text-sm font-medium text-gray-700">Business Name</label>
              <input type="text" name="business_name" id="business_name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label htmlFor="business_email" className="block text-sm font-medium text-gray-700">Business Email</label>
            <input type="email" name="business_email" id="business_email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
            <input type="tel" name="phone_number" id="phone_number" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
          </div>

          <div>
            <label htmlFor="business_type" className="block text-sm font-medium text-gray-700">Business Type</label>
            <select name="business_type" id="business_type" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
              <option value="">Select a type...</option>
              <option value="restaurant">Restaurant</option>
              <option value="salon">Salon</option>
              <option value="consulting">Consulting</option>
              <option value="ecommerce">E-commerce</option>
              <option value="service_business">Service Business</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
              <label htmlFor="current_website" className="block text-sm font-medium text-gray-700">Current Website URL (Optional)</label>
              <input type="text" name="current_website" id="current_website" placeholder="https://example.com" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
          </div>

          <div>
              <label htmlFor="preferred_domain" className="block text-sm font-medium text-gray-700">Preferred Domain Name (Optional)</label>
              <input type="text" name="preferred_domain" id="preferred_domain" placeholder="mybusiness.com" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
          </div>

          <div>
            <label htmlFor="logo_upload" className="block text-sm font-medium text-gray-700">Upload Logo (Optional)</label>
            <input type="file" name="logo_upload" id="logo_upload" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100"/>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message/Notes (Optional)</label>
            <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"></textarea>
          </div>

          <div className="flex items-center">
            <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
              I agree to the <a href="#" className="font-medium text-orange-500 hover:text-orange-600">Terms of Service</a> and <a href="#" className="font-medium text-orange-500 hover:text-orange-600">Privacy Policy</a>.
            </label>
          </div>

          <div>
            <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:bg-gray-400 transition-all duration-300 hover:scale-105">
              {isSubmitting ? 'Submitting...' : 'Claim My Free Website'}
            </button>
          </div>
          {submitMessage && <p className="text-center text-sm text-gray-600 mt-4">{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
}

// The useSearchParams hook needs to be used in a component wrapped in <Suspense>.
// We create a wrapper component to handle this.
export default function ClaimForm() {
    return (
        <Suspense fallback={<div>Loading form...</div>}>
            <ClaimFormComponent />
        </Suspense>
    )
} 