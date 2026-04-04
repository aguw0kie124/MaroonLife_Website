"use client"

import { PhoneMockup } from "./phone-mockup"
import { Activity, UtensilsCrossed, Bus, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"

const features = [
  {
    id: "rec",
    badge: "Live Occupancy",
    badgeColor: "bg-green-500/10 text-green-600",
    icon: Activity,
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
    title: "Rec Centers",
    description: "Check real-time capacity at Southside Rec, Student Rec Center, and more. Never wait in line for a squat rack again.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rOj5Dxlds73iouGAYv7E9DamZSZ4Zp.png",
    imageAlt: "MaroonLife showing Southside Recreation Center with 23% live occupancy",
    stats: [
      { label: "Southside Rec", value: "23%", color: "text-green-600", barColor: "bg-green-500", barWidth: "w-[23%]" },
      { label: "Student Rec", value: "45%", color: "text-yellow-600", barColor: "bg-yellow-500", barWidth: "w-[45%]" },
    ]
  },
  {
    id: "libraries",
    badge: "Live Occupancy",
    badgeColor: "bg-blue-500/10 text-blue-600",
    icon: BookOpen,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    title: "Libraries",
    description: "Find the perfect study spot. See live occupancy data for Evans Library, Annex, and all campus libraries.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rOj5Dxlds73iouGAYv7E9DamZSZ4Zp.png",
    imageAlt: "MaroonLife showing library occupancy data",
    stats: [
      { label: "Evans Library", value: "72%", color: "text-yellow-600", barColor: "bg-yellow-500", barWidth: "w-[72%]" },
      { label: "Annex", value: "34%", color: "text-green-600", barColor: "bg-green-500", barWidth: "w-[34%]" },
    ]
  },
  {
    id: "dining",
    badge: "Live Menus",
    badgeColor: "bg-primary/10 text-primary",
    icon: UtensilsCrossed,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Dining Halls",
    description: "Browse live menus with nutrition info before you walk over. See what's cooking at The Commons, Sbisa, and all campus dining halls.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gsoHMhm80qKtAEyR2fj8MaK4VfYWjo.png",
    imageAlt: "MaroonLife showing The Commons Dining Hall live menu with Beef Fajitas",
    menuItems: [
      { station: "Homestyle", items: "Beef Fajitas, Fresh Cilantro...", count: 7 },
      { station: "Innovate", items: "Acai Berry Puree Mix...", count: 19 },
    ]
  },
  {
    id: "buses",
    badge: "Live Routes",
    badgeColor: "bg-cyan-500/10 text-cyan-600",
    icon: Bus,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600",
    title: "Bus Routes",
    description: "Navigate campus with ease. View all Aggie Spirit bus routes, track buses in real-time, and plan your commute.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IqgERG4WEFdgQqZkmWR47m5TBVJGWM.png",
    imageAlt: "MaroonLife showing campus bus routes map with all transit lines",
    routes: [
      { name: "Route 01", color: "bg-red-500" },
      { name: "Route 03", color: "bg-cyan-400" },
      { name: "Route 05", color: "bg-yellow-500" },
      { name: "Route 12", color: "bg-pink-500" },
    ]
  },
]

export function LiveOccupancy() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollTo = (index: number) => {
    if (index < 0) index = features.length - 1
    if (index >= features.length) index = 0
    setActiveIndex(index)
    
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / features.length
      scrollRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" })
    }
  }

  const activeFeature = features[activeIndex]
  const Icon = activeFeature.icon

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(80,0,0,0.03),transparent_50%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Everything you need,{" "}
            <span className="text-primary">live.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Real-time data for rec centers, libraries, dining halls, and buses. All in one app.
          </p>
        </div>

        {/* Feature selector tabs - horizontal scroll on mobile */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden shrink-0 md:flex"
            onClick={() => scrollTo(activeIndex - 1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div 
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide md:overflow-visible"
          >
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon
              return (
                <button
                  key={feature.id}
                  onClick={() => scrollTo(index)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeIndex === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <FeatureIcon className="h-4 w-4" />
                  {feature.title}
                </button>
              )
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="hidden shrink-0 md:flex"
            onClick={() => scrollTo(activeIndex + 1)}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Main content grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 ${activeFeature.badgeColor}`}>
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{activeFeature.badge}</span>
            </div>
            
            <h3 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {activeFeature.title}
            </h3>
            
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              {activeFeature.description}
            </p>

            {/* Dynamic content based on feature type */}
            <div className="mt-8 space-y-4">
              {/* Occupancy stats for rec/libraries */}
              {activeFeature.stats && (
                <div className="space-y-4">
                  {activeFeature.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-border bg-card p-5 text-left shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${activeFeature.iconBg}`}>
                            <Icon className={`h-5 w-5 ${activeFeature.iconColor}`} />
                          </div>
                          <span className="font-semibold text-foreground">{stat.label}</span>
                        </div>
                        <span className={`text-xl font-bold ${stat.color}`}>{stat.value}</span>
                      </div>
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div className={`h-full ${stat.barWidth} rounded-full ${stat.barColor} transition-all duration-500`} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Menu items for dining */}
              {activeFeature.menuItems && (
                <div className="space-y-3">
                  {activeFeature.menuItems.map((menu) => (
                    <div key={menu.station} className="rounded-2xl border border-border bg-card p-5 text-left shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">{menu.station}</h4>
                          <p className="mt-1 text-sm text-muted-foreground">{menu.items}</p>
                        </div>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground">
                          {menu.count}
                        </span>
                      </div>
                    </div>
                  ))}
                  <p className="text-center text-sm text-muted-foreground">
                    View full menus with calories and nutrition info
                  </p>
                </div>
              )}

              {/* Routes for buses */}
              {activeFeature.routes && (
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                    {activeFeature.routes.map((route) => (
                      <div key={route.name} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                        <div className={`h-3 w-3 rounded-full ${route.color}`} />
                        <span className="text-sm font-medium text-foreground">{route.name}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground lg:text-left">
                    Track all Aggie Spirit routes in real-time
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -right-4 top-1/4 h-32 w-32 rounded-full bg-green-500/10 blur-2xl" />
              <div className="absolute -left-8 bottom-1/4 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
              
              <PhoneMockup 
                src={activeFeature.image}
                alt={activeFeature.imageAlt}
                className="relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Dot indicators for mobile */}
        <div className="mt-8 flex justify-center gap-2 md:hidden">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "w-6 bg-primary" : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
