'use client'

import { ArrowRight, Globe, TrendingUp } from 'lucide-react'

export default function BuyerSupplierSection() {
  return (
    <section className="relative bg-[#002C50] py-24 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-[#0D726A]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-[#E39A1F]/20 blur-[120px] rounded-full"></div>

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* section heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#E39A1F] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Who We Serve
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Built For Buyers &
            <span className="text-[#0D726A]"> Suppliers</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            We create trust-driven export ecosystems for global buyers and
            Indian manufacturers through compliance, quality assurance, and
            seamless trade execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Buyers Card */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:-translate-y-2 hover:border-[#0D726A]/40 transition-all duration-500 overflow-hidden">

            {/* hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D726A]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">

              {/* badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0D726A]/20 text-[#0D726A] font-medium text-sm mb-8">
                <Globe className="w-4 h-4" />
                For Global Buyers
              </div>

              {/* heading */}
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
                Reliable India.
                <br />
                Assured Quality.
              </h3>

              {/* description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
                Verified suppliers, transparent sourcing, and zero compliance
                stress. Experience the new standard in Indian exports.
              </p>

              {/* CTA */}
              <button className="group/btn bg-white text-[#002C50] px-7 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-[#0D726A] hover:text-white transition-all duration-300">
                Explore Buyer Solutions
                <ArrowRight className="w-5 h-5 group-hover/btn translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Suppliers Card */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:-translate-y-2 hover:border-[#E39A1F]/40 transition-all duration-500 overflow-hidden">

            {/* hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E39A1F]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">

              {/* badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E39A1F]/20 text-[#E39A1F] font-medium text-sm mb-8">
                <TrendingUp className="w-4 h-4" />
                For Indian Suppliers
              </div>

              {/* heading */}
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
                Grow Beyond
                <br />
                Borders.
              </h3>

              {/* description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
                We help serious manufacturers become globally export-ready with
                certifications, compliance, and buyer connections.
              </p>

              {/* CTA */}
              <button className="group/btn bg-[#E39A1F] text-black px-7 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-[#f4ac2f] transition-all duration-300">
                Become a Certified Supplier
                <ArrowRight className="w-5 h-5 group-hover/btn translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}