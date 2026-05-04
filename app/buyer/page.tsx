'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, CheckCircle, ShieldCheck, Globe, TrendingUp, Star,
  FileText, Clock, Truck, Award, ChevronDown, Package, BarChart3,
  Users, Zap, X, Menu
} from 'lucide-react'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'




/* ── Scroll animation hook ──────────────────────────────────── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.12 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function Reveal({ children, delay = 0, from = 'bottom', className = '' }: { children: React.ReactNode; delay?: number; from?: 'bottom' | 'left' | 'right'; className?: string }) {
  const { ref, visible } = useScrollReveal()
  const base = 'transition-all duration-700 ease-out'
  const hidden = from === 'bottom' ? 'opacity-0 translate-y-10' : from === 'left' ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`${base} ${visible ? 'opacity-100 translate-x-0 translate-y-0' : hidden} ${className}`}>
      {children}
    </div>
  )
}

/* ── Data ───────────────────────────────────────────────────── */
const products = [
  { name: 'Turmeric Powder', origin: 'Erode, Tamil Nadu', curcumin: '3–5%', moisture: '≤10%', lead: '14–21 days', certs: ['FSSAI', 'APEDA', 'ISO 22000'], badge: 'Best Seller', img: '/product-turmeric.jpg', color: '#f59e0b' },
  { name: 'Steam-Sterilized Turmeric', origin: 'Salem, Tamil Nadu', curcumin: '3–4%', moisture: '≤8%', lead: '18–25 days', certs: ['FSSAI', 'EU Compliant', 'APEDA'], badge: 'EU Ready', img: '/turmeric-sterilized.jpg', color: '#10b981' },
  { name: 'High-Curcumin Turmeric', origin: 'Sangli, Maharashtra', curcumin: '5–7%', moisture: '≤9%', lead: '21–28 days', certs: ['USDA Organic', 'FSSAI', 'ISO'], badge: 'Premium', img: '/turmeric-powder.jpg', color: '#1a3a6b' },
]

const steps = [
  { n: '01', title: 'Submit Inquiry', desc: 'Share your product requirements, volumes, destination country, and timeline using our structured inquiry form.', icon: FileText },
  { n: '02', title: 'Receive Proposal', desc: 'Within 48 hours, get a detailed commercial proposal with pricing, specs, samples policy, and compliance docs.', icon: BarChart3 },
  { n: '03', title: 'Sample & Approve', desc: 'We ship pre-shipment samples with full test reports. Review and approve before committing to full order.', icon: Package },
  { n: '04', title: 'Order & Track', desc: 'Confirm your PO. We handle production, quality checks, documentation, and real-time shipment tracking.', icon: Truck },
]

const testimonials = [
  { name: 'Ahmad Al-Rashidi', role: 'Procurement Head', company: 'Gulf Spice Trading Co.', country: 'UAE', text: 'Vistarah\'s documentation quality is outstanding. Every shipment arrives with complete COAs, Phytosanitary certs, and customs docs pre-prepared. Zero delays at our port.', rating: 5 },
  { name: 'Elena Marchetti', role: 'Category Manager', company: 'Naturalia Srl', country: 'Italy', text: 'We switched from 3 different Indian suppliers to Vistarah. The consistency in curcumin content batch after batch is what won us over. Their QC process is world-class.', rating: 5 },
  { name: 'David Kim', role: 'Founder', company: 'PureSpice USA', country: 'United States', text: 'They understood our FDA compliance requirements immediately and prepared the documentation without us having to chase anything. Real professionals.', rating: 5 },
]

const stats = [
  { val: '30+', label: 'Active Buyer Countries' },
  { val: '500+', label: 'MT Exported Annually' },
  { val: '98%', label: 'On-time Delivery' },
  { val: '100%', label: 'Documentation Accuracy' },
]

