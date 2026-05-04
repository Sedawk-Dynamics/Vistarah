'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import AboutPreview from '@/components/home/about-preview'
import Foundation from '@/components/home/foundation'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, ExternalLink, CheckCircle, Globe, Search, X } from 'lucide-react'

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

export default function AboutPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null)

  const filtered = certifications.filter(c => {
    const matchCat = activeCategory === 'All' || c.category === activeCategory
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.issuer.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  // Handle keyboard close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    if (selectedImage) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* About Preview Section */}
      <AboutPreview />

      {/* Our Foundation — Mission, Vision, Values */}
      <Foundation />

      {/* ── Our Certifications Section ─────────────── */}
      <section className="pt-32 pb-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8 animate-fade-in-down">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Verified Standards</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Our Certifications
          </h2>
          <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
            Every market we serve has unique regulatory requirements. We hold or comply with {certifications.length}+ international certifications — so your imports clear customs without complications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
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
      {/* <div className="bg-background/95 backdrop-blur border-b border-border py-4 shadow-sm">
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
      </div> */}

      {/* ── Cert Grid ───────────────────────────────── */}




      {/* ── Certification Document Images ──────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4">Our Certification Documents</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Authentic certifications and regulatory compliance documents issued by government and international bodies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GST Registration */}
            <Reveal className="rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-1 group cursor-pointer" onClick={() => setSelectedImage({ src: '/cert-gst-registration.png', alt: 'GST Registration Certificate - Form GST REG-06', title: 'GST Registration Certificate' })}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src="/cert-gst-registration.png"
                  alt="GST Registration Certificate - Form GST REG-06"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="font-bold text-foreground mb-2">GST Registration Certificate</p>
                <p className="text-sm text-muted-foreground mb-4">Registration Number: 06AALCV6631L1ZU</p>
                <p className="text-xs text-muted-foreground leading-relaxed">Government of India GST REG-06 form certifying our GST registration as a compliant business entity.</p>
              </div>
            </Reveal>

            {/* APEDA Registration */}
            <Reveal delay={50} className="rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-1 group cursor-pointer" onClick={() => setSelectedImage({ src: '/cert-apeda-registration.png', alt: 'APEDA Registration Certificate', title: 'APEDA Registration' })}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src="/cert-apeda-registration.png"
                  alt="APEDA Registration Certificate"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="font-bold text-foreground mb-2">APEDA Registration</p>
                <p className="text-sm text-muted-foreground mb-4">Registration: RCMC/APEDA/25892/2025-2026</p>
                <p className="text-xs text-muted-foreground leading-relaxed">Agricultural & Processed Food Products Export Development Authority certification for international trade.</p>
              </div>
            </Reveal>

            {/* UDYAM Registration */}
            <Reveal delay={100} className="rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-1 group cursor-pointer" onClick={() => setSelectedImage({ src: '/cert-udyam-registration.png', alt: 'UDYAM Registration Certificate', title: 'UDYAM Registration' })}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src="/cert-udyam-registration.png"
                  alt="UDYAM Registration Certificate"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="font-bold text-foreground mb-2">UDYAM Registration</p>
                <p className="text-sm text-muted-foreground mb-4">UDYAM-HR-16-0045104 (Micro Enterprise)</p>
                <p className="text-xs text-muted-foreground leading-relaxed">Government enterprise registration certified as Micro-sized business for priority sector benefits.</p>
              </div>
            </Reveal>

            {/* IEC Code */}
            <Reveal delay={150} className="rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-1 group cursor-pointer" onClick={() => setSelectedImage({ src: '/cert-iec-code.png', alt: 'Importer-Exporter Code (IEC) Certificate', title: 'Importer-Exporter Code (IEC)' })}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src="/cert-iec-code.png"
                  alt="Importer-Exporter Code (IEC) Certificate"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="font-bold text-foreground mb-2">Importer-Exporter Code (IEC)</p>
                <p className="text-sm text-muted-foreground mb-4">IEC: AALCV6631L</p>
                <p className="text-xs text-muted-foreground leading-relaxed">Foreign Trade Directorate certification enabling authorized import-export operations globally.</p>
              </div>
            </Reveal>

            {/* Certificate of Incorporation */}
            <Reveal delay={200} className="rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 bg-card hover:-translate-y-1 group cursor-pointer" onClick={() => setSelectedImage({ src: '/cert-incorporation.png', alt: 'Certificate of Incorporation', title: 'Certificate of Incorporation' })}>
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src="/cert-incorporation.png"
                  alt="Certificate of Incorporation"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="font-bold text-foreground mb-2">Certificate of Incorporation</p>
                <p className="text-sm text-muted-foreground mb-4">Incorporation Date: 12/12/2025</p>
                <p className="text-xs text-muted-foreground leading-relaxed">Ministry of Corporate Affairs official incorporation certificate establishing legal entity status.</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-muted/50 border border-border text-center">
            <p className="text-muted-foreground mb-4">
              All certifications are current and verified. For additional documentation or inquiries, please contact our compliance team.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Request Documentation <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* ── CTA ─────────────────────────────────────── */}
      {/* <section className="py-20 bg-primary">
        <Reveal className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Need Specific Documentation?</h3>
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
      </section> */}

      {/* Image Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-card rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-background/90 hover:bg-background border border-border rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="Close image viewer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Container */}
            <div className="relative w-full aspect-[4/6] bg-muted">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Footer Info */}
            <div className="p-6 border-t border-border bg-card/50">
              <h3 className="text-xl font-bold text-foreground mb-2">{selectedImage.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">Click outside or press ESC to close</p>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
                >
                  Request Full Document
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
