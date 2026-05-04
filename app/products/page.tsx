'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CheckCircle, Award, Package } from 'lucide-react'
import { useState } from 'react'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'powder', label: 'Turmeric Powder' },
    { id: 'sterilized', label: 'Steam-Sterilized' },
    { id: 'premium', label: 'Premium Grade' },
  ]

  const products = [
    {
      id: 1,
      name: 'Turmeric Powder - Export Grade',
      category: 'powder',
      hsCode: '09103030',
      image: '/product-turmeric.jpg',
      shortDesc: 'Premium quality, export-grade turmeric powder meeting all international standards.',
      specs: [
        'Curcumin Content: 3-5%',
        'Moisture: Max 10%',
        'Total Ash: Max 9%',
        'Acid Insoluble Ash: Max 1.5%',
      ],
      certifications: ['ISO 22000', 'FSSAI', 'USDA Organic'],
    },
    {
      id: 2,
      name: 'Steam-Sterilized Turmeric Powder',
      category: 'sterilized',
      hsCode: '09103030',
      image: '/product-turmeric.jpg',
      shortDesc: 'Advanced sterilization process ensuring maximum safety and shelf stability.',
      specs: [
        'Microbial Load: <1000 CFU/g',
        'E.coli: Absent',
        'Salmonella: Absent',
        'Curcumin Content: 3-4.5%',
      ],
      certifications: ['ISO 22000', 'HACCP', 'BRC'],
    },
    {
      id: 3,
      name: 'High-Curcumin Turmeric Powder',
      category: 'premium',
      hsCode: '09103030',
      image: '/product-turmeric.jpg',
      shortDesc: 'Enhanced curcumin content for premium health and wellness applications.',
      specs: [
        'Curcumin Content: 6-8%',
        'Moisture: Max 8%',
        'Volatile Oil: Min 2.5%',
        'Grade: A++',
      ],
      certifications: ['ISO 22000', 'USDA Organic', 'EU Organic'],
    },
    {
      id: 4,
      name: 'Organic Turmeric Powder',
      category: 'powder',
      hsCode: '09103030',
      image: '/product-turmeric.jpg',
      shortDesc: 'Certified organic turmeric from sustainable farming practices.',
      specs: [
        '100% Organic Certified',
        'No Pesticide Residue',
        'Curcumin Content: 3-5%',
        'Traceability Available',
      ],
      certifications: ['USDA Organic', 'EU Organic', 'India Organic'],
    },
    {
      id: 5,
      name: 'Food Service Grade Turmeric',
      category: 'powder',
      hsCode: '09103030',
      image: '/product-turmeric.jpg',
      shortDesc: 'Specially processed for food service and industrial applications.',
      specs: [
        'Bulk Packaging Available',
        'Consistent Color',
        'Curcumin Content: 2.5-4%',
        'Cost Effective',
      ],
      certifications: ['FSSAI', 'ISO 22000', 'Halal'],
    },
    {
      id: 6,
      name: 'Premium Steam-Sterilized Organic',
      category: 'premium',
      hsCode: '09103030',
      image: '/product-turmeric.jpg',
      shortDesc: 'The ultimate combination of organic certification and steam sterilization.',
      specs: [
        'Organic + Sterilized',
        'Curcumin Content: 5-7%',
        'Zero Microbial Load',
        'Extended Shelf Life',
      ],
      certifications: ['USDA Organic', 'EU Organic', 'ISO 22000', 'HACCP'],
    },
  ]

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Products</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Premium export-grade turmeric products with international quality certifications and
              full traceability
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className={
                  selectedCategory === category.id
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : 'border-border hover:border-accent hover:bg-accent/10'
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid with Flip Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="relative h-[500px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0)',
                  }}
                >
                  {/* Front of card */}
                  <Card
                    className="absolute inset-0 border-border overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                        {product.hsCode}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-balance">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {product.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.certifications.slice(0, 3).map((cert, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-accent/10 text-accent"
                          >
                            <Award className="w-3 h-3" />
                            {cert}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-4 italic">
                        Hover to view specifications
                      </p>
                    </div>
                  </Card>

                  {/* Back of card */}
                  <Card
                    className="absolute inset-0 border-accent bg-card p-6"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <Package className="w-5 h-5 text-accent" />
                        <h3 className="font-bold text-lg">{product.name}</h3>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-bold text-sm text-accent mb-3">
                          Technical Specifications
                        </h4>
                        <ul className="space-y-2">
                          {product.specs.map((spec, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
                        <h4 className="font-bold text-sm text-accent mb-2">Certifications</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.certifications.map((cert, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 rounded bg-accent/10 text-accent"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                        <Button
                          size="sm"
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          Request Quote
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quality Assurance</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Every product undergoes rigorous testing and certification
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Lab Tested</h3>
              <p className="text-sm text-muted-foreground">
                Third-party laboratory testing for all quality parameters
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Certified</h3>
              <p className="text-sm text-muted-foreground">
                International quality and organic certifications
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 mb-4">
                <Package className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Traceable</h3>
              <p className="text-sm text-muted-foreground">
                Complete supply chain visibility from farm to port
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            Ready to Place Your Order?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-pretty">
            Get in touch with our team for custom quotes, samples, and detailed specifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Request Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
