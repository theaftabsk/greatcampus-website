import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, objective, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER || "contact@greatcampus.in";
    const smtpPass = process.env.SMTP_PASS || "yrqa-d3zn-bcfp-t43j";
    const adminEmails = [
      "aftabsk0005@gmail.com",
      "mvasir@gmail.com"
    ];

    // Configure Nodemailer transporter with Gmail / Google Workspace SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass.replace(/\s+/g, ""),
      },
    });

    // 1. Email notification to GreatCampus Leadership (Aftab & Maninder)
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
            ${message ? `
            <div class="row" style="border-bottom: none;">
              <div class="label">Additional Message / Requirements</div>
              <div class="value" style="font-weight: 400; line-height: 1.5;">${message}</div>
            </div>
            ` : ""}
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
              Our leadership team is reviewing your requirements. We will connect with you within <strong>4 business hours</strong> to share the walkthrough calendar and customize a demonstration for your organization's specific roles.
            </p>

            <div class="card">
              <div class="step-title">Direct Leadership Touchpoints</div>
              <div class="contact-item">👤 Maninder Singh — Head of Strategic Partnerships</div>
              <div class="contact-item">📞 Direct / WhatsApp: +91-9811352666</div>
              <div class="contact-item">📞 Partnerships / Support: +91-9073351545</div>
              <div class="contact-item">✉️ Corporate: contact@greatcampus.in</div>
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

    // Dispatch both emails in parallel
    await Promise.all([
      // Send to GreatCampus admin emails (Aftab & Maninder)
      transporter.sendMail({
        from: `"GreatCampus Platform" <${smtpUser}>`,
        to: adminEmails,
        subject: `[New Lead] ${name} from ${company || "Organization"} (${objective || "General Inquiry"})`,
        html: adminMailHtml,
      }),

      // Send Welcome Confirmation to user
      transporter.sendMail({
        from: `"GreatCampus" <${smtpUser}>`,
        to: email,
        subject: "Thank you for contacting GreatCampus | Executive Briefing Request",
        html: welcomeMailHtml,
      }),
    ]);

    return NextResponse.json({ success: true, message: "Emails sent successfully." });
  } catch (error: any) {
    console.error("SMTP Error in /api/contact:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to dispatch email via SMTP." },
      { status: 500 }
    );
  }
}
