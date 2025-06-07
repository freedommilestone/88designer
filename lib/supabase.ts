import { createClient } from '@supabase/supabase-js'

// In a production environment, these would be stored in environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jiihcxskpszelsxluxll.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppaWhjeHNrcHN6ZWxzeGx1eGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwOTMyNzgsImV4cCI6MjA2NDY2OTI3OH0.qBSOqIzMs-yB5uFtEPdqs8FH_T7NvQIN5Kb82N5imnU'

// Create a single instance of the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey)

// Type definitions for database
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
        }
      }
      websites: {
        Row: {
          id: string
          user_id: string
          business_name: string
          business_type: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          business_name: string
          business_type: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          business_name?: string
          business_type?: string
          status?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 