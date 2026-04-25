import type { Metadata } from "next";
import { Section } from "@/components/Section";

const advisoryAreas = [
  {
    title: "Seller Advisory",
    description: "Positioning, timing strategy, and presentation architecture for premium residential listings."
  },
  {
    title: "Buyer Representation",
    description: "Private acquisition support, decision framing, and negotiation strategy for high-context purchases."
  },
  {
    title: "Strategic Counsel",
    description: "Portfolio-oriented guidance for owners evaluating hold, renovate, refinance, or exit paths."
  }
];

const representationSteps = [
  "01 Position the asset",
  "02 Control the release",
  "03 Qualify the audience",
  "04 Guide the negotiation"
];

export const metadata: Metadata = {
  title: "Advisory",
  description: "Private advisory services for seller representation, buyer guidance, and strategic residential decisions.",
  openGraph: {
    title: "Advisory | R3LIA Realty",
    description: "Representation built around context, discretion, and long-term value protection.",
    url: "https://r3liarealty.com/advisory"
  }
};

export default function AdvisoryPage() {
  return (
    <Section>
      <p className="eyebrow mb-4 text-espresso/70">Advisory</p>
      <h1 className="max-w-4xl font-serif text-5xl text-charcoal">Representation built around context, not volume.</h1>
      <p className="mt-6 max-w-3xl text-espresso/85">
        R3LIA operates as a private advisory partner for complex residential decisions. Every engagement is tailored, communication is selective, and strategy is built to protect long-term value.
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
        <p className="eyebrow mb-4 text-espresso/70">How R3LIA Represents a Property</p>
        <div className="grid gap-4 md:grid-cols-2">
          {representationSteps.map((step) => (
            <p key={step} className="rounded-xl border border-charcoal/10 bg-ivory/60 p-4 font-serif text-2xl text-charcoal">
              {step}
            </p>
          ))}
        </div>
      </section>
    </Section>
  );
}
