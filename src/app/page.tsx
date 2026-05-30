"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Star,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

/* ============================================
   LUXURY / EDITORIAL — SINGLE PAGE SHOWCASE
   ============================================ */

// ─── Navigation ────────────────────────────────
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#F9F8F6]/90 backdrop-blur-sm border-b border-[#1A1A1A]/10">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl tracking-tight text-[#1A1A1A]"
          >
            Maison
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {["Collection", "Atelier", "Journal", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs tracking-[0.2em] uppercase text-[#6C6863] hover:text-[#D4AF37] transition-colors duration-500 font-[family-name:var(--font-inter)] font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center h-10 px-8 bg-[#1A1A1A] text-white text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-medium shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-shadow duration-500 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-[#D4AF37] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
              <span className="relative z-10">Inquire</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#1A1A1A] p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#1A1A1A]/10 bg-[#F9F8F6]">
          <div className="px-8 py-8 flex flex-col gap-6">
            {["Collection", "Atelier", "Journal", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs tracking-[0.2em] uppercase text-[#6C6863] hover:text-[#D4AF37] transition-colors duration-500 font-[family-name:var(--font-inter)] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Vertical Grid Lines ────────────────────────
function VerticalGridLines() {
  return (
    <div className="hidden lg:block fixed inset-0 z-30 pointer-events-none" aria-hidden="true">
      <div className="max-w-[1600px] mx-auto h-full relative px-16">
        {/* Line 1 — left edge */}
        <div className="absolute left-[calc(16px+0px)] top-0 bottom-0 w-px bg-[#1A1A1A]/[0.07]" />
        {/* Line 2 — 1/4 */}
        <div className="absolute left-[25%] top-0 bottom-0 w-px bg-[#1A1A1A]/[0.07]" />
        {/* Line 3 — 3/4 */}
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-[#1A1A1A]/[0.07]" />
        {/* Line 4 — right edge */}
        <div className="absolute right-[calc(16px+0px)] top-0 bottom-0 w-px bg-[#1A1A1A]/[0.07]" />
      </div>
    </div>
  );
}

// ─── Hero Section ────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end bg-[#F9F8F6] pt-20">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 w-full py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end">
          {/* Text Content — bottom-left aligned */}
          <div className="lg:col-span-6 lg:col-start-1 flex flex-col justify-end">
            {/* Decorative line */}
            <div className="h-px w-8 md:w-12 bg-[#1A1A1A] mb-6" />
            {/* Overline */}
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#6C6863] font-[family-name:var(--font-inter)] font-medium mb-6 md:mb-8">
              Editorial / Vol. 01
            </p>
            {/* Headline */}
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight text-[#1A1A1A] mb-8 md:mb-12">
              Curated{" "}
              <em className="text-[#D4AF37] italic">Excellence</em>
            </h1>
            {/* Body */}
            <p className="font-[family-name:var(--font-inter)] text-base md:text-lg leading-relaxed text-[#6C6863] max-w-md mb-10 md:mb-14">
              Where timeless elegance meets modern sophistication.
              Each piece is a testament to the art of deliberate
              craftsmanship and refined taste.
            </p>
            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#collection"
                className="inline-flex items-center justify-center h-12 md:h-14 px-10 bg-[#1A1A1A] text-white text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-medium shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-shadow duration-500 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-[#D4AF37] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Collection
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="#atelier"
                className="inline-flex items-center justify-center h-12 md:h-14 px-10 border border-[#1A1A1A] text-[#1A1A1A] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-medium hover:bg-[#1A1A1A] hover:text-white transition-all duration-500"
              >
                Visit Atelier
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 lg:col-start-8 relative group mt-12 lg:mt-0">
            {/* Vertical text label */}
            <span className="vertical-text hidden lg:block absolute -left-8 top-0 text-[10px] tracking-[0.3em] uppercase text-[#6C6863] font-[family-name:var(--font-inter)] font-light">
              Maison / Since 1897
            </span>
            <div className="relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <div className="shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
                <img
                  src="/images/hero.png"
                  alt="Elegant figure in neoclassical architecture"
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Section ────────────────────────────
function FeaturesSection() {
  const features = [
    {
      overline: "The Craft",
      title: (
        <>
          The <em className="italic text-[#D4AF37]">Process</em>
        </>
      ),
      description:
        "Every creation begins with a single thread of inspiration, woven through generations of mastery into something extraordinary.",
      image: "/images/feature-craft.png",
    },
    {
      overline: "The Space",
      title: (
        <>
          The <em className="italic text-[#D4AF37]">Atelier</em>
        </>
      ),
      description:
        "Our workshops are sanctuaries of precision — where natural light meets meticulous handiwork, and time moves at the pace of excellence.",
      image: "/images/feature-interior.png",
    },
    {
      overline: "The Detail",
      title: (
        <>
          The <em className="italic text-[#D4AF37]">Details</em>
        </>
      ),
      description:
        "In the intersection of material and intention lies the essence of luxury — invisible to the hurried eye, unforgettable to the discerning.",
      image: "/images/feature-detail.png",
    },
  ];

  return (
    <section id="collection" className="bg-[#F9F8F6] py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="h-px w-8 md:w-12 bg-[#1A1A1A] mb-6" />
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#6C6863] font-[family-name:var(--font-inter)] font-medium mb-4">
            Our Collection
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-7xl leading-[0.9] tracking-tight text-[#1A1A1A]">
            Defining <em className="italic text-[#D4AF37]">Elegance</em>
          </h2>
        </div>

        {/* Features Grid — Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`md:col-span-4 ${
                i === 1 ? "md:col-start-5" : i === 2 ? "md:col-start-9" : ""
              } group`}
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-700">
                <div className="shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
                  <img
                    src={feature.image}
                    alt={feature.overline}
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  />
                </div>
              </div>
              {/* Text */}
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#6C6863] font-[family-name:var(--font-inter)] font-medium mb-3">
                {feature.overline}
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl leading-tight text-[#1A1A1A] mb-4">
                {feature.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-base leading-relaxed text-[#6C6863]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Section (Dark) ────────────────────────
function StatsSection() {
  const stats = [
    { number: "127", label: "Years of Heritage" },
    { number: "43", label: "Master Artisans" },
    { number: "12", label: "Global Ateliers" },
    { number: "∞", label: "Stories to Tell" },
  ];

  return (
    <section className="bg-[#1A1A1A] py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left border-t border-[#F9F8F6]/10 pt-8">
              <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl leading-none text-[#F9F8F6] mb-3">
                {stat.number}
              </div>
              <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#EBE5DE]/60 font-[family-name:var(--font-inter)] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The attention to detail is unlike anything I have experienced. Each piece feels as though it was made specifically for me — a dialogue between artisan and wearer.",
      name: "Isabelle Laurent",
      role: "Creative Director, Paris",
      avatar: "/images/avatar-1.png",
      stars: 5,
    },
    {
      quote:
        "In a world of excess, Maison chooses restraint. That is the truest luxury — the confidence to leave things out, to let quality speak in whispers.",
      name: "Marcus Chen",
      role: "Architecture & Design, London",
      avatar: "/images/avatar-2.png",
      stars: 5,
    },
    {
      quote:
        "I have collected their pieces for over a decade. Time has only deepened my appreciation — each garment ages with a grace that fast fashion could never comprehend.",
      name: "Elena Voss",
      role: "Editor-in-Chief, Berlin",
      avatar: "/images/avatar-3.png",
      stars: 5,
    },
  ];

  return (
    <section id="atelier" className="bg-[#F9F8F6] py-24 md:py-32 border-t border-[#1A1A1A]/10">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="h-px w-8 md:w-12 bg-[#1A1A1A] mb-6" />
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#6C6863] font-[family-name:var(--font-inter)] font-medium mb-4">
            Voices
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-7xl leading-[0.9] tracking-tight text-[#1A1A1A]">
            What They{" "}
            <em className="italic text-[#D4AF37]">Say</em>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group border-l-2 border-l-[#1A1A1A]/15 pl-6 md:pl-8 py-4 hover:border-l-[#D4AF37] hover:pl-8 md:hover:pl-10 transition-all duration-700"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    strokeWidth={1}
                    className="text-[#D4AF37] fill-[#D4AF37] group-hover:scale-110 transition-transform duration-500"
                  />
                ))}
              </div>
              {/* Quote */}
              <blockquote className="font-[family-name:var(--font-playfair)] text-lg md:text-xl lg:text-2xl leading-relaxed text-[#1A1A1A] mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative overflow-hidden w-12 h-12 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms]"
                  />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-sm font-medium text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-500">
                    {t.name}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[#6C6863]">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Blog / Journal Section ──────────────────────
function JournalSection() {
  const posts = [
    {
      category: "Craft",
      date: "March 2025",
      title: "The Invisible Architecture of Luxury",
      excerpt:
        "Behind every seam lies a decision — a choice made not for efficiency, but for excellence that reveals itself over decades.",
      image: "/images/blog-1.png",
    },
    {
      category: "Culture",
      date: "February 2025",
      title: "Silence as Statement: The Power of Restraint",
      excerpt:
        "In a culture that shouts, the quietest voice often carries the most weight. We explore the philosophy of intentional absence.",
      image: "/images/blog-2.png",
    },
    {
      category: "Design",
      date: "January 2025",
      title: "Geometry of Grace: When Form Follows Feeling",
      excerpt:
        "The most enduring designs are not born from logic alone. They emerge where mathematics meets emotion — precise yet alive.",
      image: "/images/blog-3.png",
    },
  ];

  return (
    <section id="journal" className="bg-[#EBE5DE]/40 py-24 md:py-32 border-t border-[#1A1A1A]/10">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="h-px w-8 md:w-12 bg-[#1A1A1A] mb-6" />
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#6C6863] font-[family-name:var(--font-inter)] font-medium mb-4">
            Journal
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-7xl leading-[0.9] tracking-tight text-[#1A1A1A]">
            From the{" "}
            <em className="italic text-[#D4AF37]">Archive</em>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {posts.map((post, i) => (
            <article
              key={i}
              className={`group cursor-pointer ${
                i === 0
                  ? "md:col-span-7"
                  : "md:col-span-5"
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-700">
                <div className="shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                      i === 0 ? "aspect-[4/5]" : "aspect-[3/4]"
                    }`}
                  />
                </div>
              </div>
              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-[family-name:var(--font-inter)] font-medium">
                  {post.category}
                </span>
                <span className="h-px w-4 bg-[#1A1A1A]/20" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#6C6863] font-[family-name:var(--font-inter)]">
                  {post.date}
                </span>
              </div>
              {/* Title */}
              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl lg:text-3xl leading-tight text-[#1A1A1A] mb-3 group-hover:text-[#D4AF37] transition-colors duration-500">
                {post.title}
              </h3>
              {/* Excerpt */}
              <p className="font-[family-name:var(--font-inter)] text-sm md:text-base leading-relaxed text-[#6C6863]">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What defines the Maison approach to craftsmanship?",
      a: "Every Maison creation is the product of at least 200 hours of handiwork. We employ techniques passed down through four generations of artisans, refusing any compromise that would sacrifice longevity for speed. Our materials are sourced from the same suppliers since 1897 — relationships built on trust and shared standards of excellence.",
    },
    {
      q: "How does Maison ensure sustainability in production?",
      a: "Sustainability is not an initiative for us — it is the only way we have ever worked. Our pieces are designed to outlast their owners. We use vegetable-tanned leathers, organic silks, and natural dyes exclusively. Every offcut is repurposed. Our ateliers run on renewable energy, and we offset what remains through verified reforestation programs.",
    },
    {
      q: "Can I commission a bespoke piece?",
      a: "We welcome bespoke commissions through our Atelier program. The process begins with an in-person consultation at one of our twelve global ateliers. From there, your dedicated artisan will guide you through material selection, measurements, and iterative fittings over a period of 8–12 weeks. Each bespoke piece is archived in our permanent registry.",
    },
    {
      q: "What is the care philosophy for Maison pieces?",
      a: "We believe luxury improves with age. Each purchase includes a lifetime care guide specific to your piece, and complimentary annual conditioning at any atelier. Our repairs are performed by the same artisans who create new work — never outsourced. A Maison piece should carry your story and be worthy of passing on.",
    },
  ];

  return (
    <section className="bg-[#F9F8F6] py-24 md:py-32 border-t border-[#1A1A1A]/10">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — Header */}
          <div className="md:col-span-4">
            <div className="h-px w-8 md:w-12 bg-[#1A1A1A] mb-6" />
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#6C6863] font-[family-name:var(--font-inter)] font-medium mb-4">
              Questions
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl leading-[0.9] tracking-tight text-[#1A1A1A]">
              The <em className="italic text-[#D4AF37]">Details</em>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-base leading-relaxed text-[#6C6863] mt-6 max-w-sm">
              Every question deserves a considered answer. We believe transparency is the foundation of trust.
            </p>
          </div>

          {/* Right — Accordion */}
          <div className="md:col-span-7 md:col-start-6">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`border-t border-[#1A1A1A]/15 ${i === faqs.length - 1 ? "border-b" : ""}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between py-6 md:py-8 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-[family-name:var(--font-inter)] text-base md:text-lg font-medium text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-500 pr-8">
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 border border-[#1A1A1A]/20 flex items-center justify-center transition-all duration-500 ${
                        isOpen
                          ? "rotate-90 border-[#D4AF37] bg-[#D4AF37]/5"
                          : ""
                      }`}
                    >
                      <ChevronDown
                        size={14}
                        strokeWidth={1.5}
                        className={`transition-all duration-500 ${
                          isOpen ? "text-[#D4AF37]" : "text-[#6C6863]"
                        }`}
                      />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="animate-fade-in-up pb-6 md:pb-8">
                      <p className="font-[family-name:var(--font-inter)] text-sm md:text-base leading-relaxed text-[#6C6863] max-w-xl">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About / Drop Cap Section ────────────────────
function AboutSection() {
  return (
    <section id="about" className="bg-[#F9F8F6] py-24 md:py-32 border-t border-[#1A1A1A]/10">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — Vertical text + Image */}
          <div className="md:col-span-5 relative group">
            <span className="vertical-text hidden lg:block absolute -left-4 top-0 text-[10px] tracking-[0.3em] uppercase text-[#6C6863] font-[family-name:var(--font-inter)] font-light">
              Heritage / Est. 1897
            </span>
            <div className="relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <div className="shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
                <img
                  src="/images/feature-interior.png"
                  alt="Maison atelier interior"
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                />
              </div>
            </div>
          </div>

          {/* Right — Text with Drop Cap */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <div className="h-px w-8 md:w-12 bg-[#1A1A1A] mb-6" />
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#6C6863] font-[family-name:var(--font-inter)] font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-[#1A1A1A] mb-8 md:mb-12">
              A Legacy of{" "}
              <em className="italic text-[#D4AF37]">Purpose</em>
            </h2>
            <div className="drop-cap">
              <p className="font-[family-name:var(--font-inter)] text-base md:text-lg leading-relaxed text-[#6C6863] mb-6">
                Founded in the twilight of the nineteenth century, Maison was born from a conviction that true luxury cannot be rushed. In a small atelier on the Left Bank of Paris, our founder established a practice that treated each creation as a conversation between material and intention — a philosophy that has guided every decision since.
              </p>
            </div>
            <p className="font-[family-name:var(--font-inter)] text-base md:text-lg leading-relaxed text-[#6C6863] mb-8">
              Over a century later, that conviction has only deepened. We remain
              family-owned, artisan-led, and unyielding in our standards. In an
              age of acceleration, we choose deliberation. Because the things
              that endure are never made in haste.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm font-medium text-[#1A1A1A] hover:text-[#D4AF37] transition-colors duration-500 group/link"
            >
              Read our full history
              <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-500 group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer CTA / Newsletter ──────────────────────
function FooterCTA() {
  return (
    <section id="contact" className="bg-[#1A1A1A] py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="h-px w-8 md:w-12 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#EBE5DE]/60 font-[family-name:var(--font-inter)] font-medium mb-4">
            Stay Informed
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-[#F9F8F6] mb-4">
            Join the <em className="italic text-[#D4AF37]">Inner Circle</em>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-base leading-relaxed text-[#EBE5DE]/60 mb-10 md:mb-12">
            Receive exclusive invitations, early access to collections, and
            stories from our atelier. We write infrequently — only when we have
            something worth saying.
          </p>
          {/* Email Input + Button */}
          <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-12 bg-transparent border-b border-[#F9F8F6]/30 text-[#F9F8F6] font-[family-name:var(--font-inter)] text-sm px-0 py-2 focus:outline-none focus-visible:border-[#D4AF37] placeholder:font-[family-name:var(--font-playfair)] placeholder:italic placeholder:text-[#EBE5DE]/40 transition-colors duration-500 sm:border-b-0 sm:border-r"
            />
            <button className="h-12 px-8 bg-[#F9F8F6] text-[#1A1A1A] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-medium hover:bg-[#D4AF37] hover:text-white transition-all duration-500">
              Subscribe
            </button>
          </div>
          <p className="font-[family-name:var(--font-inter)] text-[10px] text-[#EBE5DE]/40 mt-4 tracking-wide">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────
function Footer() {
  const columns = [
    {
      title: "Maison",
      links: ["Our Story", "Artisans", "Sustainability", "Careers"],
    },
    {
      title: "Collections",
      links: ["Autumn/Winter", "Spring/Summer", "Archive", "Bespoke"],
    },
    {
      title: "Client Care",
      links: ["Contact", "Care Guide", "Repairs", "Shipping"],
    },
  ];

  return (
    <footer className="bg-[#1A1A1A] border-t border-[#F9F8F6]/10 py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#F9F8F6] tracking-tight">
              Maison
            </span>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#EBE5DE]/50 mt-4 max-w-xs leading-relaxed">
              Curating excellence since 1897. Every piece a testament to the art
              of deliberate craftsmanship.
            </p>
            {/* Social */}
            <div className="flex gap-5 mt-6">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-[#EBE5DE]/40 hover:text-[#D4AF37] transition-colors duration-500"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2 md:col-start-auto">
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#EBE5DE]/40 font-[family-name:var(--font-inter)] font-medium mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-[family-name:var(--font-inter)] text-sm text-[#EBE5DE]/60 hover:text-[#D4AF37] transition-colors duration-500"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#F9F8F6]/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#EBE5DE]/30">
            &copy; 2025 Maison. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#EBE5DE]/30 hover:text-[#D4AF37] transition-colors duration-500"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F6]">
      <VerticalGridLines />
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <AboutSection />
        <TestimonialsSection />
        <JournalSection />
        <FAQSection />
      </main>
      <FooterCTA />
      <Footer />
    </div>
  );
}
