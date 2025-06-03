"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Check, Eye, Download, Star, Users, Globe, MapPin, Phone, Clock } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const websiteExamples = [
  {
    id: 1,
    business: "BELLA'S BISTRO",
    type: "Restaurant",
    tagline: "Authentic Italian Cuisine",
    description: "Family recipes passed down for generations",
    phone: "(555) 123-4567",
    address: "123 Main Street",
    cta: "View Menu",
    bgColor: "from-amber-50 to-orange-50",
    accentColor: "bg-amber-600",
  },
  {
    id: 2,
    business: "SMITH PLUMBING",
    type: "Service Business",
    tagline: "24/7 Emergency Service",
    description: "Licensed & insured plumbing experts",
    phone: "(555) 987-6543",
    address: "Serving Metro Area",
    cta: "Get Quote",
    bgColor: "from-blue-50 to-cyan-50",
    accentColor: "bg-blue-600",
  },
  {
    id: 3,
    business: "DOWNTOWN DENTAL",
    type: "Healthcare",
    tagline: "Your Smile, Our Priority",
    description: "Modern dental care in a comfortable setting",
    phone: "(555) 456-7890",
    address: "456 Oak Avenue",
    cta: "Book Appointment",
    bgColor: "from-emerald-50 to-teal-50",
    accentColor: "bg-emerald-600",
  },
  {
    id: 4,
    business: "LUXE SALON & SPA",
    type: "Beauty & Wellness",
    tagline: "Relax. Refresh. Renew.",
    description: "Full-service salon and spa experience",
    phone: "(555) 321-0987",
    address: "789 Beauty Lane",
    cta: "Book Service",
    bgColor: "from-rose-50 to-pink-50",
    accentColor: "bg-rose-600",
  },
  {
    id: 5,
    business: "GREENTHUMB LANDSCAPING",
    type: "Landscaping",
    tagline: "Creating Beautiful Outdoor Spaces",
    description: "Professional landscaping and maintenance",
    phone: "(555) 654-3210",
    address: "Serving All Areas",
    cta: "Free Estimate",
    bgColor: "from-green-50 to-emerald-50",
    accentColor: "bg-green-600",
  },
]

const templates = [
  {
    id: 1,
    name: "Local Restaurant",
    category: "Restaurant",
    description: "Perfect for cafes, bistros and local eateries",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Online Menu", "Reservation System", "Mobile Optimized", "SEO Optimized"],
    claimed: 1247,
  },
  {
    id: 2,
    name: "Service Business",
    category: "Service",
    description: "Ideal for plumbers, electricians, and contractors",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Service Listings", "Quote Request", "Testimonials", "Contact Forms"],
    claimed: 892,
  },
  {
    id: 3,
    name: "Retail Store",
    category: "Retail",
    description: "Showcase your products and drive foot traffic",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Product Gallery", "Store Hours", "Location Map", "Social Media"],
    claimed: 2156,
  },
  {
    id: 4,
    name: "Professional Services",
    category: "Professional",
    description: "For accountants, lawyers, and consultants",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Service Pages", "Appointment Booking", "Team Profiles", "Client Portal"],
    claimed: 743,
  },
  {
    id: 5,
    name: "Salon & Spa",
    category: "Beauty",
    description: "Elegant design for beauty and wellness businesses",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Service Menu", "Online Booking", "Staff Profiles", "Gallery"],
    claimed: 1089,
  },
  {
    id: 6,
    name: "Medical Practice",
    category: "Healthcare",
    description: "Clean design for healthcare professionals",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Appointment Booking", "Service Listings", "Doctor Profiles", "HIPAA Compliant"],
    claimed: 567,
  },
]

