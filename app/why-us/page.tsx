'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  CheckCircle,
  Shield,
  Zap,
  Globe,
  Users,
  TrendingUp,
  FileCheck,
  Clock,
  Target,
  Award,
} from 'lucide-react'

export default function WhyUsPage() {
  const keyBenefits = [
    {
      icon: Shield,
      title: 'Multi-Supplier Sourcing',
      description:
        'Access to vetted and verified Indian suppliers backed by rigorous quality controls. We maintain relationships with multiple suppliers to ensure consistent availability and competitive pricing.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Assurance',
      description:
        'Regulatory, quality, and documentation standards rigorously followed. Every shipment meets international compliance requirements with complete documentation and certification.',
    },
    {
      icon: Globe,
      title: 'Traceability & Transparency',
      description:
        'Complete supply chain visibility from production to international delivery. Track your shipments in real-time and access detailed documentation at every stage.',
    },
    {
      icon: Users,
      title: 'Dedicated Account Management',
      description:
        'Single, accountable point of contact for all your trade needs and concerns. Your dedicated account manager understands your business and ensures smooth operations.',
    },
    {
      icon: Target,
      title: 'Global Execution Standards',
      description:
        "India's sourcing strengths combined with international professional standards. We bridge the gap between local sourcing and global expectations.",
    },
    {
      icon: Zap,
      title: 'Agile Problem Solving',
      description:
        'Fast adaptation and proactive solutions while maintaining full accountability. When challenges arise, we respond quickly without compromising on standards.',
    },
  ]

  const comparisonPoints = [
    {
      feature: 'Compliance First',
      us: true,
      others: false,
      description: 'Regulatory adherence is never compromised',
    },
    {
      feature: 'Full Traceability',
      us: true,
      others: false,
      description: 'Complete supply chain visibility',
    },
    {
      feature: 'Quality Certifications',
      us: true,
      others: true,
      description: 'International quality standards',
    },
    {
      feature: 'Dedicated Account Manager',
      us: true,
      others: false,
      description: 'Single point of contact',
    },
    {
      feature: 'Multi-Supplier Network',
      us: true,
      others: false,
      description: 'Consistent availability and pricing',
    },
    {
      feature: 'Real-time Tracking',
      us: true,
      others: false,
      description: 'Digital platform for shipment updates',
    },
  ]

  const testimonials = [
    {
      quote:
        'Vistarah Global has transformed our sourcing from India. Their compliance-first approach and transparency give us complete confidence in every shipment.',
      author: 'Michael Chen',
      company: 'Global Spices Inc., USA',
      role: 'Procurement Director',
    },
    {
      quote:
        'The level of traceability and documentation they provide is unmatched. We know exactly where our products come from and can verify quality at every stage.',
      author: 'Sarah Williams',
      company: 'Natural Foods Europe',
      role: 'Supply Chain Manager',
    },
    {
      quote:
        'Having a dedicated account manager who understands our needs has made international trade surprisingly straightforward. Highly recommended.',
      author: 'Ahmed Al-Rashid',
      company: 'Middle East Trading Co.',
      role: 'CEO',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Why Choose Vistarah Global
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Trust-driven global trade partnerships built on compliance, transparency, and
              operational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Competitive Advantages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              What sets us apart in the global trade ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card
                  key={index}
                  className="border-border hover:border-accent transition-all duration-300 p-6 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How We Compare</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              See the difference in our approach to global trade
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-accent/10">
                    <tr>
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-center p-4 font-bold text-accent">Vistarah Global</th>
                      <th className="text-center p-4 font-bold text-muted-foreground">
                        Typical Exporters
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonPoints.map((point, index) => (
                      <tr
                        key={index}
                        className="border-t border-border hover:bg-accent/5 transition-colors"
                      >
                        <td className="p-4">
                          <div className="font-medium mb-1">{point.feature}</div>
                          <div className="text-xs text-muted-foreground">{point.description}</div>
                        </td>
                        <td className="p-4 text-center">
                          {point.us ? (
                            <CheckCircle className="w-6 h-6 text-accent inline-block" />
                          ) : (
                            <span className="text-muted-foreground text-2xl">—</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {point.others ? (
                            <CheckCircle className="w-6 h-6 text-muted-foreground inline-block" />
                          ) : (
                            <span className="text-muted-foreground text-2xl">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              How we ensure quality and compliance at every step
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Supplier Vetting</h3>
              <p className="text-sm text-muted-foreground">
                Rigorous evaluation of suppliers for quality, compliance, and reliability
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Quality Testing</h3>
              <p className="text-sm text-muted-foreground">
                Third-party lab testing for all quality parameters and certifications
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Complete compliance documentation and international shipping paperwork
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent font-bold text-xl mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Execution</h3>
              <p className="text-sm text-muted-foreground">
                Seamless logistics and real-time tracking until delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <p className="text-muted-foreground text-sm">Client Retention Rate</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">24hrs</div>
              <p className="text-muted-foreground text-sm">Response Time</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground text-sm">Compliance Rate</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">30+</div>
              <p className="text-muted-foreground text-sm">Global Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Trusted by international buyers across continents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border p-6 hover:border-accent transition-all">
                <div className="mb-4">
                  <div className="text-accent text-4xl mb-2">"</div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-accent">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            Experience the Vistarah Difference
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-pretty">
            Join international buyers who trust us for compliant, transparent global trade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