const compliance = [
  { title: 'FSSAI Certified', desc: 'All products carry valid FSSAI licenses meeting India\'s Food Safety Standards Authority requirements.' },
  { title: 'APEDA Registered', desc: 'Registered exporter under Agricultural & Processed Food Products Export Development Authority.' },
  { title: 'Phytosanitary Certification', desc: 'Every shipment includes a valid Phytosanitary Certificate issued by the Plant Quarantine Authority.' },
  { title: 'EU / US FDA Compliant', desc: 'We pre-check all EU MRL and FDA requirements before dispatch. We handle the paperwork — you focus on your business.' },
  { title: 'ISO 22000 QMS', desc: 'Quality management aligned with ISO 22000 food safety standards across procurement, processing and dispatch.' },
  { title: 'Pesticide Residue Testing', desc: 'Third-party tested for 200+ pesticide residues. Test reports available for every batch before shipment.' },
]

/* ── Page ───────────────────────────────────────────────────── */
export default function BuyerPage() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [formState, setFormState] = useState({ name: '', company: '', email: '', country: '', product: '', volume: '', message: '' })

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      < Navigation />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f2346] pt-24">
        <div className="absolute inset-0">
          <Image src="/buyer-hero.jpg" alt="Global trade partnership" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2346] via-[#0f2346]/90 to-[#0f2346]/50" />
        </div>
        {/* animated orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c97d2e]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c97d2e]/15 border border-[#c97d2e]/30 mb-8 animate-fade-in-down">
              <span className="w-2 h-2 rounded-full bg-[#c97d2e] animate-pulse" />
              <span className="text-[#c97d2e] text-xs font-semibold uppercase tracking-widest">Trusted by 30+ Countries</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Source India's Finest Spices with <span className="text-[#c97d2e]">Zero Compliance Risk</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Vistarah Global delivers export-grade turmeric and agri-commodities with full documentation, third-party testing, and end-to-end logistics support — built for international buyers who demand consistency.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <a href="#request-quote" className="flex items-center gap-2 bg-[#c97d2e] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#b36e25] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#c97d2e]/30 group">
                Request a Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#products" className="flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all">
                Browse Products <ChevronDown className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/10 animate-fade-in" style={{ animationDelay: '400ms' }}>
              {['FSSAI Certified', 'APEDA Registered', 'EU/US FDA Compliant', 'ISO 22000'].map(c => (
                <div key={c} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span className="text-white/60 text-xs font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live stats panel */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            {stats.map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <p className="text-4xl font-bold text-[#c97d2e] mb-1">{s.val}</p>
                <p className="text-white/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/40" />
        </div>
      </section>

      {/* ── Products ────────────────────────────────── */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-[#c97d2e] text-xs font-bold uppercase tracking-widest">Our Products</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Export-Ready Product Catalog</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Each product is sourced, processed, and documented to meet the most demanding international quality standards.</p>
          </Reveal>

          {/* Tabs */}
          <div className="flex gap-3 justify-center mb-10 flex-wrap">
            {products.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveProduct(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${activeProduct === i ? 'bg-[#1a3a6b] text-white border-[#1a3a6b] shadow-lg' : 'bg-white text-gray-600 border-gray-200 hover:border-[#1a3a6b]'}`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Active product detail */}
          <Reveal key={activeProduct} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <Image src={products[activeProduct].img} alt={products[activeProduct].name} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: products[activeProduct].color }}>
                    {products[activeProduct].badge}
                  </span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{products[activeProduct].name}</h3>
                <p className="text-gray-400 text-sm mb-8 flex items-center gap-2"><Globe className="w-4 h-4" /> Origin: {products[activeProduct].origin}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { l: 'Curcumin Content', v: products[activeProduct].curcumin },
                    { l: 'Max Moisture', v: products[activeProduct].moisture },
                    { l: 'Lead Time', v: products[activeProduct].lead },
                    { l: 'Min Order Qty', v: '1 MT' },
                  ].map(item => (
                    <div key={item.l} className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs text-gray-400 mb-1">{item.l}</p>
                      <p className="font-bold text-gray-900">{item.v}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {products[activeProduct].certs.map(c => (
                    <span key={c} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                      <CheckCircle className="w-3 h-3" /> {c}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#request-quote" className="flex-1 text-center bg-[#1a3a6b] text-white font-semibold py-3 rounded-xl hover:bg-[#152e56] transition-all hover:shadow-lg">
                    Request Quote
                  </a>
                  <a href="#" className="flex-1 text-center border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:border-[#1a3a6b] transition-all">
                    Download Spec Sheet
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Compliance ──────────────────────────────── */}
      <section id="compliance" className="py-24 bg-[#0f2346]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-[#c97d2e] text-xs font-bold uppercase tracking-widest">Compliance First</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-4">Built for International Trade</h2>
            <p className="text-white/60 max-w-xl mx-auto">We understand the regulatory landscape of every target market. Our documentation and quality systems are built to match your country's import requirements — not just India's export norms.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliance.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                <ShieldCheck className="w-8 h-8 text-[#c97d2e] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{c.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/certifications" className="inline-flex items-center gap-2 border border-[#c97d2e]/50 text-[#c97d2e] px-7 py-3.5 rounded-xl hover:bg-[#c97d2e]/10 transition-all font-semibold">
              View All Certifications <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────── */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-[#c97d2e] text-xs font-bold uppercase tracking-widest">Process</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">From Inquiry to Delivery</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A streamlined, transparent sourcing journey designed to save you time and eliminate uncertainty.</p>
          </Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#c97d2e]/30 to-transparent" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 100} className="text-center group">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#f0f4ff] group-hover:bg-[#1a3a6b] transition-all duration-300 mb-5 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#1a3a6b]/20">
                    <step.icon className="w-8 h-8 text-[#1a3a6b] group-hover:text-white transition-colors" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#c97d2e] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────── */}
      {/* <section id="case-studies" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-[#c97d2e] text-xs font-bold uppercase tracking-widest">Success Stories</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">What Our Buyers Say</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, s) => <Star key={s} className="w-4 h-4 fill-[#c97d2e] text-[#c97d2e]" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#1a3a6b]/10 flex items-center justify-center font-bold text-[#1a3a6b] text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}, {t.company} · {t.country}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Quote Form ──────────────────────────────── */}
      <section id="request-quote" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span className="text-[#c97d2e] text-xs font-bold uppercase tracking-widest">Get Started</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Request a Sourcing Quote</h2>
            <p className="text-gray-500">Fill in your requirements and we'll respond within 48 business hours with a detailed proposal.</p>
          </Reveal>
          <Reveal className="bg-[#0f2346] rounded-3xl p-10 shadow-2xl">
            <form className="grid md:grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
              {[
                { key: 'name', label: 'Full Name', placeholder: 'John Smith', type: 'text' },
                { key: 'company', label: 'Company Name', placeholder: 'Acme Trading Ltd.', type: 'text' },
                { key: 'email', label: 'Business Email', placeholder: 'john@company.com', type: 'email' },
                { key: 'country', label: 'Destination Country', placeholder: 'United States', type: 'text' },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-white/70 text-xs font-semibold mb-2 uppercase tracking-wide">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={formState[f.key as keyof typeof formState]} onChange={e => setFormState(prev => ({ ...prev, [f.key]: e.target.value }))}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c97d2e] focus:ring-1 focus:ring-[#c97d2e] transition-all" />
                </div>
              ))}
              <div>
                <label className="block text-white/70 text-xs font-semibold mb-2 uppercase tracking-wide">Product of Interest</label>
                <select value={formState.product} onChange={e => setFormState(prev => ({ ...prev, product: e.target.value }))}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c97d2e] transition-all">
                  <option value="" className="text-gray-900">Select product...</option>
                  {products.map(p => <option key={p.name} value={p.name} className="text-gray-900">{p.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-xs font-semibold mb-2 uppercase tracking-wide">Estimated Volume</label>
                <input type="text" placeholder="e.g. 5 MT per month" value={formState.volume} onChange={e => setFormState(prev => ({ ...prev, volume: e.target.value }))}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c97d2e] transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-white/70 text-xs font-semibold mb-2 uppercase tracking-wide">Additional Requirements</label>
                <textarea rows={3} placeholder="Packaging preferences, labeling requirements, special certifications needed..." value={formState.message} onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c97d2e] transition-all resize-none" />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-[#c97d2e] text-white font-bold py-4 rounded-xl hover:bg-[#b36e25] transition-all hover:shadow-xl hover:shadow-[#c97d2e]/30 hover:scale-[1.01] flex items-center justify-center gap-2 group">
                  Submit Sourcing Request <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-white/40 text-xs text-center mt-3">We respond within 48 business hours. No spam, ever.</p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer></Footer>
    </main>
  )
}
