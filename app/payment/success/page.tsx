"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [paymentInfo, setPaymentInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You could fetch payment details using the session ID if needed
    // For now, we'll just simulate loading
    const timer = setTimeout(() => {
      setPaymentInfo({
        amount: '$20.00',
        date: new Date().toLocaleDateString(),
        paymentMethod: 'Credit Card',
        orderId: sessionId?.substring(0, 8) || 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <Card className="w-full max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <CardHeader className="bg-green-50 p-6 text-center border-b border-green-100">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Payment Successful!</CardTitle>
          <CardDescription className="text-green-700">
            Thank you for your payment. Your transaction has been completed successfully.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6">
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Payment Details</h3>
                <dl className="mt-4 space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <dt className="text-sm font-medium text-gray-500">Amount Paid:</dt>
                    <dd className="text-sm font-semibold text-gray-900 col-span-2">{paymentInfo.amount}</dd>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <dt className="text-sm font-medium text-gray-500">Date:</dt>
                    <dd className="text-sm font-medium text-gray-900 col-span-2">{paymentInfo.date}</dd>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <dt className="text-sm font-medium text-gray-500">Payment Method:</dt>
                    <dd className="text-sm font-medium text-gray-900 col-span-2">{paymentInfo.paymentMethod}</dd>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <dt className="text-sm font-medium text-gray-500">Order ID:</dt>
                    <dd className="text-sm font-medium text-gray-900 col-span-2">{paymentInfo.orderId}</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">What's Next?</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500">✓</span>
                    <span className="ml-2">You'll receive a confirmation email shortly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500">✓</span>
                    <span className="ml-2">Our team will review your website request</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 text-green-500">✓</span>
                    <span className="ml-2">We'll contact you within 24 hours to discuss next steps</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="w-full flex flex-col space-y-3">
            <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/dashboard">
                Go to Dashboard
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">
                Return to Home
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
