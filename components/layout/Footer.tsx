"use client"

import Link from "next/link"
import { Check, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-gray-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-gray-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">LocalSite</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering local businesses with professional, free websites that drive growth and connect communities.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.37 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
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
                <Link href="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/browse-designs" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Website Templates
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="/#pricing" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Types */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Business Types</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Service Businesses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Beauty & Wellness
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Professional Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
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
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Subscribe</Button>
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
              <p>&copy; 2024 LocalSite. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 