'use client';

import { useState, FormEvent, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Check, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';

// Main component wrapped in Suspense
export default function SqueezeForm() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <SqueezeFormComponent />
    </Suspense>
  );
}

// The actual form component
function SqueezeFormComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: searchParams.get('email') || '',
    phone: '',
    industry: '',
    yearsInBusiness: '',
    currentWebsiteStatus: 'none',
    employees: '',
    websiteGoal: '',
    mustHaveFeatures: [] as string[],
    designStyle: '',
    brandColors: '',
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      if (name === 'mustHaveFeatures') {
        setFormData(prev => ({
          ...prev,
          mustHaveFeatures: checked 
            ? [...prev.mustHaveFeatures, value]
            : prev.mustHaveFeatures.filter(f => f !== value),
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formData.agreeToTerms) {
        setSubmitMessage('You must agree to the terms and conditions.');
        return;
    }
    setIsSubmitting(true);
    setSubmitMessage('');

    const payload = {
      ...formData,
      utm_campaign: searchParams.get('utm_campaign'),
      timestamp: new Date().toISOString(),
    };
    
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://your-n8n-webhook-url.com/placeholder-squeeze';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        router.push('/squeeze/success');
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
  
  const steps = [
    { num: 1, title: 'Basic Information' },
    { num: 2, title: 'Business Profile' },
    { num: 3, title: 'Website Requirements' },
    { num: 4, title: 'Claim Your Website' },
  ];

  return (
    <div className="w-full max-w-4xl px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-gray-800">Step {step}: {steps[step-1].title}</h2>
                <span className="text-sm font-medium text-gray-500">{step} of 4</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${(step / 4) * 100}%`, transition: 'width 0.5s ease-in-out' }}></div>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
          {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
          {step === 3 && <Step3 formData={formData} handleChange={handleChange} />}
          {step === 4 && <Step4 formData={formData} handleChange={handleChange} />}

          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <div>
              {step > 1 && (
                <button type="button" onClick={prevStep} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                  <ArrowLeft size={16} />
                  Back
                </button>
              )}
            </div>
            <div>
              {step < 4 && (
                <button type="button" onClick={nextStep} className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all flex items-center gap-2">
                  Continue to Step {step + 1}
                  <ArrowRight size={16} />
                </button>
              )}
              {step === 4 && (
                <button type="submit" disabled={isSubmitting} className="px-8 py-4 bg-green-600 text-white text-lg font-bold rounded-lg shadow-xl hover:bg-green-700 transition-all disabled:bg-gray-400">
                  {isSubmitting ? 'Submitting...' : 'Claim Your Free Website'}
                </button>
              )}
            </div>
          </div>
          {submitMessage && <p className="text-center text-sm text-red-600 mt-4">{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
}

// --- Step Components ---

const Step1 = ({ formData, handleChange }: { formData: any, handleChange: any }) => (
  <div className="animate-fade-in">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField name="businessName" label="Business Name" value={formData.businessName} onChange={handleChange} required placeholder="e.g., Bella's Bistro" />
      <InputField name="ownerName" label="Owner's Full Name" value={formData.ownerName} onChange={handleChange} required placeholder="e.g., Jane Doe" />
      <InputField name="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com"/>
      <InputField name="phone" label="Phone Number" type="tel" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" />
    </div>
    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
      <ShieldCheck size={16} className="text-gray-400" />
      <span>We respect your privacy and will never share your information.</span>
    </div>
  </div>
);

const Step2 = ({ formData, handleChange }: { formData: any, handleChange: any }) => (
  <div className="animate-fade-in">
    <div className="space-y-6 max-w-lg mx-auto">
      <SelectField name="industry" label="Industry Type" value={formData.industry} onChange={handleChange} required options={['Restaurant', 'Service Business', 'Healthcare', 'Beauty & Wellness', 'Retail', 'Professional Services', 'Other']} />
      <SelectField name="yearsInBusiness" label="Years in Business" value={formData.yearsInBusiness} onChange={handleChange} required options={['< 1 year', '1-3 years', '3-5 years', '5-10 years', '> 10 years']} />
      <SelectField name="employees" label="Number of Employees" value={formData.employees} onChange={handleChange} required options={['Just me', '2-5 employees', '6-10 employees', '11+ employees']} />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Current Website Status</label>
        <div className="space-y-2">
            <RadioOption name="currentWebsiteStatus" value="none" label="I don't have a website" checked={formData.currentWebsiteStatus === 'none'} onChange={handleChange} />
            <RadioOption name="currentWebsiteStatus" value="outdated" label="It's outdated" checked={formData.currentWebsiteStatus === 'outdated'} onChange={handleChange} />
            <RadioOption name="currentWebsiteStatus" value="not_mobile_friendly" label="It's not mobile-friendly" checked={formData.currentWebsiteStatus === 'not_mobile_friendly'} onChange={handleChange} />
            <RadioOption name="currentWebsiteStatus" value="functional" label="It's okay, but could be better" checked={formData.currentWebsiteStatus === 'functional'} onChange={handleChange} />
        </div>
      </div>
    </div>
  </div>
);

const Step3 = ({ formData, handleChange }: { formData: any, handleChange: any }) => (
  <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-8">
     <div className="space-y-6">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">What is the primary goal for your new website?</label>
            <SelectField name="websiteGoal" label="" value={formData.websiteGoal} onChange={handleChange} required options={['Get more leads/customers', 'Provide information to existing customers', 'Sell products online (e-commerce)', 'Build brand credibility']} />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select must-have features:</label>
            <div className="grid grid-cols-2 gap-2">
                <CheckboxOption name="mustHaveFeatures" value="online_booking" label="Online Booking" checked={formData.mustHaveFeatures.includes('online_booking')} onChange={handleChange} />
                <CheckboxOption name="mustHaveFeatures" value="photo_gallery" label="Photo Gallery" checked={formData.mustHaveFeatures.includes('photo_gallery')} onChange={handleChange} />
                <CheckboxOption name="mustHaveFeatures" value="customer_reviews" label="Customer Reviews" checked={formData.mustHaveFeatures.includes('customer_reviews')} onChange={handleChange} />
                <CheckboxOption name="mustHaveFeatures" value="blog" label="Blog/News" checked={formData.mustHaveFeatures.includes('blog')} onChange={handleChange} />
                <CheckboxOption name="mustHaveFeatures" value="contact_form" label="Contact Form" checked={formData.mustHaveFeatures.includes('contact_form')} onChange={handleChange} />
                <CheckboxOption name="mustHaveFeatures" value="ecommerce" label="E-commerce" checked={formData.mustHaveFeatures.includes('ecommerce')} onChange={handleChange} />
            </div>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Do you have brand colors? (Optional)</label>
            <InputField name="brandColors" label="" value={formData.brandColors} onChange={handleChange} placeholder="e.g., Blue and Gold, or #0000FF" />
        </div>
     </div>
     <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center text-center border">
        <h4 className="font-bold text-gray-700 mb-2">Preferred Design Style</h4>
        <p className="text-sm text-gray-500 mb-4">Select a style that fits your brand.</p>
        <div className="grid grid-cols-2 gap-4 w-full">
            <div className="h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm border-2 border-transparent hover:border-indigo-500 cursor-pointer">Modern</div>
            <div className="h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm border-2 border-transparent hover:border-indigo-500 cursor-pointer">Classic</div>
            <div className="h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm border-2 border-transparent hover:border-indigo-500 cursor-pointer">Minimalist</div>
            <div className="h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm border-2 border-transparent hover:border-indigo-500 cursor-pointer">Bold</div>
        </div>
    </div>
  </div>
);

const Step4 = ({ formData, handleChange }: { formData: any, handleChange: any }) => (
  <div className="animate-fade-in text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Go!</h3>
    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Please review your information below. Your free, professionally designed website is just one click away. You only cover the <span className="font-bold text-gray-800">$20/month</span> for hosting and support.</p>
    
    <div className="text-left bg-gray-50 border rounded-lg p-6 mb-8 space-y-2 max-w-xl mx-auto">
        <SummaryItem label="Business Name" value={formData.businessName} />
        <SummaryItem label="Owner Name" value={formData.ownerName} />
        <SummaryItem label="Email" value={formData.email} />
        <SummaryItem label="Industry" value={formData.industry} />
        <SummaryItem label="Website Goal" value={formData.websiteGoal} />
    </div>

    <div className="max-w-xl mx-auto space-y-4">
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-md" role="alert">
            <p className="font-bold">Limited Availability!</p>
            <p>Only <span className="font-extrabold">3 spots</span> remaining this month. Claim yours now!</p>
        </div>
        <div className="flex items-center justify-center">
            <input id="terms" name="agreeToTerms" type="checkbox" checked={formData.agreeToTerms} onChange={handleChange} required className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Terms of Service</a> and the $20/month hosting fee.
            </label>
        </div>
    </div>
  </div>
);

// --- Reusable Form Field Components ---
interface InputFieldProps { label: string; name: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean; placeholder?: string; }
const InputField = ({ label, name, type = 'text', value, onChange, required, placeholder }: InputFieldProps) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}{required && <span className="text-red-500">*</span>}</label>
      <input type={type} name={name} id={name} value={value} onChange={onChange} required={required} placeholder={placeholder} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
);

interface SelectFieldProps { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; required?: boolean; options: string[]; }
const SelectField = ({ label, name, value, onChange, required, options }: SelectFieldProps) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}{required && <span className="text-red-500">*</span>}</label>
      <select name={name} id={name} value={value} onChange={onChange} required={required} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <option value="" disabled>Select...</option>
        {options.map((opt: string) => <option key={opt} value={opt.toLowerCase().replace(/ /g, '_')}>{opt}</option>)}
      </select>
    </div>
);

interface CheckboxProps { name: string; value: string; label: string; checked: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }
const CheckboxOption = ({ name, value, label, checked, onChange }: CheckboxProps) => (
    <label className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
      <input type="checkbox" name={name} value={value} checked={checked} onChange={onChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
);

interface RadioProps { name: string; value: string; label: string; checked: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }
const RadioOption = ({ name, value, label, checked, onChange }: RadioProps) => (
    <label className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
        <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
        <span className="text-sm text-gray-700">{label}</span>
    </label>
);

const SummaryItem = ({ label, value }: { label: string; value: string; }) => (
    <div className="flex justify-between items-center py-1">
        <dt className="text-sm font-medium text-gray-600">{label}:</dt>
        <dd className="text-sm font-semibold text-gray-900">{value || 'Not provided'}</dd>
    </div>
); 