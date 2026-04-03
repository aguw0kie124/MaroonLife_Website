import { Button } from "@/components/ui/button"
import { Apple, Play, QrCode } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Upgrade your{" "}
              <span className="underline decoration-primary-foreground/30 decoration-4 underline-offset-4">
                Maroon Life
              </span>
            </h2>
            <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
              Join thousands of Aggies who are already living smarter on campus.
            </p>
            
            {/* Download buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button 
                size="lg" 
                className="h-14 w-full gap-3 bg-white px-6 text-primary hover:bg-white/90 sm:w-auto"
              >
                <Apple className="h-6 w-6" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-normal opacity-80">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 w-full gap-3 border-2 border-white bg-transparent px-6 text-white hover:bg-white hover:text-primary sm:w-auto"
              >
                <Play className="h-6 w-6" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-normal opacity-80">Get it on</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </Button>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/10 p-8 backdrop-blur-sm">
              <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-white">
                <QrCode className="h-32 w-32 text-primary" />
              </div>
              <p className="text-sm text-primary-foreground/80">Scan to download</p>
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
