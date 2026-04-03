import Image from "next/image"

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
}

export function PhoneMockup({ src, alt, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] md:w-[320px] lg:w-[360px]">
        {/* Phone bezel */}
        <div className="relative rounded-[40px] bg-gray-900 p-2 shadow-2xl shadow-black/20">
          {/* Inner bezel */}
          <div className="relative overflow-hidden rounded-[32px] bg-black">
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
            
            {/* Screen */}
            <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[32px]">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
              />
            </div>
          </div>
        </div>
        
        {/* Side button (right) */}
        <div className="absolute -right-[3px] top-28 h-12 w-[3px] rounded-r-sm bg-gray-800" />
        <div className="absolute -right-[3px] top-44 h-8 w-[3px] rounded-r-sm bg-gray-800" />
        
        {/* Side buttons (left) */}
        <div className="absolute -left-[3px] top-20 h-6 w-[3px] rounded-l-sm bg-gray-800" />
        <div className="absolute -left-[3px] top-32 h-12 w-[3px] rounded-l-sm bg-gray-800" />
        <div className="absolute -left-[3px] top-48 h-12 w-[3px] rounded-l-sm bg-gray-800" />
      </div>
    </div>
  )
}
