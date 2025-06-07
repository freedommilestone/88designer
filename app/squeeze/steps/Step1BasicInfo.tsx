"use client"

import { useFormContext } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Info } from "lucide-react"

export default function Step1BasicInfo() {
  const { control } = useFormContext()
  
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Tell us about yourself</h2>
        <p className="text-gray-600">We'll use this information to set up your account and tailor your website.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          control={control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your first name"
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
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your last name"
                  {...field}
                  className="border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus-visible:ring-orange-500"
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Email Address</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="you@example.com"
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
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Phone Number</FormLabel>
            <FormControl>
              <Input
                type="tel"
                placeholder="(123) 456-7890"
                {...field}
                className="border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus-visible:ring-orange-500"
              />
            </FormControl>
            <FormMessage className="text-red-600" />
          </FormItem>
        )}
      />
      
      <div className="bg-gray-100 rounded-lg p-4 flex items-start border border-gray-200">
        <Info className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
        <div>
          <h4 className="font-medium text-gray-900">Why we need this information</h4>
          <p className="text-sm text-gray-600 mt-1">
            We use your contact details to set up your account and keep you updated about your website progress. 
            Your information is secure and will never be shared with third parties.
          </p>
        </div>
      </div>
    </div>
  )
} 