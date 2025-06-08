"use client"

import MainLayout from "@/components/layout/MainLayout"
import { Button } from "@/components/ui/button"

export default function ExamplePage() {
  return (
    <MainLayout>
      {/* Main content goes here */}
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Example Page</h1>
        <p className="text-lg mb-6">
          This is an example page that demonstrates how to use the MainLayout component.
          The header and footer are shared components, so they only need to be updated in one place.
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Example Button
        </Button>
      </main>
    </MainLayout>
  )
} 