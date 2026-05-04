'use client'

import { useEffect, useRef } from 'react'
import { Zap, Shield, Users, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Compliance First',
    description: 'Rigorous adherence to international quality and regulatory standards'
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Quick turnaround times without compromising on quality assurance'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 customer support and personalized relationship management'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Grow your business with our flexible and expandable export capacity'
  }
]

export default function WhyChooseUs() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.why-scroll-animate')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="py-24 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 why-scroll-animate opacity-0 animate-fade-in-down">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Excellence in Every Export
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine operational excellence with uncompromising integrity
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="why-scroll-animate opacity-0 border border-border/50 bg-background/50 backdrop-blur-sm rounded-xl p-8 group hover:border-accent/50 transition-all duration-500 ease-out hover:shadow-xl hover:shadow-accent/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
