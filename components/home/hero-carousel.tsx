'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    eyebrow: 'From the Heart of India',
    title: 'Six Generations of Trust.\nOne Global Future.',
    description:
      "We connect India's finest agri-commodity producers with global buyers through accountable, compliant, and relationship-first trade partnerships.",
    primaryCta: { label: 'Explore Products', href: '/products' },
    secondaryCta: { label: 'Partner with Us', href: '/contact' },
  },
  {
    id: 2,
    eyebrow: 'Global Trade, Simplified',
    title: 'Rooted in India.\nTrusted by the World.',
    description:
      'End-to-end export management with rigorous quality standards, regulatory adherence, and complete documentation — every single shipment.',
    primaryCta: { label: 'Why Choose Us', href: '/certifications' },
    secondaryCta: { label: 'View Certifications', href: '/certifications' },
  },
  {
    id: 3,
    eyebrow: 'Precision Quality Control',
    title: 'Where Heritage Meets\nGlobal Standards.',
    description:
      'Lab-verified purity, steam sterilisation, and internationally certified processes ensure your buyers receive nothing but the very best.',
    primaryCta: { label: 'Our Process', href: '/certifications' },
    secondaryCta: { label: 'Request a Sample', href: '/contact' },
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const INTERVAL = 6000

  const goTo = useCallback(
    (index: number) => {
      if (animating) return
      setAnimating(true)
      setCurrent(index)
      setProgress(0)
      setTimeout(() => setAnimating(false), 800)
    },
    [animating]
  )

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [paused, next])

  useEffect(() => {
    if (paused) return
    setProgress(0)
    const step = 100 / (INTERVAL / 50)
    const timer = setInterval(() => setProgress((p) => Math.min(p + step, 100)), 50)
    return () => clearInterval(timer)
  }, [current, paused])

  const slide = slides[current]

  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#002C50]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl space-y-6">

            {/* Eyebrow */}
            <div key={`eyebrow-${current}`} className="flex items-center gap-3 animate-fade-in-down">
              <span className="h-px w-10 bg-accent" />
              <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
                {slide.eyebrow}
              </span>
            </div>

            {/* Title */}
            <h1
              key={`title-${current}`}
              className="text-5xl lg:text-7xl font-bold leading-[1.1] text-white text-balance animate-fade-in-up"
              style={{ whiteSpace: 'pre-line' }}
            >
              {slide.title}
            </h1>

            {/* Description */}
            <p
              key={`desc-${current}`}
              className="text-lg text-white/80 leading-relaxed max-w-xl animate-fade-in-up animate-delay-200"
            >
              {slide.description}
            </p>

            {/* CTAs */}
            <div key={`cta-${current}`} className="flex flex-wrap gap-4 pt-2 animate-fade-in-up animate-delay-300">
              <Link href={slide.primaryCta.href}>
                <Button
                  size="lg"
                  className="bg-[#E39A1F] hover:bg-[#c98516] text-white font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {slide.primaryCta.label}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>

              <Link href={slide.secondaryCta.href}>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {slide.secondaryCta.label}
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Slide navigation */}
      <div className="absolute bottom-32 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-end justify-between">

          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === current ? '3rem' : '1.5rem' }}
              >
                <span className="absolute inset-0 bg-white/30 rounded-full" />
                {i === current && (
                  <span
                    className="absolute inset-y-0 left-0 bg-accent rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-white/50 text-sm font-mono">
            <span className="text-white font-semibold">0{current + 1}</span>
            <span>/</span>
            <span>0{slides.length}</span>
          </div>

        </div>
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

    </section>
  )
}