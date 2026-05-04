'use client'

import Image from 'next/image'

const certifications = [
  {
    id: 1,
    title: 'ISO 22000',
    description:
      'International food safety management system certification demonstrating our commitment to maintaining the highest standards of food safety and quality.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-VRaSfTvgaFL39ccT5XzezjPxLqiMj5.png',
    label: 'Food Safety Mgmt',
  },
  {
    id: 2,
    title: 'FSSAI Certified',
    description:
      'Food Safety and Standards Authority of India certification, ensuring compliance with all Indian food safety regulations and standards.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FSSAI_logo-CeYlAIawk3UVhoT8AsCmEGqPC2HHzT.png',
    label: 'India Food Authority',
  },
  {
    id: 3,
    title: 'APEDA Registered',
    description:
      'Agricultural and Processed Food Products Export Development Authority registration, certifying our export credentials and quality standards.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apeda-registration-service-500x500-Z6i29pjULHCLGBBDfW7no3JsfSfFjH.webp',
    label: 'Export Authority',
  },
]

export default function CertificationCards() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Global Certifications & Standards
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We maintain rigorous international certifications and standards,
            ensuring the highest quality and safety in every product we deliver.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden
              transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10
              min-h-[480px]"
            >
              {/* Card Content */}
              <div className="h-full flex flex-col justify-between p-8">

                {/* Top Content */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {cert.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border mb-10" />

                {/* Logo */}
                <div className="flex items-center justify-center">
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent rounded-2xl" />
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      width={140}
                      height={140}
                      className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Label */}
                <div className="text-center mt-6">
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest">
                    {cert.label}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}