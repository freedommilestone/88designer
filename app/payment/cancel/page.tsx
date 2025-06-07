"use client";

import Link from 'next/link';
import { XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <Card className="w-full max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <CardHeader className="bg-red-50 p-6 text-center border-b border-red-100">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <XCircle className="h-10 w-10 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Payment Canceled</CardTitle>
          <CardDescription className="text-red-700">
            Your payment process was canceled.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="space-y-4">
            <p className="text-gray-600">
              You've chosen to cancel your payment. No charges have been made to your account.
            </p>
            <p className="text-gray-600">
              If you experienced any issues during the payment process or have questions about our services, please don't hesitate to contact our support team.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="w-full flex flex-col space-y-3">
            <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/pricing">
                Return to Pricing
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
