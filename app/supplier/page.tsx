'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Leaf, Globe, TrendingUp, Users, HeartHandshake, Sprout, IndianRupee, BadgeCheck, Truck, ChevronDown, Star, X, Menu, Phone, FileText, ShieldCheck } from 'lucide-react'



import Navigation from '@/components/navigation'
import Footer from '@/components/footer'



/* ── Scroll reveal ──────────────────────────────────────────── */
function Reveal({ children, delay = 0, from = 'bottom', className = '' }: { children: React.ReactNode; delay?: number; from?: 'bottom' | 'left' | 'right'; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const hidden = from === 'bottom' ? 'opacity-0 translate-y-10' : from === 'left' ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0' : hidden} ${className}`}>
      {children}
    </div>
  )
}

/* ── Data ───────────────────────────────────────────────────── */
const journey = [
  { n: '01', icon: FileText, title: 'Submit Profile', desc: 'Share your farm location, crop types, annual yield, existing certifications, and any quality infrastructure you have in place.' },
  { n: '02', icon: Phone, title: 'Discovery Call', desc: 'Our sourcing team schedules a call to understand your capacity, requirements, and to explain our quality and compliance standards in detail.' },
  { n: '03', icon: BadgeCheck, title: 'Quality Audit', desc: 'We conduct an on-site or remote quality audit of your facilities, processes, and current produce samples to assess partnership fit.' },
  { n: '04', icon: HeartHandshake, title: 'Onboarding', desc: 'Sign the partnership agreement. We brief you on packaging, labeling, testing protocols, and our documentation standards.' },
  { n: '05', icon: Globe, title: 'First Shipment', desc: 'Your produce reaches international buyers. You receive timely payments with transparent pricing. We handle all export logistics.' },
]

const benefits = [
  { icon: IndianRupee, title: 'Premium Pricing', desc: 'Access international pricing — consistently 20–35% above domestic market rates. Transparent, fixed pricing per season.', color: '#2d5a27' },
  { icon: Globe, title: 'Direct Global Access', desc: 'Your produce reaches buyers in 30+ countries. We manage all export logistics, customs, and compliance so you don\'t have to.', color: '#b35a1a' },
  { icon: TrendingUp, title: 'Guaranteed Volumes', desc: 'We work on advance purchase orders. Know your volumes 3–6 months ahead. Plan your cultivation with confidence.', color: '#2d5a27' },
  { icon: ShieldCheck, title: 'Certification Support', desc: 'We help you navigate APEDA, FSSAI, and Organic certifications. Our team guides the paperwork so you focus on farming.', color: '#b35a1a' },
  { icon: Users, title: 'Technical Training', desc: 'Access workshops on post-harvest handling, grading standards, pesticide safety, and quality management — fully funded by Vistarah.', color: '#2d5a27' },
  { icon: Truck, title: 'Pickup at Farm Gate', desc: 'We arrange pickup from your farm or cooperative. No transport hassle, no middleman loss. Just fair trade at your doorstep.', color: '#b35a1a' },
]

const stories = [
  { name: 'Rajan Patel', location: 'Erode, Tamil Nadu', crop: 'Turmeric', years: '3 years', increase: '+42%', text: 'Before Vistarah, I was selling at local mandis at ₹80/kg. Now I\'m getting ₹115–120/kg consistently because my produce meets export standards. They trained us on grading and it made all the difference.', avatar: 'R' },
  { name: 'Shantabai Kulkarni', location: 'Sangli, Maharashtra', crop: 'High-Curcumin Turmeric', years: '2 years', increase: '+38%', text: 'The guarantee of advance orders means I can plan my crop properly. I know 5 months in advance what volume to grow and at what price. That certainty changed everything for our family.', avatar: 'S' },
  { name: 'Cooperative Society', location: 'Salem, Tamil Nadu', crop: 'Organic Turmeric', years: '1.5 years', increase: '+55%', text: 'As a farmer cooperative of 45 members, partnering with Vistarah gave us collective bargaining power and access to markets we could never reach alone. Their certification support helped 12 of our members get APEDA registration.', avatar: 'C' },
]

