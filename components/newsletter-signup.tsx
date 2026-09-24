"use client";

import { FormEvent, useState } from "react";

interface NewsletterSignupProps {
  className?: string;
}

type SubmitState = "idle" | "submitting" | "success" | "error";

export function NewsletterSignup({
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitState === "submitting") {
      return;
    }

    setSubmitState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, website }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to subscribe right now.");
      }

      setEmail("");
      setSubmitState("success");
      setMessage("You’re in. Thanks for subscribing.");
    } catch (error) {
      setSubmitState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to subscribe right now."
      );
    }
  }

  return (
    <form
      className={`not-prose ${className}`.trim()}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={submitState === "submitting"}
          className="min-w-0 flex-1 rounded-md border border-[#a8a29e] bg-[#f5f5f4] px-4 py-3 text-base text-[#292524] placeholder:text-[#78716c] focus:border-[#57534e] focus:outline-none focus:ring-1 focus:ring-[#57534e] disabled:opacity-60 dark:border-[#57534e] dark:bg-[#1c1917] dark:text-[#d6d3d1] dark:placeholder:text-[#a8a29e] dark:focus:border-[#d6d3d1] dark:focus:ring-[#d6d3d1]"
        />

        <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="newsletter-website">Website</label>
          <input
            id="newsletter-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="rounded-md bg-[#292524] px-5 py-3 text-base font-medium text-[#f5f5f4] transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#d6d3d1] dark:text-[#1c1917]"
        >
          {submitState === "submitting" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>

      {message && (
        <p
          className={`mt-3 text-sm ${
            submitState === "error"
              ? "!text-[#b91c1c] dark:!text-[#fca5a5]"
              : "!text-[#44403c] dark:!text-[#d6d3d1]"
          }`}
          role={submitState === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      )}
    </form>
  );
}
