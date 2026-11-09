import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

const advisoryAreas = [
  {
    title: "Buying a home",
    description: "Compare the homes you are considering, understand the tradeoffs, and discuss an offer and negotiation approach that reflects your priorities."
  },
  {
    title: "Selling a home",
    description: "Discuss pricing, timing and how to present your property. Build a marketing approach that helps buyers understand the home and its place in the market."
  },
  {
    title: "Planning your next move",
    description: "Clarify what matters, compare your options and the questions still open, and build a practical plan around your timing before deciding what comes next."
  }
];

const representationSteps = [
  "01 Understand priorities",
  "02 Compare options",
  "03 Build a plan",
  "04 Guide the negotiation"
];

export const metadata: Metadata = {
  title: "Advisory",
  description: "Buyer representation, seller guidance and practical planning for your next move with R3LIA Realty.",
  openGraph: {
    title: "Advisory | R3LIA Realty",
    description: "A clearer plan for buying a home, selling a home or considering your next move.",
    url: "https://r3liarealty.com/advisory"
  }
};

export default function AdvisoryPage() {
  return (
    <Section>
      <p className="eyebrow mb-4 text-espresso/70">Advisory</p>
      <h1 className="max-w-4xl font-serif text-4xl text-charcoal md:text-5xl">A clearer plan for your next move.</h1>
      <p className="mt-6 max-w-3xl text-espresso/85">
        Buying or selling a home brings choices about price, timing and what matters most.
        R3LIA Realty brings thoughtful representation, property comparisons and clear communication to those decisions.
        Start with your goals, then work through the options together.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {advisoryAreas.map((area) => (
          <article key={area.title} className="rounded-2xl border border-charcoal/10 bg-white/55 p-7 shadow-soft">
            <h2 className="font-serif text-2xl text-charcoal">{area.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-espresso/85">{area.description}</p>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-charcoal/10 bg-white/45 p-7 md:p-9">
        <p className="eyebrow mb-4 text-espresso/70">How we work together</p>
        <div className="grid gap-4 md:grid-cols-2">
          {representationSteps.map((step) => (
            <p key={step} className="rounded-xl border border-charcoal/10 bg-ivory/60 p-4 font-serif text-2xl text-charcoal">
              {step}
            </p>
          ))}
        </div>
      </section>
      <Link
        href="/contact"
        className="mt-10 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm text-ivory transition hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
      >
        Tell us about your next move
      </Link>
    </Section>
  );
}
