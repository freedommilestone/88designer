'use client'

import { useEffect, useState } from 'react'
import { useAuthContext } from '@/lib/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, LogOut } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { user, signOut, loading } = useAuthContext()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold text-gray-900">
            <Globe className="h-6 w-6 text-blue-600" />
            <span>88 Web Designs</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {user?.email}
            </span>
            <Button variant="outline" size="sm" onClick={() => signOut()}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Welcome, {user?.email?.split('@')[0]}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                This is your dashboard where you can manage your websites and account.
              </p>
              <Button asChild>
                <Link href="/dashboard/new-website">
                  Create a New Website
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">User ID:</span>
                  <span className="font-mono text-sm">{user?.id.substring(0, 8)}...</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span>{user?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-green-600">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 