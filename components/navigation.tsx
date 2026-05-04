'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Package,
  ShieldCheck,
  BookOpen,
  Briefcase,
  Leaf,
  Globe,
  Users, Target, Award
} from 'lucide-react'


type DropdownGroup = {
  title: string
  items: { href: string; label: string; desc?: string; icon?: React.ElementType }[]
}

type NavItem = {
  href?: string
  label: string
  dropdown?: {
    exploreLink?: { href: string; label: string }
    groups: DropdownGroup[]
  }
}

const navItems: NavItem[] = [


  {
    label: 'Buy From Us',
    dropdown: {
      groups: [
        {
          items: [
            {
              href: '/buyer#products',
              label: 'All About Turmeric',
              desc: 'Explore premium turmeric varieties, spices, and export-grade agri commodities.',
              icon: Package,
            },
          ],
        },
        {
          items: [
            {
              href: '/buyer#how-it-works',
              label: 'Know Your Supplier',
              desc: 'Work with verified exporters backed by global certifications and transparent sourcing.',
              icon: Users,
            },
          ],
        },
        {
          items: [
            {
              href: '/buyer#how-it-works',
              label: 'How Do We Engage With You',
              desc: 'Simple, structured process from inquiry to delivery with dedicated support.',
              icon: Leaf,
            },
          ],
        },
        {
          items: [
            {
              href: '/buyer#compliance',
              label: 'Why Us',
              desc: 'Consistent quality, reliable supply chains, and a proven export track record.',
              icon: Award,
            },
          ],
        },
      ],
    },
  },



  {
    label: 'Sell Through Us',
    dropdown: {
      groups: [
        {
          items: [
            {
              href: '/supplier',
              label: 'Reach Global Markets',
              desc: 'Expand your business by connecting with verified international buyers across multiple regions.',
              icon: Globe,
            },
          ],
        },
        {
          items: [
            {
              href: '/supplier#why-partner',
              label: 'Our Support',
              desc: 'Get assistance with documentation, compliance, logistics, and global trade operations.',
              icon: Users,
            },
          ],
        },
        {
          items: [
            {
              href: '/supplier#journey',
              label: 'How It Works',
              desc: 'A simple onboarding and selling process—from listing your products to final delivery.',
              icon: Target,
            },
          ],
        },
        {
          items: [
            {
              href: '/supplier#why-partner',
              label: 'Why Choose Vistarah',
              desc: 'Trusted network, consistent demand, and reliable payments for long-term growth.',
              icon: Award,
            },
          ],
        },
      ],
    },
  },



  {
    label: 'Products',
    dropdown: {
      // exploreLink: { href: '/products', label: 'Explore Products' },
      groups: [
        {
          // title: 'Our Catalog',
          items: [
            { href: '/products', label: 'All Products', desc: 'Turmeric, spices & agri-commodities', icon: Package },
            // { href: '/products', label: 'Turmeric Range', desc: 'Steam-sterilized, high-curcumin & whole', icon: Leaf },
          ],
        },
        // {
        //   // title: 'Quality & Compliance',
        //   items: [
        //     { href: '/about', label: 'Certifications', desc: 'USDA, EU Organic, FSSAI, ISO', icon: ShieldCheck },
        //     // { href: '/certifications', label: 'Standards', desc: 'Globally trusted compliance record', icon: Globe },
        //   ],
        // },
      ],
    },
  },
  // { href: '/about', label: 'Our Company' },
  // Knowledge Hub
  // Blog & Articles
  // Trade intelligence & compliance guides
  // Company
  // Careers
  // Open positions across India & remote

  {
    label: 'The Vistarah Way',
    dropdown: {
      // exploreLink: { href: '/about', label: 'About Company' },
      groups: [
        {
          // title: 'Mission and Vision',
          items: [
            { href: '/about', label: 'Learn about Vistarah', desc: 'Our Company Vision and Mission', icon: Target },
          ],
        },
        {
          // title: 'Careers',
          items: [
            { href: '/careers', label: 'Careers', desc: 'Open positions across India & remote', icon: Briefcase },
          ],
        },
        {
          // title: 'Quality & Compliance',
          items: [
            { href: '/certifications', label: 'How We Do Bussiness', desc: 'USDA, EU Organic, FSSAI, ISO', icon: ShieldCheck },
          ],
        },
        {
          // title: 'Knowledge Hub',
          items: [
            { href: '/blog', label: 'Blog & Articles', desc: 'Trade intelligence & compliance guides', icon: BookOpen },
          ],
        },
      ],
    },
  },


  // { href: '/buyer', label: 'Buyers' },
  // {
  //   label: 'Insights',
  //   dropdown: {
  //     exploreLink: { href: '/blog', label: 'Explore Insights' },
  //     groups: [
  //       {
  //         title: 'Knowledge Hub',
  //         items: [
  //           { href: '/blog', label: 'Blog & Articles', desc: 'Trade intelligence & compliance guides', icon: BookOpen },
  //         ],
  //       },
  //       {
  //         title: 'Company',
  //         items: [
  //           { href: '/careers', label: 'Careers', desc: 'Open positions across India & remote', icon: Briefcase },
  //         ],
  //       },
  //     ],
  //   },
  // },
]

