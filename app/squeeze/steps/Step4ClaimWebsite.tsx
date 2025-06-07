"use client"

import { useFormContext } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Info, ShieldCheck } from "lucide-react"

export default function Step4ClaimWebsite() {
  const { control } = useFormContext()

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Claim Your Website</h2>
        <p className="text-gray-600">Just a few more details and your free professional website will be on its way!</p>
      </div>

      <FormField
        control={control}
        name="domainName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Preferred Domain Name</FormLabel>
            <FormDescription className="text-gray-600">
              If you already have a domain name or have one in mind
            </FormDescription>
            <FormControl>
              <Input
                placeholder="yourbusiness.com"
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
        name="additionalInfo"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700">Any Additional Information</FormLabel>
            <FormDescription className="text-gray-600">
              Tell us any specific requirements or questions you have
            </FormDescription>
            <FormControl>
              <Textarea
                placeholder="I'd like my website to include... I have a question about..."
                className="resize-none min-h-24 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus-visible:ring-orange-500"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-red-600" />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="termsAccepted"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-gray-700 font-normal cursor-pointer">
                I agree to the <a href="#" className="text-orange-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-orange-600 hover:underline">Privacy Policy</a>
              </FormLabel>
            </div>
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div className="flex items-center p-3 bg-gray-100 rounded-lg border border-gray-200">
          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
          <span className="text-sm text-gray-700">Free Website Setup</span>
        </div>
        <div className="flex items-center p-3 bg-gray-100 rounded-lg border border-gray-200">
          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
          <span className="text-sm text-gray-700">Custom Design</span>
        </div>
        <div className="flex items-center p-3 bg-gray-100 rounded-lg border border-gray-200">
          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
          <span className="text-sm text-gray-700">Mobile Optimization</span>
        </div>
        <div className="flex items-center p-3 bg-gray-100 rounded-lg border border-gray-200">
          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
          <span className="text-sm text-gray-700">SEO-Friendly</span>
        </div>
      </div>

      <div className="bg-orange-50 rounded-lg p-4 flex items-start border border-orange-100 mt-4">
        <ShieldCheck className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
        <div>
          <h4 className="font-medium text-gray-900">Ready to claim your free website?</h4>
          <p className="text-sm text-gray-700 mt-1">
            Submit your request now and our team will start working on your custom website immediately. We'll contact you within 24 hours to discuss your specific needs.
          </p>
        </div>
      </div>
    </div>
  )
} 