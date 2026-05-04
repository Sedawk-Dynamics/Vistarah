'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowRight, MapPin, Clock, Briefcase, Users, Zap, Heart, Globe, TrendingUp, Star, ChevronDown, X, Send } from 'lucide-react'

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
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0' : hidden} ${className}`}>
      {children}
    </div>
  )
}

const departments = ['All', 'Operations', 'Sales & BD', 'Quality', 'Technology', 'Marketing']

const jobs = [
  {
    id: 'export-ops-manager', title: 'Export Operations Manager', dept: 'Operations', location: 'Gurgaon, India', type: 'Full-time', level: 'Mid-Senior',
    description: 'Own end-to-end export operations for our growing client portfolio. Coordinate with suppliers, freight forwarders, customs agents, and buyers across 15+ countries.',
    responsibilities: ['Manage 20+ active export orders simultaneously', 'Coordinate documentation — BoL, Phytosanitary certs, COA, APEDA filings', 'Build and maintain freight forwarder relationships', 'Ensure on-time shipment delivery with zero compliance lapses'],
    requirements: ['4+ years in export operations / supply chain', 'Strong knowledge of INCOTERMS, LC documentation, and customs clearance', 'Experience with spices or agri-commodities preferred', 'Excellent English communication skills'],
    badge: 'Hiring Now', badgeColor: '#10b981',
  },
  {
    id: 'intl-sales-exec', title: 'International Sales Executive', dept: 'Sales & BD', location: 'Remote (India-based)', type: 'Full-time', level: 'Junior-Mid',
    description: 'Identify and develop new buyer relationships across Europe, the Middle East, and Southeast Asia. Own the full sales cycle from prospecting to first PO.',
    responsibilities: ['Build a qualified pipeline of international buyers via LinkedIn, trade shows, and cold outreach', 'Conduct product demos, send commercial proposals, and negotiate terms', 'Hit monthly targets for new buyer acquisition and revenue', 'Maintain CRM records and weekly reporting'],
    requirements: ['2+ years in B2B sales, preferably in food commodities', 'Excellent spoken and written English; additional language a plus', 'Comfortable with cold outreach and virtual sales calls', 'Understanding of spice / agri-commodity trade preferred'],
    badge: 'High Priority', badgeColor: '#c97d2e',
  },
  {
    id: 'qc-specialist', title: 'Quality Control Specialist', dept: 'Quality', location: 'Erode / Salem, Tamil Nadu', type: 'Full-time', level: 'Mid',
    description: 'Execute quality audits at supplier farms and processing facilities. Ensure every batch shipped meets international standards for moisture, curcumin content, microbial limits, and pesticide residues.',
    responsibilities: ['Conduct pre-shipment quality audits at farms and processors', 'Coordinate third-party lab testing and interpret COA reports', 'Maintain QC documentation in line with ISO 22000', 'Train supplier partners on quality protocols and grading standards'],
    requirements: ['B.Sc / M.Sc in Food Technology, Agriculture, or related field', '2+ years in QC/QA in food industry', 'Knowledge of spice grading standards (AGMARK, ASTA)', 'Willingness to travel to farm locations 60% of the time'],
    badge: 'Open', badgeColor: '#6366f1',
  },
  {
    id: 'fullstack-dev', title: 'Full Stack Developer', dept: 'Technology', location: 'Remote', type: 'Full-time', level: 'Mid',
    description: 'Build and maintain internal tools, buyer/supplier portals, and data pipelines that power Vistarah\'s operations. Work closely with the ops and sales team to automate manual workflows.',
    responsibilities: ['Build features for buyer and supplier portals', 'Develop shipment tracking and order management dashboards', 'Integrate with freight, customs, and ERP APIs', 'Maintain CI/CD pipelines and deployment infrastructure on Vercel / AWS'],
    requirements: ['3+ years with React / Next.js and Node.js', 'Database experience (PostgreSQL or MongoDB)', 'Familiarity with REST APIs and webhook integrations', 'Experience building B2B SaaS tools a strong plus'],
    badge: 'Open', badgeColor: '#6366f1',
  },
  {
    id: 'content-strategist', title: 'Content & SEO Strategist', dept: 'Marketing', location: 'Remote (India-based)', type: 'Full-time', level: 'Junior-Mid',
    description: 'Own Vistarah\'s content presence — from trade intelligence blog posts and buyer guides to video scripts and LinkedIn thought leadership. Help build the most trusted voice in Indian spice exports.',
    responsibilities: ['Produce 4–6 high-quality blog posts per month targeting buyer/supplier keywords', 'Script and coordinate V-log (video blog) content production', 'Own LinkedIn company page content and engagement', 'Track SEO rankings and report on organic growth monthly'],
    requirements: ['2+ years in content marketing or SEO, preferably in B2B', 'Strong writing skills with ability to simplify trade/compliance concepts', 'Familiarity with tools like Ahrefs, SEMrush, and Search Console', 'Interest in global trade or agri-commodities'],
    badge: 'New', badgeColor: '#8b5cf6',
  },
  {
    id: 'sourcing-coordinator', title: 'Sourcing & Supplier Relations Coordinator', dept: 'Operations', location: 'Gurgaon / Field (TN, MH)', type: 'Full-time', level: 'Junior',
    description: 'Support our supplier onboarding, quality audit, and procurement coordination activities. Be the first point of contact for our growing network of 500+ farmer partners.',
    responsibilities: ['Onboard new suppliers — collect KYC, run quality profile assessments', 'Coordinate field audit schedules with the QC team', 'Maintain supplier database and communication cadence via WhatsApp / email', 'Track crop availability, pricing, and harvest schedules'],
    requirements: ['1+ years in sourcing, procurement, or agri-business', 'Fluency in Hindi; Tamil or Marathi a bonus', 'Willingness to travel to farm regions 30% of the time', 'Strong organizational skills and attention to detail'],
    badge: 'Open', badgeColor: '#6366f1',
  },
]

