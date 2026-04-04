"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Apple, Play, Mail, Users, Sparkles, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { joinWaitlist, getWaitlistCount } from "@/app/actions/waitlist"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(104)

  useEffect(() => {
    getWaitlistCount().then(setWaitlistCount)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    const result = await joinWaitlist(email)
    setIsLoading(false)
    
    if (result.success) {
      setIsSubmitted(true)
      getWaitlistCount().then(setWaitlistCount)
    }
  }

  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Waitlist Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Join {waitlistCount}+ Aggies on the waitlist</span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Be the first to{" "}
              <span className="underline decoration-primary-foreground/30 decoration-4 underline-offset-4">
                experience it
              </span>
            </h2>
            <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
              MaroonLife is launching soon. Get early access and be among the first Aggies to upgrade your campus experience.
            </p>
            
            {/* Coming Soon badges */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <div className="flex h-14 w-full items-center gap-3 rounded-lg border-2 border-white/20 bg-white/10 px-6 sm:w-auto">
                <Apple className="h-6 w-6 text-white/70" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-normal text-white/70">Coming Soon to</span>
                  <span className="text-sm font-semibold text-white">App Store</span>
                </div>
              </div>
              <div className="flex h-14 w-full items-center gap-3 rounded-lg border-2 border-white/20 bg-white/10 px-6 sm:w-auto">
                <Play className="h-6 w-6 text-white/70" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-normal text-white/70">Coming Soon to</span>
                  <span className="text-sm font-semibold text-white">Google Play</span>
                </div>
              </div>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl bg-white/10 p-8 backdrop-blur-sm">
              {isSubmitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">You&apos;re on the list!</h3>
                  <p className="text-primary-foreground/80">
                    We&apos;ll notify you as soon as MaroonLife launches. Gig &apos;em!
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-2 text-xl font-bold">Join the Waitlist</h3>
                  <p className="mb-6 text-sm text-primary-foreground/70">
                    Enter your email to get early access when we launch.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="your@tamu.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-14 border-0 bg-white pl-12 text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      size="lg" 
                      className="h-14 w-full bg-foreground text-background hover:bg-foreground/90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        "Get Early Access"
                      )}
                    </Button>
                  </form>
                  <p className="mt-4 text-center text-xs text-primary-foreground/50">
                    No spam, just launch updates. Unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 lg:px-20">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <span className="text-lg font-bold text-primary">M</span>
              </div>
              <span className="text-xl font-bold">MaroonLife</span>
            </div>

            {/* Links */}
            <nav className="flex items-center gap-8">
              <a 
                href="#" 
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Contact
              </a>
              <a 
                href="#" 
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              >
                Terms of Service
              </a>
            </nav>

            {/* Copyright */}
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} MaroonLife. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-white/5" />
        <div className="absolute -top-16 right-1/4 h-48 w-48 rounded-full bg-white/5" />
      </div>
    </footer>
  )
}