const utilityLinks = [
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'News & Media' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    const onScroll = () => setScrolled(window.scrollY > 10)
    document.addEventListener('mousedown', handler)
    window.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('mousedown', handler)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const activeItem = navItems.find(
    (i) => i.href && pathname === i.href
  )?.label

  return (
    <header
      ref={navRef}
      className="fixed w-full top-0 z-50 bg-white"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {/* Top utility bar
      <div className="hidden md:block bg-[#f3f4f6] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2 flex items-center justify-end gap-7">
          {utilityLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-[#1a3a5c] hover:text-[#1a5a7a] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div> */}

      {/* Main header */}
      <nav
        className={`bg-white border-b border-gray-100 transition-shadow ${scrolled ? 'shadow-sm' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 mr-10"
            onClick={() => {
              setActiveDropdown(null)
              setMobileOpen(false)
            }}
          >
            <Image
              src="/vistarah-logo-full.png"
              alt="Vistarah Global"
              width={280}
              height={60}
              className="h-16 lg:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav - centered */}
          <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
            {navItems.map((item) => {
              const isActive =
                activeDropdown === item.label ||
                activeItem === item.label ||
                (item.href && pathname === item.href)

              if (item.dropdown) {
                return (
                  <button
                    key={item.label}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    className={`relative flex items-center gap-1 text-[15px] font-semibold py-6 transition-colors ${isActive ? 'text-[#1a5a7a]' : 'text-[#1a3a5c] hover:text-[#1a5a7a]'
                      }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                    />
                    {isActive && (
                      <span className="absolute left-0 right-4 bottom-0 h-[3px] bg-[#1a5a7a]" />
                    )}
                  </button>
                )
              }
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  onMouseEnter={() => setActiveDropdown(null)}
                  onClick={() => setActiveDropdown(null)}
                  className={`relative text-[15px] font-semibold py-6 transition-colors ${isActive ? 'text-[#1a5a7a]' : 'text-[#1a3a5c] hover:text-[#1a5a7a]'
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#1a5a7a]" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-5 shrink-0 ml-auto">
            {/* <Link
              href="/supplier"
              className="hidden lg:flex items-center gap-2 text-[14px] font-medium text-[#1a3a5c] hover:text-[#1a5a7a] transition-colors"
            >
              <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center">
                <Users className="w-3 h-3" strokeWidth={2.2} />
              </span>
              Supplier Portal
            </Link>

            <Link
              href="/buyer"
              className="hidden lg:flex items-center gap-2 text-[14px] font-medium text-[#1a3a5c] hover:text-[#1a5a7a]"
            >
              <span className="w-6 h-6 rounded-full border flex items-center justify-center">
                <Users className="w-3 h-3" />
              </span>
              Buyer Portal
            </Link> */}


            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-[14px] font-semibold bg-[#f39c12] text-white px-6 py-2.5 rounded hover:bg-[#e67e22] transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[#1a3a5c] hover:bg-gray-100 transition-colors ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Full-width dropdown panel */}
      {activeDropdown && (() => {
        const item = navItems.find((i) => i.label === activeDropdown)
        if (!item?.dropdown) return null
        return (
          <div
            className="hidden md:block absolute top-full left-0 right-0 bg-[#002C50] text-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
              {item.dropdown.exploreLink && (
                <Link
                  href={item.dropdown.exploreLink.href}
                  onClick={() => setActiveDropdown(null)}
                  className="inline-flex items-center gap-2 text-white font-bold text-lg mb-8 hover:text-[#FFD562] transition-colors group"
                >
                  {item.dropdown.exploreLink.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {item.dropdown.groups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-white font-bold text-base mb-5">{group.title}</h4>
                    <ul className="space-y-4">
                      {group.items.map((sub) => (
                        <li key={sub.href + sub.label}>
                          <Link
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-start gap-3 text-white/80 hover:text-white transition-colors"
                          >
                            {sub.icon && (
                              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#1a5a7a] transition-colors mt-0.5">
                                <sub.icon className="w-4 h-4" strokeWidth={2} />
                              </span>
                            )}
                            <span className="flex-1">
                              <span className="block text-sm font-semibold">{sub.label}</span>
                              {sub.desc && (
                                <span className="block text-xs text-white/50 leading-snug mt-0.5">
                                  {sub.desc}
                                </span>
                              )}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })()}

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-[90vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-5 space-y-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                  }
                  className="flex items-center justify-between w-full py-3 text-[15px] font-semibold text-[#1a3a5c]"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {mobileExpanded === item.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.dropdown.groups.flatMap((g) =>
                      g.items.map((sub) => (
                        <Link
                          key={sub.href + sub.label}
                          href={sub.href}
                          onClick={() => {
                            setMobileOpen(false)
                            setMobileExpanded(null)
                          }}
                          className="flex items-center gap-3 py-2.5 text-sm text-gray-600 hover:text-[#1a5a7a]"
                        >
                          {sub.icon && <sub.icon className="w-4 h-4 text-gray-400 shrink-0" />}
                          {sub.label}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-[15px] font-semibold ${pathname === item.href ? 'text-[#1a5a7a]' : 'text-[#1a3a5c]'
                  }`}
              >
                {item.label}
              </Link>
            )
          )}

          <div className="pt-4 mt-2 space-y-3 border-t border-gray-100">
            {utilityLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-gray-600"
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/supplier"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 mt-3"
            >
              <Users className="w-4 h-4" /> Supplier Portal
            </Link>
            <Link
              href="/buyer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 mt-3"
            >
              <Users className="w-4 h-4" /> Buyer Portal
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#f39c12] rounded-lg text-sm font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
