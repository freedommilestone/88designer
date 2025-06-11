"use client"

import Link from "next/link"
import { Check, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">LocalSite</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering local businesses with professional, free websites that drive growth and connect communities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-violet-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/browse-designs" className="text-gray-300 hover:text-violet-400 transition-colors">
                  Website Templates
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="/#pricing" className="text-gray-300 hover:text-violet-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-violet-400 transition-colors">
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
                <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                  Service Businesses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                  Beauty & Wellness
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                  Professional Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                  Retail Stores
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 hidden md:block">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-300">Get tips and insights for growing your local business.</p>
            <div className="space-y-3">
              <Input
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white"
              />
              <Button variant="black" className="w-full">Subscribe</Button>
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
                <a href="#" className="hover:text-violet-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-violet-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-violet-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 