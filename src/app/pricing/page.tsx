"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Sparkles, TrendingUp, DollarSign, Clock } from "lucide-react";

export default function PricingPage() {
  // State for interactive ROI calculator
  const [monthlyApplicants, setMonthlyApplicants] = useState(350);
  const [minsPerCandidate, setMinsPerCandidate] = useState(30);

  // Computed ROI values
  const hoursSaved = Math.round((monthlyApplicants * (minsPerCandidate / 60)) * 0.85);
  const costSavings = Math.round(hoursSaved * 28);
  const timeToHireReduced = "78%";

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090b]">
      <Header />

      {/* -------------------- HERO -------------------- */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#e4e4e7] bg-grid-pattern">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#09090b] px-4 py-1.5 text-[11px] font-bold tracking-wide text-white font-mono shadow-sm">
            TRANSPARENT VALUE
          </div>

          <h1 className="mt-8 max-w-4xl text-[38px] font-extrabold text-[#09090b] leading-[1.1] tracking-tight sm:text-[58px] lg:text-[68px]">
            <span>Pay for what you assess.</span>{" "}
            <span className="accent-shimmer">Zero recruiter seat tax.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-[17px] text-[#52525b] leading-relaxed sm:text-[19px]">
            All plans include digital skill assessments, AI voice interviews, anti-cheat proctoring, and post-hire microlearning. Unlimited recruiter seats on every plan.
          </p>
        </div>
      </section>

      {/* -------------------- INTERACTIVE ROI CALCULATOR -------------------- */}
      <section className="bg-[#fafafa] py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
              Efficiency Calculator
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-extrabold text-[#09090b] tracking-tight mt-2">
              Calculate Your Pipeline Efficiency Gains
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              Drag the sliders below to see your estimated recruiter hours and financial savings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-[#e4e4e7] p-7 sm:p-12 shadow-sm">
            {/* Sliders Column */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-bold text-sm text-[#09090b]">
                    Monthly Job Applicants
                  </label>
                  <span className="rounded-lg bg-[#09090b] text-white px-3 py-1 font-mono font-bold text-xs">
                    {monthlyApplicants} candidates
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="50"
                  value={monthlyApplicants}
                  onChange={(e) => setMonthlyApplicants(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#09090b]"
                />
                <div className="flex justify-between text-[11px] text-[#71717a] font-mono mt-1">
                  <span>50</span>
                  <span>1,500</span>
                  <span>3,000+</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-bold text-sm text-[#09090b]">
                    Avg. Recruiter Time per Applicant Screen
                  </label>
                  <span className="rounded-lg bg-[#09090b] text-white px-3 py-1 font-mono font-bold text-xs">
                    {minsPerCandidate} minutes
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="60"
                  step="5"
                  value={minsPerCandidate}
                  onChange={(e) => setMinsPerCandidate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#09090b]"
                />
                <div className="flex justify-between text-[11px] text-[#71717a] font-mono mt-1">
                  <span>15 min</span>
                  <span>35 min</span>
                  <span>60 min</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-xs text-[#52525b]">
                GreatCampus automatically screens 100% of these candidates with objective assessments and AI voice interviews in under 24 hours.
              </div>
            </div>

            {/* Metrics Output Column */}
            <div className="lg:col-span-6 rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-8 sm:p-10 space-y-6 shadow-xl">
              <span className="text-xs font-mono font-bold text-[#a1a1aa] uppercase">
                Estimated Monthly Savings
              </span>

              <div className="grid grid-cols-2 gap-6 border-b border-[#27272a] pb-6">
                <div>
                  <span className="text-xs text-[#a1a1aa] block">Recruiter Hours Saved</span>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    {hoursSaved} <span className="text-base text-[#a1a1aa] font-mono">hrs</span>
                  </p>
                  <span className="text-[11px] text-[#71717a]">
                    ~{(hoursSaved / 160).toFixed(1)} full-time recruiters freed
                  </span>
                </div>

                <div>
                  <span className="text-xs text-[#a1a1aa] block">Time-to-Hire Reduced</span>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    {timeToHireReduced}
                  </p>
                  <span className="text-[11px] text-[#71717a]">
                    From 21 days down to 4 days
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-[#a1a1aa] uppercase font-mono block">
                    Estimated Financial Value
                  </span>
                  <p className="text-2xl font-extrabold text-white">
                    ${costSavings.toLocaleString()} / month
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-6 text-xs font-bold text-[#09090b] hover:bg-[#e4e4e7] transition-colors"
                >
                  Start Saving Today →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- 3 PRICING TIERS -------------------- */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <h3 className="font-bold text-[20px] text-[#09090b]">Starter Pilot</h3>
                <p className="text-xs text-[#52525b]">Perfect to pilot AI assessments on your upcoming open roles.</p>
                <div className="py-2">
                  <span className="text-4xl font-extrabold text-[#09090b]">$0</span>
                  <span className="text-xs text-[#71717a]"> / trial</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> 20 candidate assessments</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> AI voice interviews on Web & WhatsApp</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> 5 core languages supported</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Automated candidate scorecards</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Unlimited recruiter seats</li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-8 w-full text-center py-3 rounded-xl border border-[#27272a] font-bold text-xs text-[#09090b] hover:bg-[#fafafa] transition-colors"
              >
                Start Pilot Trial
              </Link>
            </div>

            {/* Growth Scale Plan */}
            <div className="rounded-3xl border-2 border-[#09090b] bg-[#09090b] text-white p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#09090b] px-3 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-wider">
                MOST POPULAR
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-[20px] text-white">Growth Scale</h3>
                <p className="text-xs text-[#a1a1aa]">For scaling organizations hiring 50 to 500 candidates monthly.</p>
                <div className="py-2">
                  <span className="text-4xl font-extrabold text-white">$1.20</span>
                  <span className="text-xs text-[#a1a1aa]"> / assessment</span>
                </div>
                <ul className="space-y-2.5 text-xs text-white">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> Unlimited recruiter seats</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> Direct Automated Phone Call + WhatsApp + Web</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> All 14 Indian & Global languages</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> AI Coding Sandbox & Anti-Cheat Proctoring</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> Post-hire microlearning module access</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-white" /> ATS Sync (Greenhouse, Lever, Workday)</li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-8 w-full text-center py-3.5 rounded-xl bg-white font-bold text-xs text-[#09090b] hover:bg-[#e4e4e7] transition-colors"
              >
                Schedule Growth Onboarding
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <h3 className="font-bold text-[20px] text-[#09090b]">Enterprise & Campus</h3>
                <p className="text-xs text-[#52525b]">For large enterprises, universities, and high-volume staffing agencies.</p>
                <div className="py-2">
                  <span className="text-3xl font-extrabold text-[#09090b]">Custom Tier</span>
                  <span className="text-xs text-[#71717a]"> (Volume pricing)</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Dedicated account manager & SLA</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Custom voice avatars & bespoke tests</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> SOC2, ISO, GDPR enterprise compliance</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Custom webhook, LMS & ATS integration</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Campus drive readiness programs</li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="mt-8 w-full text-center py-3 rounded-xl border border-[#27272a] font-bold text-xs text-[#09090b] hover:bg-[#fafafa] transition-colors"
              >
                Talk to Leadership
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
