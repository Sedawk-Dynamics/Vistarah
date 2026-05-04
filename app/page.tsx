'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import HeroCarousel from '@/components/home/hero-carousel'
import WhatWeDo from "@/components/home/what-we-do"
import BuyerSupplier from "@/components/home/buyer-supplier"
import TrustedBranding from '@/components/home/trusted-branding'
import AboutPreview from '@/components/home/about-preview'
import Foundation from '@/components/home/foundation'
import Excellence from '@/components/home/excellence'
import SupplierTeaser from '@/components/home/supplier-teaser'
import ProductsShowcase from '@/components/home/products-showcase'
import CTABanner from '@/components/home/cta-banner'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Carousel Section */}
      <HeroCarousel />
      <WhatWeDo />
      <BuyerSupplier />



      {/* About Preview Section */}
      {/* <AboutPreview /> */}

      {/* Our Foundation - Mission, Vision, Values */}
      {/* <Foundation /> */}

      {/* Excellence in Every Export */}
      <Excellence />

      {/* Supplier Portal Teaser */}
      <SupplierTeaser />

      {/* Products Showcase Section */}
      {/* <ProductsShowcase /> */}

      {/* Trusted Branding & Certifications */}
      <TrustedBranding />

      {/* Footer */}
      <Footer />
    </main>
  )
}
