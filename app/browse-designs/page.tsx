"use client"

import { useState } from "react"
import { Check, Eye, Globe, Check as CheckIcon } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import MainLayout from "@/components/layout/MainLayout"

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
    <MainLayout>
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
                          <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link href="/claim">
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
    </MainLayout>
  )
}