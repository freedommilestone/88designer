"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Globe } from "lucide-react"
import Link from "next/link"
import { Header } from "../components/Header"

export default function ClaimWebsitePage() {
  const router = useRouter()
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto max-w-7xl py-20 px-4">
        <div className="max-w-3xl mx-auto relative">
          {/* Decorative elements similar to home page */}
          <div className="absolute -top-10 -left-32 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -right-32 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-pink-500/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border-0 mb-4">Free Website Offer</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Claim Your Professional Website</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team is currently upgrading this form for better mobile experience. We're committed to making your website claim process as smooth as possible.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 animate-fade-in-scale relative overflow-hidden">
            {/* Status indicator */}
            <div className="absolute top-6 right-6">
              <div className="flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse-subtle"></span>
                Maintenance in progress
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">We're improving your experience</h2>
              <p className="text-gray-600 mb-8">
                Our mobile optimization is in progress to ensure business owners can easily claim their free website from any device. Please check back soon!
              </p>
              
              {/* Feature list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-8">
                {[
                  "Professional design tailored to your business",
                  "Mobile-optimized for all devices",
                  "Lead generation features built-in",
                  "Contact forms and location maps",
                  "SEO optimization included",
                  "Social media integration"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="ml-3 text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 pt-6 border-t border-gray-100">
              <Button 
                onClick={() => router.push("/")} 
                variant="outline"
                className="min-h-[48px] px-6 border-gray-300 hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto"
              >
                Return Home
              </Button>
              
              <Button
                onClick={() => router.push("/browse-designs")}
                className="min-h-[48px] px-6 bg-gray-900 hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto"
              >
                Browse Designs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Additional content matching home page style */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Already have a design in mind? <Link href="/browse-designs" className="text-blue-600 hover:underline">View our template gallery</Link>
            </p>
          </div>
        </div>
      </main>
      
      {/* Footer matching browse-designs page */}
      <footer className="bg-gray-900 text-white relative overflow-hidden mt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <Globe className="h-8 w-8 text-white mr-2" />
            <span className="text-2xl font-bold">88 Web Designs</span>
          </div>
          <p className="text-center text-gray-300 max-w-md mx-auto">
            Empowering local businesses with professional websites that drive growth and connect communities.
          </p>
          <div className="text-center mt-8 text-sm text-gray-400">
            © 2023 88 Web Designs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
