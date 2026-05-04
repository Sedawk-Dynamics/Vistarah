'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Globe2,
  Shield,
  ClipboardCheck,
  Truck,
  HeartHandshake,
  BarChart2,
  CheckCircle2,
} from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Compliance-First Always',
    description:
      'Every shipment is backed by complete regulatory documentation.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: ClipboardCheck,
    title: 'End-to-End Traceability',
    description:
      'Farm-to-port visibility for every shipment.',
    color: 'text-[color:var(--green)]',
    bg: 'bg-[color:var(--green)]/10',
  },
  {
    icon: Truck,
    title: 'On-Time Delivery',
    description:
      'Agile logistics execution with zero surprises.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnerships',
    description:
      'Built for long-term global trade relationships.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: BarChart2,
    title: 'Data-Driven Quality',
    description:
      'Third-party lab testing for every batch.',
    color: 'text-[color:var(--green)]',
    bg: 'bg-[color:var(--green)]/10',
  },
  {
    icon: Globe2,
    title: 'Global Market Knowledge',
    description:
      'Deep expertise in international regulations.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
]

const stats = [
  { value: '30+', label: 'Global Buyers' },
  { value: '100%', label: 'On-Time Shipments' },
  { value: '0', label: 'Rejections' },
  { value: '24h', label: 'Response Time' },
]

const operationalPoints = [
  {
    title: 'Strategic Ports',
    desc: 'Mundra, JNPT — selected for efficiency and compliance infrastructure',
  },
  {
    title: 'Steam Sterilization',
    desc: 'Mandatory processing to meet EU microbial standards',
  },
  {
    title: 'Full Traceability',
    desc: 'End-to-end visibility from farm to final destination',
  },
  {
    title: 'Long-term Relationships',
    desc: 'Partnership-focused engagement, not transactional sourcing',
  },
]

export default function Excellence() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
          }
        }),
      { threshold: 0.1 }
    )

    ref.current
      ?.querySelectorAll('.exc-animate')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20 exc-animate">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
            Why Choose Us
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Excellence in Every Export
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine operational excellence with uncompromising integrity.
          </p>
        </div>

        {/* NEW Operational Excellence Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left Image */}
          <div className="relative exc-animate">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-2.jpg" // replace with your actual image path
                alt="Operational Excellence"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* floating badge */}
            <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-2xl px-5 py-4">
              <p className="text-sm text-muted-foreground">
                Trusted Logistics Infrastructure
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="exc-animate">
            <span className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">
              Proof Of Rigor
            </span>

            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-8 leading-tight">
              Built on Operational Excellence
            </h3>

            <div className="space-y-8">
              {operationalPoints.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">
                      {item.title}
                    </h4>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="exc-animate text-center py-8 px-4 rounded-2xl bg-primary border border-primary/80 hover:shadow-xl transition-all"
            >
              <div className="text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/70 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Flip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1200px]">
          {reasons.map((reason, i) => {
            const Icon = reason.icon

            return (
              <div key={i} className="group relative h-[260px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* Front */}
                  <div className="absolute inset-0 rounded-2xl p-8 bg-card border border-border shadow-md [backface-visibility:hidden]">
                    <div
                      className={`w-12 h-12 rounded-xl ${reason.bg} flex items-center justify-center mb-5`}
                    >
                      <Icon className={`w-6 h-6 ${reason.color}`} />
                    </div>

                    <h3 className="text-lg font-bold text-foreground">
                      {reason.title}
                    </h3>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 rounded-2xl p-8 bg-primary text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-lg font-semibold mb-3">
                      {reason.title}
                    </h3>

                    <p className="text-sm text-white/90 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}