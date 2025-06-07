"use client"

import { Badge } from "@/components/ui/badge"
import { TemplateGrid } from "../components/TemplateGrid"
import { Header } from "../components/Header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Globe } from "lucide-react"

export default function BrowseDesignsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto max-w-7xl py-20 px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border-0 mb-4">Professional Templates</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Website Design</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our collection of professionally designed websites, each tailored for specific business types. Find
            your perfect match and claim it for free.
          </p>
        </div>

        <TemplateGrid />
        
        {/* Transparent Pricing Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase tracking-wide text-gray-600 mb-2">Transparent Pricing</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">No Hidden Costs, No Surprises</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in complete transparency. Here's exactly what you pay and what you get.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Website Design */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Design</h3>
              <div className="text-gray-600 mb-6 flex-grow">
                <p>Custom design, mobile optimization, SEO setup, professional development</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-500 line-through text-lg">$1,500</span>
                </div>
                <div className="text-3xl font-bold text-green-600">FREE</div>
              </div>
            </div>
            
            {/* Premium Hosting */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Hosting</h3>
              <div className="text-gray-600 mb-6 flex-grow">
                <p>Secure hosting, daily backups, updates, 24/7 technical support</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">$20</div>
                <div className="text-gray-500">per month</div>
              </div>
            </div>
            
            {/* Website Updates */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Website Updates</h3>
              <div className="text-gray-600 mb-6 flex-grow">
                <p>Content updates, new pages, design modifications, feature additions</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">$10+</div>
                <div className="text-gray-500">per change</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/squeeze"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Claim Your Free Website
            </Link>
          </div>
        </div>
      </div>
      
      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden mt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Globe className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold">88 Web Designs</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering local businesses with professional, free websites that drive growth and connect communities.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 2.567-2.016 0-1.029.96-1.683 1.68-1.683h2.016c.72 0 1.2.48 1.2 1.2 0 .72-.72.72-1.2.72-1.92l-3.84-4.8c-.72-.72-1.2-.72-1.92 0-1.92h2.016c.72 0 1.2.48 1.2 1.2 0 .72-.72.72-1.2.72-1.92l4.8-6z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/browse-designs" className="text-gray-300 hover:text-white transition-colors">
                    Browse Designs
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Business Types */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Business Types</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Restaurants
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Service Businesses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Beauty & Wellness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Professional Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Retail Stores
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="text-gray-300">Get tips and insights for growing your local business.</p>
              <div className="space-y-3">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white"
                />
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">Subscribe</Button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Check className="w-4 h-4" />
                <span>No spam, unsubscribe anytime</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <p>&copy; 2024 88 Web Designs. All rights reserved.</p>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 