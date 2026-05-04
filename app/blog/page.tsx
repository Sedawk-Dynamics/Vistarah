'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowRight, Clock, User, Tag, Search, TrendingUp, BookOpen, Filter } from 'lucide-react'

const categories = ['All', 'Market Intelligence', 'Farming & Sourcing', 'Compliance Guide', 'Company News']

const posts = [
  {
    id: 'india-turmeric-export-2026',
    type: 'article',
    category: 'Market Intelligence',
    title: "India's Turmeric Export Landscape in 2026: Opportunities and Headwinds",
    excerpt: "India accounts for over 80% of global turmeric production and export. We break down the key price drivers, top destination markets, and what buyers should expect in 2026.",
    author: 'Vistarah Research',
    date: 'Feb 18, 2026',
    readTime: '8 min read',
    img: '/blog-turmeric-export.jpg',
    featured: true,
    tags: ['Turmeric', 'Global Markets', 'Export Data'],
    catColor: '#1a3a6b',
  },
  {
    id: 'eu-mrl-spices-guide',
    type: 'article',
    category: 'Compliance Guide',
    title: "EU Maximum Residue Limits for Spices: A Practical Guide for Indian Exporters",
    excerpt: "EU MRL regulations for spices are among the world's strictest. This guide covers the key pesticide residue limits, how testing works, and exactly what you need to do to ensure your shipment clears EU customs.",
    author: 'Priya Nair, Compliance Lead',
    date: 'Feb 10, 2026',
    readTime: '12 min read',
    img: '/blog-compliance.jpg',
    featured: false,
    tags: ['EU Compliance', 'MRL', 'Regulations'],
    catColor: '#1d4ed8',
  },
  {
    id: 'high-curcumin-farming-erode',
    type: 'article',
    category: 'Farming & Sourcing',
    title: "High-Curcumin Turmeric Farming in Erode: How Varieties and Soil Affect Quality",
    excerpt: "The Erode region in Tamil Nadu produces some of the world's highest curcumin-content turmeric. We spoke with 12 farmers to understand what drives quality, and what buyers should ask for.",
    author: 'Arjun Mehta, Sourcing Team',
    date: 'Jan 28, 2026',
    readTime: '10 min read',
    img: '/blog-farming.jpg',
    featured: false,
    tags: ['Turmeric', 'Farming', 'Erode', 'Quality'],
    catColor: '#2d5a27',
  },
  {
    id: 'apeda-registration-guide',
    type: 'article',
    category: 'Compliance Guide',
    title: "How to Get APEDA Registration as a First-Time Indian Spice Exporter",
    excerpt: "APEDA registration is mandatory before you can export scheduled agricultural products from India. We walk you through the complete application process, documents needed, fees, and timelines.",
    author: 'Vistarah Operations',
    date: 'Jan 12, 2026',
    readTime: '7 min read',
    img: '/blog-compliance.jpg',
    featured: false,
    tags: ['APEDA', 'Export License', 'India Regulations'],
    catColor: '#1d4ed8',
  },
  {
    id: 'middle-east-spice-demand',
    type: 'article',
    category: 'Market Intelligence',
    title: "Why Middle East Buyers Are Shifting to Direct Indian Spice Sourcing",
    excerpt: "Gulf countries imported $2.3B in spices in 2025. An increasing share is now sourced directly from India, bypassing traditional re-export hubs. We analyze the data and what it means for suppliers.",
    author: 'Vistarah Research',
    date: 'Dec 20, 2025',
    readTime: '9 min read',
    img: '/blog-turmeric-export.jpg',
    featured: false,
    tags: ['Middle East', 'Gulf', 'Market Data'],
    catColor: '#1a3a6b',
  },
  {
    id: 'vistarah-year-in-review-2025',
    type: 'article',
    category: 'Company News',
    title: "Vistarah Global 2025 Year in Review: 30 Countries, 500+ Farmer Partners",
    excerpt: "2025 was the year we went from a scrappy 3-person team to a full operations infrastructure. Here's an honest look at what we built, what broke, and where we're headed in 2026.",
    author: 'Founder, Vistarah Global',
    date: 'Dec 10, 2025',
    readTime: '6 min read',
    img: '/hero-1.jpg',
    featured: false,
    tags: ['Company Update', 'Year Review', 'Growth'],
    catColor: '#7c3aed',
  },
]

export default function BlogPage() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = posts.filter(p => {
    const matchCat = category === 'All' || p.category === category
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  const featured = posts.find(p => p.featured)
  const regular = filtered.filter(p => !p.featured)

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/blog-hero.jpg" alt="Spice market" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/96 to-primary" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8 animate-fade-in-down">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Vistarah Intelligence</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Blog &amp; Articles
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            Trade intelligence, compliance guides, and sourcing stories from Vistarah's team on the ground.
          </p>
          <div className="relative max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '250ms' }}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input type="text" placeholder="Search articles, topics, tags..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/35 focus:outline-none focus:border-accent transition-all text-sm" />
          </div>
        </div>
      </section>

      {/* ── Filter bar ──────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${category === cat ? 'bg-primary text-primary-foreground border-primary' : 'bg-background text-muted-foreground border-border hover:border-primary/50'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Featured post */}
        {!search && category === 'All' && featured && (
          <div className="mb-16">
            <Link href={`/blog/${featured.id}`} className="group block">
              <div className="grid lg:grid-cols-2 bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <Image src={featured.img} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground">Featured</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: featured.catColor }}>{featured.category}</span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.tags.map(t => (
                      <span key={t} className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight text-balance group-hover:text-primary transition-colors">{featured.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{featured.author}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid */}
        <div>
          {(search || category !== 'All') && (
            <p className="text-muted-foreground text-sm mb-8">{filtered.length} {filtered.length === 1 ? 'result' : 'results'}</p>
          )}
          {(!search && category === 'All') && (
            <h3 className="text-xl font-bold mb-8">Latest Articles</h3>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(!search && category === 'All' ? regular : filtered).map((post, i) => (
              <div key={post.id}>
                <Link href={`/blog/${post.id}`} className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white" style={{ background: post.catColor }}>{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-foreground text-base leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span className="text-muted-foreground/60">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-semibold">No posts found</p>
              <p className="text-sm mt-2">Try a different category or search term</p>
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-primary rounded-3xl p-12 text-center">
          <TrendingUp className="w-10 h-10 text-accent mx-auto mb-5" />
          <h3 className="text-3xl font-bold text-white mb-3">Get Trade Intelligence in Your Inbox</h3>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">Monthly insights on Indian spice markets, compliance updates, and sourcing strategies. Read by 2,000+ trade professionals.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your business email" className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/35 focus:outline-none focus:border-accent text-sm" />
            <button type="submit" className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-xl hover:bg-accent/90 transition-all hover:scale-105 whitespace-nowrap text-sm">
              Subscribe Free
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  )
}
