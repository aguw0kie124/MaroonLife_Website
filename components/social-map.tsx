import { PhoneMockup } from "./phone-mockup"
import { MapPin, Bell, Users } from "lucide-react"

export function SocialMap() {
  return (
    <section className="relative overflow-hidden bg-card py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(80,0,0,0.03),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative ping indicators */}
              <div className="absolute -left-4 top-1/4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                <div className="h-4 w-4 animate-ping rounded-full bg-green-500" />
              </div>
              <div className="absolute -right-8 top-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <div className="h-3 w-3 animate-ping rounded-full bg-primary animation-delay-300" />
              </div>
              <div className="absolute -left-2 bottom-1/3 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20">
                <div className="h-2 w-2 animate-ping rounded-full bg-yellow-500 animation-delay-500" />
              </div>
              
              <PhoneMockup 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fOQ35V1PhSEzNzAc1ONpulQU7vCU2D.png"
                alt="MaroonLife Pulse Map showing live campus activity"
                className="relative z-10"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Live Campus Pulse</span>
            </div>
            
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              The Word on{" "}
              <span className="text-primary">the Street.</span>
            </h2>
            
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Check the map to see the true &quot;Pulse&quot; of campus. Real-time &quot;Pings&quot; let you know exactly where the free food, study groups, and pop-ups are dropping right this second.
            </p>

            {/* Feature list */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
                  <Bell className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Real-time Pings</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    See live notifications from students about free food, events, and activities
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Student-Powered</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Crowdsourced updates from your fellow Aggies keep you in the loop
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Campus-Wide Coverage</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Every building, every event, every opportunity mapped in real-time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
