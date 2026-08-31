import React from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

export function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-white py-16 border-t border-[#27272a]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#27272a]">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/greatcampus-logo-white.png"
                alt="GreatCampus — Assess. Interview. Develop"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-[13.5px] text-[#a1a1aa] max-w-sm leading-relaxed">
              AI-powered talent solutions to identify the right people, make better hiring decisions, and continuously develop talent.
            </p>
            <p className="text-xs font-mono text-[#71717a]">
              Assess → Interview → Select → Develop → Reassess
            </p>
          </div>

          {/* Direct Leadership Contact Column */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-bold text-[12px] text-white uppercase tracking-wider font-mono">
              Direct Contact & Leadership
            </p>
            <div className="text-xs text-[#a1a1aa] space-y-2 font-mono">
              <p className="text-white font-bold font-sans text-sm">Maninder Singh</p>
              <p className="text-[#71717a] font-sans text-[11.5px]">
                Head of Strategic Partnerships & Institutional Growth
              </p>
              <p className="pt-1">
                <span className="text-[#71717a]">M:</span>{" "}
                <a href="tel:+919811352666" className="text-white hover:underline">
                  +91-9811352666
                </a>
              </p>
              <p>
                <span className="text-[#71717a]">E-mail:</span>{" "}
                <a href="mailto:mvasir@gmail.com" className="text-white hover:underline">
                  mvasir@gmail.com
                </a>
              </p>
              <p className="pt-1">
                <a
                  href="https://www.linkedin.com/in/manindersinghvasir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:underline"
                >
                  <LinkedinIcon className="w-4 h-4 text-white" />
                  <span>linkedin.com/in/manindersinghvasir</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Column: Pillars & Solutions */}
          <div className="md:col-span-2 space-y-3">
            <p className="font-bold text-[12px] text-white uppercase tracking-wider font-mono">
              The Three Pillars
            </p>
            <ul className="space-y-2 text-xs text-[#a1a1aa]">
              <li><Link href="/assess" className="hover:text-white">01 - ASSESS</Link></li>
              <li><Link href="/interview" className="hover:text-white">02 - INTERVIEW</Link></li>
              <li><Link href="/develop" className="hover:text-white">03 - DEVELOP</Link></li>
              <li><Link href="/difference" className="hover:text-white">The Difference</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing & ROI</Link></li>
            </ul>
          </div>

          {/* Navigation Column: Solutions & Lifecycle */}
          <div className="md:col-span-2 space-y-3">
            <p className="font-bold text-[12px] text-white uppercase tracking-wider font-mono">
              Lifecycle
            </p>
            <ul className="space-y-2 text-xs text-[#a1a1aa]">
              <li><Link href="/solutions#recruitment" className="hover:text-white">Talent Acquisition</Link></li>
              <li><Link href="/solutions#staffing" className="hover:text-white">Staffing Agencies</Link></li>
              <li><Link href="/solutions#universities" className="hover:text-white">Higher Education</Link></li>
              <li><Link href="/solutions#ld" className="hover:text-white">Learning & Dev</Link></li>
              <li><Link href="/contact" className="hover:text-white font-bold text-white">Book a Demo →</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717a]">
          <p>© {new Date().getFullYear()} GreatCampus Technologies. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono">Monochrome High-Contrast Edition</p>
        </div>
      </div>
    </footer>
  );
}
