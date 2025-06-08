'use client';

import { useState, FormEvent, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ClaimFormComponent() {
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

    // Replace with your n8n webhook URL
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://your-n8n-webhook-url.com/placeholder';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your information has been submitted successfully.');
        (event.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        setSubmitMessage(`An error occurred: ${errorData.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('An unexpected error occurred. Please check the console and try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-2xl px-4">
      <div className="bg-white shadow-md rounded-lg p-8 border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Claim Your Website</h1>
          <p className="text-gray-600 mt-2">Fill out the form below to get started.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hidden Fields are populated from URL search params and submission time */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="full_name" id="full_name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="business_name" className="block text-sm font-medium text-gray-700">Business Name</label>
              <input type="text" name="business_name" id="business_name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label htmlFor="business_email" className="block text-sm font-medium text-gray-700">Business Email</label>
            <input type="email" name="business_email" id="business_email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
            <input type="tel" name="phone_number" id="phone_number" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

          <div>
            <label htmlFor="business_type" className="block text-sm font-medium text-gray-700">Business Type</label>
            <select name="business_type" id="business_type" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
              <input type="text" name="current_website" id="current_website" placeholder="https://example.com" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

          <div>
              <label htmlFor="preferred_domain" className="block text-sm font-medium text-gray-700">Preferred Domain Name (Optional)</label>
              <input type="text" name="preferred_domain" id="preferred_domain" placeholder="mybusiness.com" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

          <div>
            <label htmlFor="logo_upload" className="block text-sm font-medium text-gray-700">Upload Logo (Optional)</label>
            <input type="file" name="logo_upload" id="logo_upload" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"/>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message/Notes (Optional)</label>
            <textarea name="message" id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>

          <div className="flex items-center">
            <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Terms of Service</a> and <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
            </label>
          </div>

          <div>
            <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400">
              {isSubmitting ? 'Submitting...' : 'Claim My Website'}
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