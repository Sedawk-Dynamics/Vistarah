"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
} from 'lucide-react'

const legalLinks = [
  { href: '/contact', label: 'Enquiry' },
  { href: '/contact', label: 'Cookie Policy' },
  { href: '#', label: 'Disclaimer' },
  { href: '#', label: 'Terms & Conditions' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'EU Data Protection Policy' },
]

const socials = [
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Youtube, href: '#' },
  { icon: Facebook, href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setSubmitted(true)
    setEmail('')

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <footer className="bg-white border-t border-gray-200">

      {/* Newsletter Bar */}
      <div className="bg-[#1a3a6b] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg">
              Stay ahead of global markets
            </p>
            <p className="text-white/60 text-sm mt-1">
              Insights, updates, and opportunities delivered to your inbox.
            </p>
          </div>

          {submitted ? (
            <div className="text-white text-sm">✓ Subscribed</div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white text-sm outline-none"
              />
              <button className="px-5 py-3 bg-[#F39C12] hover:bg-[#d68910] text-white text-sm font-semibold rounded-r-lg flex items-center gap-2 transition-colors">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* LEFT */}
          <div>
            <Image
              src="/vistarah-logo-full.png"
              alt="Vistarah"
              width={180}
              height={60}
              className="mb-4"
            />

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-[#002C50] hover:text-white transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="text-sm font-semibold text-[#1E1E1E] mb-4">
              Stay Connected
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <Link href="/contact" className="hover:text-[#002C50]">
                Contact Us
              </Link>
              <Link href="#" className="hover:text-[#002C50]">
                News & Media
              </Link>
              <Link href="#" className="hover:text-[#002C50]">
                Careers
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-sm font-semibold text-[#1E1E1E] mb-4">
              Other Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <Link href="#" className="hover:text-[#002C50]">
                Company Information
              </Link>
              {/* <Link href="#" className="hover:text-[#002C50]">
                Sitemap
              </Link> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center lg:text-left">
            © {new Date().getFullYear()} Vistarah Global. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-[#002C50] transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}