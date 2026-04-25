import Image from "next/image";
import { InquiryForm } from "@/components/InquiryForm";
import { Section } from "@/components/Section";
import { highland } from "@/lib/properties";

export default function HighlandPage() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-end overflow-hidden px-6 py-20 md:px-10">
        <Image src="/images/placeholders/highland-hero.svg" alt="Highland exterior" fill className="object-cover" priority />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="eyebrow mb-5 text-espresso/75">{highland.id}</p>
          <h1 className="font-serif text-5xl text-charcoal md:text-7xl">{highland.name}</h1>
          <p className="mt-5 max-w-2xl text-lg text-espresso/90">{highland.heroSubtitle}</p>
          <a href="#inquiry" className="mt-8 inline-flex rounded-md bg-charcoal px-5 py-3 text-sm text-ivory transition hover:bg-espresso">
            Request Private Showing
          </a>
        </div>
      </section>

      <Section>
        <div className="grid gap-4 border-y border-charcoal/15 py-6 text-sm text-espresso/90 md:grid-cols-4">
          <p>
            <span className="block text-xs uppercase tracking-[0.16em] text-espresso/70">Offered at</span>
            {highland.price}
          </p>
          <p>
            <span className="block text-xs uppercase tracking-[0.16em] text-espresso/70">Residence</span>
            {highland.snapshot.residence}
          </p>
          <p>
            <span className="block text-xs uppercase tracking-[0.16em] text-espresso/70">Property</span>
            {highland.snapshot.property}
          </p>
          <p>
            <span className="block text-xs uppercase tracking-[0.16em] text-espresso/70">Showings</span>
            {highland.snapshot.showings}
          </p>
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4 text-espresso/70">The Residence</p>
        <p className="max-w-4xl font-serif text-3xl leading-relaxed text-charcoal md:text-4xl">{highland.narrative}</p>
      </Section>

      <Section>
        <div className="space-y-10">
          {highland.gallery.map((item) => (
            <article key={item.title} className="grid gap-5 md:grid-cols-[1fr,3fr] md:items-center">
              <h2 className="font-serif text-3xl text-charcoal">{item.title}</h2>
              <div className="relative min-h-64 overflow-hidden rounded-xl border border-charcoal/10">
                <Image src={item.image} alt={`${highland.name} ${item.title}`} fill className="object-cover" />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white/40">
        <p className="eyebrow mb-4 text-espresso/70">What Makes It Rare</p>
        <div className="grid gap-6 md:grid-cols-4">
          {highland.rareQualities.map((item) => (
            <article key={item.title} className="rounded-xl border border-charcoal/10 bg-white/60 p-5">
              <h3 className="font-serif text-2xl text-charcoal">{item.title}</h3>
              <p className="mt-3 text-sm text-espresso/85">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4 text-espresso/70">Understand the Opportunity</p>
        <h2 className="max-w-4xl font-serif text-4xl text-charcoal">Buyer advisory informed by local expertise and discreet intelligence.</h2>
        <p className="mt-5 max-w-3xl text-espresso/85">
          Qualified buyers receive a structured decision brief covering valuation context, negotiation posture, and ownership scenarios. HAVN intelligence informs this process quietly in the background.
        </p>
      </Section>

      <Section id="inquiry" className="bg-white/40">
        <p className="eyebrow mb-4 text-espresso/70">Private Showings by Appointment</p>
        <h2 className="mb-8 font-serif text-4xl text-charcoal">Request a confidential conversation.</h2>
        <InquiryForm />
      </Section>
    </>
  );
}
