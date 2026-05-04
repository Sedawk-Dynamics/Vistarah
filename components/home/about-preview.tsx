'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Users, Globe2 } from 'lucide-react'

const highlights = [
  { icon: Globe2, label: '30+ Global Buyers', color: 'text-accent bg-accent/10' },
  { icon: TrendingUp, label: 'Growing Export Portfolio', color: 'text-[color:var(--green)] bg-[color:var(--green)]/10' },
  { icon: Users, label: 'India-to-World Partner', color: 'text-primary bg-primary/10' },
]

export default function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.abt-animate').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="relative abt-animate scroll-animate animate-slide-in-left">
            {/* Background accent */}
            <div className="absolute -inset-6 rounded-3xl bg-primary/5 -z-10" />

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/farming.jpg"
                alt="Vistarah Global — sustainable Indian agriculture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -right-6 bg-background border border-border rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-3xl font-bold text-primary">2024</div>
              <div className="text-xs text-muted-foreground mt-0.5">Founded, India</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-accent rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-sm font-bold text-accent-foreground">Compliance-First</div>
              <div className="text-accent-foreground/70 text-xs">Export Partner</div>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-8 abt-animate scroll-animate animate-slide-in-right">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
                About Vistarah Global
              </span>
            <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
              Building Trust,<br />
              <span className="text-[color:var(--green)]">One Shipment at a Time</span>
            </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Vistarah Global is an India-based export enablement company focused on connecting
                premium agri-commodity suppliers with international buyers across the EU, UK, US, and GCC markets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe sustainable global trade is built on three pillars: <strong className="text-foreground">trust</strong>,{' '}
                <strong className="text-foreground">compliance</strong>, and <strong className="text-foreground">agility</strong>.
                Every transaction we facilitate upholds these values, creating lasting partnerships that grow over time.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <div key={i} className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl ${h.color} text-sm font-medium`}>
                    <Icon className="w-4 h-4" />
                    {h.label}
                  </div>
                )
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted hover:border-primary/40 px-8 py-6 transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
