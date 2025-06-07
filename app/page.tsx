"use client"

import { useState, useEffect, useRef } from "react"
import {
  Check,
  Star,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Eye,
  Globe,
  Clock,
  Users,
  MapPin,
  Phone,
  Zap,
  Shield,
  Award,
} from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

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

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    business: "Riverside Cafe",
    avatar: "S",
    rating: 5,
    text: "I was paying a fortune for my old website that never brought in customers. My new free website looks better and has already increased my bookings by 30%. The process was incredibly simple.",
    color: "from-orange-400 to-red-500",
  },
  {
    id: 2,
    name: "Michael Smith",
    business: "Smith & Sons Plumbing",
    avatar: "M",
    rating: 5,
    text: "As a small plumbing business, I never thought I could afford a professional website. This service gave me exactly what I needed at no cost. Now customers can easily find and contact us online.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    business: "Downtown Dental",
    avatar: "E",
    rating: 5,
    text: "Our new website has made appointment booking so much easier for our patients. The professional design gives our practice credibility and we've seen a 40% increase in new patient inquiries.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    business: "Rodriguez Auto Repair",
    avatar: "C",
    rating: 5,
    text: "I never had a website before because I thought it would be too complicated. This service made it so easy! Now customers can find my shop online and see all the services I offer.",
    color: "from-purple-400 to-indigo-500",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    business: "Luxe Hair Salon",
    avatar: "L",
    rating: 5,
    text: "The online booking feature has been a game-changer for my salon. Clients love being able to schedule appointments 24/7, and I've reduced no-shows significantly.",
    color: "from-rose-400 to-pink-500",
  },
  {
    id: 6,
    name: "David Park",
    business: "Park's Landscaping",
    avatar: "D",
    rating: 5,
    text: "My website showcases my work beautifully with the photo gallery. I've gotten more high-end landscaping projects since launching it. The contact form makes it easy for customers to reach out.",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 7,
    name: "Maria Gonzalez",
    business: "Bella's Bakery",
    avatar: "M",
    rating: 5,
    text: "The website has helped me reach so many more customers! People can now see our daily specials and place orders online. It's been amazing for growing my small bakery business.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 8,
    name: "James Wilson",
    business: "Wilson Law Firm",
    avatar: "J",
    rating: 5,
    text: "Having a professional website has elevated my practice's image significantly. Potential clients take me more seriously, and the contact forms have streamlined my client intake process.",
    color: "from-slate-400 to-gray-500",
  },
]

// Case studies for before/after showcases
const caseStudies = [
  {
    id: 1,
    businessName: "Altitude Roofing",
    businessType: "Professional Roofing Services",
    results: {
      leads: 300,
      mobileTraffic: 200,
      conversions: 150,
    },
  },
  {
    id: 2,
    businessName: "Riverside Cafe",
    businessType: "Restaurant & Dining",
    results: {
      leads: 250,
      mobileTraffic: 180,
      conversions: 120,
    },
  },
  {
    id: 3,
    businessName: "Wellness Center",
    businessType: "Health & Wellness Services",
    results: {
      leads: 320,
      mobileTraffic: 240,
      conversions: 170,
    },
  },
]

const trustedBusinesses = [
  "RIVERSIDE CAFE",
  "SMITH & SONS PLUMBING",
  "DOWNTOWN DENTAL",
  "LUXE HAIR SALON",
  "PARK'S LANDSCAPING",
  "RODRIGUEZ AUTO REPAIR",
  "BELLA'S BAKERY",
  "WILSON LAW FIRM",
  "METRO FITNESS GYM",
  "GOLDEN YEARS SENIOR CARE",
  "TECH SOLUTIONS IT",
  "MOUNTAIN VIEW VETERINARY",
  "SUNRISE CLEANING SERVICES",
  "PACIFIC REAL ESTATE",
  "CORNERSTONE ACCOUNTING",
  "BLUE SKY TRAVEL",
  "ARTISAN COFFEE ROASTERS",
  "PREMIER PEST CONTROL",
  "HARMONY YOGA STUDIO",
  "ELITE PERSONAL TRAINING",
  "FAMILY FIRST CHILDCARE",
  "PRECISION HVAC SERVICES",
  "GARDEN FRESH FLORIST",
  "SUMMIT CONSTRUCTION",
]

