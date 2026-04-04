"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function joinWaitlist(email: string, phone?: string) {
  const supabase = await createClient()
  
  // Normalize phone number (remove non-digits except +)
  const normalizedPhone = phone ? phone.replace(/[^\d+]/g, "") : null
  
  // Check if email already exists
  const { data: existing } = await supabase
    .from("waitlist")
    .select("id")
    .eq("email", email.toLowerCase())
    .single()
  
  if (existing) {
    // Update phone if provided and user already exists
    if (normalizedPhone) {
      await supabase
        .from("waitlist")
        .update({ phone: normalizedPhone })
        .eq("email", email.toLowerCase())
    }
    return { success: true, message: "You're already on the waitlist!" }
  }
  
  // Insert new entry
  const { error } = await supabase
    .from("waitlist")
    .insert({ 
      email: email.toLowerCase(),
      phone: normalizedPhone
    })
  
  if (error) {
    console.error("Waitlist error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
  
  revalidatePath("/")
  return { success: true, message: "You're on the list!" }
}

import { unstable_noStore as noStore } from "next/cache"

export async function getWaitlistCount() {
  noStore()
  const supabase = await createClient()
  
  const { data: count, error } = await supabase.rpc('get_waitlist_count')
  
  console.log("WAITLIST DEBUG - DB Count Response:", { count, error })

  if (error) {
    console.error("Count error:", error)
    return 67 // Fallback to default
  }
  
  return (count || 0) + 67 // Add baseline count
}
