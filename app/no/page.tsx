import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { StructuredData } from "@/components/structured-data";

const ARC_URL =
  "https://storyoriginapp.com/reviewcopies/01a0ddd3-9a06-72a3-99c5-9f270fb4d2b4/apply";

const description =
  "Request an advance review copy of Default: No, a practical leadership guide to saying no at work and making commitments you can keep.";

export const metadata: Metadata = {
  title: "Default: No ARC",
  description,
  alternates: {
    canonical: "/no",
  },
  openGraph: {
    type: "website",
    url: "/no",
    title: "Default: No — Request an ARC",
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
    title: "Default: No — Request an ARC",
    description,
    images: ["/images/books/default-no.jpg"],
  },
};

const checks = [
  {
    number: "01",
    title: "Purpose",
    text: "What is this request actually trying to accomplish, and does it deserve your attention?",
  },
  {
    number: "02",
    title: "Cost",
    text: "Not just the time on the calendar. Energy, attention, flexibility, recovery, and opportunity all count.",
  },
  {
    number: "03",
    title: "Priority",
    text: "What gets delayed, compressed, or dropped if you say yes to this instead?",
  },
  {
    number: "04",
    title: "Ownership",
    text: "Being capable of solving the problem does not automatically make you responsible for owning it.",
  },
  {
    number: "05",
    title: "Consequence",
    text: "If you commit, who else carries the cost when your calendar gets tighter or the work spills over?",
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
              Advance review copies available
            </p>

            <h1 className="mb-4 text-5xl font-black tracking-[-0.04em] !text-[#1c1917] sm:text-6xl md:text-7xl dark:!text-[#f5f5f4]">
              Default: No
            </h1>

            <p className="mb-6 text-2xl font-semibold leading-tight !text-[#44403c] sm:text-3xl dark:!text-[#d6d3d1]">
              Every yes spends something.
            </p>

            <p className="mx-auto mb-7 max-w-2xl text-lg leading-8 !text-[#57534e] md:mx-0 dark:!text-[#d6d3d1]">
              A practical leadership guide to saying no at work, examining a
              request before it becomes a commitment, and making sure the yeses
              you give are promises you actually have room to keep.
            </p>

            <a
              href={ARC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#292524] px-6 py-3.5 text-base font-semibold !text-[#f5f5f4] no-underline transition-opacity hover:opacity-85 dark:bg-[#d6d3d1] dark:!text-[#1c1917]"
            >
              Request an ARC
            </a>

            <p className="mt-3 text-sm !text-[#78716c] dark:!text-[#a8a29e]">
              Apply through StoryOrigin. EPUB, MOBI, and PDF formats available.
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
            You say “sure” because the request sounds reasonable. Then you look
            at the calendar and realize keeping that promise means breaking
            another one. A quick agreement can leave you rearranging deadlines,
            working late, or asking your team to absorb work they had no part in
            choosing.
          </p>
        </section>

        <section className="mx-auto mt-16 max-w-4xl">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] !text-[#78716c] dark:!text-[#a8a29e]">
              The five checks
            </p>
            <h2 className="text-3xl font-bold tracking-tight !text-[#292524] sm:text-4xl dark:!text-[#e7e5e4]">
              A better way to decide before you commit.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {checks.map((check) => (
              <article
                key={check.number}
                className="rounded-xl border border-[#c7c2bd] bg-white/35 p-6 shadow-sm backdrop-blur-sm dark:border-[#57534e] dark:bg-[#1c1917]/35"
              >
                <p className="mb-4 text-sm font-bold tracking-[0.18em] !text-[#a8a29e] dark:!text-[#78716c]">
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
          </div>
        </section>

        <section className="mx-auto mt-20 grid max-w-4xl gap-10 border-y border-[#a8a29e] py-14 md:grid-cols-2 md:gap-16 sm:mt-24 dark:border-[#57534e]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] !text-[#78716c] dark:!text-[#a8a29e]">
              What is inside
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight !text-[#292524] dark:!text-[#e7e5e4]">
              Practical decisions, not permission to become difficult.
            </h2>
          </div>

          <div className="space-y-4 text-base leading-7 !text-[#57534e] dark:!text-[#d6d3d1]">
            <p className="m-0">
              Workplace scenarios, short exercises, and examples of what to say
              when a request does not deserve a yes.
            </p>
            <p className="m-0">
              Ways to explain a refusal without leaving someone guessing, and
              ways to discuss competing priorities with your boss.
            </p>
            <p className="m-0">
              A look at when “no” deserves another pass — because sometimes the
              unfamiliar idea, inconvenient request, or person asking for help
              is worth making room for.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl text-center sm:mt-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] !text-[#78716c] dark:!text-[#a8a29e]">
            Read it before publication
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight !text-[#292524] sm:text-4xl dark:!text-[#e7e5e4]">
            Request an advance review copy.
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-lg leading-8 !text-[#57534e] dark:!text-[#d6d3d1]">
            I&apos;m looking for early readers willing to read <i>Default: No</i>
            and leave an honest review. StoryOrigin handles the application and
            delivery so you can choose the format that works for you.
          </p>

          <a
            href={ARC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#292524] px-7 py-3.5 text-base font-semibold !text-[#f5f5f4] no-underline transition-opacity hover:opacity-85 dark:bg-[#d6d3d1] dark:!text-[#1c1917]"
          >
            Request on StoryOrigin
          </a>

          <p className="mt-4 text-sm !text-[#78716c] dark:!text-[#a8a29e]">
            Expected publication: November 16, 2026.
          </p>
        </section>

        <section className="mt-20 text-center sm:mt-24">
          <p className="text-sm !text-[#78716c] dark:!text-[#a8a29e]">
            Want updates instead?{" "}
            <Link
              href="/newsletter"
              className="font-medium !text-[#44403c] underline underline-offset-4 dark:!text-[#d6d3d1]"
            >
              Join the newsletter
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