const categories = ["All", "Restaurant", "Service", "Retail", "Professional", "Beauty", "Healthcare"]

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentWebsite, setCurrentWebsite] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)
  const [isReviewsVisible, setIsReviewsVisible] = useState(false)
  const [isTrustedVisible, setIsTrustedVisible] = useState(false)
  const [selectedReviewFilter, setSelectedReviewFilter] = useState("All")

  // New state variables for the additional sections
  const [selectedBusinessType, setSelectedBusinessType] = useState("restaurant")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Title carousel state - moved inside component
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const isTypingRef = useRef(true)

  const heroTitles = [
    "We Design Your Website Free - You Just Cover the Hosting",
    "Professional Websites That Actually Bring in Business - No Design Fees",
    "Stop Losing Customers to Competitors Online - Professional Website for Just Hosting Costs",
    "Limited Website Inventory - Find Yours Before It's Gone",
  ]

  // Helper function to get business category
  const getBusinessCategory = (businessName: string) => {
    const categories: { [key: string]: string } = {
      "Riverside Cafe": "Restaurant",
      "Smith & Sons Plumbing": "Service Business",
      "Downtown Dental": "Healthcare",
      "Luxe Hair Salon": "Beauty & Wellness",
      "Park's Landscaping": "Service Business",
      "Rodriguez Auto Repair": "Service Business",
      "Bella's Bakery": "Restaurant",
      "Wilson Law Firm": "Professional Services",
    }
    return categories[businessName] || "Local Business"
  }

  // Filter reviews based on selected category
  const filteredReviews =
    selectedReviewFilter === "All"
      ? reviews
      : reviews.filter((review) => {
          const category = getBusinessCategory(review.business)
          return (
            category.includes(selectedReviewFilter) ||
            (selectedReviewFilter === "Service" && category.includes("Service")) ||
            (selectedReviewFilter === "Professional" && category.includes("Professional"))
          )
        })

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentWebsite((prev) => (prev + 1) % websiteExamples.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  // Reviews animation
  useEffect(() => {
    if (!isReviewsVisible) return

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isReviewsVisible])

  // Intersection Observer for reviews section
  useEffect(() => {
    const reviewsObserver = new IntersectionObserver(
      ([entry]) => {
        setIsReviewsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    const trustedObserver = new IntersectionObserver(
      ([entry]) => {
        setIsTrustedVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    const reviewsSection = document.getElementById("reviews-section")
    const trustedSection = document.getElementById("trusted-section")

    if (reviewsSection) reviewsObserver.observe(reviewsSection)
    if (trustedSection) trustedObserver.observe(trustedSection)

    return () => {
      if (reviewsSection) reviewsObserver.unobserve(reviewsSection)
      if (trustedSection) trustedObserver.unobserve(trustedSection)
    }
  }, [])

  // Typing animation effect
  useEffect(() => {
    const currentTitle = heroTitles[currentTitleIndex]
    let timeoutId: NodeJS.Timeout

    if (isTypingRef.current) {
      if (displayedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1))
        }, 30) // Changed from 50 to 30 for faster typing
      } else {
        // Finished typing, wait then start erasing
        timeoutId = setTimeout(() => {
          isTypingRef.current = false
        }, 2000) // Pause at end
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 20) // Changed from 30 to 20 for faster erasing
      } else {
        // Finished erasing, move to next title
        setCurrentTitleIndex((prev) => (prev + 1) % heroTitles.length)
        isTypingRef.current = true
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayedText, currentTitleIndex, heroTitles])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const filteredTemplates =
    selectedCategory === "All" ? templates : templates.filter((template) => template.category === selectedCategory)

  const currentSite = websiteExamples[currentWebsite]

  // Helper function to get business features
  const getBusinessFeatures = (businessType: string) => {
    const features: { [key: string]: any } = {
      restaurant: [
        {
          icon: Star,
          title: "Online Menu That's Easy to Update",
          description:
            "Keep your menu current with seasonal items, daily specials, and pricing changes. No technical skills needed.",
        },
        {
          icon: Phone,
          title: "Mobile-Friendly Design for Customers on the Go",
          description:
            "Your customers can easily browse your menu, find your location, and contact you from any device.",
        },
        {
          icon: Users,
          title: "Integration with Food Delivery Platforms",
          description: "Connect with popular delivery services to expand your reach and increase orders.",
        },
        {
          icon: Clock,
          title: "Reservation System to Fill Your Tables",
          description: "Let customers book tables online 24/7, reducing phone calls and no-shows.",
        },
      ],
      service: [
        {
          icon: Award,
          title: "Portfolio Showcase to Highlight Your Best Work",
          description: "Display before/after photos, completed projects, and customer testimonials to build trust.",
        },
        {
          icon: Clock,
          title: "Easy Appointment Booking System",
          description: "Let customers schedule services online, reducing back-and-forth phone calls.",
        },
        {
          icon: Star,
          title: "Customer Review Integration",
          description: "Showcase positive reviews from Google, Yelp, and other platforms to build credibility.",
        },
        {
          icon: MapPin,
          title: "Service Area Maps",
          description: "Clearly show which areas you serve to attract local customers and set expectations.",
        },
      ],
      retail: [
        {
          icon: Eye,
          title: "Product Showcases with Beautiful Imagery",
          description: "Display your products with high-quality photos that encourage customers to visit your store.",
        },
        {
          icon: MapPin,
          title: "Store Location and Hours Prominently Displayed",
          description: "Make it easy for customers to find you with clear location info and current hours.",
        },
        {
          icon: Zap,
          title: "Special Promotions Section",
          description: "Highlight sales, seasonal offers, and special events to drive foot traffic.",
        },
        {
          icon: Phone,
          title: "Mobile-Friendly Shopping Experience",
          description: "Customers can browse products and contact you easily from their smartphones.",
        },
      ],
      healthcare: [
        {
          icon: Clock,
          title: "Online Appointment Booking",
          description: "Reduce phone calls and make it convenient for patients to schedule appointments 24/7.",
        },
        {
          icon: Users,
          title: "Provider Profiles and Credentials",
          description: "Build trust by showcasing your team's qualifications and experience.",
        },
        {
          icon: Shield,
          title: "HIPAA-Compliant Contact Forms",
          description: "Secure forms that protect patient privacy while enabling communication.",
        },
        {
          icon: Star,
          title: "Patient Education Resources",
          description: "Share helpful information about treatments, procedures, and health tips.",
        },
      ],
      beauty: [
        {
          icon: Star,
          title: "Service Menu with Pricing",
          description: "Display all your services with clear pricing to help customers choose what they want.",
        },
        {
          icon: Clock,
          title: "Online Booking for Appointments",
          description: "Let clients book services 24/7, reducing no-shows and phone interruptions.",
        },
        {
          icon: Users,
          title: "Staff Profiles and Specialties",
          description: "Help clients choose the right stylist or therapist for their needs.",
        },
        {
          icon: Eye,
          title: "Before/After Gallery",
          description: "Showcase your work with stunning photos that attract new clients.",
        },
      ],
      professional: [
        {
          icon: Award,
          title: "Professional Service Pages",
          description: "Clearly explain your services and expertise to attract the right clients.",
        },
        {
          icon: Clock,
          title: "Consultation Booking System",
          description: "Make it easy for potential clients to schedule initial consultations.",
        },
        {
          icon: Users,
          title: "Team Profiles and Credentials",
          description: "Build trust by highlighting your team's qualifications and experience.",
        },
        {
          icon: Shield,
          title: "Secure Client Portal",
          description: "Provide a secure area for clients to access documents and communicate privately.",
        },
      ],
    }

    return features[businessType] || features.restaurant
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-right">
            <Globe className="h-6 w-6 text-gray-800" />
            <span className="text-xl font-medium text-gray-900">LocalSite</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 animate-fade-up">
            <a href="#websites" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Websites
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Contact
            </a>
          </nav>
          <Button
            onClick={() => alert("Contact us to get started!")}
            className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 animate-fade-left hover:scale-105"
          >
            Get Started
          </Button>
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
              <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border-0 animate-fade-up">
                Premium Web Design Without the Premium Price Tag
              </Badge>
              <div className="animate-fade-up delay-200">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
                  We Design Your Website Free - You Just Cover the Hosting
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Premium Designed Websites For Local Businesses - No Design Fees, Just $20/month For Hosting & Support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Button
                  size="lg"
                  onClick={() => alert("Contact us to get started!")}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  Get My Free Website Built
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-gray-700 border-gray-300 px-8 py-6 text-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View Examples
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-6 animate-fade-up delay-400">
                <div className="flex items-center group">
                  <Check className="h-5 w-5 text-gray-900 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">1-on-1 Dedicated Design Process</span>
                </div>
                <div className="flex items-center group">
                  <Check className="h-5 w-5 text-gray-900 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">48hrs Delivery Time</span>
                </div>
                <div className="flex items-center group">
                  <Check className="h-5 w-5 text-gray-900 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">100% Money-Back Guarantee</span>
                </div>
              </div>

              {/* Business Type Indicator */}
              <div className="pt-4 animate-fade-up delay-500">
                <p className="text-sm text-gray-500 mb-2">Currently showing:</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse-subtle"></div>
                  <span className="text-sm font-medium text-gray-900">{currentSite.type}</span>
                </div>
              </div>
            </div>

            {/* Right Side - Rotating Website Preview */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              {/* Main Website Preview */}
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-xl hover-lift">
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
                <div key={currentSite.id} className="p-0 animate-scale" style={{ animationDuration: "0.8s" }}>
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
              <div className="flex justify-center mt-6 space-x-2 animate-fade-up delay-400">
                {websiteExamples.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentWebsite(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentWebsite ? "bg-gray-900 w-6" : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                    }`}
                  />
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gray-50 rounded-full -z-10 animate-float-modern-1"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-50 rounded-full -z-10 animate-float-modern-2"></div>
            </div>
          </div>

          {/* Social Proof */}
          <div id="trusted-section" className="mt-16 text-center overflow-hidden">
            <p className="text-gray-500 mb-6">Trusted by local businesses across the country</p>
            <div className="relative">
              <div
                className={`flex space-x-12 ${isTrustedVisible ? "animate-scroll-smooth" : ""} hover:animation-paused`}
                style={{
                  width: `${trustedBusinesses.length * 250}px`,
                  animation: isTrustedVisible ? "scrollSmooth 40s linear infinite" : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.animationPlayState = "paused"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animationPlayState = "running"
                }}
              >
                {[...trustedBusinesses, ...trustedBusinesses].map((business, index) => (
                  <div
                    key={index}
                    className="text-gray-400 font-medium text-lg whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer px-4"
                    style={{ minWidth: "220px" }}
                  >
                    {business}
                  </div>
                ))}
              </div>
              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Web Designs Section */}
      <section id="websites" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border-0 mb-4">Professional Templates</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Website Design</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our collection of professionally designed websites, each tailored for specific business
            types. Find
              your perfect match and claim it for free.
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
                    ? "bg-gray-900 text-white shadow-lg"
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
                    <Button
                      onClick={() => alert("Contact us to get started!")}
                      className="flex-1 bg-gray-900 hover:bg-gray-800 text-white transition-all duration-300 hover:scale-105"
                    >
                      Claim Free
                    </Button>
                    <Button variant="outline" size="sm" className="px-4 transition-all duration-300 hover:bg-gray-50">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA - REMOVED */}
        </div>
      </section>

      {/* Pricing Transparency Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 border-0 mb-4">Transparent Pricing</Badge>
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-200 mb-4">
              Common Questions
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about our free website service.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What's the catch with a free website?",
                answer:
                  "There's no catch! We make money from the monthly hosting and support fee ($20/month). We provide the website design for free because we believe every business deserves a professional online presence. This model allows us to help more businesses while building long-term relationships.",
              },
              {
                question: "How long does it take to build my website?",
                answer:
                  "Most websites are completed within 48 hours of receiving your information. Complex websites with special requirements may take up to 5 business days. We'll keep you updated throughout the process and let you know exactly when to expect your completed website.",
              },
              {
                question: "What if I want to make changes to my website?",
                answer:
                  "Minor content updates (like changing text, phone numbers, or hours) are included in your monthly fee. Larger changes like adding new pages, redesigning sections, or adding new features start at $10 per change. We'll always provide a quote before doing any paid work.",
              },
              {
                question: "Can I cancel the hosting service if I'm not satisfied?",
                answer:
                  "You can cancel anytime with 30 days notice. We also offer a 60-day money-back guarantee. If you're not completely satisfied with your website in the first 60 days, we'll refund your hosting fees and help you transition to another provider.",
              },
              {
                question: "Do I own my website content?",
                answer:
                  "Yes, you own all the content, images, and text on your website. If you ever decide to leave our service, we'll provide you with all your website files and help you transfer to another hosting provider. Your content is always yours.",
              },
              {
                question: "What happens if I already have a domain name?",
                answer:
                  "No problem! We can use your existing domain name at no extra cost. If you don't have a domain, we'll help you register one for about $15/year (this is a separate cost from our service, paid directly to the domain registrar).",
              },
              {
                question: "Can you help with SEO and getting found online?",
                answer:
                  "Yes! Every website includes basic SEO optimization (title tags, meta descriptions, site structure). Your monthly hosting fee includes ongoing SEO monitoring and basic optimization. For advanced SEO services, we offer additional packages starting at $50/month.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <div
                    className={`transform transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-50 rounded-full opacity-40 blur-3xl animate-float-modern-1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100 rounded-full opacity-30 blur-3xl animate-float-modern-2"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Main Content */}
          <div className="text-center space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full animate-fade-up">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse-subtle"></div>
              <span className="text-sm font-medium text-gray-700">Limited Monthly Availability</span>
            </div>

            {/* Headline */}
            <div className="space-y-6 animate-fade-up delay-100">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                Only <span className="font-semibold relative group">
                  10 spots
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span> available this month
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                We limit our free website program to ensure each business receives personalized attention and
                exceptional quality.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto py-12">
              <div className="text-center space-y-3 animate-fade-up delay-200 hover-lift p-6 rounded-xl transition-all duration-300 hover:bg-gray-50">
                <div className="text-4xl md:text-5xl font-light text-gray-900">7</div>
                <div className="text-gray-500 font-medium">Spots Remaining</div>
              </div>
              <div className="text-center space-y-3 animate-fade-up delay-300 hover-lift p-6 rounded-xl transition-all duration-300 hover:bg-gray-50">
                <div className="text-4xl md:text-5xl font-light text-gray-900">48h</div>
                <div className="text-gray-500 font-medium">Delivery Time</div>
              </div>
              <div className="text-center space-y-3 animate-fade-up delay-400 hover-lift p-6 rounded-xl transition-all duration-300 hover:bg-gray-50">
                <div className="text-4xl md:text-5xl font-light text-gray-900">100%</div>
                <div className="text-gray-500 font-medium">Satisfaction Rate</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-6 animate-fade-up delay-500">
              <Button
                onClick={() => alert("Contact us to get started!")}
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Check Availability
              </Button>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 animate-fade-up delay-600">
                <div className="flex items-center space-x-2 hover:text-gray-700 transition-colors duration-300">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-gray-700 transition-colors duration-300">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>60-day guarantee</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-gray-700 transition-colors duration-300">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
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
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
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
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#websites" className="text-gray-300 hover:text-white transition-colors">
                    Website Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
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
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">Subscribe</Button>
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
                  <a href="#" className="hover:text-white transition-colors">
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
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
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
