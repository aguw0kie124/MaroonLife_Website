import { PhoneMockup } from "./phone-mockup"
import { Activity, Clock, TrendingUp } from "lucide-react"

export function LiveOccupancy() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(80,0,0,0.03),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">
              <Activity className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">Live Occupancy Data</span>
            </div>
            
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Know before{" "}
              <span className="text-primary">you go.</span>
            </h2>
            
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Planning a workout or a dining hall run? Check live capacity meters for places like Southside Rec so you never have to fight for a squat rack again.
            </p>

            {/* Feature cards */}
            <div className="mt-10 grid gap-4">
              <div className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Southside Rec</h3>
                      <p className="text-sm text-muted-foreground">Recreation Center</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">23%</p>
                    <p className="text-xs text-muted-foreground">Currently Full</p>
                  </div>
                </div>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[23%] rounded-full bg-green-500 transition-all duration-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Sbisa Dining Hall</h3>
                      <p className="text-sm text-muted-foreground">Dining</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-yellow-600">67%</p>
                    <p className="text-xs text-muted-foreground">Currently Full</p>
                  </div>
                </div>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[67%] rounded-full bg-yellow-500 transition-all duration-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Evans Library</h3>
                      <p className="text-sm text-muted-foreground">Library</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">89%</p>
                    <p className="text-xs text-muted-foreground">Currently Full</p>
                  </div>
                </div>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[89%] rounded-full bg-primary transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -right-4 top-1/4 h-32 w-32 rounded-full bg-green-500/10 blur-2xl" />
              <div className="absolute -left-8 bottom-1/4 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
              
              <PhoneMockup 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rOj5Dxlds73iouGAYv7E9DamZSZ4Zp.png"
                alt="MaroonLife Places showing Southside Recreation Center with live occupancy"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
