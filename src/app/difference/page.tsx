import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  X,
  ArrowRight,
  Sparkles,
  Repeat,
  Target,
  BarChart3
} from "lucide-react";

export const metadata = {
  title: "The Difference | GreatCampus vs Point Solutions",
  description:
    "Most platforms solve one part of the talent problem. GreatCampus brings the journey together: Can they perform? Are they the right fit? How can we make them better?",
};

export default function DifferencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090b]">
      <Header />

      {/* -------------------- HERO -------------------- */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#e4e4e7] bg-grid-pattern">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-gradient-to-tr from-black/[0.03] via-zinc-400/[0.06] to-transparent rounded-full blur-3xl pointer-events-none animate-ambient-glow" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 md:px-8 text-center scroll-reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-dark px-4 py-2 text-[11px] font-bold tracking-wide text-white font-mono shadow-md">
            THE STRATEGIC ADVANTAGE
          </div>

          <h1 className="mt-8 max-w-4xl text-[32px] sm:text-[52px] lg:text-[68px] font-extrabold text-[#09090b] leading-[1.1] tracking-tight font-heading">
            <span>Most platforms solve one part of the talent problem.</span>{" "}
            <span className="accent-shimmer">GreatCampus brings the journey together.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-[16px] sm:text-[19px] text-[#52525b] leading-relaxed">
            Hiring and development have been treated as separate, disconnected silos for decades. GreatCampus bridges the gap with a single integrated AI talent architecture.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="btn-gleam tap-bounce w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#09090b] px-7 text-[14px] font-bold text-white shadow-lg hover:bg-[#27272a] transition-all border border-[#09090b]"
            >
              Book an Architecture Briefing
            </Link>
            <Link
              href="/pricing"
              className="glass-panel tap-bounce w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-[#27272a] bg-white px-7 text-[14px] font-bold text-[#09090b] hover:bg-[#f4f4f5] transition-colors shadow-xs"
            >
              See Pricing & ROI →
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------- 3 QUESTIONS MATRIX -------------------- */}
      <section className="bg-[#fafafa] py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
            <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
              Market Paradigms
            </span>
            <h2 className="text-[28px] sm:text-[42px] font-extrabold text-[#09090b] tracking-tight mt-2 font-heading">
              Three Questions. One Platform.
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              Point solutions leave critical talent questions unanswered. GreatCampus answers all three.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal">
            <div className="p-6 sm:p-7 rounded-3xl glass-panel glass-panel-hover glass-specular card-hover-lift border border-zinc-200/80 shadow-xs space-y-4">
              <span className="text-xs font-mono font-bold text-[#71717a]">TRADITIONAL TESTING</span>
              <h3 className="text-lg font-extrabold text-[#09090b] font-heading">
                "Can this person perform?"
              </h3>
              <p className="text-xs text-[#52525b] leading-relaxed">
                Tests basic knowledge, but doesn't evaluate conversational fit, emotional intelligence, or what to develop post-hire.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl glass-panel glass-panel-hover glass-specular card-hover-lift border border-zinc-200/80 shadow-xs space-y-4">
              <span className="text-xs font-mono font-bold text-[#71717a]">STANDALONE VIDEO INTERVIEWS</span>
              <h3 className="text-lg font-extrabold text-[#09090b] font-heading">
                "Is this person the right fit?"
              </h3>
              <p className="text-xs text-[#52525b] leading-relaxed">
                Conducts screens, but disconnected from verified technical test data and organizational capability development.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl glass-panel glass-panel-hover glass-specular card-hover-lift border border-zinc-200/80 shadow-xs space-y-4">
              <span className="text-xs font-mono font-bold text-[#71717a]">CORPORATE LMS TOOLS</span>
              <h3 className="text-lg font-extrabold text-[#09090b] font-heading">
                "How can we develop this person?"
              </h3>
              <p className="text-xs text-[#52525b] leading-relaxed">
                Hosts video catalogs, but has no visibility into the candidate's hiring assessment weaknesses or baseline skills.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl glass-panel-dark glass-panel-dark-hover glass-specular card-dark-lift border border-white/20 text-white space-y-4 shadow-2xl">
              <span className="text-xs font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded border border-white/15">
                GREATCAMPUS
              </span>
              <h3 className="text-lg font-extrabold text-white font-heading">
                GreatCampus asks all three.
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Can they perform? Are they the right fit? How can we make them better?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- BEFORE VS AFTER HIRING -------------------- */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mb-14 scroll-reveal">
            <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
              Connected Architecture
            </span>
            <h2 className="text-[28px] sm:text-[42px] font-extrabold text-[#09090b] tracking-tight mt-2 font-heading">
              From Hiring to Development
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              GreatCampus helps organizations connect recruitment and development instead of treating them as separate processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel glass-specular border border-zinc-200/80 space-y-5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#09090b] text-white text-xs font-bold font-mono">
                  BEFORE HIRING
                </span>
                <span className="text-xs font-semibold text-[#71717a]">Selection Phase</span>
              </div>
              <h3 className="text-2xl font-bold text-[#09090b] font-heading">
                Assess → Interview → Select
              </h3>
              <ul className="space-y-3 text-xs text-[#52525b]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#09090b] shrink-0 mt-0.5" />
                  <span><strong>Assess:</strong> Who can do the job? Filter objectively through aptitude & role testing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#09090b] shrink-0 mt-0.5" />
                  <span><strong>Interview:</strong> Who is the right fit? AI conducts dynamic first-round voice/video screens.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#09090b] shrink-0 mt-0.5" />
                  <span><strong>Select:</strong> Who should we hire? Confident, data-backed selection decisions.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl glass-panel-dark glass-specular text-white space-y-5 shadow-2xl border border-white/10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white text-[#09090b] text-xs font-bold font-mono">
                  AFTER HIRING
                </span>
                <span className="text-xs font-semibold text-[#a1a1aa]">Capability Loop</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                Assess → Develop → Reassess
              </h3>
              <ul className="space-y-3 text-xs text-[#a1a1aa]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong className="text-white">Assess Gaps:</strong> Extract empirical skill gaps directly from the pre-hire evaluation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong className="text-white">Develop:</strong> What does this person need to improve? Deliver focused 5-minute microlearning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong className="text-white">Reassess:</strong> Has capability improved? Verify skill growth delta at 30, 60 & 90 days.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- 6 HR VALUE PROPS -------------------- */}
      <section className="bg-[#fafafa] py-20 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
            <h2 className="text-[28px] sm:text-[40px] font-extrabold text-[#09090b] font-heading">
              Simple for HR. Powerful for Organizations.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 scroll-reveal">
            {[
              { title: "Reduce manual effort", detail: "Let technology handle repetitive assessment and first-round evaluation." },
              { title: "Improve consistency", detail: "Use structured assessments and interviews across all candidates." },
              { title: "Scale efficiently", detail: "Evaluate larger populations without proportionately increasing workload." },
              { title: "Identify capability gaps", detail: "Understand where candidates and employees need development." },
              { title: "Develop continuously", detail: "Deliver short, focused learning interventions that stick." },
              { title: "Measure progress", detail: "Reassess capabilities and track verified improvement over time." },
            ].map((card, i) => (
              <div key={i} className="p-5 rounded-2xl glass-panel glass-specular border border-[#e4e4e7] text-left card-hover-lift">
                <span className="font-mono text-xs text-[#71717a] block mb-2 font-bold">0{i + 1}</span>
                <h4 className="font-bold text-sm text-[#09090b] leading-tight mb-2 font-heading">
                  {card.title}
                </h4>
                <p className="text-xs text-[#71717a] leading-relaxed">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- CTA BANNER -------------------- */}
      <section className="bg-white py-16 text-center border-b border-[#e4e4e7]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 space-y-5 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090b] font-heading">
            Experience the GreatCampus Architecture
          </h2>
          <p className="text-xs sm:text-sm text-[#52525b] max-w-xl mx-auto">
            Speak directly with <strong>GreatCampus</strong> (+91-8810418647 · info@greatcampus.tech).
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-gleam tap-bounce w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#09090b] px-8 text-sm font-bold text-white hover:bg-[#27272a] transition-colors shadow-md"
            >
              Book an Executive Walkthrough
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
