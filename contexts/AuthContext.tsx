"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

type AuthContextType = {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{
    error: Error | null
    data: Session | null
  }>
  signUp: (email: string, password: string) => Promise<{
    error: Error | null
    data: Session | null
  }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for active session on mount
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
      setUser(data.session?.user || null)
      setLoading(false)
    }
    
    getSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        setSession(newSession)
        setUser(newSession?.user || null)
        setLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (response.error) {
      return { error: response.error, data: null }
    }
    
    return { error: null, data: response.data.session }
  }

  const signUp = async (email: string, password: string) => {
    const response = await supabase.auth.signUp({
      email,
      password,
    })
    
    if (response.error) {
      return { error: response.error, data: null }
    }
    
    return { error: null, data: response.data.session }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const value = {
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 