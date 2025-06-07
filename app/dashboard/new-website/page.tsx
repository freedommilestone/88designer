'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/lib/AuthContext'
import { websiteApi } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Globe, AlertCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const businessTypes = [
  { value: 'restaurant', label: 'Restaurant & Food Service' },
  { value: 'retail', label: 'Retail & Shopping' },
  { value: 'health', label: 'Health & Wellness' },
  { value: 'professional', label: 'Professional Services' },
  { value: 'construction', label: 'Construction & Home Services' },
  { value: 'beauty', label: 'Beauty & Personal Care' },
  { value: 'other', label: 'Other' },
]

export default function NewWebsitePage() {
  const { user } = useAuthContext()
  const router = useRouter()
  const [businessName, setBusinessName] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user) {
      setError('You must be logged in to create a website')
      return
    }
    
    if (!businessName || !businessType) {
      setError('Please fill in all required fields')
      return
    }
    
    setError(null)
    setIsLoading(true)
    
    try {
      await websiteApi.createWebsite({
        user_id: user.id,
        business_name: businessName,
        business_type: businessType,
        status: 'draft',
      })
      
      router.push('/dashboard')
    } catch (err) {
      console.error('Error creating website:', err)
      setError('Failed to create website. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold text-gray-900">
            <Globe className="h-6 w-6 text-blue-600" />
            <span>88 Web Designs</span>
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          
          <h1 className="text-2xl font-bold text-gray-900">Create a New Website</h1>
        </div>
        
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Website Details</CardTitle>
            <CardDescription>Enter the basic information about your business</CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="business-name">Business Name</Label>
                <Input
                  id="business-name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Your Business Name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="business-type">Business Type</Label>
                <Select
                  value={businessType}
                  onValueChange={setBusinessType}
                >
                  <SelectTrigger id="business-type">
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Creating...' : 'Create Website'}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  )
} 