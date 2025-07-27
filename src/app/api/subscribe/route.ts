// src/app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { message: "Valid email is required." },
      { status: 400 }
    );
  }

  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER; // e.g., us1, us2

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_API_SERVER) {
    console.error("Mailchimp API environment variables not fully set.");
    return NextResponse.json(
      { message: "Server configuration error." },
      { status: 500 }
    );
  }

  const data = {
    email_address: email,
    status: "subscribed", // 'subscribed' or 'pending' (if you require double opt-in)
  };

  try {
    const response = await fetch(
      `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `api_key ${MAILCHIMP_API_KEY}`, // Mailchimp uses 'api_key YOUR_API_KEY'
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (response.ok) {
      if (result.status === "subscribed") {
        return NextResponse.json(
          { message: "Successfully subscribed!" },
          { status: 200 }
        );
      } else if (result.status === "pending") {
        // This happens if you have double opt-in enabled for your audience
        return NextResponse.json(
          {
            message:
              "Success! Please check your email to confirm your subscription.",
          },
          { status: 202 }
        );
      }
    } else {
      // Mailchimp API returns helpful error messages
      console.error("Mailchimp API error:", result);
      if (result.title === "Member Exists") {
        return NextResponse.json(
          { message: "You are already subscribed!" },
          { status: 409 }
        );
      } else {
        return NextResponse.json(
          { message: result.detail || "Subscription failed due to API error." },
          { status: response.status }
        );
      }
    }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
