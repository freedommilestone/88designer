import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';
import { CheckCircle, PartyPopper } from 'lucide-react';

export default function ClaimSuccessPage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full max-w-2xl">
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100">
            
            <PartyPopper className="w-16 h-16 text-green-500 mx-auto mb-4" />
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Submission Confirmed!</h1>
            
            <p className="text-gray-600 mb-8">
              Thank you for claiming your free website. We've received your information and are excited to get started.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left space-y-4 border">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">What Happens Next?</h2>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600"><span className="font-semibold">Review:</span> Our team will review your submission to ensure we have all the details (1-2 business days).</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600"><span className="font-semibold">Development:</span> We'll start designing and building your professional website (2-3 business days).</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600"><span className="font-semibold">Launch:</span> We'll send you a preview link for your approval before going live!</p>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  &larr; Back to Homepage
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
