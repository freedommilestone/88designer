"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Header } from "../components/Header"

export default function ClaimWebsitePage() {
  const router = useRouter()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h1 className="text-2xl font-bold text-center mb-4">Claim Your Free Website</h1>
            <p className="text-center text-gray-600 mb-8">This form is temporarily undergoing maintenance for mobile optimization.</p>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
              <Button onClick={() => router.push("/")} className="min-h-[48px] px-6">
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
