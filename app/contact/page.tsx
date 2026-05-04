'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'buyers' | 'suppliers' | 'investors' | 'general'>('buyers')
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    productsOfInterest: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        country: '',
        productsOfInterest: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const tabs = [
    { id: 'buyers', label: 'Buyers', icon: '🏢' },
    { id: 'suppliers', label: 'Suppliers', icon: '👨‍🌾' },
    // { id: 'investors', label: 'Investors', icon: '💼' },
    { id: 'general', label: 'General', icon: '💬' },
  ]

  const formConfig = {
    buyers: {
      title: 'Get Your Supply',
      subtitle: 'Tell us about your sourcing needs and we\'ll match you with the perfect products.',
      fields: [
        { name: 'companyName', label: 'Company Name *', placeholder: '', type: 'text' },
        { name: 'contactName', label: 'Contact Name *', placeholder: '', type: 'text' },
        { name: 'email', label: 'Email *', placeholder: '', type: 'email' },
        { name: 'phone', label: 'Phone *', placeholder: '', type: 'tel' },
        { name: 'country', label: 'Country *', placeholder: 'e.g., United Kingdom', type: 'text' },
        { name: 'productsOfInterest', label: 'Products of Interest *', placeholder: 'e.g., Turmeric, Cumin', type: 'text' },
      ],
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your sourcing requirements',
      ctaText: 'REQUEST STRUCTURED CONSULTATION',
    },
    suppliers: {
      title: 'Become a Partner',
      subtitle: 'Join our network of trusted suppliers. Let\'s grow together.',
      fields: [
        { name: 'companyName', label: 'Farm/Company Name *', placeholder: '', type: 'text' },
        { name: 'contactName', label: 'Your Name *', placeholder: '', type: 'text' },
        { name: 'email', label: 'Email *', placeholder: '', type: 'email' },
        { name: 'phone', label: 'Phone *', placeholder: '', type: 'tel' },
        { name: 'country', label: 'Location *', placeholder: 'e.g., Erode, Tamil Nadu', type: 'text' },
        { name: 'productsOfInterest', label: 'Products You Supply *', placeholder: 'e.g., Turmeric, Black Pepper', type: 'text' },
      ],
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your supply capacity and certifications',
      ctaText: 'APPLY FOR PARTNERSHIP',
    },
    investors: {
      title: 'Investment Inquiry',
      subtitle: 'Interested in investing in Vistarah? We\'d love to hear from you.',
      fields: [
        { name: 'companyName', label: 'Company/Fund Name *', placeholder: '', type: 'text' },
        { name: 'contactName', label: 'Your Name *', placeholder: '', type: 'text' },
        { name: 'email', label: 'Email *', placeholder: '', type: 'email' },
        { name: 'phone', label: 'Phone *', placeholder: '', type: 'tel' },
        { name: 'country', label: 'Country *', placeholder: '', type: 'text' },
        { name: 'productsOfInterest', label: 'Investment Focus *', placeholder: 'e.g., Equity, Debt, Strategic', type: 'text' },
      ],
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your investment thesis',
      ctaText: 'SCHEDULE INVESTOR CALL',
    },
    general: {
      title: 'General Inquiry',
      subtitle: 'Have a question? We\'re here to help.',
      fields: [
        { name: 'companyName', label: 'Company Name', placeholder: '', type: 'text' },
        { name: 'contactName', label: 'Your Name *', placeholder: '', type: 'text' },
        { name: 'email', label: 'Email *', placeholder: '', type: 'email' },
        { name: 'phone', label: 'Phone', placeholder: '', type: 'tel' },
      ],
      messageLabel: 'Message',
      messagePlaceholder: 'How can we help?',
      ctaText: 'SEND MESSAGE',
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Ready to start your global trade journey? Our team is here to answer your questions
              and discuss how we can support your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

              {/* Email */}
              <div className="mb-8 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:contact@vistarahglobal.com" className="font-medium hover:text-accent transition">
                    contact@vistarahglobal.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+919810286336" className="font-medium hover:text-accent transition">
                    +91 98102 86336
                  </a>
                </div>
              </div>

              {/* Coverage */}
              <div className="mb-8 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Coverage</p>
                  <p className="font-medium">UK/EU Markets</p>
                  <p className="text-sm text-muted-foreground">India Sourcing Base</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-bold mb-4">Office Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM GMT
                </p>
              </div>
              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent transition group">
                    <Linkedin className="w-5 h-5 text-accent group-hover:text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent transition group">
                    <Instagram className="w-5 h-5 text-accent group-hover:text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent transition group">
                    <Facebook className="w-5 h-5 text-accent group-hover:text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent transition group">
                    <Youtube className="w-5 h-5 text-accent group-hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="lg:col-span-2">
              {/* Tab Navigation */}
              <div className="flex gap-2 mb-8 border-b border-border pb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${activeTab === tab.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Form Content */}
              <div>
                <h3 className="text-2xl font-bold mb-2">{formConfig[activeTab].title}</h3>
                <p className="text-muted-foreground mb-8">{formConfig[activeTab].subtitle}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Two-column layout for main fields */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {formConfig[activeTab].fields.map((field) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.label.endsWith('*')}
                          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {formConfig[activeTab].messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                      placeholder={formConfig[activeTab].messagePlaceholder}
                    />
                  </div>

                  {/* CTA Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 text-base"
                    disabled={submitted}
                  >
                    {submitted ? '✓ Message Sent' : formConfig[activeTab].ctaText}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-border p-6">
              <h3 className="font-bold text-lg mb-2">What is your minimum order quantity?</h3>
              <p className="text-muted-foreground">
                Our MOQ varies by product, but we typically work with orders starting from 1
                container (20ft). Contact us to discuss your specific requirements.
              </p>
            </Card>

            <Card className="border-border p-6">
              <h3 className="font-bold text-lg mb-2">
                How long does shipping take to international markets?
              </h3>
              <p className="text-muted-foreground">
                Shipping times depend on the destination. Typically, Europe takes 25-35 days, USA
                30-40 days, and Middle East 15-20 days from the port of loading.
              </p>
            </Card>

            <Card className="border-border p-6">
              <h3 className="font-bold text-lg mb-2">Do you provide samples?</h3>
              <p className="text-muted-foreground">
                Yes, we provide samples for quality evaluation. Sample costs and shipping charges
                may apply, which can be adjusted against your first order.
              </p>
            </Card>

            <Card className="border-border p-6">
              <h3 className="font-bold text-lg mb-2">What certifications do your products have?</h3>
              <p className="text-muted-foreground">
                Our products come with international certifications including ISO 22000, FSSAI,
                USDA Organic, EU Organic, HACCP, and BRC depending on the product variant.
              </p>
            </Card>

            <Card className="border-border p-6">
              <h3 className="font-bold text-lg mb-2">What payment terms do you offer?</h3>
              <p className="text-muted-foreground">
                We work with various payment terms including LC at sight, advance payment, and
                credit terms for established clients. Terms are negotiable based on order volume
                and relationship.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
