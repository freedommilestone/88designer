"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Header } from "../../components/Header"

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto max-w-7xl py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border border-gray-200 bg-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            
            <CardHeader className="pt-8 pb-6 text-center">
              <div className="mx-auto bg-green-100 h-20 w-20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>
              <p className="text-gray-600 mt-2 text-lg">
                Your website request has been successfully submitted
              </p>
            </CardHeader>
            
            <CardContent className="px-8">
              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <h3 className="font-medium text-gray-900 mb-3">What happens next?</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <span className="text-orange-600 text-sm font-medium">1</span>
                      </div>
                      <p className="text-gray-700">
                        Our team will review your requirements within 24 hours
                      </p>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <span className="text-orange-600 text-sm font-medium">2</span>
                      </div>
                      <p className="text-gray-700">
                        We'll reach out to discuss specific details and answer any questions
                      </p>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <span className="text-orange-600 text-sm font-medium">3</span>
                      </div>
                      <p className="text-gray-700">
                        Your professional website will be ready in 7-10 business days
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                      <h3 className="font-medium text-gray-900">Schedule a Call</h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Want to discuss your website in detail? Schedule a consultation call with our experts.
                    </p>
                    <Button className="mt-3 w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Book a Call
                    </Button>
                  </div>
                  
                  <div className="flex-1 bg-blue-50 rounded-lg p-5 border border-blue-100">
                    <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
                    <p className="text-gray-700 text-sm">
                      If you have any questions or need assistance, our support team is here to help.
                    </p>
                    <Button variant="outline" className="mt-3 w-full border-blue-200 text-blue-700 hover:bg-blue-100">
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="px-8 py-6 flex justify-center border-t border-gray-200 mt-6">
              <Link href="/dashboard" passHref>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Thank you for choosing us for your website needs.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 