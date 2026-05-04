'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowLeft, Clock, User, Calendar, Tag, Share2, ArrowRight, BookOpen } from 'lucide-react'

const posts: Record<string, {
  type: string; category: string; catColor: string; title: string; excerpt: string;
  author: string; authorRole: string; date: string; readTime: string; img: string;
  tags: string[];
  content: { heading?: string; body: string }[];
}> = {
  'india-turmeric-export-2026': {
    type: 'article', category: 'Market Intelligence', catColor: '#1a3a6b',
    title: "India's Turmeric Export Landscape in 2026: Opportunities and Headwinds",
    excerpt: "India accounts for over 80% of global turmeric production and export. We break down the key price drivers, top destination markets, and what buyers should expect in 2026.",
    author: 'Vistarah Research', authorRole: 'Trade Intelligence Team',
    date: 'Feb 18, 2026', readTime: '8 min read', img: '/blog-turmeric-export.jpg',
    tags: ['Turmeric', 'Global Markets', 'Export Data'],
    content: [
      { heading: 'The State of Indian Turmeric Exports', body: 'India produces approximately 78–80% of the world\'s turmeric and contributes over 60% of global exports. In 2025, India exported roughly 185,000 metric tonnes of turmeric, valued at approximately ₹4,200 crore. The primary destination markets were Bangladesh (21%), USA (14%), UAE (12%), UK (8%), and Malaysia (7%).' },
      { heading: 'Key Price Drivers in 2026', body: 'Turmeric prices in 2026 are shaped by three dominant factors: First, the delayed monsoon in key growing regions (Erode, Sangli, Nizamabad) in mid-2025 reduced yields by an estimated 12–15%. Second, EU demand for organic and steam-sterilized variants has grown 40% year-over-year. Third, domestic consumption in India is also rising, creating supply competition. As a result, Sangli market prices for raw turmeric have risen to ₹110–125/kg versus ₹88–95/kg in 2024.' },
      { heading: 'Top Destination Markets', body: 'Bangladesh remains the largest volume market by far, primarily absorbing low-grade and finger turmeric. However, the highest-value export opportunities lie in USA, EU, and the Gulf — where clean-label, certified organic, and steam-sterilized turmeric commands 30–50% price premiums over standard grades. Japan\'s demand for JAS organic turmeric has also grown significantly in the nutraceutical segment.' },
      { heading: 'What Buyers Should Expect', body: 'Given the supply pressure and rising quality requirements, buyers should expect: (1) 10–18% price increases for standard grades in H1 2026 vs H1 2025. (2) Tighter availability of organic certified lots — book early. (3) Longer lead times as processors prioritize EU and US orders which command higher margins. (4) Increased scrutiny on pesticide residues, especially for EU-bound shipments under new EC 2023/915 MRL rules.' },
      { heading: 'Vistarah\'s Recommendation for Buyers', body: 'We recommend buyers booking volumes for Q3–Q4 2026 to place advance orders by April. Pre-booking secures pricing, allocates certified capacity, and gives your supplier enough lead time for proper curing and testing. Contact our team for a customised market quote and spec sheet.' },
    ],
  },
  'eu-mrl-spices-guide': {
    type: 'article', category: 'Compliance Guide', catColor: '#1d4ed8',
    title: "EU Maximum Residue Limits for Spices: A Practical Guide for Indian Exporters",
    excerpt: "EU MRL regulations for spices are among the world's strictest. This guide covers the key pesticide residue limits, how testing works, and exactly what you need to do to ensure your shipment clears EU customs.",
    author: 'Priya Nair', authorRole: 'Compliance Lead, Vistarah Global',
    date: 'Feb 10, 2026', readTime: '12 min read', img: '/blog-compliance.jpg',
    tags: ['EU Compliance', 'MRL', 'Regulations'],
    content: [
      { heading: 'What Are MRLs and Why Do They Matter?', body: 'Maximum Residue Limits (MRLs) are the maximum concentration of a pesticide residue permitted in or on food commodities. For spices, the EU sets some of the world\'s lowest MRL thresholds — often 0.01 mg/kg (the analytical limit of detection) for substances not specifically approved. Non-compliance results in shipment detention or destruction at the EU border — and repeat violations can trigger enhanced border inspection on all your subsequent shipments.' },
      { heading: 'Key Pesticides Flagged for Indian Turmeric', body: 'Turmeric frequently triggers EU rejections for: Ethylene Oxide (banned fumigant — now under zero-tolerance enforcement), Chlorpyrifos (MRL reduced to 0.01 mg/kg), Profenofos, and Triazophos. The European Food Safety Authority (EFSA) maintains an updated database of all MRLs by commodity.' },
      { heading: 'The Testing Protocol You Must Follow', body: 'Before any EU-bound shipment, you need: (1) A third-party multi-residue pesticide screen from an NABL-accredited lab — covering minimum 200 compounds per EU Regulation 396/2005. (2) A certificate of analysis (COA) dated within 90 days of shipment. (3) For organic certified lots, the testing scope expands to 400+ compounds. We work exclusively with FSSAI-recognised, NABL-accredited labs and can arrange testing for buyer-qualified batches.' },
      { heading: 'Steam Sterilization and Ethylene Oxide', body: 'The EU banned Ethylene Oxide (ETO) in 2020 following a major recall affecting sesame seeds. Many Indian processors still use ETO for microbial decontamination. The only compliant alternative accepted by EU for turmeric is steam sterilization. Vistarah\'s entire EU-bound range is processed exclusively via steam sterilization, with zero ETO exposure.' },
      { heading: 'Practical Checklist for Exporters', body: 'Before booking freight: Confirm pesticide history for the source farm (3-year record), ensure steam sterilization (not ETO), run a 200+ compound pesticide residue panel, verify your importer\'s specific requirements (some UK and German buyers want 500+ compound screens), and prepare a full COA and processing record to attach to your EUR.1 form.' },
    ],
  },
  'high-curcumin-farming-erode': {
    type: 'article', category: 'Farming & Sourcing', catColor: '#2d5a27',
    title: "High-Curcumin Turmeric Farming in Erode: How Varieties and Soil Affect Quality",
    excerpt: "The Erode region in Tamil Nadu produces some of the world's highest curcumin-content turmeric. We spoke with 12 farmers to understand what drives quality.",
    author: 'Arjun Mehta', authorRole: 'Sourcing Director, Vistarah Global',
    date: 'Jan 28, 2026', readTime: '10 min read', img: '/blog-farming.jpg',
    tags: ['Turmeric', 'Farming', 'Erode', 'Quality'],
    content: [
      { heading: 'Why Erode?', body: 'Erode district in Tamil Nadu has earned its reputation as the "Turmeric City of India." The combination of red sandy loam soil, a tropical climate with 700–1200mm annual rainfall, and generations of accumulated farmer expertise creates consistently high curcumin yields — typically 4–6% in dried powder versus 2.5–3.5% from other regions.' },
      { heading: 'Variety Matters More Than You Think', body: 'The dominant variety in Erode is "Erode Local" — a land race variety that\'s been cultivated for centuries. More recently, IISR Pragathi and IISR Kedaram varieties developed by the Indian Institute of Spices Research have shown curcumin contents of 6–8% under optimal conditions. International buyers seeking pharmaceutical or nutraceutical grade turmeric should specifically request these improved varieties.' },
      { heading: 'Soil Health as the Hidden Variable', body: 'In our farm visits, the single biggest differentiator between 3% and 6% curcumin content was soil pH and organic matter. Farmers who maintain pH between 5.5–7.0 and apply compost rather than synthetic fertilizers consistently produce higher curcumin content. Soil testing at sowing time and top-dressing with organic manure at rhizome initiation are the two highest-impact practices we observed.' },
      { heading: 'Post-Harvest Processing: Where Quality Is Won or Lost', body: 'Raw turmeric rhizomes undergo curing (boiling or steaming), drying, and polishing before reaching market. Improper drying is the most common quality failure — under-dried turmeric ferments during storage, reducing curcumin content by 15–30%. Farmers using mechanical dryers maintaining 50–60°C for 6–8 days consistently produce 10% moisture content — the benchmark for export quality.' },
    ],
  },
  'apeda-registration-guide': {
    type: 'article', category: 'Compliance Guide', catColor: '#1d4ed8',
    title: "How to Get APEDA Registration as a First-Time Indian Spice Exporter",
    excerpt: "APEDA registration is mandatory before you can export scheduled agricultural products from India. We walk you through the complete application process, documents needed, fees, and timelines.",
    author: 'Vistarah Operations', authorRole: 'Trade Operations Team',
    date: 'Jan 12, 2026', readTime: '7 min read', img: '/blog-compliance.jpg',
    tags: ['APEDA', 'Export License', 'India Regulations'],
    content: [
      { heading: 'What is APEDA?', body: 'The Agricultural and Processed Food Products Export Development Authority (APEDA) is a statutory body under India\'s Ministry of Commerce. Registration under APEDA is mandatory for any company wishing to export scheduled products — which includes spices, turmeric, chilli, and most processed food items.' },
      { heading: 'Documents You Need', body: 'You need: (1) Import Export Code (IEC) issued by DGFT — this is a prerequisite. (2) PAN card of the business. (3) Bank certificate in the prescribed format. (4) Last 3 years\' audited balance sheets for established entities. (5) Certificate of incorporation or partnership deed. First-time exporters without IEC should apply for that first at the DGFT portal.' },
      { heading: 'Application Process', body: 'Apply online at the APEDA ANTS portal. Upload all documents, pay the one-time registration fee (currently ₹5,000 + GST), and submit. APEDA typically processes applications within 7–15 working days. You\'ll receive a Registration Cum Membership Certificate (RCMC) which needs to be renewed every 5 years.' },
      { heading: 'Why It Matters Beyond Compliance', body: 'APEDA registration unlocks access to government export promotion schemes, quality development programmes, and participation in international trade fairs organized by APEDA. It also signals legitimacy to international buyers who increasingly require proof of APEDA registration in due diligence processes.' },
    ],
  },
  'middle-east-spice-demand': {
    type: 'article', category: 'Market Intelligence', catColor: '#1a3a6b',
    title: "Why Middle East Buyers Are Shifting to Direct Indian Spice Sourcing",
    excerpt: "Gulf countries imported $2.3B in spices in 2025. An increasing share is now sourced directly from India, bypassing traditional re-export hubs.",
    author: 'Vistarah Research', authorRole: 'Trade Intelligence Team',
    date: 'Dec 20, 2025', readTime: '9 min read', img: '/blog-turmeric-export.jpg',
    tags: ['Middle East', 'Gulf', 'Market Data'],
    content: [
      { heading: 'The Shift Away from Re-Export Hubs', body: 'Historically, Indian spices reached Gulf markets via Dubai, Singapore, or London re-export hubs. This added 2–4 weeks of transit time and 15–25% cost premiums. A combination of digital trade platforms, improved Indian logistics infrastructure, and direct airline cargo capacity has made origin-direct sourcing increasingly viable for Gulf buyers.' },
      { heading: 'What Gulf Buyers Want', body: 'Our engagement with 18 Gulf food importers in 2025 revealed consistent requirements: Halal certification (non-negotiable), steam sterilization rather than ETO (growing requirement), country-of-origin traceability documentation, and packaging in Arabic-labelled consumer units. Suppliers who can deliver these have a significant advantage.' },
      { heading: 'Price Dynamics', body: 'Direct sourcing from India typically saves Gulf buyers 12–20% versus buying through a Dubai distributor. For high-volume buyers (containers per month), this translates to significant margin improvement. The savings narrow for smaller volumes where re-export hub inventory and credit terms still provide advantages.' },
    ],
  },
  'vistarah-year-in-review-2025': {
    type: 'article', category: 'Company News', catColor: '#7c3aed',
    title: "Vistarah Global 2025 Year in Review: 30 Countries, 500+ Farmer Partners",
    excerpt: "2025 was the year we went from a scrappy 3-person team to a full operations infrastructure.",
    author: 'Founder, Vistarah Global', authorRole: 'Founding Team',
    date: 'Dec 10, 2025', readTime: '6 min read', img: '/hero-1.jpg',
    tags: ['Company Update', 'Year Review', 'Growth'],
    content: [
      { heading: 'What We Built in 2025', body: 'We entered 2025 as a 3-person trading operation and ended it with 12 full-time staff, a certified processing partnership, 500+ direct farmer relationships, and active buyers in 30+ countries. The growth was not without challenges — we over-committed capacity in Q2 and had to make difficult calls with two buyers. We own those mistakes and have since built buffer inventory systems to prevent recurrence.' },
      { heading: 'Farmer Partnerships: The Real Asset', body: 'Our 500+ farmer network across Tamil Nadu, Maharashtra, and Andhra Pradesh is our most important competitive advantage. We run quarterly farm visits, provide advance financing against committed offtake, and facilitate group lab testing to reduce per-farmer costs. In return, we get first access to the highest quality lots at fair prices.' },
      { heading: 'Where We Are Headed in 2026', body: 'In 2026, we are focused on three things: First, deepening into two new commodities beyond turmeric — black pepper and cumin. Second, launching a buyer portal that provides real-time shipment tracking and COA access. Third, building an organic certified supply chain for EU buyers who want USDA/EU dual-certified turmeric.' },
    ],
  },
}

