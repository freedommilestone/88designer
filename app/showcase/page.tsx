"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Star, Phone, Mail, MapPin, Shield, Award, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function ShowcasePage() {
  const [isAfter, setIsAfter] = useState(false)

  const toggleView = () => {
    setIsAfter(!isAfter)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">Before & After Showcase</h1>
              <p className="text-gray-600">See the transformation power of modern web design</p>
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Toggle Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white rounded-full p-2 shadow-lg border">
            <button
              onClick={() => setIsAfter(false)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                !isAfter ? "bg-red-500 text-white shadow-md" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setIsAfter(true)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                isAfter ? "bg-green-500 text-white shadow-md" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              After
            </button>
          </div>

          <div className="mt-4">
            <Button
              onClick={toggleView}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {isAfter ? "Show Before" : "Show After"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Business Info */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Altitude Roofing Company</h2>
          <p className="text-xl text-gray-600">Professional Roofing Services</p>
        </div>

        {/* Website Preview Container */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Browser Chrome */}
          <div className="bg-gray-100 px-4 py-3 border-b flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 border">www.altituderoofs.com</div>
            </div>
          </div>

          {/* Website Content */}
          <div className="relative h-[800px] overflow-hidden">
            {/* Before Version */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isAfter ? "opacity-0 transform translate-x-full" : "opacity-100 transform translate-x-0"
              }`}
            >
              <div className="h-full bg-gradient-to-b from-gray-200 to-gray-300 p-8">
                {/* Old Header */}
                <div className="bg-blue-800 text-white p-4 mb-6 rounded">
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">ALTITUDE ROOFING</h1>
                    <div className="text-sm">
                      <div>Call: (555) 123-4567</div>
                      <div>Email: info@altituderoofs.com</div>
                    </div>
                  </div>
                </div>

                {/* Old Content */}
                <div className="bg-white p-6 rounded shadow-sm mb-6">
                  <h2 className="text-xl font-bold mb-4 text-blue-800">Welcome to Altitude Roofing</h2>
                  <p className="text-gray-700 mb-4">
                    We are a roofing company that has been serving the community for over 15 years. We do all types of
                    roofing work including repairs, replacements, and new installations.
                  </p>
                  <p className="text-gray-700 mb-4">Our services include:</p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Roof Repairs</li>
                    <li>Roof Replacements</li>
                    <li>New Roof Installation</li>
                    <li>Gutter Services</li>
                    <li>Emergency Repairs</li>
                  </ul>
                </div>

                {/* Old Contact Section */}
                <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-500">
                  <h3 className="font-bold text-lg mb-2">Contact Us Today!</h3>
                  <p>Phone: (555) 123-4567</p>
                  <p>Email: info@altituderoofs.com</p>
                  <p>Address: 123 Main St, Your City, ST 12345</p>
                </div>

                {/* Old Footer */}
                <div className="mt-8 text-center text-sm text-gray-600">
                  <p>© 2024 Altitude Roofing Company. All rights reserved.</p>
                </div>
              </div>
            </div>

            {/* After Version */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isAfter ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-full"
              }`}
            >
              <div className="h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-y-auto">
                {/* Modern Header */}
                <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
                  <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Shield className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h1 className="text-xl font-bold">Altitude Roofing</h1>
                          <p className="text-sm text-blue-200">Professional Excellence</p>
                        </div>
                      </div>
                      <nav className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-white hover:text-blue-300 transition-colors">
                          Services
                        </a>
                        <a href="#" className="text-white hover:text-blue-300 transition-colors">
                          About
                        </a>
                        <a href="#" className="text-white hover:text-blue-300 transition-colors">
                          Portfolio
                        </a>
                        <a href="#" className="text-white hover:text-blue-300 transition-colors">
                          Contact
                        </a>
                      </nav>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        <Phone className="h-4 w-4 mr-2" />
                        (555) 123-4567
                      </Button>
                    </div>
                  </div>
                </header>

                {/* Modern content (continuing with the modern design elements) */}
                {/* Note: Additional content would continue here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
