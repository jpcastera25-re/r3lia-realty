import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Intelligence",
  description: "HAVN decision intelligence quietly supporting R3LIA advisory recommendations.",
  openGraph: {
    title: "Intelligence | R3LIA Realty",
    description: "HAVN supports market context, pricing signals, and communication strategy behind the scenes.",
    url: "https://r3liarealty.com/intelligence"
  }
};

export default function IntelligencePage() {
  return (
    <Section>
      <p className="eyebrow mb-4 text-espresso/70">Intelligence</p>
      <h1 className="max-w-4xl font-serif text-5xl text-charcoal">HAVN, quietly supporting every advisory decision.</h1>
      <p className="mt-6 max-w-3xl text-espresso/85">
        HAVN is not a standalone product pitch. It is the support layer behind R3LIA advisory work, organizing market context, scenario comparisons, and communication strategy so guidance remains clear under pressure.
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