const perks = [
  { icon: Globe, title: 'Remote-Friendly', desc: 'Most roles are remote or hybrid. Work from wherever you do your best thinking.' },
  { icon: TrendingUp, title: 'Equity Potential', desc: 'Key hires receive ESOPs. Build real wealth as Vistarah scales globally.' },
  { icon: Heart, title: 'Health Coverage', desc: 'Comprehensive health insurance for you and your immediate family from Day 1.' },
  { icon: Zap, title: 'Learning Budget', desc: '₹50,000 annual learning budget for courses, conferences, and certifications.' },
  { icon: Users, title: 'Small Team, Big Impact', desc: 'Work directly with founders. No bureaucracy. Your ideas ship fast.' },
  { icon: Star, title: 'International Exposure', desc: 'Work across 30+ countries from India. Build a truly global career.' },
]

const values = [
  { n: '01', title: 'Move Fast, Own It', desc: 'We\'re a small team doing big things. You\'ll own your domain from day one. No waiting for approvals — just deliver.' },
  { n: '02', title: 'Integrity is Non-negotiable', desc: 'In trade, your word is everything. We operate with complete transparency — with buyers, suppliers, and each other.' },
  { n: '03', title: 'Curiosity Over Credentials', desc: 'We hire people who read, ask questions, and want to understand how global trade actually works. Degrees matter less than drive.' },
  { n: '04', title: 'Suppliers First', desc: 'Every decision we make is filtered through the lens of "does this help our supplier partners thrive?" That keeps us grounded.' },
]

