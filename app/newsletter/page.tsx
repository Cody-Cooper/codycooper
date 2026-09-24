import type { Metadata } from "next";

import { NewsletterSignup } from "@/components/newsletter-signup";

const description =
  "Get the 5 Checks before you say yes. Occasional notes on deliberate leadership decisions while I write Default: No.";

export const metadata: Metadata = {
  title: "Newsletter",
  description,
  alternates: {
    canonical: "/newsletter",
  },
  openGraph: {
    type: "website",
    url: "/newsletter",
    title: "Newsletter",
    description,
  },
};

export default function Newsletter() {
  return (
    <article className="prose py-6 dark:prose-invert">
      <h1 className="text-center">Every yes spends something.</h1>
      <p>
        I&apos;m writing <i>Default: No</i>, a book on deliberate leadership
        decisions. Join the list and I&apos;ll send you the 5 Checks I run
        before I agree to anything, plus occasional notes while the book comes
        together.
      </p>
      <p>
        Roughly one email every week or two, only when there&apos;s something
        worth sending. Unsubscribe anytime.
      </p>
      <NewsletterSignup className="mt-6 max-w-md" />
    </article>
  );
}
