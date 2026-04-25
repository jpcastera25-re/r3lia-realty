import Link from "next/link";
import { Section } from "@/components/Section";

export default function IntelligencePage() {
  return (
    <Section>
      <p className="eyebrow mb-4 text-espresso/70">Intelligence</p>
      <h1 className="max-w-4xl font-serif text-5xl text-charcoal">HAVN: decision intelligence in service of human judgment.</h1>
      <p className="mt-6 max-w-3xl text-espresso/85">
        HAVN is the intelligence layer designed to complement R3LIA advisory work. It surfaces relevant market signals, scenario comparisons, and communication support so recommendations remain clear and consistent.
      </p>
      <div className="mt-10 rounded-2xl border border-brass/30 bg-brass/10 p-8">
        <h2 className="font-serif text-3xl text-charcoal">Quietly integrated into every major decision moment.</h2>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-espresso/85">
          <li>Pricing and timing scenario framing.</li>
          <li>Negotiation posture support based on changing conditions.</li>
          <li>Structured briefs that align all parties quickly and discreetly.</li>
        </ul>
      </div>
      <Link href="/contact" className="mt-10 inline-flex rounded-md bg-charcoal px-5 py-3 text-sm text-ivory transition hover:bg-espresso">
        Discuss your goals privately
      </Link>
    </Section>
  );
}
