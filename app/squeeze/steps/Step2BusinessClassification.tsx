"use client"

import { useFormContext } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Info } from "lucide-react"

export default function Step2BusinessClassification() {
  const { control } = useFormContext()

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Business Classification</h2>
        <p className="text-gray-600">Tell us about your business to help us create the perfect website for you.</p>
      </div>

      <FormField
        control={control}
        name="businessName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Business Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your business name"
                {...field}
                className="border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus-visible:ring-orange-500"
              />
            </FormControl>
            <FormMessage className="text-red-600" />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="industry"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Industry</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="border-gray-300 bg-white text-gray-900 focus-visible:ring-orange-500">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="restaurants">Food & Restaurants</SelectItem>
                  <SelectItem value="professional_services">Professional Services</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                  <SelectItem value="construction">Construction & Contracting</SelectItem>
                  <SelectItem value="arts">Arts & Entertainment</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage className="text-red-600" />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="businessDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Business Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Briefly describe what your business does and what makes it unique..."
                className="resize-none min-h-32 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus-visible:ring-orange-500"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-red-600" />
          </FormItem>
        )}
      />

      <div className="bg-gray-100 rounded-lg p-4 flex items-start border border-gray-200">
        <Info className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
        <div>
          <h4 className="font-medium text-gray-900">Why this matters</h4>
          <p className="text-sm text-gray-600 mt-1">
            Understanding your business helps us create a website with the right features, design elements, and industry-specific functionality that will appeal to your target audience.
          </p>
        </div>
      </div>
    </div>
  )
} 