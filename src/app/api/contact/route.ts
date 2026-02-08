import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, subject, message } = body;

  if (!email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_RECEIVER_ADDRESS,
      to: process.env.MAIL_RECEIVER_ADDRESS,
      subject: subject,
      text: message,
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Message not sent" }, { status: 500 });
  }
}
