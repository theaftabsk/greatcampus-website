import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  ShieldCheck,
  ArrowRight,
  Code2,
  BarChart3,
  Users,
  BrainCircuit,
  FileCheck,
  Laptop,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "01 - ASSESS | GreatCampus Digital Assessments & AI Proctoring",
  description:
    "Know what your candidates and employees can do. Measure Aptitude, Technical skills, and Behavioural competencies with 30,000+ validated tests and AI-powered proctoring.",
};

export default function AssessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090b]">
      <Header />

      {/* -------------------- HERO -------------------- */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#e4e4e7] bg-grid-pattern">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#09090b] px-4 py-1.5 text-[11px] font-bold tracking-wide text-white font-mono shadow-sm">
            PILLAR 01 · OBJECTIVE EVALUATION
          </div>

          <h1 className="mt-8 max-w-4xl text-[38px] font-extrabold text-[#09090b] leading-[1.1] tracking-tight sm:text-[58px] lg:text-[68px]">
            <span>Know what your candidates and employees can do.</span>{" "}
            <span className="accent-shimmer">Go beyond CVs.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-[17px] text-[#52525b] leading-relaxed sm:text-[19px]">
            GreatCampus enables organizations to conduct structured digital assessments that measure the capabilities that truly matter for a role.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#09090b] px-7 text-[14px] font-bold text-white shadow-lg hover:bg-[#27272a] transition-all border border-[#09090b]"
            >
              Configure an Assessment
            </Link>
            <Link
              href="/interview"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-[#27272a] bg-white px-7 text-[14px] font-bold text-[#09090b] hover:bg-[#f4f4f5] transition-colors"
            >
              Explore Next Step: 02 Interview →
            </Link>
          </div>

          {/* Key Stat Badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl border-y border-[#e4e4e7] py-6 text-left">
            <div>
              <p className="text-2xl font-extrabold text-[#09090b]">30,000+</p>
              <p className="text-xs text-[#71717a] font-mono mt-0.5">Validated Questions</p>
            </div>
            <div className="border-l border-[#e4e4e7] pl-4">
              <p className="text-2xl font-extrabold text-[#09090b]">500+</p>
              <p className="text-xs text-[#71717a] font-mono mt-0.5">Role Competency Profiles</p>
            </div>
            <div className="border-l-0 md:border-l border-[#e4e4e7] md:pl-4">
              <p className="text-2xl font-extrabold text-[#09090b]">15+ Languages</p>
              <p className="text-xs text-[#71717a] font-mono mt-0.5">Cloud Code Sandbox</p>
            </div>
            <div className="border-l border-[#e4e4e7] pl-4">
              <p className="text-2xl font-extrabold text-[#09090b]">99.8%</p>
              <p className="text-xs text-[#71717a] font-mono mt-0.5">Proctoring Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- THREE ASSESSMENT CATEGORIES -------------------- */}
      <section className="bg-[#fafafa] py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
              Comprehensive Coverage
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-extrabold text-[#09090b] tracking-tight mt-2">
              Assess for Every Dimension of Performance
            </h2>
            <p className="mt-3 text-[16px] text-[#52525b]">
              Combine cognitive potential, hands-on domain mastery, and behavioural tendencies into one seamless testing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1: Aptitude */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-8 shadow-sm hover:border-[#09090b] transition-all flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#09090b] text-white flex items-center justify-center font-bold text-sm mb-5">
                  01
                </div>
                <h3 className="text-[22px] font-bold text-[#09090b]">Aptitude</h3>
                <p className="text-xs text-[#71717a] mt-1 mb-5">
                  Measure cognitive horsepower, logic, and core learning agility.
                </p>
                <ul className="space-y-2.5 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Numerical Ability & Quantitative Reasoning
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Logical & Analytical Reasoning
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Verbal Ability & Reading Comprehension
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Data Interpretation & Graphical Analysis
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e4e4e7] text-xs font-mono text-[#71717a]">
                Predicts: On-the-job problem-solving capacity
              </div>
            </div>

            {/* Category 2: Technical Skills */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-8 shadow-sm hover:border-[#09090b] transition-all flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#09090b] text-white flex items-center justify-center font-bold text-sm mb-5">
                  02
                </div>
                <h3 className="text-[22px] font-bold text-[#09090b]">Technical Skills</h3>
                <p className="text-xs text-[#71717a] mt-1 mb-5">
                  Real-world simulated tasks, not obsolete textbook definitions.
                </p>
                <ul className="space-y-2.5 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> IT & Software Engineering Sandbox (Python, JS, Java, C++)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Finance, Accounting & Modelling
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Operations & SOP Execution
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Sales Pitch & Pipeline Methodology
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Customer Service & Ticketing Simulations
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Role-specific customized capability matrices
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e4e4e7] text-xs font-mono text-[#71717a]">
                Predicts: Day-1 practical job readiness
              </div>
            </div>

            {/* Category 3: Behavioural */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-8 shadow-sm hover:border-[#09090b] transition-all flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#09090b] text-white flex items-center justify-center font-bold text-sm mb-5">
                  03
                </div>
                <h3 className="text-[22px] font-bold text-[#09090b]">Behavioural & Competency</h3>
                <p className="text-xs text-[#71717a] mt-1 mb-5">
                  Understand how candidates collaborate, react to stress, and lead.
                </p>
                <ul className="space-y-2.5 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Clear & Structured Communication
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Leadership & Autonomous Initiative
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Teamwork & Cross-functional Alignment
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Crisis Problem Solving Under Pressure
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Customer Orientation & Empathy
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#09090b]" /> Behavioural Competencies
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#e4e4e7] text-xs font-mono text-[#71717a]">
                Predicts: Culture fit, teamwork & retention
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- AI-POWERED PROCTORING ENGINE -------------------- */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="rounded-full bg-[#09090b] text-white px-3 py-1 font-mono font-bold text-[11px] uppercase tracking-wider">
                Assessment Integrity
              </span>
              <h2 className="text-[30px] sm:text-[42px] font-extrabold text-[#09090b] leading-tight">
                AI-Powered Proctoring: Make Online Assessments Trustworthy
              </h2>
              <p className="text-[15px] text-[#52525b] leading-relaxed">
                Where required, AI-powered proctoring helps organizations strengthen assessment integrity through continuous candidate monitoring and suspicious-event detection.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa]">
                  <h4 className="font-bold text-[#09090b] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#09090b]" /> 360° Continuous Facial Verification
                  </h4>
                  <p className="text-[#52525b] mt-1">
                    Detects multiple faces, substitute test-takers, or candidate absence during the examination session.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa]">
                  <h4 className="font-bold text-[#09090b] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#09090b]" /> Full Browser Tab & Window Focus Lock
                  </h4>
                  <p className="text-[#52525b] mt-1">
                    Flags unauthorized window switches, split screens, external monitors, or search engine navigation.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa]">
                  <h4 className="font-bold text-[#09090b] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#09090b]" /> Anti-Cheat & LLM / ChatGPT Copy-Paste Guard
                  </h4>
                  <p className="text-[#52525b] mt-1">
                    Analyzes keystroke cadence and clipboard activity to prevent copy-pasting code or generated answers.
                  </p>
                </div>
              </div>
            </div>

            {/* Proctoring Visual Audit Log */}
            <div className="lg:col-span-6 rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-7 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#27272a] pb-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse"></span>
                  <span className="font-bold font-mono">PROCTORING AUDIT REPORT</span>
                </div>
                <span className="text-[#a1a1aa] font-mono">SESSION #PROCT-8831</span>
              </div>

              <div className="rounded-2xl border border-[#27272a] bg-[#121215] p-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-[#27272a] pb-2">
                  <span className="text-[#a1a1aa]">Candidate: Rohan Sen</span>
                  <span className="text-white font-bold">Role: SDE-II Backend</span>
                </div>

                <div className="space-y-2 text-[11.5px]">
                  <div className="flex justify-between items-center p-2 rounded bg-white/5">
                    <span>Webcam Identity Match:</span>
                    <span className="text-white font-bold">Verified (99.4%)</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-white/5">
                    <span>Background Voices / Audio:</span>
                    <span className="text-white font-bold">Clean / Zero Anomaly</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-white/5">
                    <span>Window Tab Switches:</span>
                    <span className="text-white font-bold">0 Switches Detected</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-white/5">
                    <span>Keystroke Rhythm Analysis:</span>
                    <span className="text-white font-bold">Natural Typing Validated</span>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#27272a] flex items-center justify-between text-xs">
                  <span className="text-[#a1a1aa]">Integrity Verdict:</span>
                  <span className="px-2 py-0.5 rounded bg-white text-[#09090b] font-bold font-sans">
                    100% CERTIFIED CLEAN
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#a1a1aa] text-center pt-1">
                Tamper-evident cryptographic log generated with every assessment result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- THE OUTCOME -------------------- */}
      <section className="bg-[#fafafa] py-16 sm:py-24 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#71717a] uppercase">
            The Assessment Outcome
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#09090b] tracking-tight">
            Measure capability. Improve confidence. Make better shortlists.
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#52525b] leading-relaxed">
            Move candidates with verified performance straight into structured AI interviews, without recruiters reading hundreds of unvetted resumes.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#09090b] px-8 text-sm font-bold text-white hover:bg-[#27272a] transition-all"
            >
              Book an Assessment Consultation
            </Link>
            <Link
              href="/interview"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-[#27272a] bg-white px-7 text-sm font-bold text-[#09090b] hover:bg-[#f4f4f5] transition-colors"
            >
              See Pillar 02: AI Interviews →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
