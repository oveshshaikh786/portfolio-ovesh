// src/app/api/contact/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const EMAIL_USER = process.env.MAIL_USER; // e.g. your Gmail
const EMAIL_PASS = process.env.MAIL_APP_PASS; // Gmail App Password
const EMAIL_TO = process.env.MAIL_TO || EMAIL_USER;

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request) {
  try {
    const { name = "", email = "", message = "" } = await request.json();

    if (!name.trim() || !isValidEmail(email) || !message.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid name, email and message.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: EMAIL_TO,
      subject: "New Portfolio Contact",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to send" },
      { status: 500 }
    );
  }
}
