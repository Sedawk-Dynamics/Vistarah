'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Target, Eye, Gem, CheckCircle } from 'lucide-react'

const values = [
  { label: 'Trust Is Our Currency', detail: 'We do what we say, shipment after shipment.' },
  { label: 'Compliance Before Convenience', detail: 'Regulatory rigor is non-negotiable.' },
  { label: 'Agility With Accountability', detail: 'Fast, adaptive, and fully accountable.' },
  { label: 'Transparency in Every Step', detail: 'No hidden surprises — ever.' },
]

export default function Foundation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    )
    ref.current?.querySelectorAll('.fdn-animate').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="text-center mb-20 fdn-animate scroll-animate animate-fade-in-down">
          <span className="inline-block text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Our Foundation
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-5 text-balance">
            Guided by Purpose,<br />
            <span className="text-primary">Driven by Principles</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every decision, every shipment, every partnership — shaped by our Mission, Vision, and Core Values.
          </p>
        </div>

        {/* Mission — image left, text right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="relative fdn-animate scroll-animate animate-slide-in-left">
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 -z-10" />
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://importexportfederation.com/wp-content/uploads/2023/11/19964835_6184552.jpg" alt="Mission — quality and compliance" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Our Mission</div>
                <div className="text-sm font-semibold text-foreground max-w-[200px]">
                  Building trust through every border we cross
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 fdn-animate scroll-animate animate-slide-in-right">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-foreground">Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To build trusted global trade partnerships by connecting Indian suppliers with
              international buyers through <strong className="text-foreground">transparent, compliant, and accountable execution</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We enable reliable, scalable international trade by combining India's supply strengths with
              global execution standards — without compromising on quality or integrity.
            </p>
            <div className="pt-2 border-t border-border">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                <span className="text-accent font-medium">Vistarah Global</span>
                <span className="h-px flex-1 bg-border" />
              </div>
            </div>
          </div>
        </div>

        {/* Vision — text left, image right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="space-y-6 fdn-animate scroll-animate animate-slide-in-left order-2 lg:order-1">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[color:var(--green)]/10 border border-[color:var(--green)]/20">
              <Eye className="w-7 h-7 text-[color:var(--green)]" />
            </div>
            <h3 className="text-4xl font-bold text-foreground">Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To be the most <strong className="text-foreground">trusted enabler of India's export growth</strong> in
              healthy agri-commodities — known globally for operational excellence, compliance rigor, and
              long-term partnerships.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A world where Indian agri-excellence reaches every global kitchen, backed by the infrastructure
              of integrity and the velocity of modern trade.
            </p>
          </div>

          <div className="relative fdn-animate scroll-animate animate-slide-in-right order-1 lg:order-2">
            <div className="absolute -inset-4 rounded-3xl bg-[color:var(--green)]/5 -z-10" />
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/farming.jpg" alt="Vision — global agriculture" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-bl from-[color:var(--green)]/30 to-transparent" />
              <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
                <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Our Vision</div>
                <div className="text-sm font-semibold text-foreground max-w-[200px]">
                  India's agri-excellence in every global kitchen
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values — horizontal band */}
        <div className="fdn-animate scroll-animate animate-fade-in-up">
          <div className="relative bg-primary rounded-3xl px-8 py-12 overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/10 rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/20">
                  <Gem className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white">Core Values</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mb-4 transition-transform duration-300 group-hover:scale-110" />
                    <h4 className="font-semibold text-white mb-2 text-sm leading-snug">{v.label}</h4>
                    <p className="text-white/55 text-xs leading-relaxed">{v.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
