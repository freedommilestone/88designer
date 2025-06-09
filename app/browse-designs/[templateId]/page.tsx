"use client"

import React, { useState, useRef, useEffect } from "react"
import { 
  ChevronLeft, 
  Star, 
  ExternalLink, 
  Monitor, 
  Smartphone, 
  Tablet,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Heart,
  Share2,
  ShoppingCart,
  Play,
  Check,
  Eye,
  Users,
  Clock,
  Shield
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MainLayout from "@/components/layout/MainLayout"

// Template data interface
interface TemplateDetail {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  rating: number;
  reviewCount: number;
  salesCount: number;
  features: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  reviews: Array<{
    id: string;
    author: string;
    rating: number;
    date: string;
    content: string;
  }>;
  styles: Array<{
    id: string;
    name: string;
    color: string;
  }>;
}

// Mock data
const getTemplateDetail = (templateId: string): TemplateDetail => {
  return {
    id: templateId,
    name: "Maya Pro",
    price: 79,
    originalPrice: 99,
    description: "A cutting-edge, fully responsive template designed for modern businesses and creative professionals.",
    rating: 4.8,
    reviewCount: 247,
    salesCount: 1543,
    styles: [
      { id: "modern", name: "Modern", color: "#2563EB" },
      { id: "elegant", name: "Elegant", color: "#7C3AED" },
      { id: "minimal", name: "Minimal", color: "#059669" }
    ],
    features: [
      {
        id: "responsive",
        title: "Fully Responsive Design",
        description: "Looks perfect on all devices - desktop, tablet, and mobile"
      },
      {
        id: "ecommerce",
        title: "E-commerce Ready",
        description: "Built-in shopping cart, product pages, and checkout flow"
      },
      {
        id: "portfolio",
        title: "Portfolio Showcase",
        description: "Beautiful galleries and project showcase sections"
      },
      {
        id: "seo",
        title: "SEO Optimized",
        description: "Clean code structure optimized for search engines"
      }
    ],
    reviews: [
      {
        id: "1",
        author: "Sarah Johnson",
        rating: 5,
        date: "2024-01-10",
        content: "Absolutely amazing template! The design is modern and clean, and the customization options are endless."
      },
      {
        id: "2",
        author: "Michael Chen",
        rating: 5,
        date: "2024-01-08",
        content: "Perfect for my agency website. The portfolio sections are exactly what I needed."
      }
    ]
  };
};

export default function TemplateDetailPage({ params }: { params: Promise<{ templateId: string }> }) {
  const unwrappedParams = React.use(params);
  const template = getTemplateDetail(unwrappedParams.templateId);
  
  // State management
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(true);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Device configurations
  const deviceConfigs = {
    desktop: { width: '100%', height: '100%', icon: Monitor },
    tablet: { width: '768px', height: '1024px', icon: Tablet },
    mobile: { width: '375px', height: '667px', icon: Smartphone }
  };

  // Handle preview loading
  useEffect(() => {
    const timer = setTimeout(() => setPreviewLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [selectedStyle]);

  // Handle zoom
  const handleZoom = (direction: 'in' | 'out') => {
    setZoomLevel(prev => {
      const newZoom = direction === 'in' ? prev * 1.2 : prev / 1.2;
      return Math.max(0.5, Math.min(2, newZoom));
    });
  };

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <Link href="/browse-designs" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to templates
            </Link>
          </div>
        </div>

        {/* Main Split-Screen Layout */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Sidebar - Template Details (40% width) */}
          <div 
            className="w-full lg:w-2/5 bg-white border-r border-gray-200 overflow-y-auto"
            style={{ maxHeight: 'calc(100vh - 60px)' }}
          >
            <div className="p-6 space-y-8">
              {/* Header Section */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 mb-2">
                      Business & Corporate
                    </span>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{template.name}</h1>
                    <p className="text-gray-600 text-lg">{template.description}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`p-2 border rounded-md hover:bg-gray-50 ${isWishlisted ? "text-red-500 border-red-500" : "text-gray-400 border-gray-300"}`}
                    >
                      <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                      <Share2 className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-gray-900">
                    {formatPrice(template.price)}
                  </div>
                  {template.originalPrice && (
                    <div className="text-xl text-gray-500 line-through">
                      {formatPrice(template.originalPrice)}
                    </div>
                  )}
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                    20% OFF
                  </span>
                </div>

                {/* Rating and Stats */}
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(template.rating) 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{template.rating}</span>
                    <span className="text-gray-500">({template.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{template.salesCount.toLocaleString()} sales</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium text-lg flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Buy Now - {formatPrice(template.price)}
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2">
                      <Play className="h-4 w-4" />
                      Live Preview
                    </button>
                    <button className="py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2">
                      <Eye className="h-4 w-4" />
                      Quick View
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* Key Features */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
                <div className="space-y-3">
                  {template.features.map((feature) => (
                    <div 
                      key={feature.id} 
                      className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* What's Included */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">What's Included</h2>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Complete source code",
                    "All design assets (PSD/Figma)",
                    "Documentation & setup guide",
                    "6 months of support",
                    "Free updates for 1 year",
                    "Commercial license"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* Customer Reviews */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Customer Reviews</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                </div>
                <div className="space-y-4">
                  {template.reviews.map((review) => (
                    <div key={review.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-600">
                            {review.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900">{review.author}</span>
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                              Verified
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < review.rating 
                                      ? 'text-yellow-400 fill-yellow-400' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-sm text-gray-700">{review.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* Support Info */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Support & License</h2>
                <div className="p-4 border border-gray-200 rounded-lg space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Response time: &lt; 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">Commercial License - Use on unlimited projects</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                      Documentation
                    </button>
                    <button className="flex-1 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                      Get Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Preview (60% width) */}
          <div className="w-full lg:w-3/5 bg-gray-100 relative">
            {/* Preview Controls */}
            <div className="bg-white border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                {/* Device Toggle */}
                <div className="flex items-center gap-2">
                  {Object.entries(deviceConfigs).map(([device, config]) => {
                    const IconComponent = config.icon;
                    return (
                      <button
                        key={device}
                        onClick={() => setDeviceView(device as any)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                          deviceView === device 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span className="hidden sm:inline capitalize">{device}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Style Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Style:</span>
                  {template.styles.map((style, index) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(index)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                        selectedStyle === index 
                          ? 'bg-gray-900 text-white' 
                          : 'bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: style.color }}
                      />
                      {style.name}
                    </button>
                  ))}
                </div>

                {/* Zoom and Fullscreen Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleZoom('out')}
                    disabled={zoomLevel <= 0.5}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <span className="text-sm text-gray-600 min-w-[3rem] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={() => handleZoom('in')}
                    disabled={zoomLevel >= 2}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Area */}
            <div className="relative h-full bg-gray-100 flex items-center justify-center p-4" style={{ minHeight: 'calc(100vh - 120px)' }}>
              {previewLoading ? (
                /* Loading Skeleton */
                <div className="animate-pulse space-y-4 w-full max-w-4xl">
                  <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-64 bg-gray-300 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                  </div>
                </div>
              ) : (
                <div 
                  className={`bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
                    isFullscreen ? 'fixed inset-4 z-50' : ''
                  }`}
                  style={{
                    width: isFullscreen ? '100%' : deviceConfigs[deviceView].width,
                    height: isFullscreen ? '100%' : deviceConfigs[deviceView].height,
                    transform: `scale(${zoomLevel})`,
                    maxWidth: isFullscreen ? 'none' : '100%',
                    maxHeight: isFullscreen ? 'none' : 'calc(100vh - 200px)'
                  }}
                >
                  <iframe
                    ref={iframeRef}
                    src="https://themes.shopify.com/themes/vivid/styles/decora"
                    className="w-full h-full border-0"
                    title={`${template.name} Preview`}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                </div>
              )}

              {/* Fullscreen Close Button */}
              {isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="fixed top-4 right-4 z-50 bg-white p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 