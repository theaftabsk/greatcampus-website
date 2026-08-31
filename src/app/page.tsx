"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Users,
  Award,
  BookOpen,
  Headphones,
  Laptop,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Layers,
  BarChart3,
  Phone,
  Mail,
  X,
  Play,
  Pause,
  Clock,
  Compass,
  Repeat,
  Target,
  FileCheck,
  Zap,
  TrendingUp,
  Building2,
  BrainCircuit,
  MessageSquare,
  Loader2,
  AlertCircle
} from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
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

export default function Home() {
  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Demo Modal State
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoFormSubmitted, setDemoFormSubmitted] = useState(false);
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const [demoError, setDemoError] = useState("");
  const [demoData, setDemoData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    objective: "Complete Integrated Journey (Assess → Interview → Develop)",
  });

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitting(true);
    setDemoError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(demoData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit request.");
      setDemoFormSubmitted(true);
    } catch (err: any) {
      setDemoError(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setDemoSubmitting(false);
    }
  };

  // Interactive Talent Journey Visualizer step
  const [activeJourneyStep, setActiveJourneyStep] = useState<
    "assess" | "interview" | "select" | "develop" | "reassess"
  >("assess");

  // Interactive Pillar 01 Assessment Tab
  const [activeAssessCategory, setActiveAssessCategory] = useState<
    "aptitude" | "technical" | "behavioural"
  >("aptitude");

  // Interactive Pillar 02 Audio Simulation
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  // Interactive Pillar 03 Microlearning Tab
  const [activeMicroTab, setActiveMicroTab] = useState<
    "sales" | "service" | "leadership" | "ops" | "onboarding"
  >("sales");

  // Lifecycle Tab Switcher
  const [activeLifecycleTab, setActiveLifecycleTab] = useState<
    "recruitment" | "staffing" | "universities" | "ld"
  >("recruitment");

  // Interactive Challenge Selector
  const [selectedChallenge, setSelectedChallenge] = useState<
    "assess" | "interview" | "develop" | "all"
  >("all");

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090b]">
      <Header onOpenDemo={() => setDemoModalOpen(true)} />

      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative overflow-hidden bg-white pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-[#e4e4e7] bg-grid-pattern">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-8">
          {/* Positioning Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#09090b] px-4 py-1.5 text-[12px] font-semibold tracking-wide text-white shadow-sm">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
            <span>ASSESS → INTERVIEW → DEVELOP → REASSESS</span>
          </div>

          {/* Main Title */}
          <h1 className="mt-8 max-w-5xl text-[40px] font-extrabold text-[#09090b] leading-[1.08] tracking-tight sm:text-[64px] lg:text-[76px]">
            <span>Identify the right people.</span>
            <br />
            <span>Make better hiring decisions.</span>
            <br />
            <span className="accent-shimmer">Continuously develop talent.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-7 max-w-3xl text-[17px] text-[#52525b] leading-relaxed sm:text-[20px]">
            From assessment to interview to development, GreatCampus helps organizations build a smarter, faster and more measurable talent journey.
          </p>

          {/* Primary Call to Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              onClick={() => setDemoModalOpen(true)}
              className="group inline-flex h-13 items-center gap-2 rounded-xl bg-[#09090b] px-8 text-[15px] font-bold text-white shadow-lg hover:bg-[#27272a] transition-all hover:scale-[1.02] border border-[#09090b] cursor-pointer"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <Link
              href="/assess"
              className="inline-flex h-13 items-center justify-center rounded-xl border border-[#27272a] bg-white px-8 text-[15px] font-bold text-[#09090b] hover:bg-[#f4f4f5] transition-colors shadow-sm"
            >
              Explore GreatCampus
            </Link>
          </div>

          {/* Metric Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl text-left border-y border-[#e4e4e7] py-6">
            <div className="p-3">
              <p className="text-[28px] sm:text-[34px] font-extrabold text-[#09090b]">30,000+</p>
              <p className="text-[12px] font-medium text-[#71717a] uppercase tracking-wider mt-1">
                Validated Role Tests
              </p>
            </div>
            <div className="p-3 border-l border-[#e4e4e7]">
              <p className="text-[28px] sm:text-[34px] font-extrabold text-[#09090b]">80%</p>
              <p className="text-[12px] font-medium text-[#71717a] uppercase tracking-wider mt-1">
                Recruiter Hours Saved
              </p>
            </div>
            <div className="p-3 border-l-0 md:border-l border-[#e4e4e7]">
              <p className="text-[28px] sm:text-[34px] font-extrabold text-[#09090b]">100%</p>
              <p className="text-[12px] font-medium text-[#71717a] uppercase tracking-wider mt-1">
                Applicants Screened
              </p>
            </div>
            <div className="p-3 border-l border-[#e4e4e7]">
              <p className="text-[28px] sm:text-[34px] font-extrabold text-[#09090b]">1 Platform</p>
              <p className="text-[12px] font-medium text-[#71717a] uppercase tracking-wider mt-1">
                Hiring to Development
              </p>
            </div>
          </div>

          {/* -------------------- INTERACTIVE TALENT JOURNEY PREVIEW -------------------- */}
          <div id="journey" className="mt-16 w-full max-w-5xl rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-6 sm:p-8 shadow-2xl text-left">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#27272a] pb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#a1a1aa]">
                  The GreatCampus Engine
                </span>
                <h2 className="text-[22px] sm:text-[26px] font-extrabold text-white mt-1">
                  One Integrated Talent Journey
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#a1a1aa]">Continuous Loop Mode:</span>
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-white text-xs font-bold font-mono">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Stepper Buttons */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { id: "assess", step: "01", name: "ASSESS", question: "Who can do the job?" },
                { id: "interview", step: "02", name: "INTERVIEW", question: "Who is the right fit?" },
                { id: "select", step: "03", name: "SELECT", question: "Who should we hire?" },
                { id: "develop", step: "04", name: "DEVELOP", question: "What to improve?" },
                { id: "reassess", step: "05", name: "REASSESS", question: "Has capability improved?" },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveJourneyStep(s.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    activeJourneyStep === s.id
                      ? "bg-white text-[#09090b] border-white shadow-lg"
                      : "bg-[#121215] text-[#a1a1aa] border-[#27272a] hover:border-[#3f3f46] hover:text-white"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold block opacity-70">
                    STEP {s.step}
                  </span>
                  <span className="font-extrabold text-[13px] block tracking-wide">
                    {s.name}
                  </span>
                  <span className="text-[11px] mt-1 block leading-tight font-medium opacity-80">
                    {s.question}
                  </span>
                </button>
              ))}
            </div>

            {/* Dynamic Step Content Showcase */}
            <div className="mt-6 rounded-2xl border border-[#27272a] bg-[#121215] p-6">
              {activeJourneyStep === "assess" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 space-y-3">
                    <span className="text-[11px] font-bold text-[#a1a1aa] uppercase tracking-wider">
                      Stage 01 · Objective Digital Assessment
                    </span>
                    <h3 className="text-[20px] font-extrabold text-white">
                      Measure Real Competencies Beyond the CV
                    </h3>
                    <p className="text-[13.5px] text-[#a1a1aa] leading-relaxed">
                      Before human recruiters spend hours reading resumes, candidates complete structured assessments covering Aptitude, Technical domain knowledge, and Behavioural traits.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold text-white">
                        Numerical & Logical Aptitude
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold text-white">
                        Domain Skills (IT, Finance, Sales)
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold text-white">
                        AI Proctoring Active
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-6 rounded-xl border border-[#27272a] bg-[#18181b] p-4 font-mono text-xs space-y-2.5">
                    <div className="flex justify-between border-b border-[#27272a] pb-2 text-[#a1a1aa]">
                      <span>ASSESSMENT_ID: #GC-9821</span>
                      <span className="text-white font-bold">STATUS: COMPLETED</span>
                    </div>
                    <div className="space-y-1.5 text-[11.5px]">
                      <div className="flex justify-between">
                        <span className="text-[#a1a1aa]">Analytical Reasoning:</span>
                        <span className="text-white font-bold">92% (Top 5th percentile)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#a1a1aa]">Technical Domain (Sales Ops):</span>
                        <span className="text-white font-bold">88% (Proficient)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#a1a1aa]">Integrity Score (Proctored):</span>
                        <span className="text-white font-bold">100% Clean Flag</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-[#27272a] text-[#a1a1aa] text-[11px] flex items-center justify-between">
                      <span>Outcome: Candidate qualified for AI Interview</span>
                      <span className="text-white font-bold">Passed →</span>
                    </div>
                  </div>
                </div>
              )}

              {activeJourneyStep === "interview" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 space-y-3">
                    <span className="text-[11px] font-bold text-[#a1a1aa] uppercase tracking-wider">
                      Stage 02 · Structured AI Interview
                    </span>
                    <h3 className="text-[20px] font-extrabold text-white">
                      Evaluate Fit & Communication at Scale
                    </h3>
                    <p className="text-[13.5px] text-[#a1a1aa] leading-relaxed">
                      AI conducts natural, contextual first-round voice and video interviews. Evaluates communication clarity, problem-solving, situational reasoning, and role-specific depth.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className="h-8 w-8 rounded-full bg-white text-[#09090b] flex items-center justify-center hover:bg-[#e4e4e7] transition-colors"
                      >
                        {isPlayingAudio ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                      </button>
                      <span className="text-xs text-[#a1a1aa]">
                        {isPlayingAudio ? "Live AI Voice dialogue streaming..." : "Audio simulation paused"}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-6 rounded-xl border border-[#27272a] bg-[#18181b] p-4 space-y-3">
                    <div className="flex items-center justify-between border-b border-[#27272a] pb-2 text-xs">
                      <span className="font-bold text-white">AI Voice Room · SDR Evaluation</span>
                      <span className="font-mono text-[#a1a1aa]">04:32</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded bg-white/5 border border-white/5 text-[#e4e4e7]">
                        <span className="font-bold text-white block text-[11px]">AI INTERVIEWER:</span>
                        "How do you handle a prospect who claims they lack the budget this quarter?"
                      </div>
                      <div className="p-2 rounded bg-white/10 text-white font-medium">
                        <span className="font-bold text-[#a1a1aa] block text-[11px]">CANDIDATE:</span>
                        "I clarify the timeline of their fiscal cycle, assess the cost of inaction, and structure milestone payment options..."
                      </div>
                    </div>
                    <div className="flex items-center gap-1 h-5 pt-1">
                      {[14, 22, 10, 24, 18, 12, 28, 20, 8, 22, 16, 24, 12].map((_, i) => (
                        <span
                          key={i}
                          className={`w-1 rounded-full bg-white ${
                            isPlayingAudio ? (i % 2 === 0 ? "animate-wave-1" : "animate-wave-2") : "h-1.5 opacity-30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeJourneyStep === "select" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 space-y-3">
                    <span className="text-[11px] font-bold text-[#a1a1aa] uppercase tracking-wider">
                      Stage 03 · Evidence-Based Selection
                    </span>
                    <h3 className="text-[20px] font-extrabold text-white">
                      Make Confident, Unbiased Hiring Decisions
                    </h3>
                    <p className="text-[13.5px] text-[#a1a1aa] leading-relaxed">
                      Synthesize assessment test performance with AI interview evaluation. Hiring managers receive a ranked shortlist with transparent competency scorecards and audio citations.
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#a1a1aa]">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-white" /> Standardized rubric across all candidates
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-white" /> Eliminates resume embellishment and bias
                      </li>
                    </ul>
                  </div>
                  <div className="md:col-span-6 rounded-xl border border-[#27272a] bg-[#18181b] p-4 text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-[#27272a] pb-2">
                      <span className="font-bold text-white">CANDIDATE RANKING QUEUE</span>
                      <span className="px-2 py-0.5 rounded bg-white text-[#09090b] font-bold text-[10px]">
                        RECOMMENDED HIRE
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                        <div>
                          <p className="font-bold text-white">Aarav Mehta</p>
                          <p className="text-[10px] text-[#a1a1aa]">Assessment: 91% · Interview: 94%</p>
                        </div>
                        <span className="font-mono font-bold text-white text-sm">93.5%</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-white/5 opacity-60">
                        <div>
                          <p className="font-bold text-white">Pooja Verma</p>
                          <p className="text-[10px] text-[#a1a1aa]">Assessment: 86% · Interview: 88%</p>
                        </div>
                        <span className="font-mono font-bold text-white text-sm">87.0%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeJourneyStep === "develop" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 space-y-3">
                    <span className="text-[11px] font-bold text-[#a1a1aa] uppercase tracking-wider">
                      Stage 04 · Targeted Microlearning
                    </span>
                    <h3 className="text-[20px] font-extrabold text-white">
                      Turn Identified Gaps into Instant Growth
                    </h3>
                    <p className="text-[13.5px] text-[#a1a1aa] leading-relaxed">
                      Don't stop at the hire. Assessment and interview data highlight the exact capability gaps. GreatCampus automatically delivers 5-minute microlearning modules to build proficiency.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-2.5 py-1 rounded bg-white/10 text-[11px] text-white font-medium">
                        Negotiation & Closing
                      </span>
                      <span className="px-2.5 py-1 rounded bg-white/10 text-[11px] text-white font-medium">
                        Empathy & Active Listening
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-6 rounded-xl border border-[#27272a] bg-[#18181b] p-4 text-xs space-y-2.5">
                    <div className="flex items-center justify-between border-b border-[#27272a] pb-2 text-[#a1a1aa]">
                      <span>IDENTIFIED GAP</span>
                      <span className="text-white font-bold">ASSIGNED INTERVENTION</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/5 border border-[#27272a] space-y-1">
                      <div className="flex justify-between text-white font-bold">
                        <span>Objection Handling Under Pressure</span>
                        <span>5 min bite</span>
                      </div>
                      <p className="text-[11px] text-[#a1a1aa]">
                        Interactive scenario simulation on reframing objections around ROI rather than discount requests.
                      </p>
                    </div>
                    <div className="text-[11px] text-[#a1a1aa] text-right font-medium">
                      Continuous reinforcement instead of long, forgotten seminars.
                    </div>
                  </div>
                </div>
              )}

              {activeJourneyStep === "reassess" && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 space-y-3">
                    <span className="text-[11px] font-bold text-[#a1a1aa] uppercase tracking-wider">
                      Stage 05 · Continuous Reassessment
                    </span>
                    <h3 className="text-[20px] font-extrabold text-white">
                      Close the Loop: Verify Measurable Improvement
                    </h3>
                    <p className="text-[13.5px] text-[#a1a1aa] leading-relaxed">
                      Did the learning work? Reassess employees after 30/60/90 days to track measurable skill gains, identify next-level leadership potential, and maintain talent readiness.
                    </p>
                    <div className="pt-2">
                      <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full">
                        Assess → Develop → Reassess → Loop Completed
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-6 rounded-xl border border-[#27272a] bg-[#18181b] p-4 text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-[#27272a] pb-2">
                      <span className="text-white font-bold">SKILL GROWTH DELTA</span>
                      <span className="text-xs font-mono text-white font-bold">+28% GAIN</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-[#a1a1aa]">Baseline (Hiring Date):</span>
                          <span className="text-white">64 / 100</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-[#27272a]">
                          <div className="h-full rounded-full bg-[#71717a]" style={{ width: "64%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-white font-bold">Post-Microlearning Reassessment:</span>
                          <span className="text-white font-bold">92 / 100</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-[#27272a]">
                          <div className="h-full rounded-full bg-white" style={{ width: "92%" }}></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#a1a1aa] pt-1">
                      Validated capability improvement for role promotion.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- THE CHALLENGE -------------------- */}
      <section id="challenge" className="bg-[#fafafa] py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#09090b] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              The Challenge
            </span>
            <h2 className="text-[32px] sm:text-[46px] font-extrabold text-[#09090b] tracking-tight leading-tight">
              Hiring the right people is only the beginning.
            </h2>
            <p className="mt-4 text-[17px] text-[#52525b] leading-relaxed">
              Organizations today face three deeply connected talent hurdles that traditional point-solutions treat as completely separate silos:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Challenge 1 */}
            <div className="rounded-2xl border border-[#e4e4e7] bg-white p-7 shadow-sm hover:border-[#09090b] transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-[#09090b] text-white flex items-center justify-center font-bold text-base">
                  01
                </div>
                <h3 className="text-[20px] font-bold text-[#09090b]">
                  How do we identify the right talent?
                </h3>
                <p className="text-[14px] text-[#52525b] leading-relaxed">
                  Resumes are embellished and unreliable. Keyword filters miss high-potential individuals while advancing candidates who lack actual practical capability for the job.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#e4e4e7] text-xs font-semibold text-[#71717a]">
                Problem: Unstructured initial screening
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="rounded-2xl border border-[#e4e4e7] bg-white p-7 shadow-sm hover:border-[#09090b] transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-[#09090b] text-white flex items-center justify-center font-bold text-base">
                  02
                </div>
                <h3 className="text-[20px] font-bold text-[#09090b]">
                  How do we evaluate candidates consistently at scale?
                </h3>
                <p className="text-[14px] text-[#52525b] leading-relaxed">
                  First-round phone interviews eat hundreds of recruiter hours. High applicant volume forces recruiters to interview only a fraction of applicants, introducing human fatigue and bias.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#e4e4e7] text-xs font-semibold text-[#71717a]">
                Problem: Scaling interview workload
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="rounded-2xl border border-[#e4e4e7] bg-white p-7 shadow-sm hover:border-[#09090b] transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-[#09090b] text-white flex items-center justify-center font-bold text-base">
                  03
                </div>
                <h3 className="text-[20px] font-bold text-[#09090b]">
                  How do we develop people after they join?
                </h3>
                <p className="text-[14px] text-[#52525b] leading-relaxed">
                  Recruitment data disappears the moment an offer letter is signed. L&D starts from zero with generic training seminars that fail to address the specific skill gaps identified during hiring.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#e4e4e7] text-xs font-semibold text-[#71717a]">
                Problem: Broken post-hire development
              </div>
            </div>
          </div>

          {/* Unified Solution Banner */}
          <div className="mt-10 rounded-2xl border border-[#27272a] bg-[#09090b] text-white p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#a1a1aa]">
                The GreatCampus Solution
              </span>
              <h3 className="text-[24px] sm:text-[30px] font-extrabold text-white">
                GreatCampus brings all three together in one integrated platform.
              </h3>
              <p className="text-[15px] text-[#a1a1aa] leading-relaxed">
                Assess → Interview → Develop → Reassess. A complete talent journey — powered by AI.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-white px-7 text-[14px] font-bold text-[#09090b] hover:bg-[#e4e4e7] transition-colors cursor-pointer"
            >
              See the Platform in Action
            </button>
          </div>
        </div>
      </section>

      {/* -------------------- OUR THREE PILLARS -------------------- */}
      <section id="pillars" className="bg-white py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#09090b] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-3">
              The Architecture
            </span>
            <h2 className="text-[32px] sm:text-[46px] font-extrabold text-[#09090b] tracking-tight">
              Our Three Pillars
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              Engineered to operate independently or as one continuous talent pipeline.
            </p>
          </div>

          <div className="space-y-14">
            {/* ----------------- PILLAR 01: ASSESS ----------------- */}
            <article className="rounded-3xl border border-[#e4e4e7] bg-white p-7 sm:p-12 shadow-sm hover:border-[#09090b] transition-all grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="rounded-full bg-[#09090b] text-white px-3 py-1 font-mono font-bold text-[11px] uppercase tracking-wider">
                    01 · ASSESS
                  </span>
                  <h3 className="mt-3 text-[28px] sm:text-[36px] font-extrabold text-[#09090b] leading-tight">
                    Know what your candidates and employees can do.
                  </h3>
                  <p className="mt-2 text-[15px] font-medium text-[#71717a]">
                    Go beyond CVs and basic screening.
                  </p>
                </div>

                <p className="text-[15px] text-[#52525b] leading-relaxed">
                  GreatCampus enables organizations to conduct structured digital assessments that measure the capabilities that matter for a role.
                </p>

                {/* Assess Sub-tabs */}
                <div className="space-y-3">
                  <div className="flex border-b border-[#e4e4e7] gap-4 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setActiveAssessCategory("aptitude")}
                      className={`pb-2 border-b-2 transition-all cursor-pointer ${
                        activeAssessCategory === "aptitude"
                          ? "border-[#09090b] text-[#09090b]"
                          : "border-transparent text-[#71717a] hover:text-[#09090b]"
                      }`}
                    >
                      Aptitude
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveAssessCategory("technical")}
                      className={`pb-2 border-b-2 transition-all cursor-pointer ${
                        activeAssessCategory === "technical"
                          ? "border-[#09090b] text-[#09090b]"
                          : "border-transparent text-[#71717a] hover:text-[#09090b]"
                      }`}
                    >
                      Technical Skills
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveAssessCategory("behavioural")}
                      className={`pb-2 border-b-2 transition-all cursor-pointer ${
                        activeAssessCategory === "behavioural"
                          ? "border-[#09090b] text-[#09090b]"
                          : "border-transparent text-[#71717a] hover:text-[#09090b]"
                      }`}
                    >
                      Behavioural & Competency
                    </button>
                  </div>

                  {activeAssessCategory === "aptitude" && (
                    <ul className="grid grid-cols-2 gap-2 text-[13.5px] text-[#09090b] pt-1">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Numerical Ability
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Logical & Analytical Reasoning
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Verbal Ability
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Data Interpretation
                      </li>
                    </ul>
                  )}

                  {activeAssessCategory === "technical" && (
                    <ul className="grid grid-cols-2 gap-2 text-[13.5px] text-[#09090b] pt-1">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> IT & Engineering Sandbox
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Finance & Accounting
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Operations & Logistics
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Sales & Customer Service
                      </li>
                      <li className="flex items-center gap-2 col-span-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Role-specific customized capabilities
                      </li>
                    </ul>
                  )}

                  {activeAssessCategory === "behavioural" && (
                    <ul className="grid grid-cols-2 gap-2 text-[13.5px] text-[#09090b] pt-1">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Communication Skills
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Leadership & Initiative
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Teamwork & Collaboration
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Problem Solving Under Pressure
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Customer Orientation
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#09090b]" /> Behavioural Competencies
                      </li>
                    </ul>
                  )}
                </div>

                {/* AI Proctoring Highlight */}
                <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-4 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-[#09090b]">
                    <ShieldCheck className="w-4 h-4 text-[#09090b]" />
                    AI-POWERED PROCTORING
                  </div>
                  <p className="text-[#52525b] leading-relaxed">
                    Make online assessments trustworthy. Where required, AI-powered proctoring strengthens integrity through candidate monitoring and suspicious-event detection.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e4e4e7] flex items-center justify-between">
                  <p className="text-xs font-semibold text-[#09090b]">
                    The outcome: Measure capability. Improve confidence. Make better shortlists.
                  </p>
                  <Link
                    href="/assess"
                    className="inline-flex items-center gap-1 font-bold text-xs text-[#09090b] hover:underline cursor-pointer"
                  >
                    Explore AI Assessments <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Assessment Visual Sandbox */}
              <div className="lg:col-span-6 rounded-2xl border border-[#27272a] bg-[#09090b] text-white p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-[#27272a] pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse"></span>
                    <span className="font-bold">LIVE ASSESSMENT CANDIDATE VIEW</span>
                  </div>
                  <span className="font-mono text-[#a1a1aa]">Question 14 of 40</span>
                </div>

                <div className="rounded-xl border border-[#27272a] bg-[#121215] p-4 space-y-3">
                  <div className="flex justify-between text-xs text-[#a1a1aa]">
                    <span>Category: Analytical Problem Solving</span>
                    <span>Time remaining: 18:45</span>
                  </div>
                  <p className="text-[13.5px] font-semibold text-white leading-relaxed">
                    "If a B2B sales pipeline conversion rate drops from 18% to 12% following a pricing tier restructure, which secondary metric reveals whether the issue stems from lead quality or closing friction?"
                  </p>

                  <div className="space-y-2 text-xs pt-1">
                    <div className="p-2.5 rounded-lg border border-[#27272a] bg-[#18181b] flex items-center justify-between">
                      <span>A. Total inbound lead volume</span>
                      <span className="text-[#71717a]">○</span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-white bg-white text-[#09090b] font-bold flex items-center justify-between">
                      <span>B. Demo-to-Proposal stage drop-off velocity</span>
                      <span>● Selected</span>
                    </div>
                    <div className="p-2.5 rounded-lg border border-[#27272a] bg-[#18181b] flex items-center justify-between">
                      <span>C. Average invoice payment delay</span>
                      <span className="text-[#71717a]">○</span>
                    </div>
                  </div>
                </div>

                {/* Integrity & Proctoring HUD */}
                <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
                  <div className="p-2 rounded bg-[#18181b] border border-[#27272a]">
                    <span className="text-[#a1a1aa] block">Webcam Feed</span>
                    <span className="text-white font-bold">1 Face Detected</span>
                  </div>
                  <div className="p-2 rounded bg-[#18181b] border border-[#27272a]">
                    <span className="text-[#a1a1aa] block">Tab Focus</span>
                    <span className="text-white font-bold">0 Switches</span>
                  </div>
                  <div className="p-2 rounded bg-[#18181b] border border-[#27272a]">
                    <span className="text-[#a1a1aa] block">Integrity Index</span>
                    <span className="text-white font-bold">99.8% Clean</span>
                  </div>
                </div>
              </div>
            </article>

            {/* ----------------- PILLAR 02: INTERVIEW ----------------- */}
            <article className="rounded-3xl border border-[#e4e4e7] bg-white p-7 sm:p-12 shadow-sm hover:border-[#09090b] transition-all grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="rounded-full bg-[#09090b] text-white px-3 py-1 font-mono font-bold text-[11px] uppercase tracking-wider">
                    02 · INTERVIEW
                  </span>
                  <h3 className="mt-3 text-[28px] sm:text-[36px] font-extrabold text-[#09090b] leading-tight">
                    Interview more candidates. Spend human time where it matters.
                  </h3>
                  <p className="mt-2 text-[15px] font-medium text-[#71717a]">
                    Interview for the role — not just the resume.
                  </p>
                </div>

                <p className="text-[15px] text-[#52525b] leading-relaxed">
                  First-round interviews can consume enormous amounts of recruiter time — especially when hundreds or thousands of candidates apply. GreatCampus enables organizations to conduct AI-powered structured interviews at scale.
                </p>

                {/* AI Interviews Evaluate List */}
                <div>
                  <p className="text-xs font-bold text-[#09090b] uppercase tracking-wider mb-2">
                    AI Interviews can evaluate:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-[13px] text-[#09090b]">
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Communication</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Problem Solving</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Behavioural Competencies</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Role-specific Knowledge</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Situational Responses</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Customer Orientation</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Sales Capability</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Leadership Potential</span>
                  </div>
                </div>

                {/* Shift Box */}
                <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-4 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#71717a] font-bold block">FROM:</span>
                      <span className="font-medium text-[#09090b]">CV → Manual Screening → Manual First Interview</span>
                    </div>
                  </div>
                  <div className="border-t border-[#e4e4e7] pt-2">
                    <span className="text-[#09090b] font-extrabold block">TO:</span>
                    <span className="font-bold text-[#09090b]">Assessment → AI Interview → Evaluation → Shortlist</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#e4e4e7] flex items-center justify-between">
                  <p className="text-xs font-semibold text-[#09090b]">
                    The outcome: Reduce screening effort. Standardize evaluation. Scale without workload.
                  </p>
                  <Link
                    href="/interview"
                    className="inline-flex items-center gap-1 font-bold text-xs text-[#09090b] hover:underline cursor-pointer"
                  >
                    Explore AI Interviews <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Interview Scorecard Mockup */}
              <div className="lg:col-span-6 rounded-2xl border border-[#27272a] bg-[#09090b] text-white p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-[#27272a] pb-3 text-xs">
                  <div>
                    <span className="font-bold text-white block">AI INTERVIEW SCORECARD</span>
                    <span className="text-[#a1a1aa] text-[11px]">Role: Territory Sales Manager</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-white text-[#09090b] font-bold font-mono">
                    RECOMMENDED (91/100)
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span>Communication & Executive Presence</span>
                      <span className="font-mono">9.4 / 10</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[#27272a]">
                      <div className="h-full rounded-full bg-white" style={{ width: "94%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span>Situational Objection Handling</span>
                      <span className="font-mono">8.8 / 10</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[#27272a]">
                      <div className="h-full rounded-full bg-white" style={{ width: "88%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span>Role-specific Product Reasoning</span>
                      <span className="font-mono">9.0 / 10</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[#27272a]">
                      <div className="h-full rounded-full bg-white" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>

                {/* Evidence snippet */}
                <div className="rounded-xl border border-[#27272a] bg-[#121215] p-3 text-[11.5px] space-y-1">
                  <span className="text-[#a1a1aa] font-bold block text-[10px] uppercase">
                    Key AI Observation & Timestamp 06:14
                  </span>
                  <p className="text-[#e4e4e7] italic">
                    "Candidate framed solution around client's OPEX savings without lowering prices. Demonstrated strong active listening during customer pushback."
                  </p>
                </div>
              </div>
            </article>

            {/* ----------------- PILLAR 03: DEVELOP ----------------- */}
            <article className="rounded-3xl border border-[#e4e4e7] bg-white p-7 sm:p-12 shadow-sm hover:border-[#09090b] transition-all grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="rounded-full bg-[#09090b] text-white px-3 py-1 font-mono font-bold text-[11px] uppercase tracking-wider">
                    03 · DEVELOP
                  </span>
                  <h3 className="mt-3 text-[28px] sm:text-[36px] font-extrabold text-[#09090b] leading-tight">
                    Don't stop at hiring. Build capability continuously.
                  </h3>
                  <p className="mt-2 text-[15px] font-medium text-[#71717a]">
                    Short learning. Continuous reinforcement. Measurable development.
                  </p>
                </div>

                <p className="text-[15px] text-[#52525b] leading-relaxed">
                  Identifying a skill gap is only useful if you can do something about it. GreatCampus transforms identified gaps into opportunities for continuous development through short, focused microlearning.
                </p>

                {/* Microlearning Categories */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-[#09090b] uppercase tracking-wider">
                    Microlearning Modules By Function:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    {[
                      { id: "sales", label: "Sales" },
                      { id: "service", label: "Customer Service" },
                      { id: "leadership", label: "Leadership" },
                      { id: "ops", label: "Operations" },
                      { id: "onboarding", label: "Onboarding & Compliance" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveMicroTab(tab.id as any)}
                        className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          activeMicroTab === tab.id
                            ? "bg-[#09090b] text-white border-[#09090b]"
                            : "bg-[#fafafa] text-[#52525b] border-[#e4e4e7] hover:border-[#09090b]"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="rounded-xl border border-[#e4e4e7] bg-[#fafafa] p-4 text-xs">
                    {activeMicroTab === "sales" && (
                      <ul className="grid grid-cols-2 gap-2 text-[#09090b]">
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Opening conversations</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Objection Handling</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Negotiation tactics</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Cross-selling techniques</li>
                        <li className="flex items-center gap-2 col-span-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> High-impact closing</li>
                      </ul>
                    )}

                    {activeMicroTab === "service" && (
                      <ul className="grid grid-cols-2 gap-2 text-[#09090b]">
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Active Listening</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Empathy in Support</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Complaint Resolution</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> De-escalating Difficult Customers</li>
                      </ul>
                    )}

                    {activeMicroTab === "leadership" && (
                      <ul className="grid grid-cols-2 gap-2 text-[#09090b]">
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Constructive Feedback</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Delegation Frameworks</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Team Motivation</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Conflict Management</li>
                      </ul>
                    )}

                    {activeMicroTab === "ops" && (
                      <ul className="grid grid-cols-2 gap-2 text-[#09090b]">
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> SOP Reinforcement</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Quality Standards</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Workplace Safety</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Error Reduction Workflows</li>
                      </ul>
                    )}

                    {activeMicroTab === "onboarding" && (
                      <ul className="grid grid-cols-2 gap-2 text-[#09090b]">
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Company Culture</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Product Knowledge</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Internal Processes</li>
                        <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Role Expectations</li>
                        <li className="flex items-center gap-2 col-span-2"><Check className="w-3.5 h-3.5 text-[#09090b]" /> Policy Reinforcement</li>
                      </ul>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#e4e4e7] flex items-center justify-between">
                  <p className="text-xs font-semibold text-[#09090b]">
                    The outcome: Identify gaps → Develop capability → Reinforce learning → Reassess progress
                  </p>
                  <Link
                    href="/develop"
                    className="inline-flex items-center gap-1 font-bold text-xs text-[#09090b] hover:underline cursor-pointer"
                  >
                    Explore Microlearning <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Microlearning Mockup */}
              <div className="lg:col-span-6 rounded-2xl border border-[#27272a] bg-[#09090b] text-white p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-[#27272a] pb-3 text-xs">
                  <span className="font-bold">MICROLEARNING DAILY FEED</span>
                  <span className="font-mono text-[#a1a1aa]">3 min remaining</span>
                </div>

                <div className="rounded-xl border border-[#27272a] bg-[#121215] p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-white text-[#09090b] flex items-center justify-center font-bold text-xs">
                      1
                    </span>
                    <span className="font-bold text-sm text-white">
                      The "Feel-Felt-Found" Objection Framework
                    </span>
                  </div>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">
                    When a client pushes back on onboarding time, do not argue with the timeline. Acknowledge their urgency, share how a similar enterprise had the same concern, and demonstrate the 48-hour self-service data import.
                  </p>
                  <div className="rounded-lg border border-[#27272a] bg-[#18181b] p-3 text-xs font-mono text-[#e4e4e7]">
                    Quiz: Which phrase builds highest trust?
                    <div className="mt-2 space-y-1 text-[11px] font-sans">
                      <div className="p-1.5 rounded bg-white text-[#09090b] font-bold">
                        ✓ "I completely understand why 3 weeks feels long; let me show how..."
                      </div>
                      <div className="p-1.5 rounded bg-white/5 opacity-50">
                        ✗ "Actually, our onboarding is faster than all competitors."
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#a1a1aa] pt-1">
                  <span>Streak: 12 days continuous</span>
                  <span className="text-white font-bold">Next reassessment in 14 days</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* -------------------- BUILT FOR THE COMPLETE TALENT LIFECYCLE -------------------- */}
      <section id="lifecycle" className="bg-[#fafafa] py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#09090b] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-3">
              Audience Solutions
            </span>
            <h2 className="text-[32px] sm:text-[46px] font-extrabold text-[#09090b] tracking-tight">
              Built for the Complete Talent Lifecycle
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              Tailored capabilities whether you hire thousands, run an agency, lead a campus, or build internal talent.
            </p>
          </div>

          {/* Lifecycle Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: "recruitment", label: "For Recruitment & Talent Acquisition" },
              { id: "staffing", label: "For Recruitment & Staffing Agencies" },
              { id: "universities", label: "For Universities & Higher Education" },
              { id: "ld", label: "For Learning & Development" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveLifecycleTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-[13px] font-bold border transition-all cursor-pointer ${
                  activeLifecycleTab === tab.id
                    ? "bg-[#09090b] text-white border-[#09090b] shadow-sm"
                    : "bg-white text-[#52525b] border-[#e4e4e7] hover:border-[#09090b]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content 1: Recruitment */}
          {activeLifecycleTab === "recruitment" && (
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-[#71717a] uppercase">
                  Talent Acquisition Teams
                </span>
                <h3 className="text-[26px] sm:text-[34px] font-extrabold text-[#09090b] leading-tight">
                  Assess more candidates. Interview smarter.
                </h3>
                <p className="text-[15px] text-[#52525b] leading-relaxed">
                  Handle high-volume recruitment without proportionately increasing manual screening and interview workload.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-[13.5px] text-[#09090b]">
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Graduate Recruitment</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> High-Volume Hiring</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Role-Based Assessments</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> AI First-Round Interviews</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Candidate Shortlisting</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Communication Assessment</span>
                </div>
              </div>
              <div className="lg:col-span-5 rounded-2xl border border-[#27272a] bg-[#09090b] text-white p-6 space-y-4">
                <p className="text-xs font-mono text-[#a1a1aa] uppercase">Enterprise Scale Impact</p>
                <p className="text-[24px] font-extrabold text-white">
                  3,000 applicants screened in 48 hours
                </p>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Zero manual recruiter phone tag. Your team receives a clean, ranked shortlist with full audio verification.
                </p>
                <button
                  type="button"
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full text-center py-2.5 rounded-lg bg-white text-[#09090b] font-bold text-xs hover:bg-[#e4e4e7] transition-colors cursor-pointer"
                >
                  Book Recruiter Demo
                </button>
              </div>
            </div>
          )}

          {/* Tab Content 2: Staffing Agencies */}
          {activeLifecycleTab === "staffing" && (
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-[#71717a] uppercase">
                  Staffing & Executive Search
                </span>
                <h3 className="text-[26px] sm:text-[34px] font-extrabold text-[#09090b] leading-tight">
                  Don't just send CVs. Send assessed and interviewed candidates.
                </h3>
                <p className="text-[15px] text-[#52525b] leading-relaxed">
                  Create a stronger recruitment proposition for your corporate clients with verified evidence of candidate capabilities.
                </p>
                <div className="p-4 rounded-xl bg-[#fafafa] border border-[#e4e4e7] font-mono text-xs text-[#09090b] space-y-1">
                  <span className="text-[#71717a] font-bold block">THE AGENCY FLOW:</span>
                  <p className="font-bold">Source → Assess → AI Interview → Score → Shortlist → Client</p>
                </div>
                <p className="text-xs text-[#52525b]">
                  GreatCampus helps recruitment partners create a more structured, evidence-based candidate evaluation process that wins client retention.
                </p>
              </div>
              <div className="lg:col-span-5 rounded-2xl border border-[#27272a] bg-[#09090b] text-white p-6 space-y-4">
                <p className="text-xs font-mono text-[#a1a1aa] uppercase">Client Delivery Deck</p>
                <p className="text-[24px] font-extrabold text-white">
                  Evidence-backed Profiles
                </p>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Send clients interactive scorecards with audio snippets instead of raw PDFs. Faster client feedback and shorter placement cycles.
                </p>
                <button
                  type="button"
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full text-center py-2.5 rounded-lg bg-white text-[#09090b] font-bold text-xs hover:bg-[#e4e4e7] transition-colors cursor-pointer"
                >
                  Partner With GreatCampus
                </button>
              </div>
            </div>
          )}

          {/* Tab Content 3: Universities & Higher Education */}
          {activeLifecycleTab === "universities" && (
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-[#71717a] uppercase">
                  Universities & Campuses
                </span>
                <h3 className="text-[26px] sm:text-[34px] font-extrabold text-[#09090b] leading-tight">
                  Assess. Prepare. Develop.
                </h3>
                <p className="text-[15px] text-[#52525b] leading-relaxed">
                  Help students become more employable while strengthening institutional assessment capabilities.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-[13.5px] text-[#09090b]">
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Online Assessments</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Secure Examinations</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> AI Proctoring</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> AI Mock Interviews</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Employability Assessment</span>
                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#09090b]" /> Student Readiness</span>
                </div>
              </div>
              <div className="lg:col-span-5 rounded-2xl border border-[#27272a] bg-[#09090b] text-white p-6 space-y-4">
                <p className="text-xs font-mono text-[#a1a1aa] uppercase">Campus Placement Impact</p>
                <p className="text-[24px] font-extrabold text-white">
                  92% Student Interview Confidence
                </p>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Students practice realistic corporate interviews and take microlearning modules on aptitude and verbal communication.
                </p>
                <button
                  type="button"
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full text-center py-2.5 rounded-lg bg-white text-[#09090b] font-bold text-xs hover:bg-[#e4e4e7] transition-colors cursor-pointer"
                >
                  Explore University Program
                </button>
              </div>
            </div>
          )}

          {/* Tab Content 4: L&D */}
          {activeLifecycleTab === "ld" && (
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold text-[#71717a] uppercase">
                  Learning & Development
                </span>
                <h3 className="text-[26px] sm:text-[34px] font-extrabold text-[#09090b] leading-tight">
                  Turn training into continuous capability development.
                </h3>
                <p className="text-[15px] text-[#52525b] leading-relaxed">
                  Identify skill gaps, deliver focused learning, and reinforce critical capabilities through measurable reassessment.
                </p>
                <div className="p-4 rounded-xl bg-[#fafafa] border border-[#e4e4e7] font-mono text-xs text-[#09090b] space-y-1">
                  <span className="text-[#71717a] font-bold block">CONTINUOUS L&D CYCLE:</span>
                  <p className="font-bold">Assess → Identify Gaps → Microlearn → Reassess</p>
                </div>
                <p className="text-xs text-[#52525b]">
                  Build a workforce that keeps learning with bite-sized daily modules tied directly to role metrics.
                </p>
              </div>
              <div className="lg:col-span-5 rounded-2xl border border-[#27272a] bg-[#09090b] text-white p-6 space-y-4">
                <p className="text-xs font-mono text-[#a1a1aa] uppercase">Measurable L&D ROI</p>
                <p className="text-[24px] font-extrabold text-white">
                  3.4x Higher Knowledge Retention
                </p>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Replace day-long seminars with 5-minute daily microlearning scenarios that employees actually complete.
                </p>
                <button
                  type="button"
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full text-center py-2.5 rounded-lg bg-white text-[#09090b] font-bold text-xs hover:bg-[#e4e4e7] transition-colors cursor-pointer"
                >
                  Explore L&D Solutions
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* -------------------- THE GREATCAMPUS DIFFERENCE -------------------- */}
      <section id="difference" className="bg-white py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#09090b] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-3">
              Market Comparison
            </span>
            <h2 className="text-[32px] sm:text-[46px] font-extrabold text-[#09090b] tracking-tight">
              The GreatCampus Difference
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              Most platforms solve one fragmented part of the talent problem. GreatCampus brings the complete journey together.
            </p>
          </div>

          {/* Core Question Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-[#71717a]">TRADITIONAL ASSESSMENT TOOLS</span>
              <p className="text-[18px] font-extrabold text-[#09090b]">
                "Can this person perform?"
              </p>
              <p className="text-xs text-[#52525b] leading-relaxed">
                Tests basic cognitive knowledge or code syntax, but ignores conversational fit, empathy, and post-hire enablement.
              </p>
            </div>

            {/* Box 2 */}
            <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-[#71717a]">STANDALONE INTERVIEW TOOLS</span>
              <p className="text-[18px] font-extrabold text-[#09090b]">
                "Is this person the right fit?"
              </p>
              <p className="text-xs text-[#52525b] leading-relaxed">
                Conducts one-way video or audio screens, but disconnected from candidate testing data and internal training.
              </p>
            </div>

            {/* Box 3 */}
            <div className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-[#71717a]">ISOLATED LEARNING PLATFORMS</span>
              <p className="text-[18px] font-extrabold text-[#09090b]">
                "How can we develop this person?"
              </p>
              <p className="text-xs text-[#52525b] leading-relaxed">
                Hosts catalog video courses, but doesn't know the employee's pre-hire baseline or specific interview weaknesses.
              </p>
            </div>

            {/* Box 4: GreatCampus */}
            <div className="rounded-2xl border border-[#27272a] bg-[#09090b] text-white p-6 space-y-3 shadow-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded">
                GREATCAMPUS
              </div>
              <p className="text-[18px] font-extrabold text-white">
                GreatCampus asks all three.
              </p>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Can they perform? Are they the right fit? How can we continuously make them better?
              </p>
            </div>
          </div>

          {/* Before vs After Hiring Framework */}
          <div className="mt-14 rounded-3xl border border-[#e4e4e7] bg-white p-8 sm:p-12">
            <h3 className="text-[24px] sm:text-[30px] font-extrabold text-[#09090b] text-center mb-8">
              From Hiring to Development: Connecting the Dots
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before Hiring Track */}
              <div className="p-6 rounded-2xl border border-[#e4e4e7] bg-[#fafafa] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#09090b] text-white text-xs font-bold font-mono">
                    BEFORE HIRING
                  </span>
                  <span className="text-xs font-semibold text-[#71717a]">Selection Phase</span>
                </div>
                <p className="text-[18px] font-bold text-[#09090b]">
                  Assess → Interview → Select
                </p>
                <p className="text-xs text-[#52525b] leading-relaxed">
                  Identify true capability, screen for cultural and role fit via structured AI interview, and make unbiased hiring decisions based on aggregated scores.
                </p>
              </div>

              {/* After Hiring Track */}
              <div className="p-6 rounded-2xl border border-[#09090b] bg-white space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full border border-[#09090b] text-[#09090b] text-xs font-bold font-mono">
                    AFTER HIRING
                  </span>
                  <span className="text-xs font-semibold text-[#71717a]">Capability Loop</span>
                </div>
                <p className="text-[18px] font-bold text-[#09090b]">
                  Assess → Develop → Reassess
                </p>
                <p className="text-xs text-[#52525b] leading-relaxed">
                  Convert candidate weakness into focused 5-minute microlearning modules. Measure skill development after 30-90 days with continuous reassessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- WHY GREATCAMPUS? -------------------- */}
      <section className="bg-[#fafafa] py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#09090b] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-3">
              Value Proposition
            </span>
            <h2 className="text-[32px] sm:text-[46px] font-extrabold text-[#09090b] tracking-tight">
              Why GreatCampus?
            </h2>
            <p className="mt-3 text-[17px] text-[#52525b]">
              Because talent decisions shouldn't stop at assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                num: "01",
                title: "ASSESS AT SCALE",
                desc: "Evaluate large candidate and employee populations using structured digital assessments.",
              },
              {
                num: "02",
                title: "INTERVIEW WITH AI",
                desc: "Automate structured first-round interviews and evaluate candidates consistently.",
              },
              {
                num: "03",
                title: "DEVELOP CONTINUOUSLY",
                desc: "Convert capability gaps into focused microlearning interventions.",
              },
              {
                num: "04",
                title: "CONNECT THE DATA",
                desc: "Move seamlessly from assessment results to interview evaluation to development needs.",
              },
              {
                num: "05",
                title: "BUILD A TALENT LOOP",
                desc: "Assess. Develop. Reassess. Improve. A continuous engine for institutional readiness.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-2xl border border-[#e4e4e7] bg-white p-6 flex flex-col justify-between hover:border-[#09090b] transition-all"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#71717a] block mb-3">
                    {item.num}
                  </span>
                  <h3 className="font-extrabold text-[15px] text-[#09090b] tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#52525b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 6 Value Pillars for HR */}
          <div className="mt-14 pt-12 border-t border-[#e4e4e7]">
            <h3 className="text-center text-[22px] sm:text-[28px] font-extrabold text-[#09090b] mb-10">
              Simple for HR. Powerful for Organizations.
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { title: "Reduce manual effort", detail: "Let technology handle repetitive assessment and first-round evaluation." },
                { title: "Improve consistency", detail: "Use structured assessments and interviews across all candidates." },
                { title: "Scale efficiently", detail: "Evaluate larger populations without proportionately increasing workload." },
                { title: "Identify capability gaps", detail: "Understand where candidates and employees need development." },
                { title: "Develop continuously", detail: "Deliver short, focused learning interventions that stick." },
                { title: "Measure progress", detail: "Reassess capabilities and track verified skill improvement." },
              ].map((pill, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-[#e4e4e7] text-left">
                  <div className="h-2 w-2 rounded-full bg-[#09090b] mb-3"></div>
                  <h4 className="font-bold text-[13.5px] text-[#09090b] leading-snug">
                    {pill.title}
                  </h4>
                  <p className="text-[11.5px] text-[#71717a] mt-2 leading-relaxed">
                    {pill.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- INTERACTIVE CHALLENGE SELECTOR -------------------- */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#09090b] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-3">
              Interactive Consultation
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#09090b] tracking-tight">
              Ready to build a smarter talent journey?
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              Start with one use case. Tell us your biggest challenge:
            </p>
          </div>

          {/* Challenge Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: "assess", label: "Need to assess candidates?", sub: "Let's build your assessment" },
              { id: "interview", label: "Need to interview at scale?", sub: "Let's explore AI Interviews" },
              { id: "develop", label: "Need to develop workforce?", sub: "Let's build microlearning" },
              { id: "all", label: "Need all three?", sub: "Let's create complete journey" },
            ].map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedChallenge(c.id as any)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedChallenge === c.id
                    ? "bg-[#09090b] text-white border-[#09090b] shadow-md"
                    : "bg-[#fafafa] text-[#09090b] border-[#e4e4e7] hover:border-[#09090b]"
                }`}
              >
                <span className="font-bold text-[13.5px] block leading-tight">
                  {c.label}
                </span>
                <span className={`text-[11.5px] mt-1.5 block font-medium ${
                  selectedChallenge === c.id ? "text-[#a1a1aa]" : "text-[#71717a]"
                }`}>
                  {c.sub} →
                </span>
              </button>
            ))}
          </div>

          {/* Dynamic Solution Card */}
          <div className="mt-8 rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#a1a1aa]">
                Custom Implementation Plan
              </span>
              <h3 className="text-[22px] sm:text-[26px] font-extrabold text-white">
                {selectedChallenge === "assess" && "We'll configure your custom aptitude & domain assessment."}
                {selectedChallenge === "interview" && "We'll set up structured AI voice & video interviews for your roles."}
                {selectedChallenge === "develop" && "We'll map your capability gaps into high-retention microlearning."}
                {selectedChallenge === "all" && "We'll deploy the complete Assess → Interview → Develop → Reassess talent engine."}
              </h3>
              <p className="text-xs text-[#a1a1aa]">
                Setup takes under 24 hours. Includes dedicated onboarding with senior talent architects.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-white px-7 text-[14px] font-bold text-[#09090b] hover:bg-[#e4e4e7] transition-colors cursor-pointer"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* -------------------- DIRECT CONTACT & LEADERSHIP SECTION -------------------- */}
      <section id="contact" className="bg-[#fafafa] py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#09090b] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-3">
              Direct Contact
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#09090b] tracking-tight">
              Connect Directly with GreatCampus Leadership
            </h2>
            <p className="mt-2 text-[16px] text-[#52525b]">
              Whether you are hiring 10 people or 10,000, reach out directly to discuss your recruitment or capability development blueprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Leadership Contact Card */}
            <div className="md:col-span-6 rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-mono text-[#a1a1aa] mb-4">
                  HEAD OF TALENT SOLUTIONS
                </div>
                <h3 className="text-[28px] font-extrabold text-white">
                  Maninder Singh
                </h3>
                <p className="text-sm text-[#a1a1aa] mt-1">
                  Strategic Partnerships & Institutional Growth · GreatCampus
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="tel:+919811352666"
                    className="flex items-center gap-3.5 p-3 rounded-xl border border-[#27272a] bg-[#121215] hover:border-white transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-white text-[#09090b] flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#a1a1aa] block uppercase font-mono">Direct / WhatsApp</span>
                      <span className="font-bold text-white text-[15px] group-hover:underline">
                        +91-9811352666
                      </span>
                    </div>
                  </a>

                  <a
                    href="tel:+919073351545"
                    className="flex items-center gap-3.5 p-3 rounded-xl border border-[#27272a] bg-[#121215] hover:border-white transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-white text-[#09090b] flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#a1a1aa] block uppercase font-mono">Partnerships / Support</span>
                      <span className="font-bold text-white text-[15px] group-hover:underline">
                        +91-9073351545
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@greatcampus.in"
                    className="flex items-center gap-3.5 p-3 rounded-xl border border-[#27272a] bg-[#121215] hover:border-white transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-white text-[#09090b] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#a1a1aa] block uppercase font-mono">Corporate Email</span>
                      <span className="font-bold text-white text-[15px] group-hover:underline">
                        contact@greatcampus.in
                      </span>
                    </div>
                  </a>

                  <a
                    href="mailto:mvasir@gmail.com"
                    className="flex items-center gap-3.5 p-3 rounded-xl border border-[#27272a] bg-[#121215] hover:border-white transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-white text-[#09090b] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#a1a1aa] block uppercase font-mono">Direct E-mail</span>
                      <span className="font-bold text-white text-[15px] group-hover:underline">
                        mvasir@gmail.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/manindersinghvasir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-[#27272a] bg-[#121215] hover:border-white transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="h-10 w-10 rounded-lg bg-white text-[#09090b] flex items-center justify-center">
                        <LinkedinIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] text-[#a1a1aa] block uppercase font-mono">Professional Network</span>
                        <span className="font-bold text-white text-[15px]">
                          Connect on LinkedIn
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex h-8 items-center justify-center rounded-lg bg-white/10 px-3 text-xs font-semibold text-white group-hover:bg-white group-hover:text-[#09090b] transition-all">
                      View Profile <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#27272a] text-xs text-[#a1a1aa]">
                Available for executive briefings, institutional partnerships & RFP inquiries.
              </div>
            </div>

            {/* Executive Walkthrough Hub */}
            <div className="md:col-span-6 rounded-3xl border border-[#e4e4e7] bg-white p-8 sm:p-12 flex flex-col justify-between shadow-sm">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#fafafa] border border-[#e4e4e7] px-3.5 py-1 text-[11px] font-mono text-[#09090b] font-bold mb-4">
                  FAST-TRACK CONSULTATION
                </span>
                <h3 className="text-[28px] font-extrabold text-[#09090b] leading-tight">
                  Schedule Your Executive Walkthrough
                </h3>
                <p className="text-sm text-[#52525b] mt-2 mb-6 leading-relaxed">
                  Tailored demonstration showing how GreatCampus integrates digital testing, AI voice interviews, and microlearning for your exact hiring roles.
                </p>

                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-2.5 text-xs text-[#09090b]">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" />
                    <span>Setup and pilot deployment within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#09090b]">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" />
                    <span>Live testing with your job descriptions and competency criteria</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#09090b]">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" />
                    <span>Zero seat-tax pricing model (unlimited recruiters included)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#09090b]">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" />
                    <span>Instant welcome email and leadership turnaround in under 4 hours</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e4e4e7] flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full sm:w-auto flex-1 h-12 rounded-xl bg-[#09090b] text-white font-bold text-sm hover:bg-[#27272a] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Book a Demo Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto h-12 px-6 rounded-xl border border-[#27272a] bg-white text-[#09090b] font-bold text-sm hover:bg-[#fafafa] transition-colors flex items-center justify-center"
                >
                  Full Contact Page →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- FAQ ACCORDION -------------------- */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#09090b] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-3">
              Frequently Asked Questions
            </span>
            <h2 className="text-[30px] sm:text-[40px] font-extrabold text-[#09090b]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Why is an integrated talent journey better than using 3 separate tools?",
                a: "When you use separate tools for testing, video interviews, and training, critical candidate insights are lost at every handoff. GreatCampus carries the exact test scores and interview weaknesses directly into post-hire microlearning, ensuring zero wasted recruiter time and continuous employee skill growth."
              },
              {
                q: "How does GreatCampus AI conduct first-round interviews?",
                a: "GreatCampus AI reaches out to candidates across voice call, WhatsApp, or web link. It dynamically asks structured questions tailored to the job, listens in real time, asks contextual follow-up questions to test depth, and delivers a ranked ATS scorecard in minutes."
              },
              {
                q: "Can we use GreatCampus only for assessments or only for interviews?",
                a: "Yes. While the strongest ROI comes from the unified Assess → Interview → Develop loop, each pillar (01 Assess, 02 Interview, 03 Develop) can be deployed standalone to solve your immediate talent bottleneck."
              },
              {
                q: "How does AI proctoring ensure assessment integrity?",
                a: "Our AI proctoring engine monitors webcam feed for unauthorized multiple faces, tracks window/tab focus switches, detects copy-pasting or external AI prompt injections, and generates a tamper-evident audit report."
              },
              {
                q: "How does microlearning work after hiring?",
                a: "Instead of overwhelming new hires with 40-hour video courses, GreatCampus pushes 3 to 5-minute interactive scenario challenges based on the specific skill gaps identified during their pre-hire assessment. After 30/60/90 days, reassessments measure actual skill retention."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#e4e4e7] bg-[#fafafa] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-[15.5px] text-[#09090b] hover:text-[#52525b] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#71717a] transition-transform duration-200 ${
                      openFaq === index ? "rotate-180 text-[#09090b]" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-[14px] text-[#52525b] leading-relaxed border-t border-[#e4e4e7] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* -------------------- BOOK A DEMO MODAL -------------------- */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-7 shadow-2xl space-y-5">
            <button
              type="button"
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-5 right-5 text-[#a1a1aa] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="mb-3">
                <img
                  src="/greatcampus-logo-white.png"
                  alt="GreatCampus"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#a1a1aa] uppercase">
                EXECUTIVE DEMO & BRIEFING
              </span>
              <h3 className="text-[22px] font-extrabold text-white mt-1">
                Schedule an Executive Walkthrough
              </h3>
              <p className="text-xs text-[#a1a1aa] mt-1">
                Direct consultation with <strong>Maninder Singh</strong> (+91-9811352666 / +91-9073351545 · contact@greatcampus.in).
              </p>
            </div>

            {demoError && (
              <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{demoError}</span>
              </div>
            )}

            {demoFormSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#18181b] border border-[#27272a] text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-white mx-auto" />
                <h4 className="font-bold text-lg text-white">Walkthrough Request Received!</h4>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  Thank you, <strong>{demoData.name}</strong>! We have dispatched a confirmation email to <strong>{demoData.email}</strong> and notified our leadership team (Maninder Singh & Aftab).
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDemoFormSubmitted(false);
                    setDemoModalOpen(false);
                    setDemoData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      objective: "Complete Integrated Journey (Assess → Interview → Develop)",
                    });
                  }}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-white text-[#09090b] font-bold text-xs hover:bg-[#e4e4e7] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="font-bold text-white block mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={demoData.name}
                    onChange={(e) => setDemoData({ ...demoData, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full h-10 px-3 rounded-xl border border-[#27272a] bg-[#121215] text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-white block mb-1">Corporate Email *</label>
                    <input
                      required
                      type="email"
                      value={demoData.email}
                      onChange={(e) => setDemoData({ ...demoData, email: e.target.value })}
                      placeholder="priya@company.com"
                      className="w-full h-10 px-3 rounded-xl border border-[#27272a] bg-[#121215] text-white focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-white block mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={demoData.phone}
                      onChange={(e) => setDemoData({ ...demoData, phone: e.target.value })}
                      placeholder="+91 90733 51545"
                      className="w-full h-10 px-3 rounded-xl border border-[#27272a] bg-[#121215] text-white focus:outline-none focus:border-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-bold text-white block mb-1">Area of Interest</label>
                  <select
                    value={demoData.objective}
                    onChange={(e) => setDemoData({ ...demoData, objective: e.target.value })}
                    className="w-full h-10 px-3 rounded-xl border border-[#27272a] bg-[#121215] text-white focus:outline-none focus:border-white"
                  >
                    <option>Complete Journey: Assess → Interview → Develop</option>
                    <option>Pillar 01: Aptitude & Skill Digital Assessments</option>
                    <option>Pillar 02: AI Structured Voice/Video Interviews</option>
                    <option>Pillar 03: Targeted Microlearning & Reassessment</option>
                    <option>Staffing Agency Candidate Screening Proposition</option>
                    <option>University Campus Employability Suite</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-white block mb-1">Company / College Name</label>
                  <input
                    type="text"
                    value={demoData.company}
                    onChange={(e) => setDemoData({ ...demoData, company: e.target.value })}
                    placeholder="e.g. Nexus Enterprise / University"
                    className="w-full h-10 px-3 rounded-xl border border-[#27272a] bg-[#121215] text-white focus:outline-none focus:border-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={demoSubmitting}
                  className="w-full h-11 rounded-xl bg-white text-[#09090b] font-bold text-sm hover:bg-[#e4e4e7] transition-all cursor-pointer mt-2 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {demoSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#09090b]" />
                      <span>Sending Request via SMTP...</span>
                    </>
                  ) : (
                    <span>Confirm Walkthrough Request</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
