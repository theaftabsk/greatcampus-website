import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  ArrowRight,
  Briefcase,
  Building2,
  GraduationCap,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Solutions | GreatCampus for Recruitment, Staffing, Universities & L&D",
  description:
    "Tailored talent solutions for Corporate Recruitment, Staffing Agencies, Universities & Higher Education, and Corporate Learning & Development teams.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090b]">
      <Header />

      {/* -------------------- HERO -------------------- */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#e4e4e7] bg-grid-pattern">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#09090b] px-4 py-1.5 text-[11px] font-bold tracking-wide text-white font-mono shadow-sm">
            BUILT FOR THE COMPLETE TALENT LIFECYCLE
          </div>

          <h1 className="mt-8 max-w-4xl text-[38px] font-extrabold text-[#09090b] leading-[1.1] tracking-tight sm:text-[58px] lg:text-[68px]">
            <span>One platform. Tailored for your exact</span>{" "}
            <span className="accent-shimmer">talent mission.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-[17px] text-[#52525b] leading-relaxed sm:text-[19px]">
            Whether you are hiring 10 people or 10,000, preparing students for the workplace, or developing an existing corporate workforce, GreatCampus brings structure, intelligence and continuity to the talent journey.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#recruitment"
              className="inline-flex h-10 items-center px-4 rounded-lg border border-[#e4e4e7] bg-[#fafafa] text-xs font-bold text-[#09090b] hover:border-[#09090b]"
            >
              Talent Acquisition ↓
            </a>
            <a
              href="#staffing"
              className="inline-flex h-10 items-center px-4 rounded-lg border border-[#e4e4e7] bg-[#fafafa] text-xs font-bold text-[#09090b] hover:border-[#09090b]"
            >
              Staffing Agencies ↓
            </a>
            <a
              href="#universities"
              className="inline-flex h-10 items-center px-4 rounded-lg border border-[#e4e4e7] bg-[#fafafa] text-xs font-bold text-[#09090b] hover:border-[#09090b]"
            >
              Universities & Campuses ↓
            </a>
            <a
              href="#ld"
              className="inline-flex h-10 items-center px-4 rounded-lg border border-[#e4e4e7] bg-[#fafafa] text-xs font-bold text-[#09090b] hover:border-[#09090b]"
            >
              Learning & Development ↓
            </a>
          </div>
        </div>
      </section>

      {/* -------------------- TRACK 1: RECRUITMENT -------------------- */}
      <section id="recruitment" className="bg-[#fafafa] py-20 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
                01 · CORPORATE RECRUITMENT & TALENT ACQUISITION
              </span>
              <h2 className="text-[30px] sm:text-[40px] font-extrabold text-[#09090b] leading-tight">
                Assess more candidates. Interview smarter.
              </h2>
              <p className="text-[15px] text-[#52525b] leading-relaxed">
                Handle high-volume recruitment without proportionately increasing manual screening and interview workload. Screen 100% of applicants with objective tests and AI-powered voice/video interviews.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#09090b]">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Graduate Recruitment</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> High-Volume Hiring</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Role-Based Assessments</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> AI First-Round Interviews</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Candidate Shortlisting</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Communication & Behavioural Assessment</span>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-8 space-y-4 shadow-xl">
              <p className="text-xs font-mono text-[#a1a1aa] uppercase">Enterprise Recruitment Impact</p>
              <h3 className="text-2xl font-extrabold text-white">
                80% Faster Time-to-Shortlist
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Recruiters only spend human interviewing hours with candidates who have cleared verified testing and structured AI first-round evaluation.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center py-2.5 rounded-lg bg-white text-[#09090b] font-bold text-xs hover:bg-[#e4e4e7] transition-colors"
              >
                Schedule TA Walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- TRACK 2: STAFFING AGENCIES -------------------- */}
      <section id="staffing" className="bg-white py-20 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
                02 · RECRUITMENT & STAFFING AGENCIES
              </span>
              <h2 className="text-[30px] sm:text-[40px] font-extrabold text-[#09090b] leading-tight">
                Don't just send CVs. Send assessed and interviewed candidates.
              </h2>
              <p className="text-[15px] text-[#52525b] leading-relaxed">
                Create a stronger recruitment proposition for your clients. Move away from raw CV forwarding to delivering evidence-based candidate portfolios.
              </p>

              <div className="p-4 rounded-xl border border-[#e4e4e7] bg-[#fafafa] font-mono text-xs text-[#09090b] space-y-1">
                <span className="text-[#71717a] font-bold block">EVIDENCE-BASED AGENCY WORKFLOW:</span>
                <p className="font-bold">Source → Assess → AI Interview → Score → Shortlist → Client</p>
              </div>

              <p className="text-xs text-[#52525b]">
                GreatCampus helps recruitment partners create a more structured, evidence-based candidate evaluation process that commands premium client fees.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-8 space-y-4 shadow-xl">
              <p className="text-xs font-mono text-[#a1a1aa] uppercase">Agency Differentiation</p>
              <h3 className="text-2xl font-extrabold text-white">
                Higher Client Placement Velocity
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Deliver interactive candidate dossiers with proctoring certifications, aptitude percentiles, and audio interview snippets.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center py-2.5 rounded-lg bg-white text-[#09090b] font-bold text-xs hover:bg-[#e4e4e7] transition-colors"
              >
                Become an Agency Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- TRACK 3: UNIVERSITIES -------------------- */}
      <section id="universities" className="bg-[#fafafa] py-20 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
                03 · UNIVERSITIES & HIGHER EDUCATION
              </span>
              <h2 className="text-[30px] sm:text-[40px] font-extrabold text-[#09090b] leading-tight">
                Assess. Prepare. Develop.
              </h2>
              <p className="text-[15px] text-[#52525b] leading-relaxed">
                Help students become more employable while strengthening institutional assessment and campus placement readiness.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#09090b]">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Online Academic & Placement Assessments</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Secure Proctored Examinations</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> AI Mock Interviews with Instant Feedback</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Employability Diagnostics</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Practical Skill Development</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Student Workplace Readiness Reports</span>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-8 space-y-4 shadow-xl">
              <p className="text-xs font-mono text-[#a1a1aa] uppercase">Institutional Placement Success</p>
              <h3 className="text-2xl font-extrabold text-white">
                3x Higher Placement Clearance
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Empower your students with realistic AI interviews and personalized microlearning before day-1 of corporate campus drives.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center py-2.5 rounded-lg bg-white text-[#09090b] font-bold text-xs hover:bg-[#e4e4e7] transition-colors"
              >
                Campus Partnership Briefing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- TRACK 4: LEARNING & DEVELOPMENT -------------------- */}
      <section id="ld" className="bg-white py-20 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
                04 · LEARNING & DEVELOPMENT (L&D)
              </span>
              <h2 className="text-[30px] sm:text-[40px] font-extrabold text-[#09090b] leading-tight">
                Turn training into continuous capability development.
              </h2>
              <p className="text-[15px] text-[#52525b] leading-relaxed">
                Identify skill gaps, deliver focused learning and reinforce critical capabilities. Build a workforce that keeps learning through short, high-impact interventions and continuous reassessment.
              </p>

              <div className="p-4 rounded-xl border border-[#e4e4e7] bg-[#fafafa] font-mono text-xs text-[#09090b] space-y-1">
                <span className="text-[#71717a] font-bold block">CONTINUOUS L&D CYCLE:</span>
                <p className="font-bold">Assess → Identify Gaps → Microlearn → Reassess</p>
              </div>

              <p className="text-xs text-[#52525b]">
                Tie enterprise training spend to verified capability growth metrics rather than simple course completion attendance percentages.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-8 space-y-4 shadow-xl">
              <p className="text-xs font-mono text-[#a1a1aa] uppercase">Enterprise Capability Growth</p>
              <h3 className="text-2xl font-extrabold text-white">
                Measurable Workforce Readiness
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Know precisely which teams and individuals are ready for role promotion through empirical reassessment benchmarks.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center py-2.5 rounded-lg bg-white text-[#09090b] font-bold text-xs hover:bg-[#e4e4e7] transition-colors"
              >
                Discuss L&D Architecture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- CTA BANNER -------------------- */}
      <section className="bg-[#fafafa] py-16 text-center border-b border-[#e4e4e7]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-5">
          <h2 className="text-3xl font-extrabold text-[#09090b]">
            Ready to deploy GreatCampus for your organization?
          </h2>
          <p className="text-xs sm:text-sm text-[#52525b] max-w-xl mx-auto">
            Directly consult with Head of Strategic Partnerships <strong>Maninder Singh</strong> (+91-9811352666 / +91-9073351545 · contact@greatcampus.in).
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#09090b] px-8 text-sm font-bold text-white hover:bg-[#27272a] transition-colors shadow-md"
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
