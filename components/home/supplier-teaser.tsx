'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Globe2, TrendingUp, IndianRupee, Truck, BadgeCheck, Users, Star } from 'lucide-react'

const benefits = [
  { icon: IndianRupee, text: '20–55% above domestic mandi rates' },
  { icon: Globe2, text: 'Buyers in 30+ countries — EU, US, GCC' },
  { icon: BadgeCheck, text: 'Full APEDA, FSSAI & Organic cert support' },
  { icon: TrendingUp, text: 'Advance purchase orders 3–6 months ahead' },
  { icon: Truck, text: 'Farm-gate pickup, zero middlemen' },
  { icon: Users, text: '500+ verified Suppliers partners across India' },
]

const steps = [
  { n: '01', title: 'Submit Profile', desc: 'Share your farm details, crop types, certifications, and yield capacity online.' },
  { n: '02', title: 'Discovery Call', desc: 'Our sourcing team calls to explain our standards and confirm fit within 72 hours.' },
  { n: '03', title: 'Quality Audit', desc: 'On-site or remote audit of your facilities and produce samples.' },
  { n: '04', title: 'First Shipment', desc: 'Your produce reaches international buyers. Transparent, on-time payments every time.' },
]

const stories = [
  { avatar: 'R', name: 'Rajan Patel', location: 'Erode, Tamil Nadu', increase: '+42%', quote: 'Before Vistarah, I was selling at local mandis at ₹80/kg. Now I get ₹115–120/kg consistently.' },
  { avatar: 'S', name: 'Shantabai Kulkarni', location: 'Sangli, Maharashtra', increase: '+38%', quote: 'Knowing my volumes 5 months in advance changed everything. I can plan my crop with confidence.' },
  { avatar: 'C', name: 'Suppliers Cooperative', location: 'Salem, Tamil Nadu', increase: '+55%', quote: 'As a 45-member cooperative, Vistarah gave us market access we could never reach alone.' },
]

export default function SupplierTeaser() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    ref.current?.querySelectorAll('.st-animate').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#002C50] overflow-hidden">

      {/* Top Section */}
      <div className="py-28 relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div className="space-y-8 st-animate scroll-animate animate-slide-in-left">
              <div>
                <span className="inline-flex items-center gap-2 text-white/65 text-xs font-bold uppercase tracking-[0.25em] mb-5">
                  <span className="h-px w-8 bg-white/40" />
                  For Suppliers & Producers
                </span>

                <h2 className="text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.1]">
                  Grow Your Reach.<br />
                  <span className="text-[#f0c060]">We Handle the Rest.</span>
                </h2>

                <p className="text-white/75 text-lg leading-relaxed max-w-lg">
                  Partner with Vistarah and unlock direct access to premium global buyers.
                  We manage compliance, lab testing, documentation, and logistics — so you focus on Suppliers.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-2.5">
                {benefits.map((b, i) => {
                  const Icon = b.icon
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/16 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#f0c060]" />
                      <span className="text-white/90 text-sm">{b.text}</span>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/supplier"
                  className="inline-flex items-center gap-2 bg-white text-[#0f766e] font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all"
                >
                  Explore Supplier Portal
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/35 text-white px-7 py-3.5 rounded-xl hover:bg-white/10"
                >
                  Talk to Our Sourcing Team
                </Link>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5 bg-white/10 border border-white/15 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-[#f0c060]/20 flex items-center justify-center text-[#f0c060] font-bold text-sm">
                    {s.n}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{s.title}</p>
                    <p className="text-white/60 text-xs">{s.desc}</p>
                  </div>
                </div>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mt-5">
                {[
                  { val: '500+', label: 'Supplier Partners' },
                  { val: '30+', label: 'Export Countries' },
                  { val: '100%', label: 'On-time Payments' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-white">{stat.val}</p>
                    <p className="text-white/55 text-[10px] uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Stories */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section Label */}
          <p className="text-[#E39A1F] text-xs font-bold uppercase tracking-[0.22em] mb-8">
            Real Supplier Stories
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <div
                key={s.name}
                className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Top */}
                <div className="flex items-center gap-3 mb-4">

                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#E39A1F]/10 flex items-center justify-center font-bold text-[#E39A1F]">
                    {s.avatar}
                  </div>

                  {/* Name */}
                  <div className="flex-1">
                    <p className="font-semibold text-[#002C50] text-sm">
                      {s.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {s.location}
                    </p>
                  </div>

                  {/* Growth badge */}
                  <span className="bg-[#0D726A]/10 text-[#0D726A] text-xs font-bold px-3 py-1 rounded-full">
                    {s.increase}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3 h-3 fill-[#E39A1F] text-[#E39A1F]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm italic leading-relaxed">
                  "{s.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
