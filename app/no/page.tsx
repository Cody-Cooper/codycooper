import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { NewsletterSignup } from "@/components/newsletter-signup";
import { StructuredData } from "@/components/structured-data";

const description =
  "Default: No is a practical book about deliberate leadership decisions, protecting your capacity, and making every yes earn its place.";

export const metadata: Metadata = {
  title: "Default: No",
  description,
  alternates: {
    canonical: "/no",
  },
  openGraph: {
    type: "website",
    url: "/no",
    title: "Default: No",
    description,
    images: [
      {
        url: "/images/books/default-no.jpg",
        width: 400,
        height: 600,
        alt: "Default: No book cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Default: No",
    description,
    images: ["/images/books/default-no.jpg"],
  },
};

const checks = [
  {
    number: "01",
    title: "What does this actually cost?",
    text: "Not just the time on the calendar. Attention, energy, recovery, flexibility, and the opportunity to do something better all count.",
  },
  {
    number: "02",
    title: "What gets less of me?",
    text: "Every commitment displaces something. Make the trade visible before you agree to it instead of discovering the cost afterward.",
  },
  {
    number: "03",
    title: "Is this mine to carry?",
    text: "Being capable of solving a problem does not automatically make you responsible for owning it.",
  },
];

export default function DefaultNoLandingPage() {
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Default: No",
    description,
    author: {
      "@id": "https://codycooper.io/#person",
    },
    image: "https://codycooper.io/images/books/default-no.jpg",
    url: "https://codycooper.io/no",
  };

  return (
    <>
      <StructuredData data={bookSchema} />

      <div className="relative left-1/2 w-[calc(100vw-2rem)] max-w-5xl -translate-x-1/2 py-8 sm:py-14">
        <section className="grid items-center gap-10 md:grid-cols-[320px_1fr] md:gap-16">
          <div className="mx-auto w-full max-w-[280px] md:max-w-[320px]">
            <div className="overflow-hidden rounded-md shadow-2xl shadow-black/20">
              <Image
                src="/images/books/default-no.jpg"
                alt="Default: No book cover"
                width={400}
                height={600}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] !text-[#78716c] dark:!text-[#a8a29e]">
              A book by Cody Cooper
            </p>

            <h1 className="mb-4 text-5xl font-black tracking-[-0.04em] !text-[#1c1917] sm:text-6xl md:text-7xl dark:!text-[#f5f5f4]">
              Default: No
            </h1>

            <p className="mb-6 text-2xl font-semibold leading-tight !text-[#44403c] sm:text-3xl dark:!text-[#d6d3d1]">
              Every yes spends something.
            </p>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 !text-[#57534e] md:mx-0 dark:!text-[#d6d3d1]">
              Most people do not need to become better at saying no. They need
              to stop treating yes as the default. <i>Default: No</i> is a
              practical guide to protecting your time, attention, and energy
              without becoming rigid, selfish, or impossible to work with.
            </p>

            <a
              href="#updates"
              className="inline-flex items-center justify-center rounded-md bg-[#292524] px-6 py-3.5 text-base font-semibold !text-[#f5f5f4] no-underline transition-opacity hover:opacity-85 dark:bg-[#d6d3d1] dark:!text-[#1c1917]"
            >
              Get the 5 Checks
            </a>

            <p className="mt-3 text-sm !text-[#78716c] dark:!text-[#a8a29e]">
              Free with the newsletter. Launch and ARC updates included.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl text-center sm:mt-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] !text-[#78716c] dark:!text-[#a8a29e]">
            The problem is not the word yes
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight !text-[#292524] sm:text-4xl dark:!text-[#e7e5e4]">
            It is agreeing before you count the cost.
          </h2>
          <p className="text-lg leading-8 !text-[#57534e] dark:!text-[#d6d3d1]">
            The meeting that is only thirty minutes. The project you can
            probably squeeze in. The favor that would be easier to do yourself.
            Individually, each yes looks reasonable. Together, they quietly
            consume the capacity you meant to spend somewhere else.
          </p>
        </section>

        <section className="mt-14 grid gap-5 md:grid-cols-3 sm:mt-16">
          {checks.map((check) => (
            <article
              key={check.number}
              className="rounded-xl border border-[#c7c2bd] bg-white/35 p-6 shadow-sm backdrop-blur-sm dark:border-[#57534e] dark:bg-[#1c1917]/35"
            >
              <p className="mb-5 text-sm font-bold tracking-[0.18em] !text-[#a8a29e] dark:!text-[#78716c]">
                {check.number}
              </p>
              <h3 className="mb-3 text-xl font-bold !text-[#292524] dark:!text-[#e7e5e4]">
                {check.title}
              </h3>
              <p className="m-0 leading-7 !text-[#57534e] dark:!text-[#d6d3d1]">
                {check.text}
              </p>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-20 grid max-w-4xl gap-10 border-y border-[#a8a29e] py-14 md:grid-cols-2 md:gap-16 sm:mt-24 dark:border-[#57534e]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] !text-[#78716c] dark:!text-[#a8a29e]">
              This is for you if
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight !text-[#292524] dark:!text-[#e7e5e4]">
              Being reliable has started costing too much.
            </h2>
          </div>

          <div className="space-y-4 text-base leading-7 !text-[#57534e] dark:!text-[#d6d3d1]">
            <p className="m-0">
              You are the person people trust because you get things done — and
              that has made you the person everyone asks.
            </p>
            <p className="m-0">
              You are leading people, managing competing priorities, or trying
              to protect good work from endless additions.
            </p>
            <p className="m-0">
              You do not want permission to say no to everything. You want a
              better way to decide what deserves a yes.
            </p>
          </div>
        </section>

        <section id="updates" className="mx-auto mt-20 max-w-3xl text-center sm:mt-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] !text-[#78716c] dark:!text-[#a8a29e]">
            Start here
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight !text-[#292524] sm:text-4xl dark:!text-[#e7e5e4]">
            Get the 5 Checks before your next yes.
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-lg leading-8 !text-[#57534e] dark:!text-[#d6d3d1]">
            Join the list and I&apos;ll send you the five questions I run before I
            agree to something, plus occasional notes while <i>Default: No</i>
            comes together. Subscribers will also hear about ARC copies and the
            launch first.
          </p>

          <NewsletterSignup className="mx-auto max-w-xl" />

          <p className="mt-4 text-sm !text-[#78716c] dark:!text-[#a8a29e]">
            Roughly one email every week or two. Unsubscribe anytime.
          </p>
        </section>

        <section className="mt-20 text-center sm:mt-24">
          <p className="text-sm !text-[#78716c] dark:!text-[#a8a29e]">
            Already on the list?{" "}
            <Link
              href="/books"
              className="font-medium !text-[#44403c] underline underline-offset-4 dark:!text-[#d6d3d1]"
            >
              See my books
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
