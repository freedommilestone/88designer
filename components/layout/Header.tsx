"use client"

import { useState } from "react"
import Link from "next/link"
import { Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/#how-it-works", text: "How It Works" },
    { href: "/#pricing", text: "Pricing" },
    { href: "/#features", text: "Features" },
    { href: "/#faq", text: "FAQs" },
    { href: "/browse-designs", text: "Browse Designs" },
    { href: "/contact", text: "Contact" },
  ]

  return (
    <>
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 animate-fade-right">
            <Globe className="h-6 w-6 text-gray-800" />
            <span className="text-xl font-medium text-gray-900">LocalSite</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105">
                {link.text}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Link href="/claim">
                <Button className="bg-black text-white hover:bg-gray-800 focus:ring-black">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="md:hidden">
              <Button onClick={() => setIsMenuOpen(true)} variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white/95 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-gray-800" />
              <span className="text-xl font-medium text-gray-900">LocalSite</span>
            </Link>
            <Button onClick={() => setIsMenuOpen(false)} variant="ghost" size="icon">
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl text-gray-800 hover:text-orange-500 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </nav>
          
          <div className="mt-12 text-center">
            <Link href="/claim">
              <Button
                className="w-full bg-black text-white hover:bg-gray-800 focus:ring-black py-6 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 