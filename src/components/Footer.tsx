import React from "react";
import Link from "next/link";
import { Phone, Mail, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#09090b] text-white pt-16 pb-28 lg:pb-16 border-t border-[#27272a] overflow-hidden">
      {/* Ambient subtle glow at top of footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 relative z-10">
        {/* Top Highlight Banner on Footer: Quick Consultation CTA */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl glass-panel-dark border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-white" /> BESPOKE INSTITUTIONAL BLUEPRINT
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
              Ready to modernize your talent journey?
            </h3>
            <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-xl">
              Get an executive walkthrough of our AI-powered assessments, interviews, and continuous microlearning.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              className="btn-gleam tap-bounce w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-xs font-bold text-[#09090b] hover:bg-zinc-200 transition-all shadow-md font-sans"
            >
              Schedule Consultation →
            </Link>
            <a
              href="tel:+918810418647"
              className="tap-bounce w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 text-xs font-bold text-white hover:bg-white/10 transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 mr-2" /> +91-8810418647
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#27272a]">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block tap-bounce">
              <img
                src="/greatcampus-logo-white.png"
                alt="GreatCampus — Assess. Interview. Develop"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-[13.5px] text-[#a1a1aa] max-w-sm leading-relaxed">
              AI-powered talent solutions to identify the right people, make better hiring decisions, and continuously develop workforce capability.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#a1a1aa]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Assess → Interview → Select → Develop
            </div>
            
            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-[#71717a]">
              <span className="px-2.5 py-1 rounded-lg border border-white/5 bg-white/[0.02]">AI Anti-Cheat Shield</span>
              <span className="px-2.5 py-1 rounded-lg border border-white/5 bg-white/[0.02]">SOC-2 & ISO Aligned</span>
              <span className="px-2.5 py-1 rounded-lg border border-white/5 bg-white/[0.02]">100% Data Privacy</span>
            </div>
          </div>

          {/* Direct Leadership Contact Column */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-bold text-[12px] text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" /> Direct Contact
            </p>
            <div className="p-4 rounded-2xl glass-panel-dark border border-white/10 space-y-3 text-xs text-[#a1a1aa] font-mono">
              <div>
                <p className="text-white font-bold font-sans text-sm">GreatCampus</p>
                <p className="text-[#71717a] font-sans text-[11.5px]">
                  Strategic Partnerships & Institutional Growth
                </p>
              </div>
              <div className="pt-1 border-t border-white/10 space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[#71717a]">Phone:</span>{" "}
                  <a href="tel:+918810418647" className="text-white hover:underline">
                    +91-8810418647
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[#71717a]">Corporate:</span>{" "}
                  <a href="mailto:info@greatcampus.tech" className="text-white hover:underline break-all">
                    info@greatcampus.tech
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Columns: Pillars & Solutions (2-cols on mobile) */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:col-span-4">
            <div className="space-y-3">
              <p className="font-bold text-[12px] text-white uppercase tracking-wider font-mono">
                The Pillars
              </p>
              <ul className="space-y-2.5 text-xs text-[#a1a1aa]">
                <li><Link href="/assess" className="hover:text-white transition-colors flex items-center gap-1.5"><span>01</span> Assess</Link></li>
                <li><Link href="/interview" className="hover:text-white transition-colors flex items-center gap-1.5"><span>02</span> Interview</Link></li>
                <li><Link href="/develop" className="hover:text-white transition-colors flex items-center gap-1.5"><span>03</span> Develop</Link></li>
                <li><Link href="/difference" className="hover:text-white transition-colors">The Difference</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing & ROI</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-[12px] text-white uppercase tracking-wider font-mono">
                Lifecycle
              </p>
              <ul className="space-y-2.5 text-xs text-[#a1a1aa]">
                <li><Link href="/solutions#recruitment" className="hover:text-white transition-colors">Talent Acquisition</Link></li>
                <li><Link href="/solutions#staffing" className="hover:text-white transition-colors">Staffing Agencies</Link></li>
                <li><Link href="/solutions#universities" className="hover:text-white transition-colors">Higher Education</Link></li>
                <li><Link href="/solutions#ld" className="hover:text-white transition-colors">Learning & Dev</Link></li>
                <li><Link href="/contact" className="hover:text-white font-bold text-white transition-colors">Book a Demo →</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717a] gap-3">
          <p>© {new Date().getFullYear()} GreatCampus Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono text-[11.5px]">
            <Link href="/difference" className="hover:text-[#a1a1aa] transition-colors">Platform Architecture</Link>
            <span>•</span>
            <Link href="/pricing" className="hover:text-[#a1a1aa] transition-colors">Enterprise Terms</Link>
            <span>•</span>
            <span className="text-[#a1a1aa]">Monochrome High-Contrast</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

