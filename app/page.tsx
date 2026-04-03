import { Hero } from "@/components/hero"
import { SocialMap } from "@/components/social-map"
import { LiveOccupancy } from "@/components/live-occupancy"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SocialMap />
      <LiveOccupancy />
      <Footer />
    </main>
  )
}
