import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  ArrowRight,
  TrendingUp,
  RotateCw,
  Target,
  Sparkles,
  BookOpen,
  CheckCircle2,
  BarChart3
} from "lucide-react";

export const metadata = {
  title: "03 - DEVELOP | GreatCampus Workforce Microlearning & Continuous Reassessment",
  description:
    "Don't stop at hiring. Build capability continuously. Transform identified assessment and interview gaps into targeted 5-minute microlearning and measure verified progress.",
};

export default function DevelopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090b]">
      <Header />

      {/* -------------------- HERO -------------------- */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#e4e4e7] bg-grid-pattern">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#09090b] px-4 py-1.5 text-[11px] font-bold tracking-wide text-white font-mono shadow-sm">
            PILLAR 03 · CONTINUOUS WORKFORCE DEVELOPMENT
          </div>

          <h1 className="mt-8 max-w-4xl text-[38px] font-extrabold text-[#09090b] leading-[1.1] tracking-tight sm:text-[58px] lg:text-[68px]">
            <span>Don't stop at hiring.</span>{" "}
            <span className="accent-shimmer">Build capability continuously.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-[17px] text-[#52525b] leading-relaxed sm:text-[19px]">
            Identifying a skill gap is only useful if you can do something about it. GreatCampus transforms identified gaps into opportunities for continuous development through short, focused microlearning.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#09090b] px-7 text-[14px] font-bold text-white shadow-lg hover:bg-[#27272a] transition-all border border-[#09090b]"
            >
              Build a Microlearning Journey
            </Link>
            <Link
              href="/difference"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-[#27272a] bg-white px-7 text-[14px] font-bold text-[#09090b] hover:bg-[#f4f4f5] transition-colors"
            >
              See the GreatCampus Difference →
            </Link>
          </div>

          {/* Loop Diagram Pill */}
          <div className="mt-12 p-3 sm:p-4 rounded-2xl border border-[#27272a] bg-[#09090b] text-white font-mono text-xs max-w-2xl w-full text-center shadow-lg">
            Identify gaps → Develop capability → Reinforce learning → Reassess progress
          </div>
        </div>
      </section>

      {/* -------------------- 5 MICROLEARNING SUITES -------------------- */}
      <section className="bg-[#fafafa] py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
              Bite-sized Capability Building
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-extrabold text-[#09090b] tracking-tight mt-2">
              Short Learning. Continuous Reinforcement. Measurable Development.
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              Instead of relying only on long, forgotten training programs, reinforce critical role skills through 3-5 minute daily scenario simulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Suite 1: Sales */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-7 shadow-sm hover:border-[#09090b] transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#71717a] block mb-2">MODULE SUITE 01</span>
                <h3 className="text-[20px] font-bold text-[#09090b] mb-4">Sales Enablement</h3>
                <ul className="space-y-2 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Opening high-impact conversations</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Objection Handling under pressure</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Enterprise Negotiation tactics</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Cross-selling & expansion plays</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Closing and contract velocity</li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-[#e4e4e7] text-[11px] font-mono text-[#71717a]">
                Format: 4-minute audio pitch simulator
              </div>
            </div>

            {/* Suite 2: Customer Service */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-7 shadow-sm hover:border-[#09090b] transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#71717a] block mb-2">MODULE SUITE 02</span>
                <h3 className="text-[20px] font-bold text-[#09090b] mb-4">Customer Service</h3>
                <ul className="space-y-2 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Active Listening frameworks</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Empathetic customer communication</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Fast First-Touch Complaint Resolution</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Handling & De-escalating Angry Customers</li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-[#e4e4e7] text-[11px] font-mono text-[#71717a]">
                Format: Chat & voice escalation scenario
              </div>
            </div>

            {/* Suite 3: Leadership */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-7 shadow-sm hover:border-[#09090b] transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#71717a] block mb-2">MODULE SUITE 03</span>
                <h3 className="text-[20px] font-bold text-[#09090b] mb-4">Leadership & Management</h3>
                <ul className="space-y-2 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Constructive & Direct Feedback</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Task Delegation without Micromanagement</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Team Motivation in High-Stress Quarters</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Conflict Management & Mediation</li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-[#e4e4e7] text-[11px] font-mono text-[#71717a]">
                Format: Situational branching dilemmas
              </div>
            </div>

            {/* Suite 4: Operations */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-7 shadow-sm hover:border-[#09090b] transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#71717a] block mb-2">MODULE SUITE 04</span>
                <h3 className="text-[20px] font-bold text-[#09090b] mb-4">Operations & Quality</h3>
                <ul className="space-y-2 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Daily SOP Reinforcement</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Quality Standards & Audit Readiness</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Workplace Safety & Compliance Protocols</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Process Error Reduction Drills</li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-[#e4e4e7] text-[11px] font-mono text-[#71717a]">
                Format: Visual checklist & spot-the-error
              </div>
            </div>

            {/* Suite 5: Onboarding & Compliance */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-7 shadow-sm hover:border-[#09090b] transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <span className="text-xs font-mono font-bold text-[#71717a] block mb-2">MODULE SUITE 05</span>
                <h3 className="text-[20px] font-bold text-[#09090b] mb-4">Onboarding & Corporate Compliance</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Company Culture, Values & Norms</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Product Architecture & Value Proposition</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Internal Cross-Team Tooling & Workflows</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> 30-60-90 Day Role Expectations</li>
                  <li className="flex items-center gap-2 sm:col-span-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Information Security, POSH, & Regulatory Policy Reinforcement</li>
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-[#e4e4e7] text-[11px] font-mono text-[#71717a]">
                Format: 5-minute automated interactive onboarding track
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- CONTINUOUS REASSESSMENT LOOP -------------------- */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="rounded-full bg-[#09090b] text-white px-3 py-1 font-mono font-bold text-[11px] uppercase tracking-wider">
                Measurable Growth
              </span>
              <h2 className="text-[30px] sm:text-[42px] font-extrabold text-[#09090b] leading-tight">
                Continuous Reassessment: Verifying True Skill Gains
              </h2>
              <p className="text-[15px] text-[#52525b] leading-relaxed">
                Most companies train employees and assume they got better. GreatCampus triggers pulse reassessments after 30, 60, and 90 days to quantitatively track skill retention and capability gain.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl border border-[#e4e4e7] bg-[#fafafa]">
                  <span className="font-bold font-mono text-[#09090b]">30 DAYS:</span>
                  <span className="text-[#52525b]">Micro-pulse checks knowledge retention from onboarding modules.</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-[#e4e4e7] bg-[#fafafa]">
                  <span className="font-bold font-mono text-[#09090b]">60 DAYS:</span>
                  <span className="text-[#52525b]">Evaluates applied execution across realistic role simulations.</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl border border-[#e4e4e7] bg-[#fafafa]">
                  <span className="font-bold font-mono text-[#09090b]">90 DAYS:</span>
                  <span className="text-[#52525b]">Full competency reassessment before permanent confirmation or internal mobility.</span>
                </div>
              </div>
            </div>

            {/* Reassessment Metrics Card */}
            <div className="lg:col-span-6 rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-8 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-[#27272a] pb-3 text-xs">
                <span className="font-bold font-mono">VERIFIED TALENT DELTA REPORT</span>
                <span className="text-white bg-white/10 px-2 py-0.5 rounded font-mono">+28% GROWTH</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#a1a1aa]">Day 1 Baseline (Hiring Score):</span>
                    <span className="font-mono text-white">62 / 100</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#27272a]">
                    <div className="h-full rounded-full bg-[#71717a]" style={{ width: "62%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white font-bold">Day 90 Post-Microlearning Reassessment:</span>
                    <span className="font-mono text-white font-bold">90 / 100</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#27272a]">
                    <div className="h-full rounded-full bg-white" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-[#27272a] bg-[#121215] text-xs space-y-1">
                <span className="text-white font-bold block">Outcome Summary:</span>
                <p className="text-[#a1a1aa] leading-relaxed">
                  Candidate successfully closed objection handling and cross-selling gaps. Promoted to Senior SDR based on verified empirical progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- THE OUTCOME -------------------- */}
      <section className="bg-[#fafafa] py-16 sm:py-24 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#71717a] uppercase">
            The Complete Talent Loop
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#09090b] tracking-tight">
            Assess. Interview. Select. Develop. Reassess.
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#52525b] leading-relaxed">
            Ready to replace fragmented, forgotten training programs with continuous, measurable capability growth?
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#09090b] px-8 text-sm font-bold text-white hover:bg-[#27272a] transition-all"
            >
              Build Your L&D Plan
            </Link>
            <Link
              href="/solutions"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-[#27272a] bg-white px-7 text-sm font-bold text-[#09090b] hover:bg-[#f4f4f5] transition-colors"
            >
              Explore Solutions by Industry →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
