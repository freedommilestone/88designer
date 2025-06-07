"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Check, ChevronRight, Mail, MessageSquare, Phone, Share2, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "../../components/Header"

export default function ConfirmationPage() {
  const [referralEmail, setReferralEmail] = useState("")
  const [referralSent, setReferralSent] = useState(false)
  
  const handleReferralSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the referral email
    console.log("Referral email:", referralEmail)
    setReferralSent(true)
    setReferralEmail("")
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Website Request Has Been Submitted!</h1>
            <p className="text-xl text-gray-600">
              Thank you for choosing us to build your professional website. We're excited to get started!
            </p>
          </div>
          
          {/* Video Message */}
          <div className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">A Message From Our Team</h2>
            <div className="aspect-video bg-gray-200 rounded-lg mb-4">
              {/* This would be replaced with an actual video player */}
              <div className="h-full w-full flex items-center justify-center">
                <p className="text-gray-500">Video message from our team</p>
              </div>
            </div>
            <p className="text-gray-600">
              Watch this short video to learn more about what happens next and how we'll work together on your website.
            </p>
          </div>
          
          {/* Next Steps */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Initial Review (24 hours)</h3>
                  <p className="text-gray-600">
                    Our team will review your information and requirements to ensure we have everything we need to build your website.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Design & Development (48 hours)</h3>
                  <p className="text-gray-600">
                    Our design team will create your website based on your requirements and industry best practices.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Preview & Feedback</h3>
                  <p className="text-gray-600">
                    You'll receive a preview of your website to review and provide feedback before it goes live.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Launch!</h3>
                  <p className="text-gray-600">
                    Once approved, we'll launch your website and provide you with all the details to start promoting it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Options */}
          <div className="mb-12 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Need to Reach Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                <p className="text-gray-600 text-sm">(555) 123-4567</p>
                <p className="text-gray-500 text-xs mt-1">Mon-Fri, 9am-5pm</p>
              </div>
              
              <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                <p className="text-gray-600 text-sm">support@localsite.com</p>
                <p className="text-gray-500 text-xs mt-1">We respond within 24hrs</p>
              </div>
              
              <div className="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Live Chat</h3>
                <p className="text-gray-600 text-sm">Available on our website</p>
                <p className="text-gray-500 text-xs mt-1">During business hours</p>
              </div>
            </div>
          </div>
          
          {/* Referral Program */}
          <div className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-0 md:mr-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Know Someone Who Needs a Website?</h2>
                <p className="text-gray-600 mb-4">
                  Refer a friend or colleague and get a FREE month of hosting when they sign up!
                </p>
                
                {!referralSent ? (
                  <form onSubmit={handleReferralSubmit} className="space-y-4">
                    <div className="flex">
                      <Input
                        type="email"
                        placeholder="Enter their email address"
                        value={referralEmail}
                        onChange={(e) => setReferralEmail(e.target.value)}
                        className="rounded-r-none"
                      />
                      <Button type="submit" className="rounded-l-none">
                        Refer
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <p className="text-green-700">Referral sent successfully!</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <Share2 className="h-10 w-10 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Schedule Call (if selected) */}
          <div className="mb-12 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-0 md:mr-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Schedule Your Consultation Call</h2>
                <p className="text-gray-600 mb-4">
                  Pick a time that works for you to discuss your website requirements with our team.
                </p>
                <Button className="flex items-center">
                  Schedule Now
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Back to Home */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              Back to Home
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 