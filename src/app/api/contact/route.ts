import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, message, paymentScreenshot } = body;

    // Basic Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL || "hkmrkhan10@gmail.com";

    // If SMTP credentials exist, send real emails via Nodemailer
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

      // Prepare attachment if payment screenshot base64 exists
      const attachments = [];
      if (paymentScreenshot && paymentScreenshot.includes("base64,")) {
        const matches = paymentScreenshot.match(/^data:(.+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          const contentType = matches[1];
          const base64Data = matches[2];
          const ext = contentType.split("/")[1] || "png";
          attachments.push({
            filename: `Payment_Proof_${name.replace(/\s+/g, "_")}.${ext}`,
            content: Buffer.from(base64Data, "base64"),
            contentType: contentType,
          });
        }
      }

      // 1. Email to Receiver / Academy Admin
      const adminMailOptions = {
        from: `"Noor Quran Academy" <${smtpUser}>`,
        to: contactEmail,
        replyTo: email,
        subject: `🚨 New Seat Reservation Request from ${name} [${course || "Norani Qaida"}]`,
        attachments: attachments,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF7F2; padding: 25px; border-radius: 16px; border: 1px solid #C5D7C5; color: #051309;">
            <div style="text-align: center; border-b: 2px solid #D4AF37; pb: 15px; margin-bottom: 20px;">
              <h1 style="color: #12331C; margin: 0; font-size: 24px;">NOOR QURAN ACADEMY</h1>
              <p style="color: #8A670D; font-size: 12px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; margin-top: 4px;">New Seat Reservation & Payment Proof</p>
            </div>

            <div style="background-color: #FFFFFF; padding: 20px; border-radius: 12px; border: 1px solid #E0ECE1; margin-bottom: 20px;">
              <h2 style="color: #12331C; font-size: 18px; margin-top: 0;">Student Details</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #0B2413;">
                <tr><td style="padding: 6px 0; font-weight: bold; width: 40%;">Full Name:</td><td>${name}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Email Address:</td><td><a href="mailto:${email}" style="color: #12331C; font-weight: bold;">${email}</a></td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Phone / WhatsApp:</td><td>${phone || "N/A"}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Reserved Program:</td><td style="color: #8A670D; font-weight: bold;">${course || "Not specified"}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Payment Proof Attached:</td><td>${attachments.length > 0 ? "Yes (Attached)" : "No screenshot attached"}</td></tr>
              </table>
            </div>

            <div style="background-color: #FFFFFF; padding: 20px; border-radius: 12px; border: 1px solid #E0ECE1; margin-bottom: 20px;">
              <h3 style="color: #12331C; font-size: 16px; margin-top: 0;">Message / Preferred Schedule</h3>
              <p style="background-color: #F2F6F3; padding: 12px; border-left: 4px solid #D4AF37; margin: 0; font-size: 14px; line-height: 1.6;">
                ${message ? message.replace(/\n/g, "<br>") : "No additional notes provided."}
              </p>
            </div>

            <div style="background-color: #12331C; color: #FAF7F2; padding: 15px; border-radius: 12px; text-align: center; font-size: 13px;">
              <p style="margin: 0; font-weight: bold;">Target Receiver Account: Meezan Bank • Huzaifa Khan</p>
              <p style="margin: 4px 0 0 0; color: #D4AF37;">Account: 03260113711856 • IBAN: PK40MEZN0003260113711856</p>
            </div>
          </div>
        `,
      };

      // 2. Email to Sender / Student (Confirmation email)
      const studentMailOptions = {
        from: `"Noor Quran Academy" <${smtpUser}>`,
        to: email,
        subject: `Seat Reservation Confirmation — Noor Quran Academy`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF7F2; padding: 25px; border-radius: 16px; border: 1px solid #C5D7C5; color: #051309;">
            <div style="text-align: center; border-b: 2px solid #D4AF37; pb: 15px; margin-bottom: 20px;">
              <h1 style="color: #12331C; margin: 0; font-size: 24px;">NOOR QURAN ACADEMY</h1>
              <p style="color: #8A670D; font-size: 12px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; margin-top: 4px;">Assalamu Alaikum wa Rahmatullah</p>
            </div>

            <div style="background-color: #FFFFFF; padding: 20px; border-radius: 12px; border: 1px solid #E0ECE1; margin-bottom: 20px;">
              <h2 style="color: #12331C; font-size: 18px; margin-top: 0;">Dear ${name},</h2>
              <p style="font-size: 15px; line-height: 1.6; color: #0B2413;">
                Thank you for reserving your seat at <strong>Noor Quran Academy</strong> for <strong>${course}</strong>. We have received your details and payment submission.
              </p>
              <div style="background-color: #F2F6F3; padding: 15px; border-radius: 10px; border-left: 4px solid #12331C; margin: 15px 0;">
                <p style="margin: 0; font-weight: bold; color: #12331C; font-size: 15px;">
                  ✨ We will verify your payment and confirm your seat within 24 hours.
                </p>
              </div>
            </div>

            <div style="background-color: #FFFFFF; padding: 20px; border-radius: 12px; border: 1px solid #E0ECE1; margin-bottom: 20px;">
              <h3 style="color: #12331C; font-size: 16px; margin-top: 0;">Reservation Summary</h3>
              <ul style="padding-left: 20px; font-size: 14px; line-height: 1.8; color: #0B2413;">
                <li><strong>Student Name:</strong> ${name}</li>
                <li><strong>Program:</strong> ${course}</li>
                <li><strong>Status:</strong> Under Verification (Confirmation within 24 hours)</li>
              </ul>
            </div>

            <div style="text-align: center; color: #12331C; font-size: 13px; font-weight: bold;">
              <p style="margin: 0;">If you have any urgent questions, reach us on WhatsApp: +1 (800) 555-7872</p>
              <p style="margin: 4px 0 0 0; color: #8A670D;">Noor Quran Academy • Empowering Quranic Learning Worldwide</p>
            </div>
          </div>
        `,
      };

      // Send both emails in parallel
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(studentMailOptions),
      ]);
    } else {
      console.log("SMTP Credentials missing in env. Logged reservation:", {
        name,
        email,
        phone,
        course,
        message,
        hasScreenshot: !!paymentScreenshot,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your seat reservation has been submitted successfully! We will confirm your seat within 24 hours via email.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("SMTP / Reservation Error:", error);
    return NextResponse.json(
      { error: "Failed to submit seat reservation. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
