import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  ArrowRight,
  Phone,
  MessageSquare,
  Globe,
  Bot,
  Clock,
  CheckCircle2,
  Users,
  Award,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "02 - INTERVIEW | GreatCampus AI Voice & Video First-Round Interviews",
  description:
    "Interview more candidates. Spend human time where it matters. Conduct AI-powered structured interviews on WhatsApp, Phone, or Web across 14 languages with instant ATS scorecards.",
};

export default function InterviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090b]">
      <Header />

      {/* -------------------- HERO -------------------- */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#e4e4e7] bg-grid-pattern">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#09090b] px-4 py-1.5 text-[11px] font-bold tracking-wide text-white font-mono shadow-sm">
            PILLAR 02 · AI-POWERED INTERVIEWS AT SCALE
          </div>

          <h1 className="mt-8 max-w-4xl text-[38px] font-extrabold text-[#09090b] leading-[1.1] tracking-tight sm:text-[58px] lg:text-[68px]">
            <span>Interview more candidates.</span>{" "}
            <span className="accent-shimmer">Spend human time where it matters.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-[17px] text-[#52525b] leading-relaxed sm:text-[19px]">
            First-round interviews can consume enormous amounts of recruiter time — especially when hundreds or thousands of candidates apply. GreatCampus enables organizations to conduct AI-powered structured interviews at scale.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#09090b] px-7 text-[14px] font-bold text-white shadow-lg hover:bg-[#27272a] transition-all border border-[#09090b]"
            >
              Experience an AI Interview
            </Link>
            <Link
              href="/develop"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-[#27272a] bg-white px-7 text-[14px] font-bold text-[#09090b] hover:bg-[#f4f4f5] transition-colors"
            >
              Explore Next Step: 03 Develop →
            </Link>
          </div>

          {/* Channels Row */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs font-mono font-bold text-[#52525b]">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#e4e4e7] bg-[#fafafa]">
              <Phone className="w-3.5 h-3.5 text-[#09090b]" /> Direct Automated Phone Call
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#e4e4e7] bg-[#fafafa]">
              <MessageSquare className="w-3.5 h-3.5 text-[#09090b]" /> WhatsApp Voice Messaging
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#e4e4e7] bg-[#fafafa]">
              <Globe className="w-3.5 h-3.5 text-[#09090b]" /> Web Browser Video Room
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#09090b] text-white">
              14 Indian & Global Languages
            </span>
          </div>
        </div>
      </section>

      {/* -------------------- WHAT AI INTERVIEWS EVALUATE -------------------- */}
      <section className="bg-[#fafafa] py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
              Comprehensive Evaluation
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-extrabold text-[#09090b] tracking-tight mt-2">
              Interview for the Role — Not Just the Resume
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              Create structured interview experiences based on the job, competency framework, or recruitment requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Communication", desc: "Verbal clarity, concise articulation, tone, and professional confidence." },
              { title: "Problem Solving", desc: "Structured thinking and breaking complex business problems into logical steps." },
              { title: "Behavioural Competencies", desc: "Handling pressure, teamwork tendencies, adaptability, and workplace ethics." },
              { title: "Role-specific Knowledge", desc: "Subject-matter depth, domain terminology, and industry nuance." },
              { title: "Situational Responses", desc: "Handling unexpected trade-offs, escalations, and realistic role scenarios." },
              { title: "Customer Orientation", desc: "Empathy, active listening, client focus, and de-escalation skills." },
              { title: "Sales Capability", desc: "Objection handling, consultative questioning, value reframing, and closing." },
              { title: "Leadership Potential", desc: "Ownership mindset, delegation clarity, and peer motivation capability." },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#e4e4e7] bg-white p-6 shadow-sm hover:border-[#09090b] transition-all"
              >
                <span className="text-xs font-mono text-[#71717a] block mb-2 font-bold">
                  EVAL_0{index + 1}
                </span>
                <h3 className="font-bold text-[16px] text-[#09090b] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#52525b] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- THE PARADIGM SHIFT (FROM VS TO) -------------------- */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#09090b] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-3">
              Recruitment Transformation
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-extrabold text-[#09090b] tracking-tight">
              From Manual Phone Screens to AI-Powered First Layer
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              AI helps conduct the first layer of evaluation so your recruiters spend their time on candidates who matter most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Legacy Approach */}
            <div className="p-8 rounded-3xl border border-[#e4e4e7] bg-[#fafafa] space-y-4">
              <span className="px-3 py-1 rounded-full bg-slate-200 text-[#52525b] font-mono text-xs font-bold">
                THE OLD WAY
              </span>
              <p className="text-[20px] font-bold text-[#09090b]">
                CV → Manual Screening → Manual First Interview
              </p>
              <ul className="space-y-2 text-xs text-[#52525b] pt-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#71717a]">✕</span> Recruiters waste 15-20 hours every week on phone screens.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#71717a]">✕</span> Candidates wait 2-3 weeks just for an initial phone screen.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#71717a]">✕</span> Inconsistent notes and human evaluation fatigue.
                </li>
              </ul>
            </div>

            {/* GreatCampus Approach */}
            <div className="p-8 rounded-3xl border border-[#09090b] bg-[#09090b] text-white space-y-4 shadow-xl">
              <span className="px-3 py-1 rounded-full bg-white text-[#09090b] font-mono text-xs font-bold">
                THE GREATCAMPUS WAY
              </span>
              <p className="text-[20px] font-bold text-white">
                Assessment → AI Interview → Evaluation → Shortlist
              </p>
              <ul className="space-y-2 text-xs text-[#a1a1aa] pt-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" /> 100% of applicants receive an immediate first interview.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" /> Standardized rubric and scoring criteria across all candidates.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" /> Human recruiters receive ranked scorecards with audio citations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- THE OUTCOME -------------------- */}
      <section className="bg-[#fafafa] py-16 sm:py-24 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#71717a] uppercase">
            The Interview Outcome
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#09090b] tracking-tight">
            Reduce screening effort. Standardize first-round evaluation. Scale recruitment without scaling interview workload.
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#52525b] leading-relaxed">
            Take the shortlisted candidates and feed their interview insights directly into Pillar 03 Develop for continuous post-hire microlearning.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#09090b] px-8 text-sm font-bold text-white hover:bg-[#27272a] transition-all"
            >
              Book an AI Interview Demo
            </Link>
            <Link
              href="/develop"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-[#27272a] bg-white px-7 text-sm font-bold text-[#09090b] hover:bg-[#f4f4f5] transition-colors"
            >
              See Pillar 03: Develop →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
