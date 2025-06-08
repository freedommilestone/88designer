"use client"

import { useState } from "react"
import { Check, Eye, Globe, Check as CheckIcon } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const templates = [
  {
    id: 1,
    name: "Local Restaurant",
    category: "Restaurant",
    description: "Perfect for cafes, bistros and local eateries",
    image: "/placeholder.svg",
    features: ["Online Menu", "Reservation System", "Mobile Optimized", "SEO Optimized"],
    claimed: 1247,
  },
  {
    id: 2,
    name: "Service Business",
    category: "Service",
    description: "Ideal for plumbers, electricians, and contractors",
    image: "/placeholder.svg",
    features: ["Service Listings", "Quote Request", "Testimonials", "Contact Forms"],
    claimed: 892,
  },
  {
    id: 3,
    name: "Retail Store",
    category: "Retail",
    description: "Showcase your products and drive foot traffic",
    image: "/placeholder.svg",
    features: ["Product Gallery", "Store Hours", "Location Map", "Social Media"],
    claimed: 2156,
  },
  {
    id: 4,
    name: "Professional Services",
    category: "Professional",
    description: "For accountants, lawyers, and consultants",
    image: "/placeholder.svg",
    features: ["Service Pages", "Appointment Booking", "Team Profiles", "Client Portal"],
    claimed: 743,
  },
  {
    id: 5,
    name: "Salon & Spa",
    category: "Beauty",
    description: "Elegant design for beauty and wellness businesses",
    image: "/placeholder.svg",
    features: ["Service Menu", "Online Booking", "Staff Profiles", "Gallery"],
    claimed: 1089,
  },
  {
    id: 6,
    name: "Medical Practice",
    category: "Healthcare",
    description: "Clean design for healthcare professionals",
    image: "/placeholder.svg",
    features: ["Appointment Booking", "Service Listings", "Doctor Profiles", "HIPAA Compliant"],
    claimed: 567,
  },
];

const categories = ["All", "Restaurant", "Service", "Retail", "Professional", "Beauty", "Healthcare"];

export default function BrowseDesignsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates =
    selectedCategory === "All" ? templates : templates.filter((template) => template.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
            <Link href="/browse-designs" className="text-orange-500 font-semibold transition-all duration-300 hover:scale-105">
              Browse Designs
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-105">
              Contact
            </Link>
          </nav>
          <div className="flex justify-center">
            <Link href="/squeeze">
              <Button
                className="bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Featured Web Designs Section */}
        <section id="websites" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border-0 mb-4">Professional Templates</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Website Design</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our collection of professionally designed websites, each tailored for specific business types. Find your perfect match and claim it for free.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template, index) => (
                <div
                  key={template.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2 hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Template Preview */}
                  <div className="relative overflow-hidden bg-gray-50">
                    <Image
                      src={template.image || "/placeholder.svg"}
                      alt={template.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Preview Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white backdrop-blur-sm animate-scale">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">{template.category}</Badge>
                    </div>

                    {/* Claimed Count */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {template.claimed}+ claimed
                      </div>
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">{template.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">{template.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {template.features.map((feature, i) => (
                        <div key={feature} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link href="/squeeze">
                        <Button
                          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:scale-105"
                        >
                          Claim Free
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="px-4 transition-all duration-300 hover:bg-gray-50">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Transparency Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="bg-white text-gray-800 hover:bg-gray-200 border-gray-200 border mb-4">Transparent Pricing</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">No Hidden Costs, No Surprises</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in complete transparency. Here's exactly what you pay and what you get.
              </p>
            </div>

            {/* Pricing Breakdown */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Website Design */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Website Design</h3>
                  <p className="text-gray-600 mb-6">
                    Custom design, mobile optimization, SEO setup, professional development
                  </p>
                  <div className="space-y-2">
                    <div className="text-lg font-medium text-gray-500 line-through">$1,500</div>
                    <div className="text-3xl font-bold text-green-600">FREE</div>
                  </div>
                </div>

                {/* Hosting */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Hosting</h3>
                  <p className="text-gray-600 mb-6">Secure hosting, daily backups, updates, 24/7 technical support</p>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">$20</div>
                    <div className="text-gray-500 font-medium">per month</div>
                  </div>
                </div>

                {/* Updates */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Website Updates</h3>
                  <p className="text-gray-600 mb-6">
                    Content updates, new pages, design modifications, feature additions
                  </p>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">$10+</div>
                    <div className="text-gray-500 font-medium">per change</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
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
                  <a href="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <Link href="/browse-designs" className="text-gray-300 hover:text-white transition-colors">
                    Website Templates
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="text-gray-300 hover:text-orange-500 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
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
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
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