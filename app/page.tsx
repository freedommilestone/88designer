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
  BookOpen,
  Smartphone,
  ShoppingCart,
  Calendar,
  Tag,
  ClipboardEdit,
  Laptop,
  Rocket,
  Images,
  Store,
  Target,
  ShieldCheck,
  Handshake,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LucideIcon, LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import MainLayout from "@/components/layout/MainLayout"
import Globe3D from "@/components/ui/Globe3D"

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

// Recently claimed websites data
const recentlyClaimed = [
  {
    businessName: "Sunrise Bakery",
    location: "Portland, OR",
    businessType: "Restaurant",
    template: "Local Restaurant",
    timeAgo: "2 hours ago",
    initial: "S",
    color: "bg-orange-200 text-orange-600",
  },
  {
    businessName: "Elite Fitness Studio",
    location: "Austin, TX",
    businessType: "Fitness",
    template: "Professional Services",
    timeAgo: "4 hours ago",
    initial: "E",
    color: "bg-blue-200 text-blue-600",
  },
  {
    businessName: "Harmony Dental Care",
    location: "Denver, CO",
    businessType: "Healthcare",
    template: "Medical Practice",
    timeAgo: "6 hours ago",
    initial: "H",
    color: "bg-emerald-200 text-emerald-600",
  },
  {
    businessName: "Urban Brew Coffee",
    location: "Seattle, WA",
    businessType: "Restaurant",
    template: "Local Restaurant",
    timeAgo: "8 hours ago",
    initial: "U",
    color: "bg-amber-200 text-amber-600",
  },
  {
    businessName: "Pacific Plumbing",
    location: "San Diego, CA",
    businessType: "Service",
    template: "Service Business",
    timeAgo: "10 hours ago",
    initial: "P",
    color: "bg-sky-200 text-sky-600",
  },
  {
    businessName: "Golden Spa Retreat",
    location: "Miami, FL",
    businessType: "Beauty",
    template: "Salon & Spa",
    timeAgo: "12 hours ago",
    initial: "G",
    color: "bg-purple-200 text-purple-600",
  },
  {
    businessName: "Metro Legal Services",
    location: "Chicago, IL",
    businessType: "Professional",
    template: "Professional Services",
    timeAgo: "16 hours ago",
    initial: "M",
    color: "bg-gray-200 text-gray-600",
  },
  {
    businessName: "Organic Market",
    location: "Boston, MA",
    businessType: "Retail",
    template: "Retail Store",
    timeAgo: "18 hours ago",
    initial: "O",
    color: "bg-green-200 text-green-600",
  },
  {
    businessName: "Tech Solutions",
    location: "San Francisco, CA",
    businessType: "Professional",
    template: "Professional Services",
    timeAgo: "20 hours ago",
    initial: "T",
    color: "bg-indigo-200 text-indigo-600",
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

interface Feature {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  title: string
  description: string
}

type FeatureTab = "restaurants" | "serviceProviders" | "retailStores"

type FeatureContent = {
  [key in FeatureTab]: Feature[]
}

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)
  const [isReviewsVisible, setIsReviewsVisible] = useState(false)
  const [isTrustedVisible, setIsTrustedVisible] = useState(false)
  const [selectedReviewFilter, setSelectedReviewFilter] = useState("All")

  // New state variables for the additional sections
  const [selectedBusinessType, setSelectedBusinessType] = useState("restaurant")
  const [activeFeatureTab, setActiveFeatureTab] = useState("restaurants")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [carouselPosition, setCarouselPosition] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

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
    // Show content on page load
    setIsVisible(true)
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

  // Reset carousel position when tab changes
  useEffect(() => {
    setCarouselPosition(0)
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0
    }
  }, [activeFeatureTab])

  const filteredTemplates =
    selectedCategory === "All" ? templates : templates.filter((template) => template.category === selectedCategory)

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

  // Features & Benefits section content
  const featureContent: FeatureContent = {
    restaurants: [
      {
        icon: BookOpen,
        title: "Online Menu",
        description: "Beautiful, easy-to-update digital menu that looks great on any device. Update prices and items instantly."
      },
      {
        icon: Smartphone,
        title: "Mobile-Friendly",
        description: "Optimized for customers on the go. Your menu and information look perfect on phones and tablets."
      },
      {
        icon: ShoppingCart,
        title: "Delivery Integration",
        description: "Connect with popular food delivery platforms to expand your reach and increase orders."
      },
      {
        icon: Calendar,
        title: "Reservation System",
        description: "Let customers book tables directly through your website, reducing phone calls and missed bookings."
      }
    ],
    serviceProviders: [
      {
        icon: Images,
        title: "Portfolio Showcase",
        description: "Highlight your best work with a professional portfolio gallery that builds trust with potential clients."
      },
      {
        icon: Calendar,
        title: "Appointment Booking",
        description: "Allow clients to book appointments online 24/7, reducing scheduling conflicts and phone tag."
      },
      {
        icon: Star,
        title: "Review Integration",
        description: "Showcase your best customer reviews and testimonials to build credibility with new prospects."
      },
      {
        icon: MapPin,
        title: "Service Area Maps",
        description: "Clearly display the areas you serve with interactive maps to attract local customers."
      }
    ],
    retailStores: [
      {
        icon: Store,
        title: "Product Showcases",
        description: "Display your products with beautiful imagery that entices customers to visit your store."
      },
      {
        icon: MapPin,
        title: "Store Location",
        description: "Make it easy for customers to find you with integrated maps and clearly displayed store hours."
      },
      {
        icon: Tag,
        title: "Special Promotions",
        description: "Highlight sales, discounts, and special offers to drive more foot traffic to your retail location."
      },
      {
        icon: Smartphone,
        title: "Mobile Shopping",
        description: "Create a seamless shopping experience for customers browsing on phones and tablets."
      }
    ]
  }

  return (
    <MainLayout>
             {/* Hero Section */}
       <section className="pt-16 md:pt-32 pb-20 md:pb-48 px-8 md:px-8 bg-gradient-to-b from-gray-900 to-gray-800 min-h-\[85vh\] md:min-h-screen flex items-center relative overflow-hidden overflow-x-hidden">
        
        <div className="container mx-auto max-w-7xl relative z-10 px-2 sm:px-4 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile-only Global Web Solution Card - Only visible on mobile */}
            <div className="lg:hidden mb-12 w-full px-2">
              <div
                className="relative opacity-100 w-full"
              >
                <Globe3D />
              </div>
            </div>

            {/* Left Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="animate-fade-up delay-200">
                <h1 className="font-semibold leading-tight mb-6 md:mb-4 text-violet-300 clean-text tracking-tight">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold block">Free Premium</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold block mt-1 md:mt-2">Website Design</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-2 md:mb-2 mobile-subtitle-spacing clean-text">
                  Just $20/Month Hosting
                </p>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 clean-text">
                  Launch in 48 Hours
                </p>
                <div className="text-sm md:text-lg text-white/80 leading-relaxed max-w-xl space-y-2 md:space-y-3 clean-text">
                  <p className="text-base md:text-lg font-medium">Why Pay Thousands When You Can Get Professional Design for FREE?</p>
                  <p className="text-xs md:text-base hero-checklist-item">
                    <span className="text-green-400 font-medium">✓</span>
                    <span className="hero-checklist-desktop-text"> Custom Website Design - $0 <span className="text-xs md:text-sm text-white/60">(Usually $2,000-$5,000)</span></span>
                    <span className="hero-checklist-mobile-text"> Custom Website Design - $0 (Usually +$2,000)</span>
                  </p>
                  <p className="text-xs md:text-base hero-checklist-item">
                    <span className="text-green-400 font-medium">✓</span>
                    <span className="hero-checklist-desktop-text"> Professional Setup & Launch - $0 <span className="text-xs md:text-sm text-white/60">(Usually $500-$1,000)</span></span>
                    <span className="hero-checklist-mobile-text"> Professional Setup & Launch - $0 (Usually +$500)</span>
                  </p>
                  <p className="text-xs md:text-base hero-checklist-item">
                    <span className="text-green-400 font-medium">✓</span>
                    <span className="hero-checklist-desktop-text"> Premium Hosting & Security - Just $20/month</span>
                    <span className="hero-checklist-mobile-text"> Premium Hosting & Security - Just $20/month</span>
                  </p>
                  <p className="text-xs md:text-base hero-checklist-item">
                    <span className="text-green-400 font-medium">✓</span>
                    <span className="hero-checklist-desktop-text"> Ongoing Support & Updates - Included</span>
                    <span className="hero-checklist-mobile-text"> Ongoing Support & Updates - Included</span>
                  </p>
                  <p className="text-xs md:text-base hero-checklist-item">
                    <span className="text-green-400 font-medium">✓</span>
                    <span className="hero-checklist-desktop-text"> 60 Days Money Back Guarantee</span>
                    <span className="hero-checklist-mobile-text"> 60 Days Money Back Guarantee</span>
                  </p>
                </div>
              </div>



                              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                  <Link href="/squeeze">
                    <Button 
                      variant="default"
                      className="text-base font-medium bg-black hover:bg-gray-800 text-white"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5 inline text-white" />
                    </Button>
                  </Link>
                </div>

            </div>

            {/* Right Side - 3D Globe - Only visible on desktop */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 hidden lg:block ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <Globe3D />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50 mt-[-1px] pt-24 md:pt-24 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-200 mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get Your Free Website<br className="block md:hidden" />in 3 Simple Steps</h2>
                  </div>
          
          {/* Mobile version with the new layout */}
          <div className="block md:hidden space-y-4">
            {/* Step 1 */}
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-violet-700 flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div className="h-full w-0.5 bg-violet-300 mx-auto mt-2"></div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
                <div className="flex items-center mb-2">
                  <ClipboardEdit className="h-6 w-6 text-black md:text-violet-400 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">Tell Us About Your Business</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Fill out our quick form with your business details, goals, and what you need. No technical knowledge required.
                </p>
                <p className="text-violet-700 md:text-violet-400 font-medium mt-2 text-sm">(5 minutes)</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-violet-700 flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div className="h-full w-0.5 bg-violet-300 mx-auto mt-2"></div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
                <div className="flex items-center mb-2">
                  <Laptop className="h-6 w-6 text-black md:text-violet-400 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">We Design & Build Your Site</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Our team creates your custom website with professional design, mobile optimization, and everything you need to look credible online.
                </p>
                <p className="text-violet-700 md:text-violet-400 font-medium mt-2 text-sm">(48 hours)</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-violet-700 flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
                <div className="flex items-center mb-2">
                  <Rocket className="h-6 w-6 text-black md:text-violet-400 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">Launch & Grow Your Business</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We handle hosting, security, backups, and support so you can focus on what you do best - running your business.
                </p>
                <p className="text-violet-700 md:text-violet-400 font-medium mt-2 text-sm">(Ongoing)</p>
              </div>
            </div>
          </div>

          {/* Desktop version (original layout) */}
          <div className="hidden md:grid grid-cols-3 gap-4 md:p-8 md:gap-12">
            {/* Step 1 */}
            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8 max-w-[92%] md:max-w-none mx-auto md:mx-0 transition-all duration-300 hover-lift group">
              <div className="pt-6 mb-6">
                <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-6 text-violet-400 group-hover:scale-110 transition-transform duration-300">
                  <ClipboardEdit className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tell Us About Your Business</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill out our quick form with your business details, goals, and what you need. No technical knowledge required.
                </p>
                <p className="text-violet-400 font-medium mt-4">(5 minutes)</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8 max-w-[92%] md:max-w-none mx-auto md:mx-0 transition-all duration-300 hover-lift group">
              <div className="pt-6 mb-6">
                <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-6 text-violet-400 group-hover:scale-110 transition-transform duration-300">
                  <Laptop className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We Design & Build Your Site</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team creates your custom website with professional design, mobile optimization, and everything you need to look credible online.
                </p>
                <p className="text-violet-400 font-medium mt-4">(48 hours)</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8 max-w-[92%] md:max-w-none mx-auto md:mx-0 transition-all duration-300 hover-lift group">
              <div className="pt-6 mb-6">
                <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-6 text-violet-400 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch & Grow Your Business</h3>
                <p className="text-gray-600 leading-relaxed">
                  We handle hosting, security, backups, and support so you can focus on what you do best - running your business.
                </p>
                <p className="text-violet-400 font-medium mt-4">(Ongoing)</p>
              </div>
            </div>
          </div>

          {/* Results Message */}
          <div className="text-center mt-12 mb-8 hidden md:block">
            <p className="text-xl text-gray-700 font-medium">Ready to get started? Most businesses see results within the first week.</p>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 hidden md:block">
            <Link href="/squeeze">
              <Button
                variant="default"
                className="text-base font-medium bg-black hover:bg-gray-800 text-white"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Transparency Section */}
      <section id="pricing" className="py-12 md:py-20 px-4 bg-white pt-28 md:pt-20 overflow-x-hidden">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Pricing Transparency</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No hidden fees or surprise costs – just straightforward pricing
            </p>
                  </div>

          <div className="space-y-2 md:space-y-6">
            {/* Website Design Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8 max-w-[92%] md:max-w-none mx-auto md:mx-0">
              <h3 className="text-sm md:text-2xl font-bold text-gray-900 mb-3 md:mb-6">Website Design & Development</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-gray-400 line-through text-2xl mr-3">$1,500</span>
                <span className="text-4xl md:text-5xl font-bold text-violet-700 md:text-violet-400">$0</span>
                    </div>
              <p className="text-gray-600 mb-2">Professional, custom-designed website at no upfront cost</p>
                  </div>
            
            {/* Website Hosting Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8 max-w-[92%] md:max-w-none mx-auto md:mx-0">
              <h3 className="text-sm md:text-2xl font-bold text-gray-900 mb-3 md:mb-6">Website Hosting & Support</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">$20</span>
                <span className="text-gray-600 ml-2">/month</span>
                </div>
              <p className="text-gray-600 mb-3 md:mb-6">Everything you need to keep your website running smoothly</p>
              
              <div className="space-y-0.5 md:space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-violet-400" />
                      </div>
                  <p className="ml-2 md:ml-3 text-gray-600 text-xs md:text-base">Secure, reliable website hosting</p>
                  </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-violet-400" />
                  </div>
                  <p className="ml-2 md:ml-3 text-gray-600 text-xs md:text-base">Regular security updates and monitoring</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-violet-600" />
              </div>
                  <p className="ml-2 md:ml-3 text-gray-600 text-xs md:text-base">Technical support via email and chat</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-violet-600" />
                  </div>
                  <p className="ml-2 md:ml-3 text-gray-600 text-xs md:text-base">Regular backups of website content</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-violet-600" />
                  </div>
                  <p className="ml-2 md:ml-3 text-gray-600 text-xs md:text-base">Basic SEO optimization</p>
                </div>
              </div>
          </div>

            {/* Website Updates Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8 max-w-[92%] md:max-w-none mx-auto md:mx-0">
              <h3 className="text-sm md:text-2xl font-bold text-gray-900 mb-3 md:mb-6">Website Updates & Changes</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-2xl text-gray-900 font-bold">Starting at</span>
                <span className="text-2xl font-bold text-gray-900 ml-2">$10</span>
                <span className="text-gray-600 ml-2">per change</span>
              </div>
              <p className="text-gray-600">For content updates, design changes, and new features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-white pt-28 md:pt-24 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our websites are tailored to the specific needs of your business type
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex justify-center mb-16 space-x-4">
            <button
              className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeFeatureTab === "restaurants"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setActiveFeatureTab("restaurants")}
            >
              Restaurants
            </button>
            <button
              className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeFeatureTab === "serviceProviders"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setActiveFeatureTab("serviceProviders")}
            >
              Service Providers
            </button>
            <button
              className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeFeatureTab === "retailStores"
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setActiveFeatureTab("retailStores")}
            >
              Retail Stores
            </button>
          </div>

          {/* Feature Cards - Mobile Carousel */}
          <div className="block md:hidden relative overflow-hidden mb-16">
            <div 
              ref={carouselRef}
              className="flex space-x-6 overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hide pb-4 max-w-full"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
              onScroll={(e) => {
                if (carouselRef.current) {
                  const scrollPos = e.currentTarget.scrollLeft;
                  const itemWidth = 280 + 24; // card width + gap
                  const newPosition = Math.round(scrollPos / itemWidth);
                  setCarouselPosition(newPosition);
                }
              }}
            >
              {featureContent[activeFeatureTab as FeatureTab].map((feature: Feature, index: number) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[280px] snap-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group"
                >
                  <div className="w-16 h-16 rounded-full bg-violet-50 flex items-center justify-center mb-6 mx-auto group-hover:bg-violet-100 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
            
            {/* Carousel indicator dots */}
            <div className="flex justify-center mt-6">
              {featureContent[activeFeatureTab as FeatureTab].map((_, index) => (
                <button 
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1.5 transition-all ${
                    index === carouselPosition 
                      ? "bg-violet-600 w-6" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => {
                    if (carouselRef.current) {
                      const itemWidth = 280 + 24; // card width + gap
                      carouselRef.current.scrollLeft = index * itemWidth;
                      setCarouselPosition(index);
                    }
                  }}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Feature Cards - Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:p-8">
            {featureContent[activeFeatureTab as FeatureTab].map((feature: Feature, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group">
                <div className="w-16 h-16 rounded-full bg-violet-50 flex items-center justify-center mb-6 mx-auto group-hover:bg-violet-100 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 px-4 bg-white pt-28 md:pt-24 overflow-x-hidden">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="hidden md:inline-flex bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200/80 mb-4 px-3 py-1 text-sm font-medium">
              Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about our free website service.
            </p>
          </div>

          <div className="space-y-4 max-w-full">
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
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div
                  className="py-2 md:py-6 px-3 md:px-6 cursor-pointer flex justify-between items-center transition-colors duration-200 hover:bg-gray-50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-base md:text-lg font-medium text-gray-800 pr-2">{faq.question}</h3>
                  <ChevronRight
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-90" : ""
                    }`}
                  />
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-3 md:px-6 pb-2 md:pb-6 text-sm text-gray-600">{faq.answer}</p>
                  </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="hidden md:block text-gray-600 mb-4">Still have questions?</p>
            <Button
              variant="outline"
              className="hidden md:inline-flex border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-3"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="pt-28 md:pt-24 pb-12 px-4 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
                         <Badge className="bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-200 mb-4">
               Why Choose Us
             </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Partner With The Local Business Experts</h2>
          </div>

          {/* Main Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 md:p-8 mb-16">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-4 md:p-8 group">
                              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-violet-50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-violet-100 transition-colors duration-300">
                <Target className="h-6 w-6 md:h-8 md:w-8 text-violet-400" />
              </div>
              <h3 className="text-lg md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Laser-Focused on Local Business Success</h3>
              <p className="text-sm md:text-base text-gray-600">We understand what local businesses need online - credibility, mobile-friendly design, and easy customer contact.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-4 md:p-8 group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-violet-50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-violet-100 transition-colors duration-300">
                <ShieldCheck className="h-6 w-6 md:h-8 md:w-8 text-violet-400" />
              </div>
              <h3 className="text-lg md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Risk-Free Business Model</h3>
              <p className="text-sm md:text-base text-gray-600">No upfront costs means no financial risk. We only succeed when your website helps your business grow.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-4 md:p-8 group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-violet-50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-violet-100 transition-colors duration-300">
                <Zap className="h-6 w-6 md:h-8 md:w-8 text-violet-400" />
              </div>
              <h3 className="text-lg md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Quick Launch, Professional Results</h3>
              <p className="text-sm md:text-base text-gray-600">While agencies take weeks and charge thousands, we deliver professional websites in days, not weeks.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-4 md:p-8 group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-violet-50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-violet-100 transition-colors duration-300">
                <Handshake className="h-6 w-6 md:h-8 md:w-8 text-violet-400" />
              </div>
              <h3 className="text-lg md:text-lg font-bold text-gray-900 mb-2 md:mb-3">Ongoing Partnership</h3>
              <p className="text-sm md:text-base text-gray-600">We're not just building a website - we're partnering with your business for long-term online success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-28 md:py-32 px-4 bg-white pt-32 md:pt-32 relative overflow-hidden overflow-x-hidden">
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Main Content */}
          <div className="text-center space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full animate-fade-up">
              <div className="w-2 h-2 bg-violet-400 rounded-full mr-3 animate-pulse-subtle"></div>
              <span className="text-sm font-medium text-gray-700">Limited Monthly Availability</span>
            </div>

            {/* Headline */}
            <div className="space-y-2 md:space-y-6 animate-fade-up delay-100">
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight whitespace-nowrap overflow-hidden text-ellipsis px-1">
                Only <span className="font-semibold relative group">
                  10 spots
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span> available this month
              </h2>
              <p className="text-sm md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                We limit our free website program to ensure each business receives personalized attention and
                exceptional quality.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="flex flex-row md:grid md:grid-cols-3 gap-0 md:gap-4 md:p-8 max-w-full md:max-w-4xl mx-auto py-2 md:py-12">
              <div className="flex-1 text-center space-y-0 md:space-y-3 animate-fade-up delay-200 hover-lift p-0.5 md:p-6 rounded-xl transition-all duration-300 hover:bg-gray-50">
                <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">7</div>
                <div className="text-xs md:text-base text-gray-500 font-medium">Spots Remaining</div>
              </div>
              <div className="flex-1 text-center space-y-0 md:space-y-3 animate-fade-up delay-300 hover-lift p-0.5 md:p-6 rounded-xl transition-all duration-300 hover:bg-gray-50">
                <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">48h</div>
                <div className="text-xs md:text-base text-gray-500 font-medium">Delivery Time</div>
              </div>
              <div className="flex-1 text-center space-y-0 md:space-y-3 animate-fade-up delay-400 hover-lift p-0.5 md:p-6 rounded-xl transition-all duration-300 hover:bg-gray-50">
                <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">100%</div>
                <div className="text-xs md:text-base text-gray-500 font-medium">Satisfaction Rate</div>
              </div>
            </div>

            {/* Recently Claimed Websites */}
            <div className="animate-fade-up delay-500">
                             <div className="text-center mb-8">
                 <h3 className="text-2xl font-bold text-gray-900 mb-4 hidden md:block">Recently Claimed Websites</h3>
                 <p className="text-lg text-gray-600 max-w-2xl mx-auto hidden md:block">
                   See what other businesses have chosen in the past 24 hours
                 </p>
               </div>

              {/* Claimed Websites Carousel */}
              <div className="relative overflow-hidden mb-16">
                <div 
                  className="flex space-x-6 animate-scroll-smooth hover:animation-paused max-w-full"
                  style={{
                    width: `${recentlyClaimed.length * 320}px`,
                    animation: "scrollSmooth 60s linear infinite"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animationPlayState = "paused"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.animationPlayState = "running"
                  }}
                >
                  {[...recentlyClaimed, ...recentlyClaimed].map((business, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-6 border-b border-gray-100">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
                          <h4 className="text-xs md:text-base font-bold text-gray-900 truncate">{business.businessName}</h4>
                          <p className="text-xs md:text-sm text-gray-500 truncate">{business.location}</p>
                        </div>
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Business Type:</span>
                          <span className="text-sm font-medium text-gray-900">{business.businessType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Template:</span>
                          <span className="text-sm font-medium text-gray-900">{business.template}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Status:</span>
                          <span className="flex items-center text-sm font-medium text-violet-600">
                            <span className="w-2 h-2 bg-violet-400 rounded-full mr-2"></span>
                            Claimed
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Gradient overlays for smooth edges */}
                <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-2 md:space-y-6 animate-fade-up delay-600">
              <Link href="/claim">
                             <Button
                 size="lg"
                 className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
               >
                 Check Availability
               </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
