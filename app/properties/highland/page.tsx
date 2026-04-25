import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { Section } from "@/components/Section";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { highland } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Highland",
  description: "Private Offering 001: Highland, a private residence offered at $1,500,000.",
  openGraph: {
    title: "Highland | Private Offering 001",
    description: "A private residence offered at $1,500,000 with discreet buyer guidance by R3LIA Realty.",
    url: "https://r3liarealty.com/properties/highland"
  }
};

export default function HighlandPage() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-end overflow-hidden px-6 py-20 md:px-10">
        <VisualPlaceholder className="absolute inset-0 rounded-none border-none" variant="cinematic" accentLabel="Private Offering 001" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="eyebrow mb-5 text-espresso/75">{highland.id}</p>
          <h1 className="font-serif text-5xl text-charcoal md:text-7xl">{highland.name}</h1>
          <p className="mt-5 max-w-2xl text-lg text-espresso/90">{highland.heroSubtitle}</p>
          <a
            href="#inquiry"
            className="mt-8 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm text-ivory transition hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
          >
            Request Private Showing
          </a>
        </div>
      </section>

      <Section>
        <div className="grid gap-4 rounded-2xl border border-charcoal/15 bg-white/45 p-6 text-sm text-espresso/90 md:grid-cols-4 md:gap-6 md:p-8">
          <p>
            <span className="block text-xs uppercase tracking-[0.16em] text-espresso/70">Offered at</span>
            <span className="mt-2 block text-base text-charcoal">{highland.price}</span>
          </p>
          <p>
            <span className="block text-xs uppercase tracking-[0.16em] text-espresso/70">Residence</span>
            <span className="mt-2 block text-base text-charcoal">{highland.snapshot.residence}</span>
          </p>
          <p>
            <span className="block text-xs uppercase tracking-[0.16em] text-espresso/70">Property</span>
            <span className="mt-2 block text-base text-charcoal">{highland.snapshot.property}</span>
          </p>
          <p>
            <span className="block text-xs uppercase tracking-[0.16em] text-espresso/70">Showings</span>
            <span className="mt-2 block text-base text-charcoal">{highland.snapshot.showings}</span>
          </p>
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4 text-espresso/70">The Residence</p>
        <p className="max-w-4xl font-serif text-3xl leading-relaxed text-charcoal md:text-4xl">{highland.narrative}</p>
      </Section>

      <Section>
        <div className="space-y-8 md:space-y-10">
          <article>
            <h2 className="mb-4 font-serif text-3xl text-charcoal">{highland.gallery[0].title}</h2>
            <VisualPlaceholder className="min-h-[22rem] md:min-h-[30rem]" variant="editorial" accentLabel="Arrival" />
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            {[highland.gallery[1], highland.gallery[2]].map((item) => (
              <article key={item.title}>
                <h2 className="mb-4 font-serif text-2xl text-charcoal">{item.title}</h2>
                <VisualPlaceholder className="min-h-[18rem]" variant="detail" accentLabel={item.title} />
              </article>
            ))}
          </div>

          <article className="grid gap-6 rounded-3xl border border-charcoal/10 bg-white/35 p-5 md:grid-cols-[1fr,1.4fr] md:items-center md:p-8">
            <div>
              <h2 className="font-serif text-3xl text-charcoal">{highland.gallery[3].title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-espresso/85">
                Spatial composition prioritizes retreat, circulation, and quiet separation. Final photography will be released in the launch dossier.
              </p>
            </div>
            <VisualPlaceholder className="min-h-[20rem]" variant="editorial" accentLabel="Suite" />
          </article>

          <article>
            <h2 className="mb-4 font-serif text-3xl text-charcoal">{highland.gallery[4].title}</h2>
            <VisualPlaceholder className="min-h-[22rem] md:min-h-[28rem]" variant="cinematic" accentLabel="Grounds" />
          </article>

          <article className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-center">
            <VisualPlaceholder className="min-h-[18rem]" variant="detail" accentLabel="Lifestyle" />
            <div>
              <h2 className="font-serif text-3xl text-charcoal">{highland.gallery[5].title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-espresso/85">
                Lifestyle context remains intentionally private, with expanded details and imagery reserved for qualified inquiries.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section className="bg-white/40">
        <p className="eyebrow mb-4 text-espresso/70">What Makes It Rare</p>
        <div className="grid gap-6 md:grid-cols-4">
          {highland.rareQualities.map((item) => (
            <article key={item.title} className="rounded-2xl border border-charcoal/10 bg-white/60 p-6 shadow-soft">
              <h3 className="font-serif text-2xl text-charcoal">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-espresso/85">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4 text-espresso/70">Understand the Opportunity</p>
        <h2 className="max-w-4xl font-serif text-4xl text-charcoal">Private buyer guidance for the Highland opportunity.</h2>
        <p className="mt-5 max-w-3xl text-espresso/85">
          Qualified buyers receive a structured decision brief covering valuation context, negotiation posture, and ownership scenarios. HAVN intelligence informs this process quietly behind the scenes.
        </p>
      </Section>

      <Section id="inquiry" className="bg-white/40">
        <p className="eyebrow mb-4 text-espresso/70">Private Showings by Appointment</p>
        <h2 className="mb-8 font-serif text-4xl text-charcoal">Request a private showing.</h2>
        <InquiryForm submitLabel="Request Private Showing" />
      </Section>
    </>
  );
}
