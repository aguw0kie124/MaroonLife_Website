"use server"

import { createClient } from "@/lib/supabase/server"

export async function joinWaitlist(email: string) {
  const supabase = await createClient()
  
  // Check if email already exists
  const { data: existing } = await supabase
    .from("waitlist")
    .select("id")
    .eq("email", email.toLowerCase())
    .single()
  
  if (existing) {
    return { success: true, message: "You're already on the waitlist!" }
  }
  
  // Insert new email
  const { error } = await supabase
    .from("waitlist")
    .insert({ email: email.toLowerCase() })
  
  if (error) {
    console.error("Waitlist error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
  
  return { success: true, message: "You're on the list!" }
}

export async function getWaitlistCount() {
  const supabase = await createClient()
  
  const { count, error } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true })
  
  if (error) {
    console.error("Count error:", error)
    return 104 // Fallback to default
  }
  
  return (count || 0) + 104 // Add baseline count
}
