import { NextResponse } from "next/server";

const MAILERLITE_SUBSCRIBERS_URL =
  "https://connect.mailerlite.com/api/subscribers";

function isValidEmail(email: string) {
  return (
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

export async function POST(request: Request) {
  const apiToken = process.env.MAILERLITE_API_TOKEN;

  if (!apiToken) {
    console.error("MAILERLITE_API_TOKEN is not configured.");
    return NextResponse.json(
      { message: "Newsletter signup is temporarily unavailable." },
      { status: 503 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request." },
      { status: 400 }
    );
  }

  const parsedBody =
    typeof body === "object" && body !== null
      ? (body as { email?: unknown; website?: unknown })
      : null;

  const email = parsedBody?.email;
  const website = parsedBody?.website;

  if (typeof website === "string" && website.length > 0) {
    return NextResponse.json({ message: "Thanks for subscribing." });
  }

  if (typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json(
      { message: "Enter a valid email address." },
      { status: 400 }
    );
  }

  const groupId = process.env.MAILERLITE_GROUP_ID;

  const payload: {
    email: string;
    groups?: string[];
  } = {
    email: email.trim().toLowerCase(),
  };

  if (groupId) {
    payload.groups = [groupId];
  }

  try {
    const response = await fetch(MAILERLITE_SUBSCRIBERS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(
        `MailerLite signup failed with status ${response.status}`
      );

      return NextResponse.json(
        { message: "Unable to subscribe right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Subscribed." });
  } catch (error) {
    console.error("MailerLite signup request failed:", error);

    return NextResponse.json(
      { message: "Unable to subscribe right now. Please try again." },
      { status: 502 }
    );
  }
}
