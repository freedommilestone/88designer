"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isHomePage, setIsHomePage] = useState(true)

  // Function to handle scroll events
  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  // Check if we're on the homepage
  useEffect(() => {
    setIsHomePage(window.location.pathname === '/' || window.location.pathname === '')
  }, [])

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Determine colors based on scroll position and page
  const isTransparent = isHomePage && scrollPosition < 10
  const scrollProgress = Math.min(scrollPosition / 300, 1)
  
  const navLinks = [
    { href: "/#how-it-works", text: "How It Works" },
    { href: "/#pricing", text: "Pricing" },
    { href: "/#features", text: "Features" },
    { href: "/#faq", text: "FAQs" },
    { href: "https://themes.88webdesigns.com/", text: "Themes" },
    { href: "/contact", text: "Contact" },
  ]

  // Calculate dynamic styles based on scroll position
  const headerBgClass = isHomePage 
    ? `fixed w-full top-0 z-50 transition-all duration-300`
    : `sticky top-0 z-50 transition-all duration-300 border-b bg-white/95 backdrop-blur-sm`

  // Calculate dynamic styles
  const headerStyle = isHomePage ? {
    backgroundColor: `rgba(${17 + (238 * scrollProgress)}, ${24 + (231 * scrollProgress)}, ${39 + (216 * scrollProgress)}, ${0.9 + (0.05 * scrollProgress)})`,
    borderBottom: scrollPosition > 50 ? '1px solid rgba(229, 231, 235, 0.5)' : 'none',
    backdropFilter: 'blur(8px)'
  } : {}

  // Text color transitions from white to dark as we scroll
  const textColorClass = isHomePage 
    ? scrollPosition < 100 ? 'text-white' : 'text-gray-900' 
    : 'text-gray-900'

  const linkColorClass = isHomePage
    ? scrollPosition < 100 ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-violet-400'
    : 'text-gray-600 hover:text-violet-400'

  // Button styles
  const buttonClass = isHomePage
    ? scrollPosition < 100 
      ? 'bg-violet-400 text-white hover:bg-violet-500 glow-button'
      : 'bg-black text-white hover:bg-gray-800'
    : 'bg-violet-400 text-white hover:bg-violet-500 glow-button'

  return (
    <>
      <header className={headerBgClass} style={headerStyle}>
        <div className="container mx-auto px-4 py-1 md:py-3 flex items-center justify-between">
          <Link href="/" className={`flex items-center space-x-2 animate-fade-right`}>
            <Globe className={`h-6 w-6 ${textColorClass}`} />
            <span className={`text-xl font-medium ${textColorClass}`}>LocalSite</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`${linkColorClass} transition-all duration-300 hover:scale-105`}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Link href="/claim">
                <Button variant="black" size="lg" className="font-medium">
                  Start Here
                </Button>
              </Link>
            </div>
            <div className="md:hidden">
              <Button onClick={() => setIsMenuOpen(true)} variant="ghost" size="icon" className={textColorClass}>
                <Menu className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={isHomePage ? {
          backgroundColor: scrollPosition < 100 ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)'
        } : {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)'
        }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className={`h-6 w-6 ${isHomePage && scrollPosition < 100 ? 'text-white' : 'text-gray-800'}`} />
              <span className={`text-xl font-medium ${isHomePage && scrollPosition < 100 ? 'text-white' : 'text-gray-900'}`}>LocalSite</span>
            </Link>
            <Button onClick={() => setIsMenuOpen(false)} variant="ghost" size="icon" className={isHomePage && scrollPosition < 100 ? 'text-white' : ''}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl ${isHomePage && scrollPosition < 100 ? 'text-white hover:text-violet-300' : 'text-gray-800 hover:text-violet-400'} transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
          
          <div className="mt-12 text-center">
            <Link href="/claim">
              <Button
                variant="black"
                size="xl"
                className="w-full font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Here
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}