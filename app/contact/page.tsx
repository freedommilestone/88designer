"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Check } from "lucide-react";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormState({
        ...formState,
        submitted: true
      });
    }, 1000);
  };

  return (
    <MainLayout>
      {/* Contact Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our free website service or need assistance? We're here to help!
            </p>
          </div>

          <div className="flex justify-center">
            {/* Contact Form */}
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 animate-fade-up mx-auto">
              {!formState.submitted ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formState.name} 
                          onChange={handleChange} 
                          placeholder="John Smith" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formState.email} 
                          onChange={handleChange} 
                          placeholder="john@example.com" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="text-sm font-medium text-gray-700">Business Name</label>
                      <Input 
                        id="businessName" 
                        name="businessName" 
                        value={formState.businessName} 
                        onChange={handleChange} 
                        placeholder="Your Business Name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formState.message} 
                        onChange={handleChange} 
                        placeholder="Tell us about your website needs or any questions you have" 
                        rows={5} 
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6">
                      Send Message
                    </Button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center space-y-6">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Message Sent!</h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Thank you for reaching out. We've received your message and will get back to you within 1 business day.
                  </p>
                  <Button 
                    onClick={() => setFormState({name: "", email: "", businessName: "", message: "", submitted: false, error: false})}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Brief Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 mb-10">
            Can't find the answer you're looking for? Reach out to our customer support team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How soon can I get my website?</h3>
              <p className="text-gray-600">Most websites are completed within 48 hours of receiving your information.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Is there really no cost for design?</h3>
              <p className="text-gray-600">Yes, the website design is completely free. You only pay the $20/month hosting fee.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What if I'm not satisfied?</h3>
              <p className="text-gray-600">We offer a 60-day money-back guarantee if you're not completely satisfied.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can I use my existing domain?</h3>
              <p className="text-gray-600">Yes, we can use your existing domain at no extra cost.</p>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/#faq">
              <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-50">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Your Free Website?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join the hundreds of local businesses who have upgraded their online presence with our services.
          </p>
          <Link href="/claim">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Free Website
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}