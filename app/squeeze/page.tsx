"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, CheckCircle, Shield } from "lucide-react"
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Header } from "../components/Header"
import Step1BasicInfo from "./steps/Step1BasicInfo"
import Step2BusinessClassification from "./steps/Step2BusinessClassification"
import Step3WebsiteNeeds from "./steps/Step3WebsiteNeeds"
import Step4ClaimWebsite from "./steps/Step4ClaimWebsite"
import { supabase } from "@/lib/supabase"

// Form schema validation
const formSchema = z.object({
  // Step 1: Basic Information
  businessName: z.string().min(2, { message: "Business name is required" }),
  ownerName: z.string().min(2, { message: "Owner name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  
  // Step 2: Business Classification
  industry: z.string().min(1, { message: "Please select your industry" }),
  yearsInBusiness: z.string().min(1, { message: "Please select years in business" }),
  currentWebsite: z.string().min(1, { message: "Please select your current website status" }),
  employees: z.string().min(1, { message: "Please select number of employees" }),
  
  // Step 3: Website Needs
  primaryGoal: z.string().min(1, { message: "Please select a primary goal" }),
  features: z.array(z.string()).min(1, { message: "Please select at least one feature" }),
  designStyle: z.string().min(1, { message: "Please select a design style" }),
  colorPreferences: z.string().optional(),
  
  // Step 4: Free Website Claim
  scheduledCall: z.boolean().optional(),
  callDateTime: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  }),
})

type FormValues = z.infer<typeof formSchema>

const steps = [
  { id: 1, name: "Basic Information" },
  { id: 2, name: "Business Profile" },
  { id: 3, name: "Website Requirements" },
  { id: 4, name: "Claim Your Website" },
]

export default function SqueezePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      ownerName: "",
      email: "",
      phone: "",
      industry: "",
      yearsInBusiness: "",
      currentWebsite: "",
      employees: "",
      primaryGoal: "",
      features: [],
      designStyle: "",
      colorPreferences: "",
      scheduledCall: false,
      callDateTime: "",
      termsAccepted: false,
    },
    mode: "onChange"
  })
  
  const { handleSubmit, trigger, formState } = methods
  
  const onSubmit = async (data: FormValues) => {
    if (currentStep < steps.length) {
      handleNext()
    } else {
      // Final submission
      setIsSubmitting(true)
      setSubmitError(null)
      
      try {
        // Save the form data to Supabase
        const { error } = await supabase
          .from('website_requests')
          .insert([
            {
              business_name: data.businessName,
              owner_name: data.ownerName,
              email: data.email,
              phone: data.phone,
              industry: data.industry,
              years_in_business: data.yearsInBusiness,
              current_website: data.currentWebsite,
              employees: data.employees,
              primary_goal: data.primaryGoal,
              features: data.features,
              design_style: data.designStyle,
              color_preferences: data.colorPreferences || null,
              scheduled_call: data.scheduledCall,
              call_date_time: data.callDateTime || null,
              status: 'new',
              created_at: new Date().toISOString()
            }
          ])
        
        if (error) {
          console.error('Error submitting form:', error)
          setSubmitError('There was an error submitting your request. Please try again.')
          setIsSubmitting(false)
          return
        }
        
        console.log("Form submitted successfully:", data)
        window.location.href = "/squeeze/confirmation"
      } catch (err) {
        console.error('Unexpected error:', err)
        setSubmitError('An unexpected error occurred. Please try again.')
        setIsSubmitting(false)
      }
    }
  }
  
  const handleNext = async () => {
    // Validate the fields in the current step before moving to the next
    const fieldsToValidate = getFieldsToValidate(currentStep)
    const isStepValid = await trigger(fieldsToValidate as any)
    
    if (isStepValid) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }
  }
  
  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }
  
  // Get fields to validate based on current step
  const getFieldsToValidate = (step: number) => {
    switch (step) {
      case 1:
        return ["businessName", "ownerName", "email", "phone"]
      case 2:
        return ["industry", "yearsInBusiness", "currentWebsite", "employees"]
      case 3:
        return ["primaryGoal", "features", "designStyle"]
      case 4:
        return ["termsAccepted"]
      default:
        return []
    }
  }
  
  // Calculate progress percentage
  const progress = (currentStep / steps.length) * 100
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto max-w-7xl py-12 px-4">
        <div className="max-w-3xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-32 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-orange-700/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -right-32 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="text-center mb-10 animate-fade-in-up">
            <Badge className="bg-orange-500 text-white hover:bg-orange-600 border-0 mb-4">Free Website Offer</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Claim Your Professional Website</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete this short questionnaire and we'll build you a professional website tailored to your business.
            </p>
          </div>
          
          {/* Step indicator and progress */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <p className="text-sm font-medium text-gray-700">
                Step {currentStep} of {steps.length}: {steps[currentStep - 1].name}
              </p>
              <p className="text-sm font-medium text-gray-500">
                {Math.round(progress)}% complete
              </p>
            </div>
            <Progress value={progress} className="h-2 bg-gray-100 [&>div]:bg-orange-500" />
          </div>
          
          {/* Form card */}
          <Card className="border border-gray-200 bg-white shadow-lg animate-fade-in-scale relative overflow-hidden">
            <CardHeader className="pb-0">
              <div className="absolute top-4 right-4 flex items-center space-x-1">
                <Shield className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-500">Secure Form</span>
              </div>
            </CardHeader>
            
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="pt-6 pb-2">
                  {currentStep === 1 && <Step1BasicInfo />}
                  {currentStep === 2 && <Step2BusinessClassification />}
                  {currentStep === 3 && <Step3WebsiteNeeds />}
                  {currentStep === 4 && <Step4ClaimWebsite />}
                  
                  {submitError && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                      {submitError}
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="flex justify-between pt-2 pb-6 px-6">
                  {currentStep > 1 ? (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handlePrevious}
                      className="px-4 py-2 h-auto border-gray-300 text-gray-700 hover:bg-gray-50"
                      disabled={isSubmitting}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  <Button 
                    type={currentStep === steps.length ? "submit" : "button"}
                    onClick={currentStep === steps.length ? undefined : handleNext}
                    className="px-4 py-2 h-auto bg-orange-600 hover:bg-orange-700 text-white"
                    disabled={isSubmitting}
                  >
                    {currentStep === steps.length ? (
                      isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Claim Your Free Website
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </>
                      )
                    ) : (
                      <>
                        Continue to Step {currentStep + 1}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </FormProvider>
          </Card>
          
          {/* Trust badges */}
          <div className="mt-8 flex justify-center space-x-6">
            <div className="flex items-center text-gray-500 text-sm">
              <Shield className="h-4 w-4 mr-2" />
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
