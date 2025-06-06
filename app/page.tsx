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
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Header } from "./components/Header"

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

const recentlyClaimed = [
  {
    name: "Sunrise Bakery",
    location: "Portland, OR",
    businessType: "Restaurant",
    template: "Local Restaurant",
    claimedAt: "2 hours ago",
    avatar: "S",
    avatarColor: "bg-red-200 text-red-800",
  },
  {
    name: "Elite Fitness Studio",
    location: "Austin, TX",
    businessType: "Fitness",
    template: "Professional Services",
    claimedAt: "4 hours ago",
    avatar: "E",
    avatarColor: "bg-blue-200 text-blue-800",
  },
  {
    name: "Harmony Dental Care",
    location: "Denver, CO",
    businessType: "Healthcare",
    template: "Medical Practice",
    claimedAt: "6 hours ago",
    avatar: "H",
    avatarColor: "bg-green-200 text-green-800",
  },
  {
    name: "Apex Garage Doors",
    location: "Phoenix, AZ",
    businessType: "Service",
    template: "Service Business",
    claimedAt: "1 day ago",
    avatar: "A",
    avatarColor: "bg-yellow-200 text-yellow-800",
  },
  {
    name: "Bloom & Stem Florist",
    location: "Miami, FL",
    businessType: "Retail",
    template: "Retail Store",
    claimedAt: "2 days ago",
    avatar: "B",
    avatarColor: "bg-pink-200 text-pink-800",
  },
  {
    name: "Coastal Realty",
    location: "San Diego, CA",
    businessType: "Professional",
    template: "Professional Services",
    claimedAt: "3 days ago",
    avatar: "C",
    avatarColor: "bg-purple-200 text-purple-800",
  },
]

const categories = ["All", "Restaurant", "Service", "Retail", "Professional", "Beauty", "Healthcare"]

