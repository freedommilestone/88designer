"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Gift, Award, HelpCircle } from "lucide-react";
import { CheckoutButton } from '@/components/checkout/CheckoutButton';

// Define the pricing plans
const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: 0,
    description: "Free starter website for small businesses",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Basic contact form",
      "Domain connection",
      "Standard template design",
    ],
    popular: false,
    cta: "Get Started",
    product: {
      id: "basic-plan",
      name: "Basic Website Plan",
      price: 0,
      description: "Free starter website for small businesses",
    }
  },
  {
    id: "premium",
    name: "Premium",
    price: 19.99,
    description: "Professional website with enhanced features",
    features: [
      "Multi-page website (up to 5 pages)",
      "Custom branding",
      "SEO optimization",
      "Analytics integration",
      "Contact form with custom fields",
      "Social media integration",
      "Priority support",
    ],
    popular: true,
    cta: "Checkout Now",
    product: {
      id: "premium-plan",
      name: "Premium Website Plan",
      price: 19.99,
      description: "Professional website with enhanced features",
    }
  },
  {
    id: "business",
    name: "Business",
    price: 49.99,
    description: "Complete online presence for established businesses",
    features: [
      "Multi-page website (up to 10 pages)",
      "Custom design & branding",
      "E-commerce integration",
      "Advanced SEO optimization",
      "Content management system",
      "Newsletter integration",
      "Advanced analytics dashboard",
      "Social media management",
      "24/7 priority support",
    ],
    popular: false,
    cta: "Checkout Now",
    product: {
      id: "business-plan",
      name: "Business Website Plan",
      price: 49.99,
      description: "Complete online presence for established businesses",
    }
  },
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="block">Simple, Transparent Pricing</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include hosting, maintenance, and customer support.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`flex flex-col h-full transition-all duration-200 hover:shadow-xl ${
                plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              <CardHeader className="pb-8">
                {plan.popular && (
                  <Badge className="self-start mb-2 bg-blue-500 hover:bg-blue-600">
                    <Zap className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-1 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {plan.price === 0 ? 'Free' : `$${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="ml-1 text-xl font-semibold text-gray-500">/mo</span>
                  )}
                </div>
                <CardDescription className="mt-2 text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-6">
                {plan.price === 0 ? (
                  <button
                    className="w-full py-3 px-4 rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    onClick={() => window.location.href = '/squeeze'}
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <CheckoutButton
                    products={[plan.product]}
                    text={plan.cta}
                    className="w-full py-3 px-4 rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  />
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Have Questions?</h2>
          <p className="mt-2 text-lg text-gray-600">
            We're here to help. <a href="/contact" className="text-blue-600 hover:underline">Contact our team</a> or check our <a href="/faq" className="text-blue-600 hover:underline">FAQ page</a>.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center text-gray-500">
              <HelpCircle className="h-5 w-5 mr-2" />
              <span>Need a custom solution? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> for a personalized quote.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