export default function CareersPage() {
  const [dept, setDept] = useState('All')
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null)
  const [applied, setApplied] = useState(false)
  const [appForm, setAppForm] = useState({ name: '', email: '', linkedin: '', note: '' })

  const filtered = jobs.filter(j => dept === 'All' || j.dept === dept)

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/careers-hero.jpg" alt="Vistarah team" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        </div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8 animate-fade-in-down">
            <Briefcase className="w-4 h-4 text-accent" />
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">{jobs.length} Open Positions</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-balance animate-fade-in-up">
            Build the Future of<br />Indian Spice Exports
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            Join a small, high-ownership team doing real work that connects Indian farmers with global markets. We're growing fast and building something that matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '250ms' }}>
            <a href="#openings" className="flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-7 py-3.5 rounded-xl hover:bg-accent/90 transition-all hover:scale-105 group">
              See Open Roles <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#culture" className="flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all">
              Our Culture
            </a>
          </div>
        </div>
      </section>

      {/* ── Perks ───────────────────────────────────── */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Work Here</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="bg-card border border-border rounded-2xl p-7 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                  <p.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture ─────────────────────────────────── */}
      <section id="culture" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Our Culture</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">How We Work</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 80} from={i % 2 === 0 ? 'left' : 'right'} className="bg-background border border-border rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <span className="text-5xl font-black text-accent/20">{v.n}</span>
                <h3 className="font-bold text-foreground text-lg mt-2 mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ──────────────────────────────── */}
      <section id="openings" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Open Positions</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">Find Your Role</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Don't see a perfect fit? We hire for attitude and coachability — send us an open application at <a href="mailto:careers@vistarahglobal.com" className="text-accent hover:underline">careers@vistarahglobal.com</a></p>
          </Reveal>

          {/* Dept filter */}
          <div className="flex gap-2 flex-wrap justify-center mb-10">
            {departments.map(d => (
              <button key={d} onClick={() => setDept(d)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${dept === d ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-muted-foreground border-border hover:border-primary/50'}`}>
                {d}
              </button>
            ))}
          </div>

          {/* Job cards */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {filtered.map((job, i) => (
              <Reveal key={job.id} delay={i * 60}>
                <div className="bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedJob(job)}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: job.badgeColor + '20', color: job.badgeColor }}>{job.badge}</span>
                        <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">{job.dept}</span>
                      </div>
                      <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs">
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                        <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" />{job.level}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all group-hover:scale-105 text-sm shrink-0">
                      View & Apply <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4 line-clamp-2">{job.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Job Detail Modal ─────────────────────────── */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => { setSelectedJob(null); setApplied(false) }}>
          <div className="bg-card border border-border rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-card border-b border-border px-8 py-5 flex items-start justify-between rounded-t-3xl">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: selectedJob.badgeColor + '20', color: selectedJob.badgeColor }}>{selectedJob.badge}</span>
                  <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">{selectedJob.dept}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-2">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{selectedJob.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{selectedJob.type}</span>
                </div>
              </div>
              <button onClick={() => { setSelectedJob(null); setApplied(false) }} className="p-2 rounded-xl hover:bg-muted transition-colors">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="p-8 space-y-6">
              <p className="text-muted-foreground text-sm leading-relaxed">{selectedJob.description}</p>
              <div>
                <h4 className="font-bold text-foreground mb-3">What you'll do</h4>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-3">What we're looking for</h4>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick apply */}
              {!applied ? (
                <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                  <h4 className="font-bold text-foreground mb-4">Quick Apply</h4>
                  <div className="space-y-3">
                    {[
                      { key: 'name', label: 'Full Name', placeholder: 'Jane Smith' },
                      { key: 'email', label: 'Email', placeholder: 'jane@example.com' },
                      { key: 'linkedin', label: 'LinkedIn / Portfolio URL', placeholder: 'https://linkedin.com/in/...' },
                    ].map(f => (
                      <input key={f.key} type="text" placeholder={f.placeholder} value={appForm[f.key as keyof typeof appForm]}
                        onChange={e => setAppForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-all" />
                    ))}
                    <textarea rows={2} placeholder="Why are you excited about this role?" value={appForm.note}
                      onChange={e => setAppForm(prev => ({ ...prev, note: e.target.value }))}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-all resize-none" />
                    <button onClick={() => setApplied(true)}
                      className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
                      Submit Application <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-7 h-7 text-green-600" />
                  </div>
                  <h4 className="font-bold text-green-800 text-lg mb-2">Application Submitted!</h4>
                  <p className="text-green-700 text-sm">We'll review your application and reach out within 5 business days. Thanks for your interest in Vistarah!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
