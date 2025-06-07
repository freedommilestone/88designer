"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SqueezePage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/claim-website")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting to claim website form...</p>
    </div>
  )
} 