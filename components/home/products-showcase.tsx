'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Clock, FlaskConical, Leaf } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Turmeric Powder',
    subtitle: 'Standard Export Grade',
    image: '/turmeric-powder.jpg',
    tag: 'Best Seller',
    tagColor: 'bg-accent text-accent-foreground',
    description:
      'Finely milled, vibrant-colored turmeric powder sourced from the best-growing regions in India. Consistent curcumin content, low microbial count, and clean taste profile.',
    specs: [
      { label: 'Curcumin', value: '2–4%' },
      { label: 'Moisture', value: '≤10%' },
      { label: 'Color Value', value: '≥90 ASTA' },
    ],
    certifications: ['ISO 22000', 'FSSAI', 'FDA Registered'],
    icon: Leaf,
    iconColor: 'text-accent',
    bgColor: 'bg-accent/5',
    borderColor: 'hover:border-accent/40',
  },
  {
    id: 2,
    name: 'Steam-Sterilized Turmeric',
    subtitle: 'Microbial Safety Grade',
    image: '/turmeric-sterilized.jpg',
    tag: 'EU Compliant',
    tagColor: 'bg-[color:var(--green)] text-[color:var(--green-foreground)]',
    description:
      'Steam-treated turmeric meeting the strictest microbial standards required by EU, UK, and US markets. Zero detectable pathogens with full traceability and third-party testing.',
    specs: [
      { label: 'TPC', value: '<10,000 CFU/g' },
      { label: 'E.coli', value: 'Not Detected' },
      { label: 'Process', value: 'Steam Sterilized' },
    ],
    certifications: ['EU-compliant', 'Organic Option', 'BRC Ready'],
    icon: FlaskConical,
    iconColor: 'text-[color:var(--green)]',
    bgColor: 'bg-[color:var(--green)]/5',
    borderColor: 'hover:border-[color:var(--green)]/40',
  },
  {
    id: 3,
    name: 'High-Curcumin Turmeric',
    subtitle: 'Premium Functional Grade',
    image: '/turmeric-raw.jpg',
    tag: 'Premium',
    tagColor: 'bg-primary text-primary-foreground',
    description:
      'Specially selected high-curcuminoid varieties delivering 5–7% natural curcumin for nutraceutical, pharmaceutical, and wellness product applications globally.',
    specs: [
      { label: 'Curcumin', value: '5–7%' },
      { label: 'Purity', value: '99.5%' },
      { label: 'Application', value: 'Nutraceutical' },
    ],
    certifications: ['USDA Organic', 'Halal', 'Kosher Ready'],
    icon: CheckCircle,
    iconColor: 'text-primary',
    bgColor: 'bg-primary/5',
    borderColor: 'hover:border-primary/40',
  },
  {
    id: 4,
    name: 'Upcoming: Cumin & Coriander',
    subtitle: 'Coming Q3 2025',
    image: '/hero-1.jpg',
    tag: 'Coming Soon',
    tagColor: 'bg-muted text-muted-foreground',
    description:
      'We are expanding our portfolio to include export-grade cumin and coriander with the same compliance standards, traceability, and quality assurance as our turmeric range.',
    specs: [
      { label: 'Launch', value: 'Q3 2025' },
      { label: 'Origin', value: 'Rajasthan, India' },
      { label: 'Grade', value: 'Export Quality' },
    ],
    certifications: ['Planned', 'Register Interest'],
    icon: Clock,
    iconColor: 'text-muted-foreground',
    bgColor: 'bg-muted/30',
    borderColor: 'hover:border-border',
  },
]

export default function ProductsShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'available' | 'upcoming'>('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )
    ref.current?.querySelectorAll('.prd-animate').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const filtered = products.filter((p) => {
    if (activeTab === 'available') return p.id !== 4
    if (activeTab === 'upcoming') return p.id === 4
    return true
  })

  return (
    <section ref={ref} className="py-28 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 prd-animate scroll-animate animate-fade-in-down">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3 block">
              Our Products
            </span>
            <h2 className="text-5xl font-bold text-foreground text-balance">
              Premium Export Products
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl">
              Carefully sourced and quality-assured agri-commodities from India, certified for global markets.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 bg-muted rounded-xl p-1 self-start md:self-auto shrink-0">
            {(['all', 'available', 'upcoming'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 mb-14">
          {filtered.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className={`prd-animate scroll-animate animate-fade-in-up group relative bg-card border border-border ${product.borderColor} rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  {/* Tag badge */}
                  <span className={`absolute top-4 left-4 ${product.tagColor} text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {product.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{product.subtitle}</p>
                      <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                    </div>
                    <div className={`shrink-0 p-3 rounded-xl ${product.bgColor}`}>
                      <Icon className={`w-5 h-5 ${product.iconColor}`} />
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Specs table */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {product.specs.map((spec, i) => (
                      <div key={i} className={`${product.bgColor} rounded-xl p-3 text-center`}>
                        <div className="text-xs text-muted-foreground mb-1">{spec.label}</div>
                        <div className="text-sm font-bold text-foreground">{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.certifications.map((cert, i) => (
                      <span key={i} className="text-xs border border-border text-muted-foreground rounded-full px-3 py-1">
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {product.id !== 4 ? (
                    <Link href="/products">
                      <button className="flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-300 group/btn">
                        View Full Specifications
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </Link>
                  ) : (
                    <Link href="/contact">
                      <button className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:gap-3 transition-all duration-300 group/btn">
                        Register Your Interest
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center prd-animate scroll-animate animate-fade-in">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              Explore Full Product Catalogue
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm mt-4">
            Request samples or custom specifications — contact our team
          </p>
        </div>

      </div>
    </section>
  )
}