export default function HomePage() {
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
      <Header />

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
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  asChild
                >
                  <Link href="/squeeze">
                  Get My Free Website Built
                  <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-500 px-8 py-6 text-lg hover:bg-orange-50 transition-all duration-300 hover:shadow-md"
                >
                  <Eye className="mr-2 h-5 w-5 text-orange-500" />
                  View Examples
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-6 animate-fade-up delay-400">
                <div className="flex items-center group">
                  <Check className="h-5 w-5 text-orange-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">1-on-1 Dedicated Design Process</span>
                </div>
                <div className="flex items-center group">
                  <Check className="h-5 w-5 text-orange-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">48hrs Delivery Time</span>
                </div>
                <div className="flex items-center group">
                  <Check className="h-5 w-5 text-orange-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">100% Money-Back Guarantee</span>
                </div>
              </div>

              {/* Business Type Indicator */}
              <div className="pt-4 animate-fade-up delay-500">
                <p className="text-sm text-gray-500 mb-2">Currently showing:</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse-subtle"></div>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your professional website is simple. Just follow these 3 easy steps and you'll be online in no time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 animate-float-subtle relative overflow-hidden group">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-6 transform transition-transform duration-500 group-hover:rotate-6">
                  <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Order Your Free Website</h3>
                <p className="text-gray-600">
                  Fill out our simple form with your business information and tell us what you need.
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white font-semibold text-sm">1</span>
                </div>
              </div>
          </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 animate-float-subtle-delay-1 relative overflow-hidden group">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-6 transform transition-transform duration-500 group-hover:rotate-6">
                  <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                  </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. We Build Your Custom Website</h3>
                <p className="text-gray-600">
                  Our expert team designs and builds your professional website within 48 hours.
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white font-semibold text-sm">2</span>
                </div>
              </div>
                  </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 animate-float-subtle-delay-2 relative overflow-hidden group">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-6 transform transition-transform duration-500 group-hover:rotate-6">
                  <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Launch & Ongoing Support</h3>
                <p className="text-gray-600">
                  We launch your website and provide ongoing support to help your business grow online.
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white font-semibold text-sm">3</span>
                </div>
                    </div>
                  </div>
                </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/squeeze">Start Your Free Website</Link>
            </Button>
                      </div>
                  </div>
      </section>

      {/* Features & Benefits Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our websites are tailored to the specific needs of your business type
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
                    <Button
              variant={selectedBusinessType === 'restaurant' ? 'default' : 'outline'}
              className={`rounded-full px-6 py-2 ${selectedBusinessType === 'restaurant' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setSelectedBusinessType('restaurant')}
                    >
              Restaurants
                    </Button>
            <Button
              variant={selectedBusinessType === 'service' ? 'default' : 'outline'}
              className={`rounded-full px-6 py-2 ${selectedBusinessType === 'service' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setSelectedBusinessType('service')}
            >
              Service Providers
            </Button>
            <Button
              variant={selectedBusinessType === 'retail' ? 'default' : 'outline'}
              className={`rounded-full px-6 py-2 ${selectedBusinessType === 'retail' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setSelectedBusinessType('retail')}
            >
              Retail Stores
                    </Button>
                  </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getBusinessFeatures(selectedBusinessType).map((feature: any, index: number) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-3 rounded-md"
              asChild
            >
              <Link href="/features">Find Features For Your Business</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Transparency Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-gray-600">
              No hidden fees or surprise charges. Just straightforward pricing that makes sense for your business.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gray-900 text-white p-8 relative">
              <div className="absolute top-4 right-4">
                <Badge className="bg-orange-500 text-white hover:bg-orange-600 text-sm font-bold">Most Popular</Badge>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Professional Business Website</h3>
              <p className="text-5xl font-extrabold">
                $0 <span className="text-2xl font-normal opacity-90">upfront cost</span>
              </p>
            </div>

            {/* Body */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1: Website Design & Development */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-800">Website Design & Development</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-gray-500 line-through">$1,500</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-800 font-bold">$0</span>
                </div>
              </div>

                {/* Column 2: Website Hosting & Support */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-800">Website Hosting & Support</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500" />
                </div>
                    <span className="text-gray-800 font-bold">$20/month</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 pl-9">
                    <li className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-2" />Secure, reliable hosting</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-2" />Regular security updates</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-2" />Technical support</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-2" />Regular backups</li>
                  </ul>
              </div>

                {/* Column 3: Website Updates & Changes */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-800">Website Updates & Changes</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-800 font-bold">Starting at $10 per change</span>
                  </div>
                   <ul className="space-y-2 text-sm text-gray-600 pl-9">
                    <li className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-2" />Content updates</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-2" />Design modifications</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-2" />Feature additions</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-2" />Quick turnaround</li>
                  </ul>
                </div>
              </div>
            </div>

             {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 text-center">
               <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full md:w-auto px-12 py-6 text-lg" asChild>
                <Link href="/squeeze">Claim Your Free Website Now</Link>
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                No credit card required to get started. Only pay when your website is ready to launch.
              </p>
                </div>
              </div>
            </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included in Your $20/Month</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to keep your website secure, fast, and up-to-date.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Secure Hosting */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 mb-4">
                <Shield className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Hosting</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade security and SSL certificates</p>
            </div>
            
            {/* Regular Backups */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 mb-4">
                <Clock className="h-6 w-6 text-orange-500" />
                  </div>
              <h3 className="font-semibold text-lg mb-2">Regular Backups</h3>
              <p className="text-gray-600 text-sm">Daily automated backups of your website</p>
                </div>

            {/* Technical Support */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 mb-4">
                <Users className="h-6 w-6 text-orange-500" />
                      </div>
              <h3 className="font-semibold text-lg mb-2">Technical Support</h3>
              <p className="text-gray-600 text-sm">Email and chat support from our team</p>
                      </div>
            
            {/* Performance Monitoring */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 mb-4">
                <Zap className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Performance Monitoring</h3>
              <p className="text-gray-600 text-sm">24/7 uptime monitoring and optimization</p>
            </div>
            
            {/* Security Updates */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 mb-4">
                <Shield className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Security Updates</h3>
              <p className="text-gray-600 text-sm">Regular security patches and updates</p>
            </div>
            
            {/* SEO Optimization */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 mb-4">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-lg mb-2">SEO Optimization</h3>
              <p className="text-gray-600 text-sm">Basic SEO setup and ongoing optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Compare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See why thousands of businesses choose our free website service over
              expensive alternatives
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 min-w-max hover:shadow-lg transition-all duration-500 relative">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-gray-900 text-white">
                <div className="p-4 font-semibold w-48">Feature</div>
                <div className="p-4 font-semibold text-center relative w-40">
                  <span className="relative inline-block pt-5">
                    <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs px-3 py-1 font-medium shadow-sm w-28 text-center">Best Value</div>
                    88 Web Designs
                        </span>
                      </div>
                <div className="p-4 font-semibold text-center w-40">Traditional Agency</div>
                <div className="p-4 font-semibold text-center w-40">DIY Builders</div>
                    </div>
              
              {/* Initial Investment */}
              <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:shadow-sm">
                <div className="p-4 font-medium bg-gray-50">Initial Investment</div>
                <div className="p-4 text-center font-bold text-orange-500">FREE</div>
                <div className="p-4 text-center">$2,000-$10,000</div>
                <div className="p-4 text-center">$0-$300</div>
                </div>
              
              {/* Monthly Cost */}
              <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:shadow-sm">
                <div className="p-4 font-medium bg-gray-50">Monthly Cost</div>
                <div className="p-4 text-center font-bold text-orange-500">$20</div>
                <div className="p-4 text-center">$50-$200</div>
                <div className="p-4 text-center">$10-$50</div>
              </div>
              
              {/* Custom Design */}
              <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:shadow-sm">
                <div className="p-4 font-medium bg-gray-50">Custom Design</div>
                <div className="p-4 text-center text-orange-500 text-xl">✓</div>
                <div className="p-4 text-center text-orange-500 text-xl">✓</div>
                <div className="p-4 text-center text-red-600 text-xl">✗</div>
            </div>

              {/* Professional Support */}
              <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:shadow-sm">
                <div className="p-4 font-medium bg-gray-50">Professional Support</div>
                <div className="p-4 text-center text-orange-500 text-xl">✓</div>
                <div className="p-4 text-center text-orange-500 text-xl">✓</div>
                <div className="p-4 text-center text-red-600 text-xl">✗</div>
              </div>
              
              {/* Time to Launch */}
              <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:shadow-sm">
                <div className="p-4 font-medium bg-gray-50">Time to Launch</div>
                <div className="p-4 text-center font-bold text-orange-500">48 hours</div>
                <div className="p-4 text-center">2-8 weeks</div>
                <div className="p-4 text-center">1-4 weeks</div>
                  </div>
              
              {/* Technical Knowledge */}
              <div className="grid grid-cols-4 hover:bg-gray-50 transition-all duration-300 hover:shadow-sm">
                <div className="p-4 font-medium bg-gray-50">Technical Knowledge</div>
                <div className="p-4 text-center">None</div>
                <div className="p-4 text-center">None</div>
                <div className="p-4 text-center">High</div>
              </div>
            </div>
          </div>
          
          {/* Mobile Responsive Note */}
          <div className="md:hidden mt-4 text-sm text-gray-500 text-center">
            Swipe horizontally to see the full comparison table on mobile devices.
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">Ready to get started with the best value for your business website?</p>
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/squeeze">Claim Your Free Website</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
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
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-50 rounded-full opacity-40 blur-3xl animate-float-modern-1"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gray-100 rounded-full opacity-30 blur-3xl animate-float-modern-2"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Main Content */}
          <div className="text-center space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full animate-fade-up">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse-subtle"></div>
              <span className="text-sm font-medium text-gray-700">Limited Monthly Availability</span>
            </div>

            {/* Headline */}
            <div className="space-y-6 animate-fade-up delay-100">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                Only <span className="font-semibold relative group">
                  10 spots
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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

            {/* Recently Claimed Title */}
            <div className="animate-fade-up delay-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Recently Claimed Websites</h2>
              <p className="text-gray-500">See what other businesses have chosen in the past 24 hours</p>
            </div>

            {/* Recently Claimed Marquee */}
            <div className="w-full overflow-hidden group animate-fade-up delay-400">
              <div className="flex space-x-6 animate-marquee group-hover:animation-paused">
                {[...recentlyClaimed, ...recentlyClaimed].map((item, index) => (
                  <div key={index} className="flex-shrink-0 w-[380px] bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-gray-900 text-white`}>
                          {item.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 text-left">{item.name}</p>
                          <p className="text-sm text-gray-500 text-left">{item.location}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs text-gray-400">{item.claimedAt}</p>
                        <div className="w-2 h-2 rounded-full bg-orange-500 ml-auto mt-1"></div>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Business Type:</span>
                        <span className="font-medium text-gray-800">{item.businessType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Template:</span>
                        <span className="font-medium text-gray-800">{item.template}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Status:</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                          <span className="font-medium text-orange-500">Claimed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-6 animate-fade-up delay-500 pt-8">
              <p className="text-sm text-gray-500 flex items-center justify-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Only 7 spots remaining this month
              </p>
              <Button
                onClick={() => alert("Contact us to get started!")}
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                asChild
        >
                <Link href="/squeeze">Check Availability</Link>
        </Button>

        {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2 hover:text-gray-700 transition-colors duration-300">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-gray-700 transition-colors duration-300">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
            <span>60-day guarantee</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-gray-700 transition-colors duration-300">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
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
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-gray-800/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-gray-800/10 to-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Globe className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">88 Web Designs</span>
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
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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
                  <Link href="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/browse-designs" className="text-gray-300 hover:text-orange-500 transition-colors">
                    Browse Designs
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
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
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                    Restaurants
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                    Service Businesses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                    Beauty & Wellness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                    Professional Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
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
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                />
                <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Subscribe</Button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Check className="w-4 h-4 text-orange-500" />
                <span>No spam, unsubscribe anytime</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <p>&copy; 2024 88 Web Designs. All rights reserved.</p>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
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
