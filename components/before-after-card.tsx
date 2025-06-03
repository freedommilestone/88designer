"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Phone, Shield, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BeforeAfterCardProps {
  businessName: string
  businessType: string
  businessImage?: string
  onViewDetails?: () => void
}

export default function BeforeAfterCard({
  businessName = "Altitude Roofing",
  businessType = "Professional Roofing Services",
  businessImage,
  onViewDetails,
}: BeforeAfterCardProps) {
  const [isAfter, setIsAfter] = useState(false)

  const toggleView = () => {
    setIsAfter(!isAfter)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 relative">
        <div className="flex justify-between items-center">
          <div>
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-0">Before & After</Badge>
            <h3 className="text-xl font-bold text-white mt-2">{businessName}</h3>
            <p className="text-blue-100">{businessType}</p>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            ))}
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-white rounded-full p-1 shadow-lg flex">
            <button
              onClick={() => setIsAfter(false)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAfter ? "bg-red-500 text-white" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setIsAfter(true)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                isAfter ? "bg-green-500 text-white" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              After
            </button>
          </div>
        </div>
      </div>

      {/* Website Preview */}
      <div className="relative h-[300px] overflow-hidden">
        {/* Browser Chrome */}
        <div className="bg-gray-100 px-3 py-2 border-b flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-white rounded-md px-2 py-1 text-xs text-gray-600 border">www.altituderoofs.com</div>
          </div>
        </div>

        {/* Before Version */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            isAfter ? "opacity-0 transform translate-x-full" : "opacity-100 transform translate-x-0"
          }`}
        >
          <div className="h-full bg-gradient-to-b from-gray-200 to-gray-300 p-4">
            {/* Old Header */}
            <div className="bg-blue-800 text-white p-3 mb-3 rounded">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold">ALTITUDE ROOFING</h1>
                <div className="text-xs">
                  <div>Call: (555) 123-4567</div>
                </div>
              </div>
            </div>

            {/* Old Content */}
            <div className="bg-white p-3 rounded shadow-sm mb-3">
              <h2 className="text-md font-bold mb-2 text-blue-800">Welcome to Altitude Roofing</h2>
              <p className="text-sm text-gray-700 mb-2">
                We are a roofing company that has been serving the community for over 15 years.
              </p>
              <p className="text-sm text-gray-700 mb-2">Our services include:</p>
              <ul className="list-disc list-inside text-xs text-gray-700 mb-2">
                <li>Roof Repairs</li>
                <li>Roof Replacements</li>
                <li>New Roof Installation</li>
              </ul>
            </div>

            {/* Old Contact Section */}
            <div className="bg-yellow-100 p-2 rounded border-l-4 border-yellow-500 text-xs">
              <h3 className="font-bold text-sm mb-1">Contact Us Today!</h3>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@altituderoofs.com</p>
            </div>
          </div>
        </div>

        {/* After Version */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            isAfter ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-full"
          }`}
        >
          <div className="h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-y-auto">
            {/* Modern Header */}
            <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-10">
              <div className="px-3 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                      <Shield className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h1 className="text-sm font-bold">Altitude Roofing</h1>
                      <p className="text-xs text-blue-200">Professional Excellence</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs h-7 px-2">
                    <Phone className="h-3 w-3 mr-1" />
                    Call Now
                  </Button>
                </div>
              </div>
            </header>

            {/* Modern Hero */}
            <section className="relative py-4 px-3">
              <div className="text-center">
                <h1 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Premium Roofing Solutions
                </h1>
                <p className="text-xs text-gray-300 mb-3 max-w-xs mx-auto">
                  Protecting your home with superior craftsmanship and premium materials.
                </p>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">
                  Get Free Estimate
                </Button>
              </div>
            </section>

            {/* Modern Stats */}
            <section className="py-3 px-3 bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-sm font-bold text-blue-400">500+</div>
                  <div className="text-xs text-gray-300">Projects</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-400">15+</div>
                  <div className="text-xs text-gray-300">Years</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-400">4.9</div>
                  <div className="text-xs text-gray-300 flex items-center justify-center">
                    <Star className="h-2 w-2 text-yellow-400 mr-1" />
                    Rating
                  </div>
                </div>
              </div>
            </section>

            {/* Modern Services */}
            <section className="py-3 px-3">
              <div className="text-center mb-2">
                <h2 className="text-sm font-bold">Our Services</h2>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: Shield, title: "Repairs" },
                  { icon: Award, title: "Installation" },
                  { icon: Phone, title: "24/7 Service" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-2 hover:bg-white/15 transition-all duration-300 text-center"
                  >
                    <service.icon className="h-4 w-4 text-blue-400 mx-auto mb-1" />
                    <h3 className="text-xs font-medium">{service.title}</h3>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">Website Transformation</div>
            <div className="text-xs text-gray-500">Click to toggle view</div>
          </div>
          <Button
            onClick={toggleView}
            variant="outline"
            size="sm"
            className="text-blue-600 border-blue-200 hover:bg-blue-50"
          >
            {isAfter ? "View Before" : "View After"}
          </Button>
        </div>

        {/* Results */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-sm font-semibold text-green-600">+300%</div>
              <div className="text-xs text-gray-500">More Leads</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-blue-600">+200%</div>
              <div className="text-xs text-gray-500">Mobile Traffic</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-purple-600">+150%</div>
              <div className="text-xs text-gray-500">Conversions</div>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <Button
          onClick={onViewDetails}
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        >
          View Full Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
