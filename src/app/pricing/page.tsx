"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  Users,
  Sparkles,
} from "lucide-react";

export default function PricingPage() {
  // Contact & Quote Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    volume: "100 - 500 candidates / month",
    objective: "Full Integrated Talent Journey (Assess → Interview → Develop)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: `[PRICING QUOTE INQUIRY]\nExpected Volume: ${formData.volume}\nSolution Scope: ${formData.objective}\n\nClient Note: ${formData.message || "Requested custom pricing proposal."}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to submit request.");
      }

      setFormSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again or WhatsApp us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSelectEngagement = (tierTitle: string) => {
    setFormData((prev) => ({
      ...prev,
      objective: `Pricing Inquiry for ${tierTitle}`,
    }));
    // Smooth scroll to the form
    const formElement = document.getElementById("quote-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#09090b]">
      <Header />

      {/* -------------------- HERO -------------------- */}
      <section className="relative overflow-hidden bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 border-b border-[#e4e4e7] bg-grid-pattern">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#09090b] px-4 py-1.5 text-[11px] font-bold tracking-wide text-white font-mono shadow-sm">
            TAILORED INSTITUTIONAL PRICING
          </div>

          <h1 className="mt-8 max-w-4xl text-[32px] sm:text-[52px] lg:text-[64px] font-extrabold text-[#09090b] leading-[1.1] tracking-tight">
            <span>Custom Volume Pricing.</span>{" "}
            <span className="accent-shimmer">Zero Recruiter Seat Taxes.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-[16px] sm:text-[19px] text-[#52525b] leading-relaxed">
            We do not believe in rigid, inflated per-seat pricing that penalizes your recruiting teams. Contact GreatCampus leadership directly for a bespoke volume blueprint tailored to your hiring pipeline.
          </p>

          {/* Quick Connect Badges */}
          <div className="mt-9 flex flex-wrap justify-center items-center gap-3 text-xs font-mono">
            <a
              href="https://wa.me/919811352666?text=Hi%20Maninder,%20we%20would%20like%20to%20get%20a%20pricing%20quote%20for%20GreatCampus."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#09090b] text-white hover:bg-[#27272a] transition-all font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" /> SMS / WhatsApp: +91-9811352666
            </a>
            <a
              href="tel:+919073351545"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] hover:border-[#09090b] transition-all font-bold"
            >
              <Phone className="w-3.5 h-3.5" /> Call Support: +91-9073351545
            </a>
            <a
              href="mailto:contact@greatcampus.in?subject=Pricing%20Quote%20Inquiry%20-%20GreatCampus"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] hover:border-[#09090b] transition-all font-bold"
            >
              <Mail className="w-3.5 h-3.5" /> contact@greatcampus.in
            </a>
          </div>
        </div>
      </section>

      {/* -------------------- 3 ENGAGEMENT FRAMEWORKS (NO FIXED NUMBERS) -------------------- */}
      <section className="bg-[#fafafa] py-16 sm:py-24 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider">
              Engagement Models
            </span>
            <h2 className="text-[28px] sm:text-[40px] font-extrabold text-[#09090b] tracking-tight mt-2">
              Flexible Deployment Tiers for Every Stage
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#52525b]">
              Every model includes unlimited recruiter seats, automated candidate scorecards, and anti-cheat verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Model 1: Pilot & Rapid Evaluation */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#09090b] transition-all">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#71717a] uppercase block">
                  TIER 01 · PILOT DEPLOYMENT
                </span>
                <h3 className="font-bold text-[22px] text-[#09090b]">
                  Pilot Evaluation
                </h3>
                <p className="text-xs text-[#52525b] leading-relaxed">
                  Ideal for hiring teams wanting to benchmark AI assessments and voice interviews against their current screening bottleneck.
                </p>

                <div className="py-3 border-y border-[#f4f4f5]">
                  <span className="text-xs text-[#71717a] uppercase font-mono block">Pricing Structure</span>
                  <span className="text-2xl font-extrabold text-[#09090b]">Tailored Pilot Scope</span>
                  <span className="text-xs text-[#71717a] block mt-0.5">Zero long-term commitment required</span>
                </div>

                <ul className="space-y-2.5 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" /> Bespoke role test creation & calibration
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" /> AI voice interviews on Web & WhatsApp
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" /> 14 regional & international languages
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" /> Automated candidate scoring & rankings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" /> Unlimited hiring manager accounts
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleSelectEngagement("Pilot Evaluation Tier")}
                className="mt-8 w-full text-center py-3 rounded-xl border border-[#27272a] font-bold text-xs text-[#09090b] hover:bg-[#fafafa] transition-colors cursor-pointer"
              >
                Request Pilot Quote →
              </button>
            </div>

            {/* Model 2: Growth Scale (Most Popular) */}
            <div className="rounded-3xl border-2 border-[#09090b] bg-[#09090b] text-white p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#09090b] px-3.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-wider">
                RECOMMENDED
              </div>

              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#a1a1aa] uppercase block">
                  TIER 02 · HIGH-VOLUME SCALING
                </span>
                <h3 className="font-bold text-[22px] text-white">
                  Growth & High-Volume
                </h3>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">
                  For rapidly scaling enterprises, staffing agencies, and BPOs hiring 50 to 5,000+ candidates every month.
                </p>

                <div className="py-3 border-y border-[#27272a]">
                  <span className="text-xs text-[#a1a1aa] uppercase font-mono block">Pricing Structure</span>
                  <span className="text-2xl font-extrabold text-white">Tiered Volume Rates</span>
                  <span className="text-xs text-[#a1a1aa] block mt-0.5">Scale discounts as applicant volume grows</span>
                </div>

                <ul className="space-y-2.5 text-xs text-white">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" /> Direct Automated Phone Call + WhatsApp + Web
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" /> AI Coding Sandbox in 15+ programming languages
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" /> 360° Anti-cheat proctoring & tab-lock guard
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" /> Post-hire microlearning capability modules
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" /> ATS integrations (Greenhouse, Lever, Workday)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" /> Unlimited recruiter seats (Zero seat penalty)
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleSelectEngagement("Growth & High-Volume Scaling Tier")}
                className="mt-8 w-full text-center py-3.5 rounded-xl bg-white font-bold text-xs text-[#09090b] hover:bg-[#e4e4e7] transition-colors cursor-pointer"
              >
                Request Volume Quote →
              </button>
            </div>

            {/* Model 3: Enterprise & Institutional Campus */}
            <div className="rounded-3xl border border-[#e4e4e7] bg-white p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#09090b] transition-all">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#71717a] uppercase block">
                  TIER 03 · ENTERPRISE & CAMPUS
                </span>
                <h3 className="font-bold text-[22px] text-[#09090b]">
                  Enterprise & University
                </h3>
                <p className="text-xs text-[#52525b] leading-relaxed">
                  For large institutions, universities, group campuses, and global enterprises requiring custom security & SLAs.
                </p>

                <div className="py-3 border-y border-[#f4f4f5]">
                  <span className="text-xs text-[#71717a] uppercase font-mono block">Pricing Structure</span>
                  <span className="text-2xl font-extrabold text-[#09090b]">Custom Institutional SLA</span>
                  <span className="text-xs text-[#71717a] block mt-0.5">Annual / multi-year institutional partnership</span>
                </div>

                <ul className="space-y-2.5 text-xs text-[#09090b]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" /> Dedicated Solution Architect & 24/7 SLA
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" /> Custom voice personas & branded candidate rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" /> Custom question banks & curriculum alignment
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" /> SOC2, ISO, GDPR enterprise compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#09090b] shrink-0" /> University placement readiness programs
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleSelectEngagement("Enterprise & Institutional Campus Tier")}
                className="mt-8 w-full text-center py-3 rounded-xl border border-[#27272a] font-bold text-xs text-[#09090b] hover:bg-[#fafafa] transition-colors cursor-pointer"
              >
                Discuss Enterprise SLA →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- DEDICATED PRICING INQUIRY FORM & LEADERSHIP DIRECT CONTACT -------------------- */}
      <section id="quote-form-section" className="bg-white py-16 sm:py-28 border-b border-[#e4e4e7]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Leadership Direct Contact Column */}
            <div className="md:col-span-5 rounded-3xl border border-[#27272a] bg-[#09090b] text-white p-6 sm:p-10 space-y-6 shadow-2xl">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-mono text-[#a1a1aa] mb-4">
                  DIRECT LEADERSHIP ACCESS
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Speak Directly With Leadership
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] mt-2 leading-relaxed">
                  Need an urgent quotation, pilot setup, or volume contract? Reach out directly to discuss your recruitment volume.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Maninder Singh WhatsApp / Phone */}
                <a
                  href="https://wa.me/919811352666?text=Hi%20Maninder,%20we%20would%20like%20to%20discuss%20pricing%20for%20GreatCampus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-[#27272a] bg-[#121215] hover:border-white transition-all group"
                >
                  <div className="h-10 w-10 rounded-xl bg-white text-[#09090b] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#a1a1aa] block uppercase font-mono">
                      Maninder Singh · WhatsApp / SMS
                    </span>
                    <span className="font-bold text-white text-[14px] group-hover:underline">
                      +91-9811352666
                    </span>
                  </div>
                </a>

                {/* Support / Partnerships Phone */}
                <a
                  href="tel:+919073351545"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-[#27272a] bg-[#121215] hover:border-white transition-all group"
                >
                  <div className="h-10 w-10 rounded-xl bg-white text-[#09090b] flex items-center justify-center shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#a1a1aa] block uppercase font-mono">
                      Institutional Support Desk
                    </span>
                    <span className="font-bold text-white text-[14px] group-hover:underline">
                      +91-9073351545
                    </span>
                  </div>
                </a>

                {/* Corporate Email */}
                <a
                  href="mailto:contact@greatcampus.in?subject=Pricing%20Quote%20Inquiry"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-[#27272a] bg-[#121215] hover:border-white transition-all group"
                >
                  <div className="h-10 w-10 rounded-xl bg-white text-[#09090b] flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#a1a1aa] block uppercase font-mono">
                      Corporate Quotation Desk
                    </span>
                    <span className="font-bold text-white text-[14px] group-hover:underline">
                      contact@greatcampus.in
                    </span>
                  </div>
                </a>

                {/* Direct Leadership Email */}
                <a
                  href="mailto:mvasir@gmail.com?subject=GreatCampus%20Pricing%20Discussion"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-[#27272a] bg-[#121215] hover:border-white transition-all group"
                >
                  <div className="h-10 w-10 rounded-xl bg-white text-[#09090b] flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#a1a1aa] block uppercase font-mono">
                      Direct Leadership Email
                    </span>
                    <span className="font-bold text-white text-[14px] group-hover:underline">
                      mvasir@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              {/* Response Time SLA Guarantee */}
              <div className="pt-4 border-t border-[#27272a] text-xs text-[#a1a1aa] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span>Pricing proposal delivered within 4 business hours.</span>
              </div>
            </div>

            {/* Quote Request Form */}
            <div className="md:col-span-7 rounded-3xl border border-[#e4e4e7] bg-white p-6 sm:p-10 shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider block mb-1">
                  INSTANT QUOTE REQUEST
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09090b]">
                  Get a Custom Pricing Proposal
                </h3>
                <p className="text-xs sm:text-sm text-[#52525b] mt-1.5 mb-6">
                  Fill in your requirements below. Our talent solutions architects will prepare an exact volume proposal.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-5 p-3.5 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#09090b] text-white text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-white mx-auto" />
                  <h4 className="font-bold text-xl">Pricing Request Received!</h4>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>! We have dispatched a confirmation email to <strong>{formData.email}</strong>. Our leadership team has been notified and will deliver your custom volume quotation within 4 hours.
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
                        volume: "100 - 500 candidates / month",
                        objective: "Full Integrated Talent Journey (Assess → Interview → Develop)",
                        message: "",
                      });
                    }}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-white text-[#09090b] font-bold text-xs hover:bg-[#e4e4e7] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="font-bold text-[#09090b] block mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Malhotra"
                        className="w-full h-11 px-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#09090b] block mb-1.5">Work Email *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@company.com"
                        className="w-full h-11 px-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                      />
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="font-bold text-[#09090b] block mb-1.5">Phone / WhatsApp *</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full h-11 px-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#09090b] block mb-1.5">Company / Institution *</label>
                      <input
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Tata Consultancy / Amity University"
                        className="w-full h-11 px-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                      />
                    </div>
                  </div>

                  {/* Expected Volume and Primary Objective */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="font-bold text-[#09090b] block mb-1.5">Monthly Candidate Volume</label>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                      >
                        <option value="Under 100 candidates / month">Under 100 candidates / month</option>
                        <option value="100 - 500 candidates / month">100 - 500 candidates / month</option>
                        <option value="500 - 2,000 candidates / month">500 - 2,000 candidates / month</option>
                        <option value="2,000 - 10,000 candidates / month">2,000 - 10,000 candidates / month</option>
                        <option value="10,000+ candidates / Campus Drive">10,000+ candidates / Campus Drive</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-[#09090b] block mb-1.5">Primary Focus Area</label>
                      <select
                        value={formData.objective}
                        onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                      >
                        <option value="Full Integrated Talent Journey (Assess → Interview → Develop)">
                          Full Journey (Assess → Interview → Develop)
                        </option>
                        <option value="Digital Testing & AI Proctoring (Pillar 01)">
                          01 · Digital Testing & AI Proctoring
                        </option>
                        <option value="AI Voice & Video Interviews (Pillar 02)">
                          02 · AI Voice & Video First-Round
                        </option>
                        <option value="Post-Hire Microlearning (Pillar 03)">
                          03 · Post-Hire Microlearning
                        </option>
                        <option value="University Campus Placement Drive">
                          University Campus Placement Drive
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Special Requirements */}
                  <div>
                    <label className="font-bold text-[#09090b] block mb-1.5">
                      Specific Roles or Implementation Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the roles you are hiring for, current screening bottlenecks, or target start date..."
                      className="w-full p-3.5 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[#09090b] focus:outline-none focus:border-[#09090b]"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full h-12 rounded-xl bg-[#09090b] hover:bg-[#27272a] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request to Leadership...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Custom Pricing Proposal</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#71717a] text-center pt-1">
                    Direct notification sent to <strong>Maninder Singh</strong> & <strong>Aftab</strong> · Confirmation email sent to your inbox.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- TRANSPARENCY & ROI VALUES -------------------- */}
      <section className="bg-[#fafafa] py-16 sm:py-24 border-b border-[#e4e4e7]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090b]">
              Why GreatCampus Pricing Outperforms Legacy Software
            </h2>
            <p className="text-xs sm:text-sm text-[#52525b] mt-2">
              Modern talent teams deserve software built for actual ROI, not artificial seat licenses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#e4e4e7] space-y-2.5">
              <div className="h-9 w-9 rounded-xl bg-[#09090b] text-white flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="font-bold text-base text-[#09090b]">Zero Recruiter Seat Taxes</h4>
              <p className="text-xs text-[#52525b] leading-relaxed">
                Add 5 recruiters or 50 recruiters. We never charge seat licenses. Every hiring manager and coordinator can collaborate freely.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e4e4e7] space-y-2.5">
              <div className="h-9 w-9 rounded-xl bg-[#09090b] text-white flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="font-bold text-base text-[#09090b]">Pay for Actual Value</h4>
              <p className="text-xs text-[#52525b] leading-relaxed">
                Pay based on the candidates you actually evaluate and develop, with automatic volume economies that lower your cost-per-hire.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e4e4e7] space-y-2.5">
              <div className="h-9 w-9 rounded-xl bg-[#09090b] text-white flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="font-bold text-base text-[#09090b]">Full Journey in One Fee</h4>
              <p className="text-xs text-[#52525b] leading-relaxed">
                No separate vendor contracts for tests, proctoring tools, AI video tools, and LMS platforms. One single unified talent loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
