"use client"

import { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isHomePage, setIsHomePage] = useState(false)
  
  // Check if we're on the homepage
  useEffect(() => {
    setIsHomePage(window.location.pathname === '/' || window.location.pathname === '')
  }, [])
  
  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      <Header />
      {/* Add padding to content on non-homepage to account for fixed header */}
      <div className={isHomePage ? "" : "pt-16"}>
      {children}
      </div>
      <Footer />
    </div>
  )
} 