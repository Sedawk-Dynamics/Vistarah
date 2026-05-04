'use client'

import {
  Shield,
  ClipboardCheck,
  Scale,
  FileCheck,
  Truck,
  Users,
  ArrowUpRight,
} from 'lucide-react'

import {
  UserCheck,
  ShieldCheck,
  FileText,
  Globe2,
  BarChart3,
} from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Export Structuring',
    description:
      'End-to-end export process design with regulatory foresight.',
  },
  {
    icon: ClipboardCheck,
    title: 'Supplier Validation',
    description:
      'Rigorous qualification against EU compliance standards.',
  },
  {
    icon: Scale,
    title: 'EU Compliance Alignment',
    description:
      'Full regulatory alignment for seamless market entry.',
  },
  {
    icon: FileCheck,
    title: 'Documentation & Certifications',
    description:
      'Complete documentation integrity for every shipment.',
  },
  {
    icon: Truck,
    title: 'Logistics Coordination',
    description:
      'Strategic port selection and shipment control.',
  },
  {
    icon: Users,
    title: 'Risk Mitigation',
    description:
      'Proactive identification and resolution of compliance gaps.',
  },
]

const ecosystemSteps = [
  {
    step: '01',
    icon: UserCheck,
    title: 'Supplier Onboarding',
    desc: 'Comprehensive evaluation & vetting process',
  },
  {
    step: '02',
    icon: ShieldCheck,
    title: 'Quality Program',
    desc: 'Standards implementation & certifications',
  },
  {
    step: '03',
    icon: FileText,
    title: 'Compliance',
    desc: 'Documentation & regulatory approvals',
  },
  {
    step: '04',
    icon: Globe2,
    title: 'Global Buyers',
    desc: 'Verified international buyer network',
  },
  {
    step: '05',
    icon: BarChart3,
    title: 'Monitoring',
    desc: 'Continuous tracking & optimization',
  },
]

export default function WhatWeDo() {
  return (
    <section className="relative bg-white py-28 overflow-hidden">

      {/* Background effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0D726A]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E39A1F]/10 rounded-full blur-[120px]" />

      {/* grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#002C50_1px,transparent_1px),linear-gradient(to_bottom,#002C50_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* SECTION 1 */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-[#0D726A]/10 text-[#0D726A] text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-[#002C50] leading-tight">
            Structured Export
            <span className="text-[#0D726A]"> Excellence</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We create seamless export ecosystems that ensure quality,
            compliance, logistics efficiency, and global buyer confidence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#002C50]/20 via-[#0D726A]/20 to-[#E39A1F]/20 hover:from-[#002C50] hover:via-[#0D726A] hover:to-[#E39A1F] transition-all duration-500"
              >
                <div className="bg-white rounded-3xl p-8 h-full relative overflow-hidden">

                  {/* glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#002C50]/5 via-transparent to-[#E39A1F]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-[#f8fafc] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                      <Icon className="w-7 h-7 text-[#002C50]" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#002C50] mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#0D726A] font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition duration-500">
                      Learn More
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="my-24 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* SECTION 2 */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-[#E39A1F]/10 text-[#E39A1F] text-sm font-semibold tracking-widest uppercase">
            Our Ecosystem Model
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-[#002C50]">
            A Structured Path to
            <span className="text-[#0D726A]"> Global Markets</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Every stage is strategically aligned to ensure efficiency,
            compliance, and trust across global trade operations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-[#002C50] via-[#0D726A] to-[#E39A1F]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {ecosystemSteps.map((item, index) => {
              const Icon = item.icon

              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#002C50] to-[#0D726A] flex items-center justify-center mb-5 group-hover:scale-110 transition duration-500">
                    <Icon className="w-9 h-9 text-white" />
                  </div>

                  {/* Step */}
                  <span className="text-sm font-bold text-[#E39A1F] tracking-widest">
                    STEP {item.step}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-xl font-bold text-[#002C50]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}