import { PhoneMockup } from "./phone-mockup"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

export function Hero() {
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
            
            {/* Coming Soon badges */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <div className="flex h-14 w-full items-center gap-3 rounded-lg border-2 border-muted bg-muted/50 px-6 sm:w-auto">
                <Apple className="h-6 w-6 text-muted-foreground" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-normal text-muted-foreground">Coming Soon to</span>
                  <span className="text-sm font-semibold text-foreground">App Store</span>
                </div>
              </div>
              <div className="flex h-14 w-full items-center gap-3 rounded-lg border-2 border-muted bg-muted/50 px-6 sm:w-auto">
                <Play className="h-6 w-6 text-muted-foreground" />
                <div className="flex flex-col items-start">
                  <span className="text-xs font-normal text-muted-foreground">Coming Soon to</span>
                  <span className="text-sm font-semibold text-foreground">Google Play</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">104+</p>
                <p className="text-sm text-muted-foreground">Aggies on Waitlist</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Events Indexed</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">Beta</p>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
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
