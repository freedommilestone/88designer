"use client"

import Link from "next/link"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 animate-fade-right">
          <Globe className="h-6 w-6 text-gray-800" />
          <span className="text-xl font-medium text-gray-900">LocalSite</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 animate-fade-up">
          <a href="/#how-it-works" className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105">
            How It Works
          </a>
          <a href="/#pricing" className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105">
            Pricing
          </a>
          <a href="/#features" className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105">
            Features
          </a>
          <a href="/#faq" className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105">
            FAQs
          </a>
          <Link href="/browse-designs" className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105">
            Browse Designs
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105">
            Contact
          </Link>
        </nav>
        <div className="flex justify-center">
          <Link href="/claim">
            <Button
              className="bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 