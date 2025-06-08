"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Globe, Mail, MapPin, Phone, Check } from "lucide-react";
import Link from "next/link";

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
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 animate-fade-right">
            <Globe className="h-6 w-6 text-gray-800" />
            <span className="text-xl font-medium text-gray-900">LocalSite</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 animate-fade-up">
            <a href="/#how-it-works" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              How It Works
            </a>
            <a href="/#pricing" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Pricing
            </a>
            <a href="/#features" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Features
            </a>
            <a href="/#faq" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              FAQs
            </a>
            <Link href="/browse-designs" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">
              Browse Designs
            </Link>
            <Link href="/contact" className="text-orange-500 font-medium hover:text-orange-600 transition-all duration-300 hover:scale-105">
              Contact
            </Link>
          </nav>
          <div className="flex justify-center">
            <Link href="/claim">
              <Button
                className="bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Contact Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our free website service or need assistance? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 animate-fade-up">
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

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8 animate-fade-up delay-200">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Our team typically responds within a few hours during business hours.</p>
                <a href="mailto:support@localsite.com" className="text-orange-500 font-medium hover:underline">
                  support@localsite.com
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Available Monday-Friday, 9am-5pm Eastern Time</p>
                <a href="tel:+18005551234" className="text-orange-500 font-medium hover:underline">
                  (800) 555-1234
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Office Location</h3>
                <p className="text-gray-600 mb-4">
                  123 Web Design Street<br />
                  Suite 101<br />
                  San Francisco, CA 94103
                </p>
              </div>
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

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-gray-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-gray-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
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
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.37 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 2.567-2.016 0-1.029.96-1.683 1.68-1.683h2.016c.72 0 1.2.48 1.2 1.2 0 .72-.72.72-1.2.72-1.92l-3.84-4.8c-.72-.72-1.2-.72-1.92 0-1.92h2.016c.72 0 1.2.48 1.2 1.2 0 .72-.72.72-1.2.72-1.92l4.8-6z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <Link href="/browse-designs" className="text-gray-300 hover:text-white transition-colors">
                    Website Templates
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
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
                <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Subscribe</Button>
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
    </main>
  );
}