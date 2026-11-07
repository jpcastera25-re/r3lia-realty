import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Intelligence",
  description: "Compare properties, understand relevant market context, and identify ownership-cost questions and facts to verify before a home decision.",
  openGraph: {
    title: "Intelligence | R3LIA Realty",
    description: "Property comparisons, market context and clearer questions for your next home decision.",
    url: "https://r3liarealty.com/intelligence"
  }
};

export default function IntelligencePage() {
  return (
    <Section>
      <p className="eyebrow mb-4 text-espresso/70">Intelligence</p>
      <h1 className="max-w-4xl font-serif text-4xl text-charcoal md:text-5xl">Understand the options. Know what to verify.</h1>
      <p className="mt-6 max-w-3xl text-espresso/85">
        A useful comparison goes beyond the asking price. R3LIA Realty helps put property differences and relevant
        market context into a conversation about your priorities, timing and the questions still unanswered.
      </p>
      <div className="mt-10 rounded-3xl border border-brass/30 bg-brass/10 p-8 md:p-10">
        <h2 className="font-serif text-3xl text-charcoal">A clearer view of the decision.</h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-espresso/85">
          <li><strong>Property comparisons.</strong> Look at layout, features and the tradeoffs among the homes you are considering.</li>
          <li><strong>Relevant market context.</strong> Discuss pricing comparisons and timing so an asking price has context.</li>
          <li><strong>Ownership-cost questions.</strong> Identify questions about financing, taxes, insurance, association fees and maintenance to confirm with the appropriate lender, insurer, association or other professional.</li>
          <li><strong>Further verification.</strong> Separate what the available information says from what still needs current documents, an inspection or a qualified professional&rsquo;s review.</li>
        </ul>
      </div>
      <Link
        href="/contact"
        className="mt-10 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm text-ivory transition hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
      >
        Discuss the homes you are considering
      </Link>
    </Section>
  );
}
