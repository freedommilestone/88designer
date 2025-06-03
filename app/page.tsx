"use client"

import { useState, useEffect } from "react"
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
import BeforeAfterCard from "@/components/before-after-card"

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

// Survey Questions
const surveyQuestions = [
  {
    id: 1,
    question: "What type of business do you run?",
    type: "single-choice",
    options: [
      { value: "restaurant", label: "Restaurant / Food Service", icon: "🍽️" },
      { value: "service", label: "Service Business (Plumbing, HVAC, etc.)", icon: "🔧" },
      { value: "healthcare", label: "Healthcare / Medical", icon: "🏥" },
      { value: "beauty", label: "Beauty / Wellness", icon: "💄" },
      { value: "professional", label: "Professional Services", icon: "💼" },
      { value: "retail", label: "Retail / E-commerce", icon: "🛍️" },
      { value: "other", label: "Other", icon: "🏢" },
    ],
  },
  {
    id: 2,
    question: "How many employees do you have?",
    type: "single-choice",
    options: [
      { value: "solo", label: "Just me", icon: "👤" },
      { value: "small", label: "2-10 employees", icon: "👥" },
      { value: "medium", label: "11-50 employees", icon: "👨‍👩‍👧‍👦" },
      { value: "large", label: "50+ employees", icon: "🏢" },
    ],
  },
  {
    id: 3,
    question: "What's your main goal for your website?",
    type: "single-choice",
    options: [
      { value: "leads", label: "Generate more leads", icon: "📈" },
      { value: "bookings", label: "Online bookings/appointments", icon: "📅" },
      { value: "sales", label: "Sell products online", icon: "💰" },
      { value: "credibility", label: "Build credibility & trust", icon: "⭐" },
      { value: "information", label: "Share business information", icon: "ℹ️" },
    ],
  },
  {
    id: 4,
    question: "Which features are most important to you?",
    type: "multiple-choice",
    options: [
      { value: "contact-forms", label: "Contact Forms", icon: "📝" },
      { value: "online-booking", label: "Online Booking", icon: "📅" },
      { value: "photo-gallery", label: "Photo Gallery", icon: "📸" },
      { value: "customer-reviews", label: "Customer Reviews", icon: "⭐" },
      { value: "social-media", label: "Social Media Integration", icon: "📱" },
      { value: "location-map", label: "Location & Map", icon: "📍" },
    ],
  },
  {
    id: 5,
    question: "Do you currently have a website?",
    type: "single-choice",
    options: [
      { value: "none", label: "No website", icon: "❌" },
      { value: "outdated", label: "Yes, but it's outdated", icon: "🕰️" },
      { value: "basic", label: "Basic website", icon: "📄" },
      { value: "social-only", label: "Just social media pages", icon: "📱" },
    ],
  },
]

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentWebsite, setCurrentWebsite] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)
  const [isReviewsVisible, setIsReviewsVisible] = useState(false)
  const [isTrustedVisible, setIsTrustedVisible] = useState(false)
  const [selectedReviewFilter, setSelectedReviewFilter] = useState("All")

  // Survey state
  const [showSurvey, setShowSurvey] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [surveyAnswers, setSurveyAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  // Squeeze page state
  const [showSqueezePage, setShowSqueezePage] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
  })

  // Helper function to get business category
  const getBusinessCategory = (businessName) => {
    const categories = {
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

  // Survey functions
  const handleSurveyAnswer = (questionId, answer) => {
    const question = surveyQuestions[currentStep]
    if (question.type === "multiple-choice") {
      const currentAnswers = surveyAnswers[questionId] || []
      const newAnswers = currentAnswers.includes(answer)
        ? currentAnswers.filter((a) => a !== answer)
        : [...currentAnswers, answer]
      setSurveyAnswers({ ...surveyAnswers, [questionId]: newAnswers })
    } else {
      setSurveyAnswers({ ...surveyAnswers, [questionId]: answer })
    }
  }

  const nextStep = () => {
    if (currentStep < surveyQuestions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Show filtered results instead of contact form
      setShowResults(true)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getRecommendedTemplate = () => {
    const businessType = surveyAnswers[1]
    const goal = surveyAnswers[3]

    // Simple recommendation logic
    if (businessType === "restaurant") return templates[0]
    if (businessType === "service") return templates[1]
    if (businessType === "healthcare") return templates[5]
    if (businessType === "beauty") return templates[4]
    if (businessType === "professional") return templates[3]
    if (businessType === "retail") return templates[2]

    return templates[0] // Default
  }

  const resetSurvey = () => {
    setCurrentStep(0)
    setSurveyAnswers({})
    setShowResults(false)
    setShowSurvey(false)
  }

  const resetSqueezePage = () => {
    setShowSqueezePage(false)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessName: "",
      businessType: "",
    })
  }

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFormSubmit = () => {
    // Validate required fields
    if (!formData.firstName || !formData.email || !formData.businessName) {
      alert("Please fill in all required fields")
      return
    }

    alert("🎉 Thank you! We'll be in touch within 24 hours to set up your free website.")
    resetSqueezePage()
  }

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

  const filteredTemplates =
    selectedCategory === "All" ? templates : templates.filter((template) => template.category === selectedCategory)

  const currentSite = websiteExamples[currentWebsite]
  const currentQuestion = surveyQuestions[currentStep]
  const currentAnswer = surveyAnswers[currentQuestion?.id]
  const canProceed =
    currentQuestion?.type === "multiple-choice" ? currentAnswer && currentAnswer.length > 0 : currentAnswer

  const getFilteredTemplates = () => {
    const businessType = surveyAnswers[1]
    const goal = surveyAnswers[3]

    // Filter templates based on survey answers
    let filtered = templates

    if (businessType === "restaurant") {
      filtered = templates.filter((t) => t.category === "Restaurant")
    } else if (businessType === "service") {
      filtered = templates.filter((t) => t.category === "Service")
    } else if (businessType === "healthcare") {
      filtered = templates.filter((t) => t.category === "Healthcare")
    } else if (businessType === "beauty") {
      filtered = templates.filter((t) => t.category === "Beauty")
    } else if (businessType === "professional") {
      filtered = templates.filter((t) => t.category === "Professional")
    } else if (businessType === "retail") {
      filtered = templates.filter((t) => t.category === "Retail")
    }

    // If no specific matches, show top 3 templates
    return filtered.length > 0 ? filtered : templates.slice(0, 3)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Squeeze Page */}
      {showSqueezePage && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-modern-1"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-float-modern-2"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-float-modern-3"></div>
            </div>

            <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh]">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">Claim Your Free Website</h1>
                    <p className="text-white/90 text-lg">Join 15,000+ businesses who've grown with our free websites</p>
                  </div>
                  <button
                    onClick={resetSqueezePage}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-medium">Ready in 24hrs</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-medium">100% Free Forever</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-medium">Professional Design</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - Form */}
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Started in 2 Minutes</h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll create your professional website for free.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleFormChange("firstName", e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <Input
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => handleFormChange("lastName", e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="john@business.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleFormChange("email", e.target.value)}
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <Input
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleFormChange("phone", e.target.value)}
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Your Business Name"
                        value={formData.businessName}
                        onChange={(e) => handleFormChange("businessName", e.target.value)}
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => handleFormChange("businessType", e.target.value)}
                        className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select your business type</option>
                        <option value="restaurant">Restaurant / Food Service</option>
                        <option value="service">Service Business</option>
                        <option value="healthcare">Healthcare / Medical</option>
                        <option value="beauty">Beauty / Wellness</option>
                        <option value="professional">Professional Services</option>
                        <option value="retail">Retail / E-commerce</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <Button
                      onClick={handleFormSubmit}
                      className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg text-lg font-medium"
                    >
                      Claim My Free Website →
                    </Button>

                    <div className="flex items-center justify-center space-x-6 text-xs text-gray-500 pt-2">
                      <div className="flex items-center">
                        <Check className="w-3 h-3 text-green-500 mr-1" />
                        No credit card required
                      </div>
                      <div className="flex items-center">
                        <Check className="w-3 h-3 text-green-500 mr-1" />
                        Free forever
                      </div>
                      <div className="flex items-center">
                        <Check className="w-3 h-3 text-green-500 mr-1" />
                        24/7 support
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Benefits & Social Proof */}
                <div className="bg-gray-50 p-8 border-l border-gray-200">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Get:</h3>
                    <div className="space-y-4">
                      {[
                        "Professional website design tailored to your business",
                        "Mobile-optimized and SEO-ready",
                        "Contact forms and business information",
                        "Free hosting and domain setup",
                        "24/7 customer support",
                        "Easy content management",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-white rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-4">Join Successful Businesses:</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-indigo-600">15,000+</div>
                        <div className="text-sm text-gray-600">Websites Created</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">98%</div>
                        <div className="text-sm text-gray-600">Satisfaction Rate</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-3">
                      "My new website has brought in 40% more customers. The process was so easy and completely free!"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        S
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Sarah Johnson</div>
                        <div className="text-sm text-gray-600">Riverside Cafe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Survey Modal */}
      {showSurvey && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="min-h-screen flex items-center justify-center py-20 px-4">
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              {!showResults ? (
                <>
                  {/* Survey Header */}
                  <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-8 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 -translate-y-12"></div>
                      <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-white rounded-full translate-y-20"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h2 className="text-4xl font-bold mb-2">Find Your Perfect Website</h2>
                          <p className="text-white/90 text-lg">
                            Let's match you with the ideal design for your business
                          </p>
                        </div>
                        <button
                          onClick={resetSurvey}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/80">Progress</span>
                          <span className="text-white font-medium">
                            {currentStep + 1} of {surveyQuestions.length}
                          </span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full h-3 transition-all duration-700 ease-out"
                            style={{ width: `${((currentStep + 1) / surveyQuestions.length) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Survey Content */}
                  <div className="p-6">
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {currentQuestion.question}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {currentStep === 0 && "This helps us show you templates designed for your industry"}
                        {currentStep === 1 && "We'll recommend features that work best for your team size"}
                        {currentStep === 2 && "Your main goal helps us prioritize the right features"}
                        {currentStep === 3 && "Select features that are important to your business"}
                        {currentStep === 4 && "This helps us understand your current situation"}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {currentQuestion.options.map((option, index) => (
                        <button
                          key={option.value}
                          onClick={() => handleSurveyAnswer(currentQuestion.id, option.value)}
                          className={`group relative p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                            currentQuestion.type === "multiple-choice"
                              ? (currentAnswer && currentAnswer.includes(option.value))
                                ? "border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg"
                                : "border-gray-200 hover:border-indigo-300 bg-white"
                              : currentAnswer === option.value
                                ? "border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg"
                                : "border-gray-200 hover:border-indigo-300 bg-white"
                          }`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                              {option.icon}
                            </div>
                            <div className="flex-1">
                              <span className="text-lg font-semibold text-gray-900 block">{option.label}</span>
                            </div>
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                (
                                  currentQuestion.type === "multiple-choice" &&
                                    currentAnswer &&
                                    currentAnswer.includes(option.value)
                                ) || (currentQuestion.type === "single-choice" && currentAnswer === option.value)
                                  ? "border-indigo-500 bg-indigo-500"
                                  : "border-gray-300 group-hover:border-indigo-400"
                              }`}
                            >
                              {((currentQuestion.type === "multiple-choice" &&
                                currentAnswer &&
                                currentAnswer.includes(option.value)) ||
                                (currentQuestion.type === "single-choice" && currentAnswer === option.value)) && (
                                <Check className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Footer */}
                  <div className="border-t border-gray-100 p-8 bg-gray-50/50">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white rounded-xl"
                      >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="font-medium">Previous</span>
                      </button>

                      <div className="flex space-x-2">
                        {surveyQuestions.map((_, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentStep
                                ? "bg-indigo-500 w-8"
                                : index < currentStep
                                  ? "bg-green-400"
                                  : "bg-gray-200"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={nextStep}
                        disabled={!canProceed}
                        className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 font-medium"
                      >
                        <span>{currentStep === surveyQuestions.length - 1 ? "Get My Website" : "Next"}</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                /* Filtered Results Page */
                <div>
                  {/* Results Header */}
                  <div className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white p-6 relative overflow-hidden">
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold mb-2">Perfect Matches Found! 🎉</h2>
                      <p className="text-white/90 text-lg">
                        Based on your answers, here are the best website templates for your business
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Filter Summary */}
                    <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Your Requirements:</h3>
                      <div className="flex flex-wrap gap-2">
                        {surveyAnswers[1] && (
                          <Badge className="bg-blue-100 text-blue-800">
                            {surveyQuestions[0].options.find((opt) => opt.value === surveyAnswers[1])?.label}
                          </Badge>
                        )}
                        {surveyAnswers[2] && (
                          <Badge className="bg-green-100 text-green-800">
                            {surveyQuestions[1].options.find((opt) => opt.value === surveyAnswers[2])?.label}
                          </Badge>
                        )}
                        {surveyAnswers[3] && (
                          <Badge className="bg-purple-100 text-purple-800">
                            {surveyQuestions[2].options.find((opt) => opt.value === surveyAnswers[3])?.label}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Filtered Templates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {getFilteredTemplates().map((template) => (
                        <div
                          key={template.id}
                          className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-start space-x-4 mb-4">
                            <Image
                              src={template.image || "/placeholder.svg"}
                              alt={template.name}
                              width={80}
                              height={60}
                              className="rounded-lg shadow-sm"
                            />
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-900 mb-1">{template.name}</h3>
                              <p className="text-gray-600 text-sm mb-2">{template.description}</p>
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-sm font-semibold text-gray-900">4.9</span>
                                </div>
                                <div className="text-green-600 text-sm font-semibold">{template.claimed}+ claimed</div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {template.features.slice(0, 4).map((feature) => (
                              <div key={feature} className="flex items-center text-xs text-gray-600">
                                <Check className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                                <span className="truncate">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <Button
                            onClick={() => {
                              resetSurvey()
                              setShowSqueezePage(true)
                            }}
                            className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                          >
                            Select This Design
                          </Button>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center">
                      <Button
                        onClick={() => {
                          resetSurvey()
                          setShowSqueezePage(true)
                        }}
                        size="lg"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg"
                      >
                        Claim My Free Website Now →
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
          <Button
            onClick={() => setShowSurvey(true)}
            className="bg-gray-900 hover:bg-gray-800 transition-all duration-300"
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
                  onClick={() => setShowSqueezePage(true)}
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

      {/* Before & After Showcase Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0 mb-4">Real Transformations</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See the Difference a Modern Website Makes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our professional website designs transform local businesses and drive real results. Click to
              toggle between before and after.
            </p>
          </div>

          {/* Before/After Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <BeforeAfterCard
                key={caseStudy.id}
                businessName={caseStudy.businessName}
                businessType={caseStudy.businessType}
                onViewDetails={() => {
                  // Navigate to showcase page or open modal
                  window.open("/showcase", "_blank")
                }}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-6 opacity-90">
                Join thousands of local businesses who've grown their customer base with our free professional websites
              </p>
              <Button
                onClick={() => setShowSqueezePage(true)}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Get Your Free Website Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
              Browse our collection of professionally designed websites, each tailored for specific business types. Find
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
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
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
                    <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white backdrop-blur-sm">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{template.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {template.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setShowSqueezePage(true)}
                      className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
                    >
                      Claim Free
                    </Button>
                    <Button variant="outline" size="sm" className="px-4">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see exactly what you need?</h3>
              <p className="text-gray-600 mb-6">
                Our team can customize any template to perfectly match your business needs. Still completely free, still
                ready in 24 hours.
              </p>
              <Button
                onClick={() => setShowSqueezePage(true)}
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white"
              >
                Get Custom Design
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Reviews Section */}
      <section
        id="reviews-section"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl animate-float-modern-1"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30 blur-3xl animate-float-modern-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl animate-float-modern-3"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-200 mb-4">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Real Results from Real Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how local businesses like yours have transformed their online presence and grown their customer base
              with our free websites.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "15,000+", label: "Websites Created", icon: Globe },
              { number: "98%", label: "Customer Satisfaction", icon: Star },
              { number: "24hrs", label: "Average Setup Time", icon: Clock },
              { number: "∞", label: "Ongoing Support", icon: Users },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Single Review Display */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Review Content */}
              <div className="space-y-8">
                <div className="relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  {/* Review Text */}
                  <div className="pl-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 font-medium">
                      "{reviews[currentReview]?.text}"
                    </blockquote>
                  </div>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${reviews[currentReview]?.color} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                  >
                    {reviews[currentReview]?.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{reviews[currentReview]?.name}</div>
                    <div className="text-gray-600">{reviews[currentReview]?.business}</div>
                    <div className="text-sm text-gray-500">{getBusinessCategory(reviews[currentReview]?.business)}</div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center space-x-3 pt-6">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentReview ? "bg-gray-900 w-8" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Website Preview */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-105 transition-all duration-500">
                  {/* Browser Header */}
                  <div className="bg-gray-50 px-4 py-3 flex items-center space-x-2 border-b border-gray-100">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-md px-3 py-2 text-sm text-gray-500 border border-gray-200">
                      {reviews[currentReview]?.business
                        .toLowerCase()
                        .replace(/\s+/g, "")
                        .replace(/[^a-z0-9]/g, "")}
                      .com
                    </div>
                  </div>

                  {/* Website Content */}
                  <div className="p-0">
                    {/* Header */}
                    <div className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
                      <div className="font-bold">{reviews[currentReview]?.business}</div>
                      <div className="hidden md:flex space-x-4 text-sm">
                        <span>Home</span>
                        <span>Services</span>
                        <span>About</span>
                        <span>Contact</span>
                      </div>
                    </div>

                    {/* Hero Section */}
                    <div className={`relative h-40 bg-gradient-to-br ${reviews[currentReview]?.color} bg-opacity-10`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-6">
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            Welcome to {reviews[currentReview]?.business}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            Professional {getBusinessCategory(reviews[currentReview]?.business)} services
                          </p>
                          <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm hover:bg-gray-700 transition-colors">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-0 border-t border-gray-100">
                      <div className="p-4 text-center border-r border-gray-100">
                        <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                        <div className="text-xs font-medium text-gray-800">5-Star Service</div>
                      </div>
                      <div className="p-4 text-center border-r border-gray-100">
                        <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                        <div className="text-xs font-medium text-gray-800">Fast Response</div>
                      </div>
                      <div className="p-4 text-center">
                        <Users className="w-6 h-6 text-green-500 mx-auto mb-2" />
                        <div className="text-xs font-medium text-gray-800">Expert Team</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float-modern-4"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 animate-float-modern-5"></div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join These Success Stories?</h3>
              <p className="text-gray-600 mb-6">
                Get your free professional website and start growing your business today. No technical skills required,
                no hidden costs.
              </p>
              <Button
                onClick={() => setShowSqueezePage(true)}
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white transform hover:scale-105 transition-all duration-300"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
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
                    How It Works
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
