import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL || "info@noorquranacademy.com";

    // If SMTP credentials exist, send real email via Nodemailer
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"Noor Quran Academy" <${smtpUser}>`,
        to: contactEmail,
        replyTo: email,
        subject: `New Trial / Inquiry Request from ${name} [${course || "General"}]`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #1E3E29;">
            <h2 style="color: #2C5338;">New Academy Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Selected Course:</strong> ${course || "Not specified"}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #F4F7F4; padding: 15px; border-left: 4px solid #D4AF37;">
              ${message.replace(/\n/g, "<br>")}
            </blockquote>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      // Graceful fallback for development / missing SMTP env
      console.log("SMTP not configured. Message received:", {
        name,
        email,
        phone,
        course,
        message,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! We will contact you within 24 hours to schedule your free trial session.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("SMTP / Contact Form Error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later or email us directly." },
      { status: 500 }
    );
  }
}
