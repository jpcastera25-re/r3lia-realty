import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { highland } from "@/lib/properties";
import { representationPillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "R3LIA Realty is a private brokerage and advisory practice representing luxury properties with discretion, intelligence, and strategic positioning.",
  openGraph: {
    title: "R3LIA Realty | Luxury real estate, intelligently represented.",
    description:
      "Private real estate advisory for consequential residential decisions, including current offering Highland at $1,500,000.",
    url: "https://r3liarealty.com/"
  }
};

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[76vh] items-end overflow-hidden px-6 py-20 md:min-h-[90vh] md:px-10 md:py-24">
        <VisualPlaceholder className="absolute inset-0 rounded-none border-none" variant="hero" accentLabel="Private Advisory" />
        <div className="hero-ambient pointer-events-none absolute inset-0 opacity-65" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="eyebrow mb-5 text-espresso/75">{site.hero.eyebrow}</p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-charcoal md:text-6xl">{site.hero.headline}</h1>
          <p className="mt-6 max-w-2xl text-base text-espresso/90 md:text-lg">{site.hero.subheadline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={site.hero.primaryCta.href}
              className="rounded-full bg-charcoal px-6 py-3 text-sm text-ivory transition hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
            >
              {site.hero.primaryCta.label}
            </Link>
            <Link
              href={site.hero.secondaryCta.href}
              className="rounded-full border border-charcoal/25 px-6 py-3 text-sm text-charcoal transition hover:bg-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
            >
              {site.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <Section className="pt-20 md:pt-28">
        <p className="eyebrow mb-5 text-espresso/70">Current Offering</p>
        <div className="grid items-center gap-8 rounded-3xl border border-charcoal/10 bg-white/45 p-6 shadow-soft md:grid-cols-[1fr,1.3fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-espresso/70">{highland.id}</p>
            <h2 className="mt-3 font-serif text-5xl text-charcoal md:text-6xl">{highland.name}</h2>
            <p className="mt-4 text-lg text-espresso">Offered at {highland.price}</p>
            <Link
              href="/properties/highland"
              className="mt-8 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm text-ivory transition hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
            >
              View Highland Offering
            </Link>
          </div>
          <VisualPlaceholder className="min-h-[24rem]" variant="cinematic" accentLabel="001" />
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-5 text-espresso/70">Representation with Intention</p>
        <div className="grid gap-6 md:grid-cols-3">
          {representationPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-charcoal/10 bg-white/55 p-7 shadow-soft transition hover:-translate-y-0.5"
            >
              <h3 className="font-serif text-2xl text-charcoal">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-espresso/85">{pillar.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white/35">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4 text-espresso/70">Designed to Make a Property Feel Rare</p>
            <h2 className="font-serif text-4xl text-charcoal">
              Seller representation designed to protect value before the market ever sees the property.
            </h2>
            <p className="mt-5 text-espresso/85">
              R3LIA develops narrative-led campaigns with controlled release strategy, refined communication, and editorial presentation so the right buyers engage at the right moment.
            </p>
          </div>
          <VisualPlaceholder className="min-h-[23rem]" variant="editorial" accentLabel="Seller Strategy" />
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4 text-espresso/70">Powered by Better Decisions</p>
        <div className="rounded-3xl border border-brass/30 bg-brass/10 p-8 md:p-10">
          <h2 className="font-serif text-3xl text-charcoal">Intelligence in service of private advisory.</h2>
          <p className="mt-4 max-w-3xl text-espresso/85">
            R3LIA advisory is quietly supported by HAVN decision intelligence, helping organize market context, pricing signals, and communication strategy behind the scenes.
          </p>
          <Link
            href="/intelligence"
            className="mt-6 inline-flex text-sm text-charcoal underline decoration-brass underline-offset-4 transition hover:text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/50"
          >
            Explore the intelligence layer
          </Link>
        </div>
      </Section>

      <Section className="pb-20 md:pb-28">
        <p className="eyebrow mb-4 text-espresso/70">About R3LIA</p>
        <h2 className="max-w-4xl font-serif text-4xl text-charcoal md:text-5xl">
          A private brokerage practice for consequential residential decisions.
        </h2>
        <p className="mt-6 max-w-3xl text-espresso/85">
          R3LIA Realty represents discerning sellers and buyers with a disciplined blend of storytelling, structured strategy, and calm execution.
        </p>
      </Section>
    </>
  );
}