const related = [
  { id: 'eu-mrl-spices-guide', title: 'EU MRL Guide for Spice Exporters', category: 'Compliance', img: '/blog-compliance.jpg' },
  { id: 'high-curcumin-farming-erode', title: 'High-Curcumin Farming in Erode', category: 'Farming', img: '/blog-farming.jpg' },
  { id: 'apeda-registration-guide', title: 'APEDA Registration Guide', category: 'Compliance', img: '/blog-compliance.jpg' },
]

export default function BlogArticlePage() {
  const { slug } = useParams()
  const post = posts[slug as string]

  if (!post) {
    return (
      <main className="min-h-screen bg-background font-sans">
        <Navigation />
        <div className="max-w-2xl mx-auto px-6 py-40 text-center">
          <BookOpen className="w-16 h-16 mx-auto text-muted-foreground/30 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">This article doesn't exist or may have moved.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />

      {/* ── Hero image ───────────────────────────────── */}
      <div className="relative h-[50vh] min-h-[380px] mt-16">
        <Image src={post.img} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 pb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: post.catColor }}>{post.category}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-snug text-balance">{post.title}</h1>
        </div>
      </div>

      {/* ── Article body ────────────────────────────── */}
      <article className="max-w-4xl mx-auto px-6 py-12">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-5 pb-8 mb-8 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
              {post.author[0]}
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">{post.author}</p>
              <p className="text-muted-foreground text-xs">{post.authorRole}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
            <Calendar className="w-3.5 h-3.5" />{post.date}
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </div>
          <div className="ml-auto">
            <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground border border-border px-3 py-1.5 rounded-lg transition-colors">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-medium">{post.excerpt}</p>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-10">
          {post.content.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-xl font-bold text-foreground mb-4 mt-8 first:mt-0">{section.heading}</h2>
              )}
              <p className="text-muted-foreground leading-relaxed text-base">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
          <Tag className="w-4 h-4 text-muted-foreground" />
          {post.tags.map(t => (
            <span key={t} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">{t}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Ready to Source Premium Indian Spices?</h3>
          <p className="text-white/60 text-sm mb-6">Get a sourcing proposal tailored to your market, volume, and compliance requirements.</p>
          <Link href="/buyer#request-quote" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-xl hover:bg-accent/90 transition-all hover:scale-105 group">
            Request a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </article>

      {/* ── Related posts ────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h3 className="text-xl font-bold mb-6">Related Reading</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {related.filter(r => r.id !== slug).slice(0, 3).map(r => (
            <Link key={r.id} href={`/blog/${r.id}`} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-36 overflow-hidden">
                <Image src={r.img} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{r.category}</p>
                <p className="font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">{r.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-xl hover:border-primary transition-all text-sm">
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
