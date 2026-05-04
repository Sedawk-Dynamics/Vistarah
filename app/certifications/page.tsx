'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowRight, ShieldCheck, ExternalLink, CheckCircle, Globe, Search } from 'lucide-react'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

const categories = ['All', 'Organic', 'Food Safety', 'Export', 'Quality', 'Environmental']

const certifications = [
  /* Organic */
  {
    id: 'usda-organic', name: 'USDA Organic', category: 'Organic', issuer: 'United States Department of Agriculture',
    country: 'United States', logoText: 'USDA\nORGANIC', color: '#2d6a4f', bg: '#d8f3dc',
    description: 'Certifies that products are produced using approved methods that foster cycling of resources, promote ecological balance, and conserve biodiversity. Required for all US-bound organic claims.',
    applicability: 'USA Market', validFor: 'All Organic Turmeric Lines',
  },
  {
    id: 'eu-organic', name: 'EU Organic', category: 'Organic', issuer: 'European Commission',
    country: 'European Union', logoText: 'EU\nORGANIC', color: '#1d6f42', bg: '#d1fae5',
    description: 'The EU organic logo certifies that at least 95% of agricultural ingredients are organically produced, meeting Council Regulation (EC) No 834/2007 and implementing rules.',
    applicability: 'EU Market', validFor: 'Organic Turmeric Powder',
  },
  {
    id: 'jas-organic', name: 'JAS Organic', category: 'Organic', issuer: 'Japan Agricultural Standards',
    country: 'Japan', logoText: 'JAS\n有機', color: '#1e6b45', bg: '#dcfce7',
    description: 'Japanese Agricultural Standard for Organic Produce. Mandatory for all products labelled "organic" sold in Japan, governed by the Japan Ministry of Agriculture, Forestry and Fisheries.',
    applicability: 'Japan Market', validFor: 'Premium Organic Lines',
  },
  {
    id: 'npop', name: 'NPOP Organic', category: 'Organic', issuer: 'APEDA / Ministry of Commerce, India',
    country: 'India', logoText: 'NPOP', color: '#166534', bg: '#bbf7d0',
    description: 'National Programme for Organic Production — India\'s national standard for organic certification. Products certified under NPOP are equivalently recognized by the EU and Switzerland.',
    applicability: 'Global (EU equivalent)', validFor: 'All Organic Products',
  },
  {
    id: 'nop', name: 'NOP Certified', category: 'Organic', issuer: 'USDA National Organic Program',
    country: 'United States', logoText: 'NOP', color: '#14532d', bg: '#f0fdf4',
    description: 'National Organic Program certification under USDA — the regulatory framework that governs the production, handling, labeling and enforcement of all USDA organic products.',
    applicability: 'USA Market', validFor: 'Steam-Sterilized Organic',
  },
  /* Food Safety */
  {
    id: 'fssai', name: 'FSSAI', category: 'Food Safety', issuer: 'Food Safety and Standards Authority of India',
    country: 'India', logoText: 'FSSAI', color: '#1d4ed8', bg: '#dbeafe',
    description: 'India\'s central food safety regulator. FSSAI license is mandatory for all food businesses in India, ensuring compliance with the Food Safety and Standards Act, 2006.',
    applicability: 'All Markets (mandatory)', validFor: 'All Products',
  },
  {
    id: 'iso-22000', name: 'ISO 22000', category: 'Food Safety', issuer: 'International Organization for Standardization',
    country: 'International', logoText: 'ISO\n22000', color: '#1e40af', bg: '#eff6ff',
    description: 'International standard for food safety management systems. Integrates HACCP principles and covers the complete food supply chain from farm to fork.',
    applicability: 'Global', validFor: 'Entire Product Range',
  },
  {
    id: 'haccp', name: 'HACCP', category: 'Food Safety', issuer: 'Codex Alimentarius / WHO',
    country: 'International', logoText: 'HACCP', color: '#1e3a8a', bg: '#e0e7ff',
    description: 'Hazard Analysis and Critical Control Points — a systematic preventive approach to food safety from biological, chemical, and physical hazards in production.',
    applicability: 'Global', validFor: 'Processing Facilities',
  },
  {
    id: 'fssc-22000', name: 'FSSC 22000', category: 'Food Safety', issuer: 'Foundation FSSC',
    country: 'International', logoText: 'FSSC\n22000', color: '#312e81', bg: '#eef2ff',
    description: 'Food Safety System Certification 22000 — GFSI benchmarked certification combining ISO 22000 with additional sector-specific pre-requisite programs.',
    applicability: 'Global', validFor: 'Processing Partners',
  },
  /* Export */
  {
    id: 'apeda', name: 'APEDA Registered', category: 'Export', issuer: 'Agricultural & Processed Food Products Export Development Authority',
    country: 'India', logoText: 'APEDA', color: '#92400e', bg: '#fef3c7',
    description: 'Registration with APEDA is mandatory for exporting scheduled products from India including spices, cereals, and processed foods. Vistarah is a registered APEDA exporter.',
    applicability: 'All Export Markets', validFor: 'All Products',
  },
  {
    id: 'spice-board', name: 'Spices Board India', category: 'Export', issuer: 'Spices Board of India, Ministry of Commerce',
    country: 'India', logoText: 'SPICES\nBOARD', color: '#b45309', bg: '#fffbeb',
    description: 'The apex national body for the development and worldwide promotion of Indian spices. Spice Board registration ensures compliance with quality, hygiene and phytosanitary requirements.',
    applicability: 'Spice Export', validFor: 'Turmeric & All Spices',
  },
  {
    id: 'phytosanitary', name: 'Phytosanitary Certificate', category: 'Export', issuer: 'Plant Quarantine Authority of India',
    country: 'India', logoText: 'PHYTO\nCERT', color: '#a16207', bg: '#fefce8',
    description: 'Issued by the Plant Quarantine Authority, this certificate confirms that the consignment has been inspected and is free from pests and diseases as per the importing country\'s requirements.',
    applicability: 'All Importing Countries', validFor: 'Per Shipment',
  },
  /* Quality */
  {
    id: 'iso-9001', name: 'ISO 9001:2015', category: 'Quality', issuer: 'International Organization for Standardization',
    country: 'International', logoText: 'ISO\n9001', color: '#7c3aed', bg: '#f5f3ff',
    description: 'Global standard for quality management systems. Demonstrates Vistarah\'s commitment to consistent quality, customer focus, and continual improvement across all operations.',
    applicability: 'Global', validFor: 'Company-wide QMS',
  },
  {
    id: 'kosher', name: 'Kosher Certified', category: 'Quality', issuer: 'Orthodox Union (OU)',
    country: 'United States / Global', logoText: 'KOSHER\nOU', color: '#5b21b6', bg: '#ede9fe',
    description: 'Kosher certification verifies that food products meet the requirements of Jewish dietary laws (kashrut). Essential for USA, Israel, and premium international market access.',
    applicability: 'USA / Israel / Premium', validFor: 'Select Turmeric Lines',
  },
  {
    id: 'halal', name: 'Halal Certified', category: 'Quality', issuer: 'Jamiat Ulama-e-Maharashtra',
    country: 'India / Gulf / SE Asia', logoText: 'HALAL', color: '#4c1d95', bg: '#f0fdf4',
    description: 'Halal certification confirms that products are permissible under Islamic law and meet the dietary requirements of Muslim consumers globally. Critical for Middle East and SE Asia markets.',
    applicability: 'Middle East / SE Asia', validFor: 'All Product Lines',
  },
  /* Environmental */
  {
    id: 'fair-trade', name: 'Fair Trade Certified', category: 'Environmental', issuer: 'Fair Trade USA',
    country: 'International', logoText: 'FAIR\nTRADE', color: '#065f46', bg: '#d1fae5',
    description: 'Fair Trade certification ensures farmers receive fair prices, workers have safe conditions, and environmental standards are met. Premium in US, UK and European retail markets.',
    applicability: 'Retail / Premium Markets', validFor: 'Farmer Partner Program',
  },
  {
    id: 'rainforest', name: 'Rainforest Alliance', category: 'Environmental', issuer: 'Rainforest Alliance',
    country: 'International', logoText: 'RA\nCERTIFIED', color: '#047857', bg: '#ecfdf5',
    description: 'Ensures farms meet rigorous social, economic, and environmental sustainability standards. Increasingly required by European and North American retail chains.',
    applicability: 'EU / UK / US Retail', validFor: 'Organic Program',
  },
  {
    id: 'gmp', name: 'GMP Compliant', category: 'Quality', issuer: 'WHO / FDA Good Manufacturing Practice',
    country: 'International', logoText: 'GMP', color: '#0891b2', bg: '#e0f2fe',
    description: 'Good Manufacturing Practice compliance confirms that products are consistently produced and controlled according to quality standards. Mandatory for pharmaceutical-grade and nutraceutical supply.',
    applicability: 'Nutraceutical / Pharma', validFor: 'High-Curcumin Line',
  },
]

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = certifications.filter(c => {
    const matchCat = activeCategory === 'All' || c.category === activeCategory
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.issuer.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8 animate-fade-in-down">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Verified Standards</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-balance animate-fade-in-up">
            Our Certifications
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            Every market we serve has unique regulatory requirements. We hold or comply with {certifications.length}+ international certifications — so your imports clear customs without complications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-in" style={{ animationDelay: '250ms' }}>
            {[
              { val: `${certifications.length}+`, label: 'Certifications' },
              { val: '30+', label: 'Countries Covered' },
              { val: '5', label: 'Major Standards' },
              { val: '100%', label: 'Verified & Current' },
            ].map(s => (
              <div key={s.label} className="bg-white/8 border border-white/10 rounded-2xl p-5">
                <p className="text-3xl font-bold text-accent">{s.val}</p>
                <p className="text-white/55 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter bar ──────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${activeCategory === cat ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-muted-foreground border-border hover:border-primary/50'}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Search certifications..." value={search} onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-border bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Cert Grid ───────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <p className="text-muted-foreground text-sm mb-8">Showing {filtered.length} certification{filtered.length !== 1 ? 's' : ''}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 50}>
              <div
                className={`rounded-2xl border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl group ${expanded === cert.id ? 'border-primary shadow-xl' : 'border-border hover:border-primary/40 bg-card'}`}
                onClick={() => setExpanded(expanded === cert.id ? null : cert.id)}
              >
                {/* Logo block */}
                <div className="p-6 flex items-center gap-4 border-b border-border">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0 font-black text-center text-xs leading-tight" style={{ background: cert.bg, color: cert.color }}>
                    {cert.logoText}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-foreground text-sm">{cert.name}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: cert.bg, color: cert.color }}>
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">{cert.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Globe className="w-3 h-3" />
                      {cert.applicability}
                    </div>
                    <span className="text-xs font-semibold transition-transform group-hover:translate-x-0.5" style={{ color: cert.color }}>
                      {expanded === cert.id ? 'Less' : 'Details'} →
                    </span>
                  </div>
                </div>

                {/* Expanded */}
                {expanded === cert.id && (
                  <div className="px-5 pb-5 border-t border-border mt-0 pt-4 space-y-3 animate-fade-in-up">
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Issuing Body</p>
                      <p className="text-sm text-foreground">{cert.issuer}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Applicable To</p>
                      <p className="text-sm text-foreground">{cert.validFor}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Country / Region</p>
                      <p className="text-sm text-foreground">{cert.country}</p>
                    </div>
                    <a href="/contact" className="flex items-center gap-2 text-xs font-semibold mt-2 transition-colors hover:opacity-80" style={{ color: cert.color }}>
                      <CheckCircle className="w-3.5 h-3.5" />
                      Request cert documentation
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <ShieldCheck className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-semibold">No certifications found</p>
            <p className="text-sm mt-2">Try adjusting your search or filter</p>
          </div>
        )}
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-20 bg-primary">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Specific Documentation?</h2>
          <p className="text-white/60 mb-8">We can provide COAs, test reports, and certification copies for any shipment. Contact our compliance team.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-xl hover:bg-accent/90 transition-all hover:scale-105 group">
              Contact Compliance Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/buyer" className="flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all">
              Back to Buyer Portal
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
