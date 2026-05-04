'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function CTABanner() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.cta-animate').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section ref={ref} className="py-24 bg-secondary/40 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative bg-primary rounded-3xl overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[color:var(--green)]/10 rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="cta-animate scroll-animate animate-slide-in-left space-y-6">
                <span className="inline-block text-accent text-xs font-bold uppercase tracking-[0.25em]">
                  Start a Conversation
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
                  Ready to Source Premium Indian Spices?
                </h2>
                <p className="text-white/65 text-lg leading-relaxed">
                  Whether you're an international buyer seeking reliable supply or a supplier looking for global market access — we'd love to talk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30 group"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/25 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 transition-all duration-300"
                    >
                      View Products
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Email form + contact */}
              <div className="cta-animate scroll-animate animate-slide-in-right space-y-6">
                <div className="bg-white/8 border border-white/15 rounded-2xl p-8">
                  <h3 className="text-white font-semibold mb-2">Get product information</h3>
                  <p className="text-white/55 text-sm mb-6">
                    Share your email and we'll send you our product catalogue and pricing guide.
                  </p>

                  {submitted ? (
                    <div className="flex items-center gap-3 text-[color:var(--green)] bg-[color:var(--green)]/10 border border-[color:var(--green)]/30 rounded-xl px-5 py-4">
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-sm font-medium">Thank you! We'll be in touch within 24 hours.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/35 focus:border-accent focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all duration-300 text-sm"
                      />
                      <Button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 group"
                      >
                        Send Me the Catalogue
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </form>
                  )}
                </div>

                {/* Quick contacts */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:hello@vistarahglobal.com"
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 group text-sm"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    hello@vistarahglobal.com
                  </a>
                  <a
                    href="tel:+91-0000-000000"
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    +91 0000 000 000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