const categories = ["All", "Restaurant", "Service", "Retail", "Professional", "Beauty", "Healthcare"]

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentWebsite, setCurrentWebsite] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentWebsite((prev) => (prev + 1) % websiteExamples.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const filteredTemplates =
    selectedCategory === "All" ? templates : templates.filter((template) => template.category === selectedCategory)

  const currentSite = websiteExamples[currentWebsite]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-gray-800" />
            <span className="text-xl font-medium text-gray-900">LocalSite</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#websites" className="text-gray-600 hover:text-gray-900 transition-colors">
              Websites
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-gray-900 hover:bg-gray-800 transition-all duration-300">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border-0">
                Free Websites for Local Businesses
              </Badge>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
                  Professional websites for your{" "}
                  <span className="relative inline-block">
                    local business
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-1"
                      viewBox="0 0 300 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 4C75 2 225 6 299 4" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Claim your free, professionally designed website that helps local customers find and choose your
                  business. No technical skills required.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
                >
                  Claim Your Free Website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-gray-700 border-gray-300 px-8 py-6 text-lg hover:bg-gray-50 transition-all duration-300"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View Examples
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-6">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-gray-900 mr-2" />
                  <span className="text-gray-600">No credit card</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-gray-900 mr-2" />
                  <span className="text-gray-600">No technical skills</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-gray-900 mr-2" />
                  <span className="text-gray-600">Ready in minutes</span>
                </div>
              </div>

              {/* Business Type Indicator */}
              <div className="pt-4">
                <p className="text-sm text-gray-500 mb-2">Currently showing:</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">{currentSite.type}</span>
                </div>
              </div>
            </div>

            {/* Right Side - Rotating Website Preview */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              {/* Main Website Preview */}
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500">
                {/* Browser Header */}
                <div className="bg-gray-50 px-4 py-3 flex items-center space-x-2 border-b border-gray-100">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-gray-500 border border-gray-200">
                    {currentSite.business.toLowerCase().replace(/\s+/g, "")}.com
                  </div>
                </div>

                {/* Website Content - Animated */}
                <div key={currentSite.id} className="p-0 animate-fade-in-scale" style={{ animationDuration: "0.8s" }}>
                  {/* Website Header */}
                  <div className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
                    <div className="font-medium">{currentSite.business}</div>
                    <div className="flex space-x-4 text-sm">
                      <span>Home</span>
                      <span>Services</span>
                      <span>About</span>
                      <span>Contact</span>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className={`relative h-48 bg-gradient-to-br ${currentSite.bgColor}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{currentSite.tagline}</h2>
                        <p className="text-gray-600 mb-4">{currentSite.description}</p>
                        <button
                          className={`${currentSite.accentColor} text-white px-6 py-2 rounded text-sm hover:opacity-90 transition-opacity`}
                        >
                          {currentSite.cta}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content Sections */}
                  <div className="grid grid-cols-3 gap-0">
                    <div className="bg-white p-4 text-center border-r border-gray-100">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Star className="h-5 w-5 text-gray-600" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">Quality Service</h3>
                      <p className="text-xs text-gray-500">Trusted by locals</p>
                    </div>
                    <div className="bg-white p-4 text-center border-r border-gray-100">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="h-5 w-5 text-gray-600" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">Fast Response</h3>
                      <p className="text-xs text-gray-500">Quick turnaround</p>
                    </div>
                    <div className="bg-white p-4 text-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-5 w-5 text-gray-600" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">Expert Team</h3>
                      <p className="text-xs text-gray-500">Professional staff</p>
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="bg-gray-50 p-4 flex items-center justify-between border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-xs text-gray-600">{currentSite.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-xs text-gray-600">{currentSite.phone}</span>
                      </div>
                    </div>
                    <button className="bg-gray-800 text-white text-xs px-3 py-1 rounded">Contact</button>
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {websiteExamples.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentWebsite(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentWebsite ? "bg-gray-900 w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gray-50 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-50 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">Trusted by local businesses across the country</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-gray-400 font-medium text-lg">RIVERSIDE CAFE</div>
              <div className="text-gray-400 font-medium text-lg">SMITH & SONS</div>
              <div className="text-gray-400 font-medium text-lg">METRO DENTAL</div>
              <div className="text-gray-400 font-medium text-lg">GREEN LANDSCAPING</div>
              <div className="text-gray-400 font-medium text-lg">CITY PLUMBING</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get your business online in three simple steps. No technical skills required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                <span className="text-2xl font-semibold text-gray-900">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Choose Your Website</h3>
              <p className="text-gray-600">
                Select from our professionally designed websites tailored for your specific business type.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                <span className="text-2xl font-semibold text-gray-900">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Customize It</h3>
              <p className="text-gray-600">
                Add your business information, photos, and services. We'll help you every step of the way.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                <span className="text-2xl font-semibold text-gray-900">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Go Live</h3>
              <p className="text-gray-600">
                Publish your website instantly and start attracting new customers to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Websites Section */}
      <section id="websites" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Websites For Every Local Business</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional designs tailored to your industry. All free, responsive, and ready to customize.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-gray-900 hover:bg-gray-800" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <Card
                key={template.id}
                className="group hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-gray-800">{template.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-gray-900 text-white">
                      {template.claimed} claimed
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{template.name}</CardTitle>
                  <CardDescription className="text-gray-600">{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {template.features.slice(0, 2).map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>{template.name}</DialogTitle>
                            <DialogDescription>{template.description}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <Image
                              src={template.image || "/placeholder.svg"}
                              alt={template.name}
                              width={800}
                              height={600}
                              className="w-full rounded-lg"
                            />
                            <div className="grid grid-cols-2 gap-4">
                              {template.features.map((feature) => (
                                <div key={feature} className="flex items-center">
                                  <Check className="w-4 h-4 mr-2 text-gray-900" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1 bg-gray-900 hover:bg-gray-800">
                            <Download className="w-4 h-4 mr-2" />
                            Claim Free
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Claim {template.name}</DialogTitle>
                            <DialogDescription>
                              Fill out the form below to get instant access to this website
                            </DialogDescription>
                          </DialogHeader>
                          <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" placeholder="John" />
                              </div>
                              <div>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" placeholder="Doe" />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="john@example.com" />
                            </div>
                            <div>
                              <Label htmlFor="business">Business Name</Label>
                              <Input id="business" placeholder="Your Business" />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" placeholder="(555) 123-4567" />
                            </div>
                            <Button className="w-full bg-gray-900 hover:bg-gray-800">Get Your Free Website</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">What Local Business Owners Say</h2>
            <p className="text-gray-600 text-lg">Hear from businesses who have claimed their free website</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-500 text-sm">Riverside Cafe</div>
                </div>
              </div>
              <p className="text-gray-600">
                "I was paying a fortune for my old website that never brought in customers. My new free website looks
                better and has already increased my bookings by 30%. The process was incredibly simple."
              </p>
              <div className="mt-4 flex">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Michael Smith</div>
                  <div className="text-gray-500 text-sm">Smith & Sons Plumbing</div>
                </div>
              </div>
              <p className="text-gray-600">
                "As a small plumbing business, I never thought I could afford a professional website. This service gave
                me exactly what I needed at no cost. Now customers can easily find and contact us online."
              </p>
              <div className="mt-4 flex">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4">Ready to Grow Your Local Business?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of local businesses who have improved their online presence with our free websites
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6">
            Claim Your Free Website Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-12 px-4 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-5 w-5 text-gray-900" />
                <span className="text-lg font-medium text-gray-900">LocalSite</span>
              </div>
              <p className="text-gray-500">Professional websites for local businesses. Free forever.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Websites</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Restaurant
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Service Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Professional
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Retail
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 LocalSite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
