'use client'

import { useEffect, useRef } from 'react'
import { Target, Eye, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To build trusted global trade partnerships by connecting Indian suppliers with international buyers through transparent, compliant, and accountable execution.'
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the most trusted enabler of India\'s export growth in healthy agri-commodities — known globally for operational excellence, compliance rigor, and long-term partnerships.'
  },
  {
    icon: Lightbulb,
    title: 'Our Values',
    description: 'Trust is our currency. Compliance before convenience. Agility with accountability. Every commitment upholds these values, creating lasting partnerships.'
  }
]

export default function MissionVisionValues() {
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

    const elements = document.querySelectorAll('.mvv-scroll-animate')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="py-24 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 mvv-scroll-animate opacity-0 animate-fade-in-down">
          <h2 className="text-5xl font-bold mb-6">Our Foundation</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every decision we make is guided by our mission, vision, and core values
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="mvv-scroll-animate opacity-0 border border-border/50 bg-background/50 backdrop-blur-sm rounded-2xl p-10 group hover:border-accent/50 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-accent/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 rounded-xl bg-accent/10 w-fit mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="w-8 h-8 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
