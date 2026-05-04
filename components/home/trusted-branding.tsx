'use client'

import Image from 'next/image'

const badges = [
  {
    img: 'https://www.franchisemart.in/franchise/wp-content/uploads/2015/09/Spices-Board.gif',
    label: 'Spices Board',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apeda-registration-service-500x500-Z6i29pjULHCLGBBDfW7no3JsfSfFjH.webp',
    label: 'APEDA Registered',
  },
  {
    img: '/food-license-fassi-.jpg',
    label: 'FDA Compliant',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lab-verified-label-logo-badge-260nw-2528724913-xYUBjkdnJIcfmcZTT6c6knXKGL3L8x.webp',
    label: 'Lab Verified',
  },
]

export default function TrustedBranding() {
  const duplicatedBadges = [...badges, ...badges]

  return (
    <section className="py-20 bg-[#002C50] overflow-hidden relative">

      {/* subtle background glow */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-[#0D726A]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-[#E39A1F]/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        {/* <div className="text-center mb-14">
          <p className="text-[#E39A1F] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Trusted Certifications
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Compliance You Can Trust
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Certified, verified, and compliant with global export standards.
          </p>
        </div> */}

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-16 items-center">

            {duplicatedBadges.map((badge, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center min-w-[180px] group"
              >
                {/* Circular badge */}
                <div className="flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white shadow-xl overflow-hidden transition-transform duration-300 group-hover:scale-110">
                  <div className="relative w-[75%] h-[75%]">
                    <Image
                      src={badge.img}
                      alt={badge.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Label */}
                <span className="mt-4 text-white/80 text-sm font-medium text-center">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#002C50] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#002C50] to-transparent"></div>
        </div>
      </div>
    </section>
  )
}