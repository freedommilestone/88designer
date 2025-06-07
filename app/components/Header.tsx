"use client"

import { useState } from "react"
import { Globe, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faqs", label: "FAQs" },
    { href: "/browse-designs", label: "Browse Designs" }
  ]

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 animate-fade-right">
          <Globe className="h-6 w-6 text-gray-800" />
          <span className="text-xl font-medium text-gray-900">88 Web Designs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 animate-fade-up">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" aria-label="Menu">
                <Menu className="h-5 w-5 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] max-w-[300px] pt-12">
              <nav className="flex flex-col space-y-6 pt-8">
                {navLinks.map((link, index) => (
                  <SheetClose asChild key={index}>
                    <a 
                      href={link.href} 
                      className="text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors p-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    className="w-full bg-gray-900 hover:bg-gray-800 mt-6"
                    onClick={() => setIsMenuOpen(false)}
                    asChild
                  >
                    <Link href="/squeeze?from=mobile-menu">Get Started</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* CTA Button - visible on all screen sizes */}
        <Button
          className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 animate-fade-left hover:scale-105"
          asChild
        >
          <Link href="/squeeze?from=header">Get Started</Link>
        </Button>
      </div>
    </header>
  )
} 