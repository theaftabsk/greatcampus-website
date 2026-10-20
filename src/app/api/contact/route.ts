import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Email service is not configured (missing RESEND_API_KEY in environment variables)." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON format in request body." },
        { status: 400 }
      );
    }
    const { name, email, phone, company, objective, message } = body || {};

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "GreatCampus <info@greatcampus.tech>";
    const rawAdminEmails = process.env.ADMIN_EMAILS || "aftabsk0005@gmail.com,mvasir@gmail.com";
    const adminEmails = rawAdminEmails.split(",").map((e) => e.trim()).filter(Boolean);

    // 1. Email notification to GreatCampus
    const adminMailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px; color: #09090b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e4e4e7; }
          .header { background: #09090b; color: #ffffff; padding: 28px; text-align: left; }
          .badge { display: inline-block; background: rgba(255,255,255,0.15); padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-family: monospace; letter-spacing: 0.5px; margin-bottom: 8px; }
          .content { padding: 32px 28px; }
          .row { margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #f4f4f5; }
          .label { font-size: 11px; text-transform: uppercase; color: #71717a; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 4px; }
          .value { font-size: 15px; color: #09090b; font-weight: 600; }
          .footer { background: #fafafa; padding: 18px 28px; font-size: 12px; color: #71717a; border-top: 1px solid #e4e4e7; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">NEW LEAD INQUIRY</span>
            <h2 style="margin: 0; font-size: 22px; font-weight: 800;">Executive Walkthrough Request</h2>
            <p style="margin: 6px 0 0; font-size: 13px; color: #a1a1aa;">Submitted via GreatCampus website</p>
          </div>
          <div class="content">
            <div class="row">
              <div class="label">Full Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="row">
              <div class="label">Work Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #09090b;">${email}</a></div>
            </div>
            <div class="row">
              <div class="label">Phone / WhatsApp</div>
              <div class="value"><a href="tel:${phone || ""}" style="color: #09090b;">${phone || "Not provided"}</a></div>
            </div>
            <div class="row">
              <div class="label">Company / Institution</div>
              <div class="value">${company || "Not provided"}</div>
            </div>
            <div class="row">
              <div class="label">Primary Objective / Interest</div>
              <div class="value">${objective || "Integrated Talent Journey"}</div>
            </div>
            ${
              message
                ? `
            <div class="row" style="border-bottom: none;">
              <div class="label">Additional Message / Requirements</div>
              <div class="value" style="font-weight: 400; line-height: 1.5;">${message}</div>
            </div>
            `
                : ""
            }
          </div>
          <div class="footer">
            GreatCampus Technologies · Assess → Interview → Develop → Reassess
          </div>
        </div>
      </body>
      </html>
    `;

    // 2. Luxury Welcome & Confirmation Email to Candidate/Client
    const welcomeMailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 24px; color: #09090b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e4e4e7; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
          .header { background: #09090b; color: #ffffff; padding: 36px 32px; text-align: left; }
          .brand-title { font-size: 26px; font-weight: 900; letter-spacing: -0.5px; margin: 0; }
          .brand-tagline { font-size: 12px; color: #a1a1aa; font-family: monospace; margin-top: 4px; }
          .content { padding: 36px 32px; }
          .greeting { font-size: 20px; font-weight: 800; color: #09090b; margin-bottom: 14px; }
          .paragraph { font-size: 14.5px; line-height: 1.6; color: #52525b; margin-bottom: 18px; }
          .card { background: #fafafa; border: 1px solid #e4e4e7; border-radius: 14px; padding: 20px; margin: 24px 0; }
          .step-title { font-size: 12px; font-family: monospace; font-weight: 700; text-transform: uppercase; color: #71717a; margin-bottom: 8px; }
          .contact-item { font-size: 13.5px; color: #09090b; margin-bottom: 6px; font-weight: 600; }
          .btn { display: inline-block; background: #09090b; color: #ffffff !important; text-decoration: none; padding: 12px 26px; border-radius: 10px; font-weight: 700; font-size: 13px; margin-top: 10px; }
          .footer { background: #09090b; color: #a1a1aa; padding: 24px 32px; font-size: 12px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="brand-title">GreatCampus</h1>
            <div class="brand-tagline">ASSESS · INTERVIEW · DEVELOP · REASSESS</div>
          </div>
          <div class="content">
            <div class="greeting">Hello ${name},</div>
            <p class="paragraph">
              Thank you for reaching out to <strong>GreatCampus</strong>. We have received your consultation request for <strong>${objective || "our integrated talent platform"}</strong>.
            </p>
            <p class="paragraph">
              Our team is reviewing your requirements. We will connect with you within <strong>4 business hours</strong> to share the walkthrough calendar and customize a demonstration for your organization's specific roles.
            </p>

            <div class="card">
              <div class="step-title">Direct Touchpoints</div>
              <div class="contact-item">🏢 GreatCampus — Strategic Partnerships & Growth</div>
              <div class="contact-item">📞 Direct / WhatsApp: +91-8810418647</div>
              <div class="contact-item">✉️ Corporate: info@greatcampus.tech</div>
            </div>

            <p class="paragraph" style="font-size: 13px; color: #71717a;">
              Need immediate assistance? Feel free to reply directly to this email or reach us on WhatsApp.
            </p>
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} GreatCampus Technologies. All rights reserved.<br>
            Empowering organizations with AI-powered integrated talent solutions.
          </div>
        </div>
      </body>
      </html>
    `;

    // Send admin notification
    const adminResponse = await resend.emails.send({
      from: fromEmail,
      to: adminEmails,
      replyTo: email,
      subject: `[New Lead] ${name} from ${company || "Organization"} (${objective || "General Inquiry"})`,
      html: adminMailHtml,
    });

    if (adminResponse.error) {
      console.error("Resend Admin Email Error:", adminResponse.error);
      return NextResponse.json(
        { error: adminResponse.error.message || "Failed to dispatch admin notification via Resend." },
        { status: 500 }
      );
    }

    // Send welcome / confirmation email to the lead
    const welcomeResponse = await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: "info@greatcampus.tech",
      subject: "Thank you for contacting GreatCampus | Executive Briefing Request",
      html: welcomeMailHtml,
    });

    if (welcomeResponse.error) {
      console.warn("Resend User Confirmation Email Warning:", welcomeResponse.error);
    }

    return NextResponse.json({
      success: true,
      message: "Notification dispatched successfully via Resend.",
      adminEmailId: adminResponse.data?.id,
      welcomeEmailId: welcomeResponse.data?.id,
    });
  } catch (error: any) {
    console.error("Resend API Route Error in /api/contact:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to dispatch email via Resend." },
      { status: 500 }
    );
  }
}
