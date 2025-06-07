"use client"

import { useFormContext, Controller } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Info } from "lucide-react"

const websiteFeatures = [
  { id: "online_store", label: "Online Store / E-commerce" },
  { id: "booking_system", label: "Booking / Appointment System" },
  { id: "blog", label: "Blog / News Section" },
  { id: "contact_form", label: "Contact Form" },
  { id: "photo_gallery", label: "Photo Gallery" },
  { id: "social_media", label: "Social Media Integration" },
  { id: "seo", label: "Search Engine Optimization (SEO)" },
  { id: "analytics", label: "Website Analytics" },
]

export default function Step3WebsiteNeeds() {
  const { control } = useFormContext()

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Website Needs</h2>
        <p className="text-gray-600">Tell us what you need in your website so we can create the perfect solution.</p>
      </div>

      <FormField
        control={control}
        name="websiteType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Website Type</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="border-gray-300 bg-white text-gray-900 focus-visible:ring-orange-500">
                  <SelectValue placeholder="Select website type" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="business">Business / Company Website</SelectItem>
                  <SelectItem value="portfolio">Portfolio / Personal Brand</SelectItem>
                  <SelectItem value="ecommerce">Online Store (E-commerce)</SelectItem>
                  <SelectItem value="blog">Blog or Publication</SelectItem>
                  <SelectItem value="service">Service-based Business</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage className="text-red-600" />
          </FormItem>
        )}
      />

      <div className="space-y-3">
        <FormLabel className="text-gray-700">Features You Need</FormLabel>
        <FormDescription className="text-gray-600">
          Select all the features you'd like on your website
        </FormDescription>

        {websiteFeatures.map((feature) => (
          <FormField
            key={feature.id}
            control={control}
            name={`features.${feature.id}`}
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-2 hover:bg-gray-50">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
                  />
                </FormControl>
                <FormLabel className="text-gray-700 font-normal cursor-pointer">
                  {feature.label}
                </FormLabel>
              </FormItem>
            )}
          />
        ))}
      </div>

      <div className="bg-gray-100 rounded-lg p-4 flex items-start border border-gray-200">
        <Info className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
        <div>
          <h4 className="font-medium text-gray-900">Features That Drive Results</h4>
          <p className="text-sm text-gray-600 mt-1">
            Selecting the right features for your website can significantly impact your business success. We'll implement these in a user-friendly way that aligns with current best practices.
          </p>
        </div>
      </div>
    </div>
  )
} 