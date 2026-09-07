import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Intelligence",
  description: "R3LIA's advisory approach brings pricing context, property comparisons, and clear communication to real estate decisions.",
  openGraph: {
    title: "Intelligence | R3LIA Realty",
    description: "R3LIA brings pricing context, property comparisons, and clear communication to each conversation.",
    url: "https://r3liarealty.com/intelligence"
  }
};

export default function IntelligencePage() {
  return (
    <Section>
      <p className="eyebrow mb-4 text-espresso/70">Intelligence</p>
      <h1 className="max-w-4xl font-serif text-5xl text-charcoal">Market context for clearer real estate decisions.</h1>
      <p className="mt-6 max-w-3xl text-espresso/85">
        R3LIA brings pricing context, property comparisons, and clear communication to each conversation.
      </p>
      <div className="mt-10 rounded-3xl border border-brass/30 bg-brass/10 p-8 md:p-10">
        <h2 className="font-serif text-3xl text-charcoal">Built for disciplined decision moments.</h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-espresso/85">
          <li>Pricing and timing context for consequential moves.</li>
          <li>Negotiation posture support as market conditions shift.</li>
          <li>Clear internal briefs that keep advisory communication aligned and discreet.</li>
        </ul>
      </div>
      <Link
        href="/contact"
        className="mt-10 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm text-ivory transition hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
      >
        Discuss your goals privately
      </Link>
    </Section>
  );
}