const criteria = [
  'Minimum 1 acre of cultivation area',
  'Willingness to follow quality & pesticide safety guidelines',
  'Access to basic post-harvest storage or drying infrastructure',
  'Valid Aadhaar / Farm registration document',
  'Ability to produce 500 kg minimum per harvest cycle',
]

/* ── Page ───────────────────────────────────────────────────── */
export default function SupplierPage() {
  const [form, setForm] = useState({ name: '', phone: '', village: '', crop: '', area: '', message: '' })

  return (
    <main className="min-h-screen bg-[#faf9f5] text-gray-900 font-sans overflow-x-hidden">
      <Navigation />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image src="/supplier-hero.jpg" alt="Indian turmeric farmer" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3d16]/95 via-[#1a3d16]/80 to-transparent" />
        </div>
        {/* floating leaf shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#2d5a27]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-1/3 w-48 h-48 bg-[#d4821e]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d5a27]/40 border border-[#2d5a27]/50 mb-8 animate-fade-in-down">
              <Sprout className="w-4 h-4 text-[#7ec87a]" />
              <span className="text-[#7ec87a] text-xs font-semibold uppercase tracking-widest">Grow with the World</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Take Your Harvest <span className="text-[#f0a940]">Global</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Join Vistarah Global's supplier network and earn 20–55% more for your produce by connecting directly with premium international buyers in 30+ countries.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
              {['+₹30–40/kg premium', 'Advance purchase orders', '100% farm gate pickup', 'Certification support', 'Training & workshops', 'Trusted 500+ farmers'].map(b => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7ec87a] shrink-0" />
                  <span className="text-white/70 text-sm">{b}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
              <a href="#apply" className="flex items-center gap-2 bg-[#f0a940] text-[#1a3d16] font-bold px-7 py-3.5 rounded-xl hover:bg-[#e09830] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#f0a940]/30 group">
                Apply as Supplier <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#journey" className="flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all">
                See How It Works <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────── */}
      <section className="bg-[#2d5a27] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '500+', label: 'Supplier Partners' },
              { val: '₹120/kg', label: 'Average Rate (Turmeric)' },
              { val: '30+', label: 'Export Countries' },
              { val: '100%', label: 'On-time Payments' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 80} className="text-center">
                <p className="text-3xl font-bold text-[#f0a940]">{s.val}</p>
                <p className="text-white/65 text-sm mt-1">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Partner ─────────────────────────────── */}
      <section id="why-partner" className="py-24 bg-[#faf9f5]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-[#2d5a27] text-xs font-bold uppercase tracking-widest">Why Partner With Us</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">More Than Just a Buyer</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We invest in your success — because sustainable exports start with empowered farmers.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-default">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: b.color + '15' }}>
                  <b.icon className="w-7 h-7" style={{ color: b.color }} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey ─────────────────────────────────── */}
      <section id="journey" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-[#2d5a27] text-xs font-bold uppercase tracking-widest">Onboarding Process</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Your Journey to Global Markets</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A simple, 5-step process to becoming a Vistarah Global verified supplier partner.</p>
          </Reveal>
          <div className="space-y-6 max-w-3xl mx-auto">
            {journey.map((step, i) => (
              <Reveal key={step.n} delay={i * 100} from={i % 2 === 0 ? 'left' : 'right'}>
                <div className="flex gap-6 bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-[#2d5a27]/20 transition-all duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[#2d5a27]/10 flex items-center justify-center group-hover:bg-[#2d5a27] transition-all duration-300">
                      <step.icon className="w-6 h-6 text-[#2d5a27] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-[#f0a940] bg-[#f0a940]/10 px-2 py-0.5 rounded-full">Step {step.n}</span>
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner Stories ─────────────────────────── */}
      {/* <section id="stories" className="py-24 bg-[#1a3d16]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-[#f0a940] text-xs font-bold uppercase tracking-widest">Real Stories</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-4">Suppliers Who Made the Leap</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((s, i) => (
              <Reveal key={s.name} delay={i * 120} className="bg-white/8 border border-white/10 rounded-2xl p-8 hover:bg-white/12 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#f0a940]/20 flex items-center justify-center font-bold text-[#f0a940] text-lg">
                    {s.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{s.name}</p>
                    <p className="text-white/50 text-xs">{s.location} · {s.crop}</p>
                  </div>
                  <span className="ml-auto bg-[#2d5a27] text-[#7ec87a] text-xs font-bold px-3 py-1 rounded-full">{s.increase}</span>
                </div>
                <p className="text-white/65 text-sm leading-relaxed italic">"{s.text}"</p>
                <p className="text-white/35 text-xs mt-4">Partner for {s.years}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Eligibility ─────────────────────────────── */}
      <section className="py-20 bg-[#faf9f5]">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center mb-10">
            <span className="text-[#2d5a27] text-xs font-bold uppercase tracking-widest">Eligibility</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-4">Who Can Apply?</h2>
            <p className="text-gray-500">We partner with individual suppliers, farmer producer organizations (FPOs), cooperatives, and agri-processors across India.</p>
          </Reveal>
          <Reveal className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <div className="space-y-4">
              {criteria.map((c) => (
                <div key={c} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#2d5a27] shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">{c}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-6 pt-6 border-t border-gray-100">
              Don't meet all criteria yet? Apply anyway — we may be able to support your capacity building as part of onboarding.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Apply Form ──────────────────────────────── */}
      <section id="apply" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span className="text-[#2d5a27] text-xs font-bold uppercase tracking-widest">Apply Now</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Become a Vistarah Supplier Partner</h2>
            <p className="text-gray-500">Fill in your details and our sourcing team will contact you within 72 hours.</p>
          </Reveal>
          <Reveal className="bg-[#1a3d16] rounded-3xl p-10 shadow-2xl">
            <form className="grid md:grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
              {[
                { key: 'name', label: 'Full Name', placeholder: 'Rajan Patel' },
                { key: 'phone', label: 'Phone / WhatsApp', placeholder: '+91 98765 43210' },
                { key: 'village', label: 'Village / District / State', placeholder: 'Erode, Tamil Nadu' },
                { key: 'area', label: 'Total Farm Area (Acres)', placeholder: '5 acres' },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-white/70 text-xs font-semibold mb-2 uppercase tracking-wide">{f.label}</label>
                  <input type="text" placeholder={f.placeholder} value={form[f.key as keyof typeof form]} onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f0a940] focus:ring-1 focus:ring-[#f0a940] transition-all" />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block text-white/70 text-xs font-semibold mb-2 uppercase tracking-wide">Primary Crop(s) You Grow</label>
                <input type="text" placeholder="e.g. Turmeric, Coriander, Cumin" value={form.crop} onChange={e => setForm(prev => ({ ...prev, crop: e.target.value }))}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f0a940] transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-white/70 text-xs font-semibold mb-2 uppercase tracking-wide">Tell us about your current setup</label>
                <textarea rows={3} placeholder="Current buyers, storage facilities, certifications you hold, why you want to export..." value={form.message} onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f0a940] transition-all resize-none" />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-[#f0a940] text-[#1a3d16] font-bold py-4 rounded-xl hover:bg-[#e09830] transition-all hover:shadow-xl hover:shadow-[#f0a940]/30 hover:scale-[1.01] flex items-center justify-center gap-2 group">
                  Submit Supplier Application <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-white/40 text-xs text-center mt-3">Our sourcing team will call you within 72 hours. Available in Hindi &amp; English.</p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer></Footer>
    </main>
  )
}
