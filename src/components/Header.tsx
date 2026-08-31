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
  BarChart3,
  Target,
  FileCheck,
  TrendingUp,
  Building2,
  Clock,
  Check
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
      <aside aria-label="Announcement" className="bg-[#09090b] text-white border-b border-[#27272a] py-2 px-3 sm:px-4 text-xs">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white font-mono">
              Integrated Talent
            </span>
            <span className="text-[#a1a1aa] text-[11px] sm:text-xs">
              Assess → Interview → Develop → Reassess
            </span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-4 text-[#a1a1aa] flex-wrap justify-center text-[11px] sm:text-xs">
            <a
              href="tel:+919811352666"
              className="flex items-center gap-1 hover:text-white transition-colors font-mono"
            >
              <Phone className="w-3 h-3 text-white shrink-0" /> +91-9811352666
            </a>
            <span className="text-[#3f3f46]">|</span>
            <a
              href="tel:+919073351545"
              className="flex items-center gap-1 hover:text-white transition-colors font-mono"
            >
              <Phone className="w-3 h-3 text-white shrink-0" /> +91-9073351545
            </a>
            <span className="hidden md:inline text-[#3f3f46]">|</span>
            <a
              href="mailto:contact@greatcampus.in"
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors font-mono text-xs"
            >
              <Mail className="w-3 h-3 text-white shrink-0" /> contact@greatcampus.in
            </a>
          </div>
        </div>
      </aside>

      {/* -------------------- STICKY HEADER -------------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e4e4e7]">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Brand Logo & Main Nav */}
          <div className="flex items-center gap-7" ref={navRef}>
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <img
                src="/greatcampus-logo-cropped.png"
                alt="GreatCampus — Assess. Interview. Develop"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex pl-2">
              {/* Home */}
              <Link
                href="/"
                className="inline-flex h-9 items-center rounded-lg px-3 text-[13.5px] font-medium text-[#52525b] hover:text-[#09090b] hover:bg-black/[0.04] transition-all"
              >
                Home
              </Link>

              {/* -------------------- LUXURY PRODUCTS MEGA-MENU -------------------- */}
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
                  className={`inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-[13.5px] font-semibold transition-all cursor-pointer ${
                    productsOpen
                      ? "text-[#09090b] bg-black/[0.06]"
                      : "text-[#09090b] hover:bg-black/[0.04]"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      productsOpen ? "rotate-180 text-[#09090b]" : "text-[#71717a]"
                    }`}
                  />
                </button>

                {/* Products Mega Menu Container */}
                {productsOpen && (
                  <div className="absolute top-[calc(100%+4px)] left-[-140px] w-[900px] bg-white rounded-3xl border border-[#e4e4e7] shadow-[0_30px_70px_rgba(0,0,0,0.14)] p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {/* Header Strip */}
                    <div className="flex items-center justify-between border-b border-[#f4f4f5] pb-3.5 mb-5">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-2 w-2 rounded-full bg-[#09090b] animate-pulse"></span>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#09090b]">
                          The Integrated Talent Suite
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-[#71717a]">
                        <span className="font-semibold text-[#09090b]">Assess</span>
                        <span>→</span>
                        <span className="font-semibold text-[#09090b]">Interview</span>
                        <span>→</span>
                        <span className="font-semibold text-[#09090b]">Select</span>
                        <span>→</span>
                        <span className="font-semibold text-[#09090b]">Develop</span>
                        <span>→</span>
                        <span className="font-semibold text-[#09090b]">Reassess</span>
                      </div>
                    </div>

                    {/* 3 Core Product Columns */}
                    <div className="grid grid-cols-3 gap-5">
                      {/* Column 1: ASSESS */}
                      <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa]/80 p-4.5 flex flex-col justify-between hover:border-[#09090b] hover:bg-white hover:shadow-md transition-all group">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2 py-0.5 rounded-md bg-[#09090b] text-white font-mono font-bold text-[10px]">
                              01 · PRE-HIRE
                            </span>
                            <span className="text-[10px] font-mono text-[#71717a]">Capability</span>
                          </div>

                          <Link
                            href="/assess"
                            onClick={() => setProductsOpen(false)}
                            className="font-extrabold text-[15px] text-[#09090b] group-hover:underline flex items-center justify-between"
                          >
                            <span>Digital Assessments</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <p className="text-[12px] text-[#52525b] mt-1 mb-3.5 leading-relaxed">
                            Screen candidates with objective aptitude, domain tests, and AI proctoring.
                          </p>

                          <div className="space-y-2 border-t border-[#e4e4e7]/80 pt-3">
                            <Link
                              href="/assess"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <Target className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">Aptitude Testing</span>
                                <span className="text-[10.5px] text-[#71717a]">Numerical, logical & verbal</span>
                              </div>
                            </Link>

                            <Link
                              href="/assess"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <Code2 className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">Coding Sandbox</span>
                                <span className="text-[10.5px] text-[#71717a]">15+ languages auto-graded</span>
                              </div>
                            </Link>

                            <Link
                              href="/assess"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">AI Anti-Cheat Proctoring</span>
                                <span className="text-[10.5px] text-[#71717a]">Webcam & browser integrity</span>
                              </div>
                            </Link>

                            <Link
                              href="/assess"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <BarChart3 className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">Role-Based Benchmarks</span>
                                <span className="text-[10.5px] text-[#71717a]">Sales, finance & engineering</span>
                              </div>
                            </Link>
                          </div>
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

                      {/* Column 2: INTERVIEW */}
                      <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa]/80 p-4.5 flex flex-col justify-between hover:border-[#09090b] hover:bg-white hover:shadow-md transition-all group">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2 py-0.5 rounded-md bg-[#09090b] text-white font-mono font-bold text-[10px]">
                              02 · AT SCALE
                            </span>
                            <span className="text-[10px] font-mono text-[#71717a]">Conversational</span>
                          </div>

                          <Link
                            href="/interview"
                            onClick={() => setProductsOpen(false)}
                            className="font-extrabold text-[15px] text-[#09090b] group-hover:underline flex items-center justify-between"
                          >
                            <span>AI Voice & Video Interviews</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <p className="text-[12px] text-[#52525b] mt-1 mb-3.5 leading-relaxed">
                            First-round automated screening over Phone, WhatsApp, and Web.
                          </p>

                          <div className="space-y-2 border-t border-[#e4e4e7]/80 pt-3">
                            <Link
                              href="/interview"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <PhoneCall className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">Automated Phone Calls</span>
                                <span className="text-[10.5px] text-[#71717a]">Instant voice interviews</span>
                              </div>
                            </Link>

                            <Link
                              href="/interview"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <MessageSquare className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">WhatsApp Voice Interviews</span>
                                <span className="text-[10.5px] text-[#71717a]">Zero-app friction screening</span>
                              </div>
                            </Link>

                            <Link
                              href="/interview"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <Globe className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">14 Regional & Global Languages</span>
                                <span className="text-[10.5px] text-[#71717a]">English, Hindi, Bengali & more</span>
                              </div>
                            </Link>

                            <Link
                              href="/interview"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <FileCheck className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">Instant Scorecards</span>
                                <span className="text-[10.5px] text-[#71717a]">Automated ranked shortlists</span>
                              </div>
                            </Link>
                          </div>
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

                      {/* Column 3: DEVELOP */}
                      <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa]/80 p-4.5 flex flex-col justify-between hover:border-[#09090b] hover:bg-white hover:shadow-md transition-all group">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2 py-0.5 rounded-md bg-[#09090b] text-white font-mono font-bold text-[10px]">
                              03 · POST-HIRE
                            </span>
                            <span className="text-[10px] font-mono text-[#71717a]">Growth</span>
                          </div>

                          <Link
                            href="/develop"
                            onClick={() => setProductsOpen(false)}
                            className="font-extrabold text-[15px] text-[#09090b] group-hover:underline flex items-center justify-between"
                          >
                            <span>Workforce Microlearning</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                          <p className="text-[12px] text-[#52525b] mt-1 mb-3.5 leading-relaxed">
                            Continuous capability building through 5-minute practical daily modules.
                          </p>

                          <div className="space-y-2 border-t border-[#e4e4e7]/80 pt-3">
                            <Link
                              href="/develop"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <TrendingUp className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">Automated Gap Mapping</span>
                                <span className="text-[10.5px] text-[#71717a]">Pre-hire weaknesses into learning</span>
                              </div>
                            </Link>

                            <Link
                              href="/develop"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <BookOpen className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">Role Microlearning</span>
                                <span className="text-[10.5px] text-[#71717a]">Sales, service & leadership</span>
                              </div>
                            </Link>

                            <Link
                              href="/develop"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <Repeat className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">Continuous Reassessment</span>
                                <span className="text-[10.5px] text-[#71717a]">30, 60 & 90-day progress checks</span>
                              </div>
                            </Link>

                            <Link
                              href="/develop"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-start gap-2 text-xs text-[#27272a] hover:text-[#09090b] transition-colors"
                            >
                              <Award className="w-3.5 h-3.5 text-[#09090b] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold block text-[12px]">Workforce Mobility</span>
                                <span className="text-[10.5px] text-[#71717a]">Verified promotion readiness</span>
                              </div>
                            </Link>
                          </div>
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

                    {/* Bottom Strip */}
                    <div className="mt-5 pt-3.5 border-t border-[#e4e4e7] flex items-center justify-between px-2 text-xs">
                      <div className="flex items-center gap-2 text-[#71717a]">
                        <span className="font-semibold text-[#09090b]">Unified Platform:</span>
                        <span>Replace 3 fragmented vendors with one continuous talent architecture.</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Link
                          href="/difference"
                          onClick={() => setProductsOpen(false)}
                          className="font-bold text-[#09090b] hover:underline flex items-center gap-1 text-[12.5px]"
                        >
                          See The Difference <ArrowRight className="w-3 h-3" />
                        </Link>
                        <span className="text-[#d4d4d8]">|</span>
                        <Link
                          href="/pricing"
                          onClick={() => setProductsOpen(false)}
                          className="font-semibold text-[#52525b] hover:text-[#09090b] text-[12.5px]"
                        >
                          ROI Calculator
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* -------------------- SOLUTIONS DROPDOWN -------------------- */}
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
                  className={`inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-[13.5px] font-medium transition-all cursor-pointer ${
                    solutionsOpen
                      ? "text-[#09090b] bg-black/[0.06]"
                      : "text-[#52525b] hover:text-[#09090b] hover:bg-black/[0.04]"
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      solutionsOpen ? "rotate-180 text-[#09090b]" : "text-[#71717a]"
                    }`}
                  />
                </button>

                {/* Solutions Dropdown Menu */}
                {solutionsOpen && (
                  <div className="absolute top-[calc(100%+4px)] left-[-50px] w-[460px] bg-white rounded-3xl border border-[#e4e4e7] shadow-[0_30px_70px_rgba(0,0,0,0.14)] p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                    <Link
                      href="/solutions#recruitment"
                      onClick={() => setSolutionsOpen(false)}
                      className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-[#fafafa] transition-all"
                    >
                      <div className="h-8 w-8 rounded-lg bg-[#09090b] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-xs text-[#09090b] group-hover:underline block">
                          Corporate Talent Acquisition
                        </span>
                        <span className="text-[11px] text-[#71717a] leading-tight block mt-0.5">
                          High-volume candidate screening and shortlisting without recruiter burnout.
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/solutions#staffing"
                      onClick={() => setSolutionsOpen(false)}
                      className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-[#fafafa] transition-all"
                    >
                      <div className="h-8 w-8 rounded-lg bg-[#09090b] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-xs text-[#09090b] group-hover:underline block">
                          Recruitment & Staffing Agencies
                        </span>
                        <span className="text-[11px] text-[#71717a] leading-tight block mt-0.5">
                          Deliver evidence-based candidate dossiers instead of raw resumes.
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/solutions#universities"
                      onClick={() => setSolutionsOpen(false)}
                      className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-[#fafafa] transition-all"
                    >
                      <div className="h-8 w-8 rounded-lg bg-[#09090b] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-xs text-[#09090b] group-hover:underline block">
                          Universities & Higher Education
                        </span>
                        <span className="text-[11px] text-[#71717a] leading-tight block mt-0.5">
                          Empower student employability with AI mock interviews & campus readiness.
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/solutions#ld"
                      onClick={() => setSolutionsOpen(false)}
                      className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-[#fafafa] transition-all"
                    >
                      <div className="h-8 w-8 rounded-lg bg-[#09090b] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-xs text-[#09090b] group-hover:underline block">
                          Learning & Development (L&D)
                        </span>
                        <span className="text-[11px] text-[#71717a] leading-tight block mt-0.5">
                          Turn training into continuous capability growth with measurable reassessment.
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* The Difference */}
              <Link
                href="/difference"
                className="inline-flex h-9 items-center rounded-lg px-3 text-[13.5px] font-medium text-[#52525b] hover:text-[#09090b] hover:bg-black/[0.04] transition-all"
              >
                The Difference
              </Link>

              {/* Pricing & ROI */}
              <Link
                href="/pricing"
                className="inline-flex h-9 items-center rounded-lg px-3 text-[13.5px] font-medium text-[#52525b] hover:text-[#09090b] hover:bg-black/[0.04] transition-all"
              >
                Pricing & ROI
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="inline-flex h-9 items-center rounded-lg px-3 text-[13.5px] font-medium text-[#52525b] hover:text-[#09090b] hover:bg-black/[0.04] transition-all"
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
                className="inline-flex h-9 items-center justify-center rounded-xl bg-[#09090b] px-4.5 text-[13px] font-semibold text-white hover:bg-[#27272a] transition-all border border-[#09090b] shadow-sm cursor-pointer"
              >
                Book a Demo
              </button>
            ) : (
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-xl bg-[#09090b] px-4.5 text-[13px] font-semibold text-white hover:bg-[#27272a] transition-all border border-[#09090b] shadow-sm"
              >
                Book a Demo
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#09090b] hover:bg-[#f4f4f5] lg:hidden border border-[#e4e4e7]"
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
                    className="block p-2.5 rounded-xl bg-[#fafafa] border border-[#e4e4e7]"
                  >
                    <span className="font-bold text-xs text-[#09090b] block">01 - ASSESS (Digital Tests & AI Proctoring)</span>
                    <span className="text-[11px] text-[#71717a]">Aptitude, 15+ coding languages sandbox & anti-cheat.</span>
                  </Link>

                  <Link
                    href="/interview"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2.5 rounded-xl bg-[#fafafa] border border-[#e4e4e7]"
                  >
                    <span className="font-bold text-xs text-[#09090b] block">02 - INTERVIEW (AI Voice & Video First-Round)</span>
                    <span className="text-[11px] text-[#71717a]">Phone, WhatsApp & Web interviews in 14 languages.</span>
                  </Link>

                  <Link
                    href="/develop"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2.5 rounded-xl bg-[#fafafa] border border-[#e4e4e7]"
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
            <div className="pt-3 border-t border-[#e4e4e7] flex flex-col gap-2.5">
              {onOpenDemo ? (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full text-center py-3 rounded-xl bg-[#09090b] text-white font-bold text-[14px] cursor-pointer shadow-md"
                >
                  Book a Demo
                </button>
              ) : (
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-[#09090b] text-white font-bold text-[14px] shadow-md"
                >
                  Book a Demo
                </Link>
              )}

              {/* Direct Leadership Access for Mobile */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#71717a] uppercase tracking-wider block">
                  Direct Call / Contact
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+919811352666"
                    className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#fafafa] border border-[#e4e4e7] text-xs font-mono font-semibold text-[#09090b]"
                  >
                    <Phone className="w-3.5 h-3.5" /> +91-9811352666
                  </a>
                  <a
                    href="tel:+919073351545"
                    className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#fafafa] border border-[#e4e4e7] text-xs font-mono font-semibold text-[#09090b]"
                  >
                    <Phone className="w-3.5 h-3.5" /> +91-9073351545
                  </a>
                </div>
                <a
                  href="mailto:contact@greatcampus.in"
                  className="flex items-center justify-center gap-2 p-2 rounded-xl bg-[#fafafa] border border-[#e4e4e7] text-xs font-mono text-[#09090b]"
                >
                  <Mail className="w-3.5 h-3.5" /> contact@greatcampus.in
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
