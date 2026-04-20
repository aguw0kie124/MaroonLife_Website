"use client"

import { Button } from "@/components/ui/button"
import { Apple, ArrowRight, Play, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Launch Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Live now on the App Store</span>
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Your campus app is{" "}
              <span className="underline decoration-primary-foreground/30 decoration-4 underline-offset-4">
                officially here
              </span>
            </h2>
            <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
              MaroonLife is now available on the App Store. Download it today and keep an eye out for the Google Play release soon.
            </p>
            
            {/* Store badges */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <div className="flex h-14 w-full items-center gap-3 rounded-lg border-2 border-white/25 bg-white/15 px-6 sm:w-auto">
                <Apple className="h-6 w-6 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-normal text-white/70">Available Now on</span>
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

          {/* Launch CTA */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl bg-white/10 p-8 backdrop-blur-sm">
              <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
                  Download Today
                </p>
                <h3 className="mt-3 text-2xl font-bold">Take MaroonLife with you.</h3>
                <p className="mt-3 text-primary-foreground/80">
                  Discover events, monitor campus activity, and stay plugged into Aggie life from your phone.
                </p>
                <Button
                  size="lg"
                  className="mt-6 h-14 w-full bg-foreground text-background hover:bg-foreground/90"
                >
                  Download on the App Store
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="mt-4 text-center text-sm text-primary-foreground/60">
                  Android release coming soon on Google Play.
                </p>
              </div>
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
