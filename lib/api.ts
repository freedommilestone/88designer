import { supabase, Database } from './supabase'

// Types
export type Website = Database['public']['Tables']['websites']['Row']
export type WebsiteInsert = Database['public']['Tables']['websites']['Insert']
export type WebsiteUpdate = Database['public']['Tables']['websites']['Update']

export type User = Database['public']['Tables']['users']['Row']

// Websites API
export const websiteApi = {
  // Get all websites for a user
  getWebsites: async (userId: string) => {
    const { data, error } = await supabase
      .from('websites')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching websites:', error)
      throw error
    }
    
    return data
  },
  
  // Get a single website by ID
  getWebsite: async (websiteId: string) => {
    const { data, error } = await supabase
      .from('websites')
      .select('*')
      .eq('id', websiteId)
      .single()
    
    if (error) {
      console.error('Error fetching website:', error)
      throw error
    }
    
    return data
  },
  
  // Create a new website
  createWebsite: async (website: WebsiteInsert) => {
    const { data, error } = await supabase
      .from('websites')
      .insert(website)
      .select()
      .single()
    
    if (error) {
      console.error('Error creating website:', error)
      throw error
    }
    
    return data
  },
  
  // Update a website
  updateWebsite: async (websiteId: string, updates: WebsiteUpdate) => {
    const { data, error } = await supabase
      .from('websites')
      .update(updates)
      .eq('id', websiteId)
      .select()
      .single()
    
    if (error) {
      console.error('Error updating website:', error)
      throw error
    }
    
    return data
  },
  
  // Delete a website
  deleteWebsite: async (websiteId: string) => {
    const { error } = await supabase
      .from('websites')
      .delete()
      .eq('id', websiteId)
    
    if (error) {
      console.error('Error deleting website:', error)
      throw error
    }
    
    return true
  }
}

// Users API
export const userApi = {
  // Get user profile
  getUserProfile: async (userId: string) => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()
    
    if (error) {
      console.error('Error fetching user profile:', error)
      throw error
    }
    
    return data
  },
  
  // Create or update user profile
  upsertUserProfile: async (userProfile: Partial<User>) => {
    const { data, error } = await supabase
      .from('users')
      .upsert(userProfile)
      .select()
      .single()
    
    if (error) {
      console.error('Error upserting user profile:', error)
      throw error
    }
    
    return data
  }
} 