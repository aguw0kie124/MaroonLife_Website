"use client"

import { PhoneMockup } from "./phone-mockup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Apple, Play, Mail, Sparkles, Loader2, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { joinWaitlist, getWaitlistCount } from "@/app/actions/waitlist"

export function Hero() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [waitlistCount, setWaitlistCount] = useState(104)

  useEffect(() => {
    getWaitlistCount().then(setWaitlistCount)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    const result = await joinWaitlist(email, phone || undefined)
    setIsLoading(false)
    
    if (result.success) {
      setIsSubmitted(true)
      setMessage(result.message)
      // Refresh count
      getWaitlistCount().then(setWaitlistCount)
    } else {
      setMessage(result.message)
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle background watermark */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='50' font-size='80' text-anchor='middle' dominant-baseline='middle' fill='%23500000' font-family='serif' font-weight='bold'%3EA%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '400px',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-xl font-bold text-foreground">MaroonLife</span>
        </div>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Join Waitlist
        </Button>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              Your Campus.{" "}
              <span className="text-primary">Live.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl lg:mx-0">
              The ultimate super-app for Aggies. Discover featured events like the big football game, see what&apos;s happening right now, and never wait in line again.
            </p>
            
            {/* Waitlist Form */}
            <div className="mt-10 w-full max-w-md lg:mx-0 mx-auto">
              {isSubmitted ? (
                <div className="flex items-center gap-3 rounded-2xl bg-primary/10 border border-primary/20 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Sparkles className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">You&apos;re on the list!</p>
                    <p className="text-sm text-muted-foreground">We&apos;ll notify you when we launch. Gig &apos;em!</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col gap-3">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="your@tamu.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-14 border-2 border-muted bg-card pl-12 text-base"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="(123) 456-7890 (optional)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-14 border-2 border-muted bg-card pl-12 text-base"
                      />
                    </div>
                    <Button 
                      type="submit"
                      size="lg" 
                      className="h-14 whitespace-nowrap bg-primary px-8 text-primary-foreground hover:bg-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        "Join Waitlist"
                      )}
                    </Button>
                  </div>
                  <p className="text-center text-sm text-muted-foreground lg:text-left">
                    Join <span className="font-semibold text-primary">{waitlistCount}+ Aggies</span> already on the waitlist
                  </p>
                </form>
              )}
            </div>

            {/* Coming Soon badges */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <div className="flex h-12 items-center gap-3 rounded-lg border border-muted bg-muted/30 px-5">
                <Apple className="h-5 w-5 text-muted-foreground" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-normal leading-tight text-muted-foreground">Coming Soon to</span>
                  <span className="text-xs font-semibold leading-tight text-foreground">App Store</span>
                </div>
              </div>
              <div className="flex h-12 items-center gap-3 rounded-lg border border-muted bg-muted/30 px-5">
                <Play className="h-5 w-5 text-muted-foreground" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] font-normal leading-tight text-muted-foreground">Coming Soon to</span>
                  <span className="text-xs font-semibold leading-tight text-foreground">Google Play</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -left-8 -top-8 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />
              
              <PhoneMockup 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screen-N4HioXACnNbCHiaL5VzktQecEK6Ovq.png"
                alt="MaroonLife Events Page showing Texas A&M Football game"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/30">
            <div className="mx-auto mt-1 h-2 w-1 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
