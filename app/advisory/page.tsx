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
          <article key={area.title} className="rounded-xl border border-charcoal/10 bg-white/50 p-6">
            <h2 className="font-serif text-2xl text-charcoal">{area.title}</h2>
            <p className="mt-3 text-sm text-espresso/85">{area.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
