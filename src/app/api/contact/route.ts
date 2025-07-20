// src/app/api/contact/route.ts
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Construct the email content
    const emailContent = `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Subject: ${subject}
      Message:
      ${message}
    `;

    // Send the email using Resend
    const data = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev", // Use your verified sender email
      to: process.env.CONTACT_EMAIL_TO || "lazar.vlad151@gmail.com", // Your recipient email
      subject: `New Contact Form Submission: ${subject}`,
      text: emailContent,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Log for debugging (optional, remove in production)
    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email.", error: (error as Error).message },
      { status: 500 }
    );
  }
}
