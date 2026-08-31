"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer, { LinkedinIcon } from "@/components/Footer";
import { Phone, Mail, ArrowRight, CheckCircle2, ShieldCheck, Clock, Building2, Loader2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    objective: "Complete Integrated Journey (Assess → Interview → Develop)",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setFormSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090b]">
      <Header />

      {/* -------------------- HERO -------------------- */}
      <section className="relative overflow-hidden bg-white pt-16 pb-16 sm:pt-24 sm:pb-20 border-b border-[#e4e4e7] bg-grid-pattern">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#09090b] px-4 py-1.5 text-[11px] font-bold tracking-wide text-white font-mono shadow-sm">
            DIRECT LEADERSHIP ACCESS
          </div>

          <h1 className="mt-8 max-w-4xl text-[30px] sm:text-[48px] lg:text-[58px] font-extrabold text-[#09090b] leading-[1.1] tracking-tight">
            <span>Connect with GreatCampus</span>{" "}
            <span className="accent-shimmer">Leadership.</span>
          </h1>

          <p className="mt-5 sm:mt-6 max-w-3xl text-[16px] sm:text-[19px] text-[#52525b] leading-relaxed">
            Whether you are hiring 10 people or 10,000, preparing university students, or building workforce capability, reach out directly to schedule an executive consultation.
          </p>
        </div>
      </section>

      {/* -------------------- CONTACT & FORM GRID -------------------- */}
      <section className="bg-[#fafafa] py-16 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Leadership Card */}
            <div className="md:col-span-6 rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-mono text-[#a1a1aa] mb-5">
                  STRATEGIC PARTNERSHIPS
                </div>
                <h2 className="text-[26px] sm:text-[32px] font-extrabold text-white">
                  Maninder Singh
                </h2>
                <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1.5">
                  Head of Strategic Partnerships & Institutional Growth · GreatCampus
                </p>

                <div className="mt-10 space-y-3.5">
                  {/* Phone 1 */}
                  <a
                    href="tel:+919811352666"
                    className="flex items-center gap-4 p-3.5 rounded-2xl border border-[#27272a] bg-[#121215] hover:border-white transition-all group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-white text-[#09090b] flex items-center justify-center shrink-0">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#a1a1aa] block uppercase font-mono">Direct / WhatsApp</span>
                      <span className="font-bold text-white text-[15px] group-hover:underline">
                        +91-9811352666
                      </span>
                    </div>
                  </a>

                  {/* Phone 2 */}
                  <a
                    href="tel:+919073351545"
                    className="flex items-center gap-4 p-3.5 rounded-2xl border border-[#27272a] bg-[#121215] hover:border-white transition-all group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-white text-[#09090b] flex items-center justify-center shrink-0">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#a1a1aa] block uppercase font-mono">Partnerships / Support</span>
                      <span className="font-bold text-white text-[15px] group-hover:underline">
                        +91-9073351545
                      </span>
                    </div>
                  </a>

                  {/* Official Corporate Email */}
                  <a
                    href="mailto:contact@greatcampus.in"
                    className="flex items-center gap-4 p-3.5 rounded-2xl border border-[#27272a] bg-[#121215] hover:border-white transition-all group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-white text-[#09090b] flex items-center justify-center shrink-0">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#a1a1aa] block uppercase font-mono">Corporate Official Desk</span>
                      <span className="font-bold text-white text-[15px] group-hover:underline">
                        contact@greatcampus.in
                      </span>
                    </div>
                  </a>

                  {/* Direct Leadership Email */}
                  <a
                    href="mailto:mvasir@gmail.com"
                    className="flex items-center gap-4 p-3.5 rounded-2xl border border-[#27272a] bg-[#121215] hover:border-white transition-all group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-white text-[#09090b] flex items-center justify-center shrink-0">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#a1a1aa] block uppercase font-mono">Direct Leadership Email</span>
                      <span className="font-bold text-white text-[15px] group-hover:underline">
                        mvasir@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn Button (No raw URL shown) */}
                  <a
                    href="https://www.linkedin.com/in/manindersinghvasir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl border border-[#27272a] bg-[#121215] hover:border-white transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="h-10 w-10 rounded-xl bg-white text-[#09090b] flex items-center justify-center shrink-0">
                        <LinkedinIcon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#a1a1aa] block uppercase font-mono">Professional Network</span>
                        <span className="font-bold text-white text-[15px]">
                          Connect on LinkedIn
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex h-8 items-center justify-center rounded-lg bg-white/10 px-3 text-xs font-semibold text-white group-hover:bg-white group-hover:text-[#09090b] transition-all">
                      View Profile <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#27272a] text-xs text-[#a1a1aa] flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                <span>Executive response turnaround: under 4 business hours.</span>
              </div>
            </div>

            {/* Interactive Demo Request Form */}
            <div className="md:col-span-6 rounded-3xl border border-[#e4e4e7] bg-white p-8 sm:p-12 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-[24px] font-bold text-[#09090b]">
                  Schedule an Executive Walkthrough
                </h3>
                <p className="text-xs text-[#52525b] mt-1.5 mb-6">
                  Fill in your details below and our solution architects will tailor a live demonstration for your organization's roles.
                </p>

                {errorMessage && (
                  <div className="mb-4 p-3.5 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-[#09090b] text-white text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-white mx-auto" />
                    <h4 className="font-bold text-lg">Briefing Request Received!</h4>
                    <p className="text-xs text-[#a1a1aa] leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>! We have dispatched a confirmation email to <strong>{formData.email}</strong> and notified our leadership team (Maninder Singh & Aftab).
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          objective: "Complete Integrated Journey (Assess → Interview → Develop)",
                          message: "",
                        });
                      }}
                      className="mt-3 px-5 py-2 rounded-xl bg-white text-[#09090b] font-bold text-xs hover:bg-[#e4e4e7] transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="font-bold text-[#09090b] block mb-1">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className="w-full h-11 px-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-[#09090b] block mb-1">Work Email *</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="priya@company.com"
                          className="w-full h-11 px-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-[#09090b] block mb-1">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full h-11 px-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-bold text-[#09090b] block mb-1">Primary Objective</label>
                      <select
                        value={formData.objective}
                        onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                      >
                        <option>Complete Integrated Journey (Assess → Interview → Develop)</option>
                        <option>Pillar 01: Digital Testing & AI Proctoring at Scale</option>
                        <option>Pillar 02: AI First-Round Voice & Video Interviews</option>
                        <option>Pillar 03: Post-Hire Microlearning & Reassessment</option>
                        <option>Recruitment / Staffing Agency Partnership</option>
                        <option>University Campus Placement & Student Readiness</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-[#09090b] block mb-1">Company / Institution Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Nexus Enterprise / University"
                        className="w-full h-11 px-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-[#09090b] block mb-1">Specific Requirements (Optional)</label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the roles or candidate volumes you are evaluating..."
                        className="w-full p-3 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b] resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-[#09090b] text-white font-bold text-sm hover:bg-[#27272a] transition-all cursor-pointer mt-1 disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Request via SMTP...</span>
                        </>
                      ) : (
                        <span>Request Executive Consultation</span>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <p className="mt-6 text-[11px] text-[#71717a] text-center">
                Secure enterprise privacy. Confirmation sent directly to your inbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
