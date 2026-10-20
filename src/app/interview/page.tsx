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
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-gradient-to-tr from-black/[0.03] via-zinc-400/[0.06] to-transparent rounded-full blur-3xl pointer-events-none animate-ambient-glow" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 md:px-8 text-center scroll-reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass-pill-dark px-4 py-2 text-[11px] font-bold tracking-wide text-white font-mono shadow-md">
            PILLAR 02 · AI-POWERED INTERVIEWS AT SCALE
          </div>

          <h1 className="mt-8 max-w-4xl text-[32px] sm:text-[52px] lg:text-[68px] font-extrabold text-[#09090b] leading-[1.1] tracking-tight font-heading">
            <span>Interview more candidates.</span>{" "}
            <span className="accent-shimmer">Spend human time where it matters.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-[16px] sm:text-[19px] text-[#52525b] leading-relaxed">
            First-round interviews can consume enormous amounts of recruiter time — especially when hundreds or thousands of candidates apply. GreatCampus enables organizations to conduct AI-powered structured interviews at scale.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="btn-gleam tap-bounce w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#09090b] px-8 text-[14px] font-bold text-white shadow-lg hover:bg-[#27272a] transition-all border border-[#09090b]"
            >
              Experience an AI Interview
            </Link>
            <Link
              href="/develop"
              className="glass-panel tap-bounce w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl px-8 text-[14px] font-bold text-[#09090b] hover:bg-white transition-all shadow-sm"
            >
              Explore Next Step: 03 Develop →
            </Link>
          </div>

          {/* Channels Row with Glassmorphism */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs font-mono font-bold text-[#52525b] scroll-reveal-scale">
            <span className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel shadow-xs tap-bounce">
              <Phone className="w-3.5 h-3.5 text-[#09090b]" /> Direct Automated Phone Call
            </span>
            <span className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel shadow-xs tap-bounce">
              <MessageSquare className="w-3.5 h-3.5 text-[#09090b]" /> WhatsApp Voice Messaging
            </span>
            <span className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel shadow-xs tap-bounce">
              <Globe className="w-3.5 h-3.5 text-[#09090b]" /> Web Browser Video Room
            </span>
            <span className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-pill-dark text-white shadow-xs tap-bounce">
              14 Indian & Global Languages
            </span>
          </div>
        </div>
      </section>

      {/* -------------------- WHAT AI INTERVIEWS EVALUATE -------------------- */}
      <section className="bg-[#fafafa] py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
              Comprehensive Evaluation
            </span>
            <h2 className="text-[28px] sm:text-[42px] font-extrabold text-[#09090b] tracking-tight mt-2 font-heading">
              Interview for the Role — Not Just the Resume
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              Create structured interview experiences based on the job, competency framework, or recruitment requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal">
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
                className="glass-panel glass-panel-hover glass-specular card-hover-lift rounded-3xl p-6 border border-zinc-200/80 shadow-xs"
              >
                <span className="text-xs font-mono text-[#71717a] block mb-2 font-bold">
                  EVAL_0{index + 1}
                </span>
                <h3 className="font-bold text-[16px] text-[#09090b] mb-2 font-heading">
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
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#09090b] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-3 font-mono">
              Recruitment Transformation
            </span>
            <h2 className="text-[28px] sm:text-[42px] font-extrabold text-[#09090b] tracking-tight font-heading">
              From Manual Phone Screens to AI-Powered First Layer
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              AI helps conduct the first layer of evaluation so your recruiters spend their time on candidates who matter most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto scroll-reveal">
            {/* Legacy Approach */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-zinc-200/80 shadow-xs space-y-4">
              <span className="px-3 py-1 rounded-full bg-zinc-200 text-[#52525b] font-mono text-xs font-bold">
                THE OLD WAY
              </span>
              <p className="text-[19px] sm:text-[20px] font-bold text-[#09090b] font-heading">
                CV → Manual Screening → Manual First Interview
              </p>
              <ul className="space-y-2 text-xs text-[#52525b] pt-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#71717a] font-bold">✕</span> Recruiters waste 15-20 hours every week on phone screens.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#71717a] font-bold">✕</span> Candidates wait 2-3 weeks just for an initial phone screen.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#71717a] font-bold">✕</span> Inconsistent notes and human evaluation fatigue.
                </li>
              </ul>
            </div>

            {/* GreatCampus Approach */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel-dark glass-specular text-white space-y-4 shadow-2xl border border-white/10">
              <span className="px-3 py-1 rounded-full bg-white text-[#09090b] font-mono text-xs font-bold">
                THE GREATCAMPUS WAY
              </span>
              <p className="text-[19px] sm:text-[20px] font-bold text-white font-heading">
                Assessment → AI Interview → Evaluation → Shortlist
              </p>
              <ul className="space-y-2 text-xs text-[#a1a1aa] pt-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" /> 100% of applicants receive an immediate first interview.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" /> Standardized rubric and scoring criteria across all candidates.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" /> Human recruiters receive ranked scorecards with audio citations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- THE OUTCOME -------------------- */}
      <section className="bg-[#fafafa] py-16 sm:py-24 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 text-center space-y-6 scroll-reveal">
          <span className="text-xs font-mono font-bold text-[#71717a] uppercase">
            The Interview Outcome
          </span>
          <h2 className="text-[28px] sm:text-[44px] font-extrabold text-[#09090b] tracking-tight font-heading">
            Reduce screening effort. Standardize first-round evaluation. Scale recruitment without scaling interview workload.
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#52525b] leading-relaxed">
            Take the shortlisted candidates and feed their interview insights directly into Pillar 03 Develop for continuous post-hire microlearning.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="btn-gleam tap-bounce w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#09090b] px-8 text-sm font-bold text-white hover:bg-[#27272a] transition-all shadow-md"
            >
              Book an AI Interview Demo
            </Link>
            <Link
              href="/develop"
              className="tap-bounce w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-[#27272a] bg-white px-7 text-sm font-bold text-[#09090b] hover:bg-[#f4f4f5] transition-colors"
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
