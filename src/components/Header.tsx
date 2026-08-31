"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  X,
  Menu,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Code2,
  PhoneCall,
  MessageSquare,
  Globe,
  Repeat,
  Sparkles,
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Layers,
  BarChart3
} from "lucide-react";

interface HeaderProps {
  onOpenDemo?: () => void;
}

export default function Header({ onOpenDemo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  // Close dropdowns on outside click
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* -------------------- TOP ANNOUNCEMENT BANNER -------------------- */}
      <aside aria-label="Announcement" className="bg-[#09090b] text-white border-b border-[#27272a] py-2 px-4 text-xs">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white font-mono">
              Integrated Talent Journey
            </span>
            <span className="text-[#a1a1aa]">
              Assess → Interview → Develop → Reassess in one unified AI platform.
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#a1a1aa]">
            <a
              href="tel:+919811352666"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-mono"
            >
              <Phone className="w-3 h-3" /> +91-9811352666
            </a>
            <span className="hidden sm:inline text-[#3f3f46]">|</span>
            <a
              href="mailto:mvasir@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors font-mono"
            >
              <Mail className="w-3 h-3" /> mvasir@gmail.com
            </a>
          </div>
        </div>
      </aside>

      {/* -------------------- STICKY HEADER -------------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e4e4e7]">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Brand Logo & Main Nav */}
          <div className="flex items-center gap-6" ref={navRef}>
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <img
                src="/greatcampus-logo-cropped.png"
                alt="GreatCampus — Assess. Interview. Develop"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 xl:gap-2 lg:flex pl-3">
              {/* Home */}
              <Link
                href="/"
                className="inline-flex h-9 items-center rounded-md px-3 text-[13.5px] font-medium text-[#52525b] hover:text-[#09090b] hover:bg-[#fafafa] transition-colors"
              >
                Home
              </Link>

              {/* -------------------- MEGA MENU: ALL PRODUCTS -------------------- */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setProductsOpen(true);
                  setSolutionsOpen(false);
                }}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setProductsOpen(!productsOpen)}
                  className={`inline-flex h-9 items-center gap-1.5 rounded-lg px-3.5 text-[13.5px] font-bold transition-all cursor-pointer ${
                    productsOpen
                      ? "bg-[#09090b] text-white shadow-sm"
                      : "bg-[#f4f4f5] text-[#09090b] hover:bg-[#e4e4e7]"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      productsOpen ? "rotate-180 text-white" : "text-[#71717a]"
                    }`}
                  />
                </button>

                {/* All Products Mega-Menu Dropdown */}
                {productsOpen && (
                  <div className="absolute top-full left-[-80px] w-[860px] bg-white rounded-3xl border border-[#27272a] shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#e4e4e7] pb-3 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#09090b] animate-pulse"></span>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#09090b]">
                          GreatCampus Complete Product Suite
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#71717a]">
                        Assess → Interview → Select → Develop → Reassess
                      </span>
                    </div>

                    {/* 3 Core Pillars Columns */}
                    <div className="grid grid-cols-3 gap-6">
                      {/* Product 01: ASSESS */}
                      <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-4 flex flex-col justify-between hover:border-[#09090b] transition-all group">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2 py-0.5 rounded bg-[#09090b] text-white font-mono font-bold text-[10px]">
                              PRODUCT 01
                            </span>
                            <span className="text-[10px] font-mono text-[#71717a]">Pre-Hire</span>
                          </div>

                          <Link
                            href="/assess"
                            onClick={() => setProductsOpen(false)}
                            className="font-extrabold text-[15px] text-[#09090b] group-hover:underline block leading-tight mb-1"
                          >
                            Digital Assessments & AI Proctoring
                          </Link>
                          <p className="text-[11.5px] text-[#52525b] mb-3 leading-relaxed">
                            Objective digital testing measuring true capabilities beyond the resume.
                          </p>

                          <ul className="space-y-1.5 text-[11.5px] text-[#09090b] border-t border-[#e4e4e7] pt-2.5">
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> Aptitude (Numerical, Logical, Verbal)
                            </li>
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> 15+ Language Cloud Code Sandbox
                            </li>
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> Role Tests (Sales, Finance, Ops)
                            </li>
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> Behavioural Competency Matrix
                            </li>
                            <li className="flex items-center gap-1.5 font-bold text-[#09090b]">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#09090b]" /> AI Anti-Cheat Proctoring
                            </li>
                          </ul>
                        </div>

                        <Link
                          href="/assess"
                          onClick={() => setProductsOpen(false)}
                          className="mt-4 pt-2.5 border-t border-[#e4e4e7] flex items-center justify-between text-[11.5px] font-bold text-[#09090b] group-hover:underline"
                        >
                          <span>Explore Assess Suite</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {/* Product 02: INTERVIEW */}
                      <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-4 flex flex-col justify-between hover:border-[#09090b] transition-all group">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2 py-0.5 rounded bg-[#09090b] text-white font-mono font-bold text-[10px]">
                              PRODUCT 02
                            </span>
                            <span className="text-[10px] font-mono text-[#71717a]">At Scale</span>
                          </div>

                          <Link
                            href="/interview"
                            onClick={() => setProductsOpen(false)}
                            className="font-extrabold text-[15px] text-[#09090b] group-hover:underline block leading-tight mb-1"
                          >
                            AI Voice & Video First-Round Interviews
                          </Link>
                          <p className="text-[11.5px] text-[#52525b] mb-3 leading-relaxed">
                            Screen 100% of applicants with dynamic AI questioning and instant scorecards.
                          </p>

                          <ul className="space-y-1.5 text-[11.5px] text-[#09090b] border-t border-[#e4e4e7] pt-2.5">
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> Direct Automated Phone Call
                            </li>
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> WhatsApp Voice Note Interviews
                            </li>
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> Web Video Room Evaluator
                            </li>
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> 14 Indian & Global Languages
                            </li>
                            <li className="flex items-center gap-1.5 font-bold text-[#09090b]">
                              <span className="text-[#71717a]">▪</span> Instant ATS Scorecard & Audio Snippets
                            </li>
                          </ul>
                        </div>

                        <Link
                          href="/interview"
                          onClick={() => setProductsOpen(false)}
                          className="mt-4 pt-2.5 border-t border-[#e4e4e7] flex items-center justify-between text-[11.5px] font-bold text-[#09090b] group-hover:underline"
                        >
                          <span>Explore Interview Suite</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {/* Product 03: DEVELOP */}
                      <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-4 flex flex-col justify-between hover:border-[#09090b] transition-all group">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2 py-0.5 rounded bg-[#09090b] text-white font-mono font-bold text-[10px]">
                              PRODUCT 03
                            </span>
                            <span className="text-[10px] font-mono text-[#71717a]">Post-Hire</span>
                          </div>

                          <Link
                            href="/develop"
                            onClick={() => setProductsOpen(false)}
                            className="font-extrabold text-[15px] text-[#09090b] group-hover:underline block leading-tight mb-1"
                          >
                            Workforce Microlearning & Reassessment
                          </Link>
                          <p className="text-[11.5px] text-[#52525b] mb-3 leading-relaxed">
                            Transform candidate skill gaps into continuous practical 5-minute modules.
                          </p>

                          <ul className="space-y-1.5 text-[11.5px] text-[#09090b] border-t border-[#e4e4e7] pt-2.5">
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> Automated Skill Gap Mapping
                            </li>
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> Sales & Negotiation Enablement
                            </li>
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> Customer Service & Empathy Drills
                            </li>
                            <li className="flex items-center gap-1.5 font-medium">
                              <span className="text-[#71717a]">▪</span> Leadership & Conflict Resolution
                            </li>
                            <li className="flex items-center gap-1.5 font-bold text-[#09090b]">
                              <Repeat className="w-3.5 h-3.5 text-[#09090b]" /> 30-60-90 Day Skill Gain Tracking
                            </li>
                          </ul>
                        </div>

                        <Link
                          href="/develop"
                          onClick={() => setProductsOpen(false)}
                          className="mt-4 pt-2.5 border-t border-[#e4e4e7] flex items-center justify-between text-[11.5px] font-bold text-[#09090b] group-hover:underline"
                        >
                          <span>Explore Develop Suite</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Bottom Quick-Action Bar */}
                    <div className="mt-5 pt-4 border-t border-[#e4e4e7] flex items-center justify-between bg-[#09090b] text-white p-3.5 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-white bg-white/10 px-2.5 py-1 rounded">
                          ALL-IN-ONE
                        </span>
                        <span className="text-xs text-[#a1a1aa]">
                          Need all 3 products combined in a unified talent loop?
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Link
                          href="/"
                          onClick={() => setProductsOpen(false)}
                          className="text-xs font-bold text-white hover:underline flex items-center gap-1"
                        >
                          View Full Journey <ArrowRight className="w-3 h-3" />
                        </Link>
                        <span className="text-[#3f3f46]">|</span>
                        <Link
                          href="/pricing"
                          onClick={() => setProductsOpen(false)}
                          className="text-xs font-bold text-[#a1a1aa] hover:text-white"
                        >
                          ROI Calculator
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SOLUTIONS DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setSolutionsOpen(true);
                  setProductsOpen(false);
                }}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className={`inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-[13.5px] font-medium transition-colors cursor-pointer ${
                    solutionsOpen
                      ? "bg-[#09090b] text-white"
                      : "text-[#52525b] hover:text-[#09090b] hover:bg-[#fafafa]"
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      solutionsOpen ? "rotate-180 text-white" : "text-[#71717a]"
                    }`}
                  />
                </button>

                {/* Solutions Dropdown Menu */}
                {solutionsOpen && (
                  <div className="absolute top-full left-0 w-[450px] bg-white rounded-2xl border border-[#27272a] shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                    <Link
                      href="/solutions#recruitment"
                      onClick={() => setSolutionsOpen(false)}
                      className="block p-3 rounded-xl hover:bg-[#fafafa] border border-transparent hover:border-[#e4e4e7] transition-all"
                    >
                      <span className="font-bold text-xs text-[#09090b] block">
                        Corporate Talent Acquisition
                      </span>
                      <span className="text-[11px] text-[#71717a]">
                        High-volume screening and candidate shortlisting without recruiter burnout.
                      </span>
                    </Link>

                    <Link
                      href="/solutions#staffing"
                      onClick={() => setSolutionsOpen(false)}
                      className="block p-3 rounded-xl hover:bg-[#fafafa] border border-transparent hover:border-[#e4e4e7] transition-all"
                    >
                      <span className="font-bold text-xs text-[#09090b] block">
                        Recruitment & Staffing Agencies
                      </span>
                      <span className="text-[11px] text-[#71717a]">
                        Deliver evidence-based candidate portfolios instead of raw resumes.
                      </span>
                    </Link>

                    <Link
                      href="/solutions#universities"
                      onClick={() => setSolutionsOpen(false)}
                      className="block p-3 rounded-xl hover:bg-[#fafafa] border border-transparent hover:border-[#e4e4e7] transition-all"
                    >
                      <span className="font-bold text-xs text-[#09090b] block">
                        Universities & Higher Education
                      </span>
                      <span className="text-[11px] text-[#71717a]">
                        Empower student employability with AI mock interviews & campus placement readiness.
                      </span>
                    </Link>

                    <Link
                      href="/solutions#ld"
                      onClick={() => setSolutionsOpen(false)}
                      className="block p-3 rounded-xl hover:bg-[#fafafa] border border-transparent hover:border-[#e4e4e7] transition-all"
                    >
                      <span className="font-bold text-xs text-[#09090b] block">
                        Learning & Development (L&D)
                      </span>
                      <span className="text-[11px] text-[#71717a]">
                        Turn training into continuous capability growth with measurable reassessment.
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              {/* The Difference */}
              <Link
                href="/difference"
                className="inline-flex h-9 items-center rounded-md px-3 text-[13.5px] font-medium text-[#52525b] hover:text-[#09090b] hover:bg-[#fafafa] transition-colors"
              >
                The Difference
              </Link>

              {/* Pricing & ROI */}
              <Link
                href="/pricing"
                className="inline-flex h-9 items-center rounded-md px-3 text-[13.5px] font-medium text-[#52525b] hover:text-[#09090b] hover:bg-[#fafafa] transition-colors"
              >
                Pricing & ROI
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="inline-flex h-9 items-center rounded-md px-3 text-[13.5px] font-medium text-[#52525b] hover:text-[#09090b] hover:bg-[#fafafa] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="text-[13px] font-semibold text-[#52525b] hover:text-[#09090b] transition-colors px-2 py-2"
            >
              Direct Briefing
            </Link>
            {onOpenDemo ? (
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex h-9 items-center justify-center rounded-lg bg-[#09090b] px-4 text-[13px] font-semibold text-white hover:bg-[#27272a] transition-all border border-[#09090b] shadow-sm cursor-pointer"
              >
                Book a Demo
              </button>
            ) : (
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-lg bg-[#09090b] px-4 text-[13px] font-semibold text-white hover:bg-[#27272a] transition-all border border-[#09090b] shadow-sm"
              >
                Book a Demo
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#09090b] hover:bg-[#f4f4f5] lg:hidden border border-[#e4e4e7]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e4e4e7] bg-white px-6 py-5 shadow-xl space-y-4 max-h-[85vh] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-[15px] text-[#09090b] py-1 border-b border-slate-100"
            >
              Home
            </Link>

            {/* Mobile Products Accordion */}
            <div className="border-b border-slate-100 pb-3">
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between text-[13px] font-mono font-bold uppercase tracking-wider text-[#09090b] py-1"
              >
                <span>ALL PRODUCTS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileProductsOpen && (
                <div className="mt-2 space-y-2 pl-2">
                  <Link
                    href="/assess"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2 rounded-lg bg-[#fafafa] border border-[#e4e4e7]"
                  >
                    <span className="font-bold text-xs text-[#09090b] block">01 - ASSESS (Digital Tests & AI Proctoring)</span>
                    <span className="text-[11px] text-[#71717a]">Aptitude, 15+ coding languages sandbox & anti-cheat.</span>
                  </Link>

                  <Link
                    href="/interview"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2 rounded-lg bg-[#fafafa] border border-[#e4e4e7]"
                  >
                    <span className="font-bold text-xs text-[#09090b] block">02 - INTERVIEW (AI Voice & Video First-Round)</span>
                    <span className="text-[11px] text-[#71717a]">Phone, WhatsApp & Web interviews in 14 languages.</span>
                  </Link>

                  <Link
                    href="/develop"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2 rounded-lg bg-[#fafafa] border border-[#e4e4e7]"
                  >
                    <span className="font-bold text-xs text-[#09090b] block">03 - DEVELOP (Microlearning & Reassessment)</span>
                    <span className="text-[11px] text-[#71717a]">5-min daily modules & verified 30/60/90-day progress.</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion */}
            <div className="border-b border-slate-100 pb-3">
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between text-[13px] font-mono font-bold uppercase tracking-wider text-[#09090b] py-1"
              >
                <span>LIFECYCLE SOLUTIONS</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileSolutionsOpen && (
                <div className="mt-2 space-y-1 pl-2 text-xs">
                  <Link
                    href="/solutions#recruitment"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#52525b] hover:text-[#09090b]"
                  >
                    • Corporate Talent Acquisition
                  </Link>
                  <Link
                    href="/solutions#staffing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#52525b] hover:text-[#09090b]"
                  >
                    • Staffing & Recruitment Agencies
                  </Link>
                  <Link
                    href="/solutions#universities"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#52525b] hover:text-[#09090b]"
                  >
                    • Universities & Higher Education
                  </Link>
                  <Link
                    href="/solutions#ld"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-[#52525b] hover:text-[#09090b]"
                  >
                    • Learning & Development (L&D)
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/difference"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium text-[14.5px] text-[#09090b] py-1 border-b border-slate-100"
            >
              The GreatCampus Difference
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium text-[14.5px] text-[#09090b] py-1 border-b border-slate-100"
            >
              Pricing & ROI
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium text-[14.5px] text-[#09090b] py-1"
            >
              Contact & Leadership
            </Link>
            <div className="pt-3 border-t border-[#e4e4e7] flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-[#09090b] text-white font-semibold text-[14px]"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
