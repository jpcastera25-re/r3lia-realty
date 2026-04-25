import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/Section";
import { highland } from "@/lib/properties";
import { representationPillars, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-end overflow-hidden px-6 py-20 md:px-10">
        <Image
          src="/images/placeholders/hero-home.svg"
          alt="R3LIA advisory hero"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="eyebrow mb-5 text-espresso/75">{site.hero.eyebrow}</p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-charcoal md:text-6xl">
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-espresso/90 md:text-lg">{site.hero.subheadline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={site.hero.primaryCta.href} className="rounded-md bg-charcoal px-5 py-3 text-sm text-ivory transition hover:bg-espresso">
              {site.hero.primaryCta.label}
            </Link>
            <Link href={site.hero.secondaryCta.href} className="rounded-md border border-charcoal/25 px-5 py-3 text-sm text-charcoal transition hover:bg-charcoal/5">
              {site.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <p className="eyebrow mb-4 text-espresso/70">Current Offering</p>
        <div className="grid items-center gap-8 rounded-2xl border border-charcoal/10 bg-white/40 p-8 shadow-soft md:grid-cols-2">
          <div>
            <p className="text-sm text-espresso/70">{highland.id}</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal">{highland.name}</h2>
            <p className="mt-4 text-lg text-espresso">Offered at {highland.price}</p>
            <Link href="/properties/highland" className="mt-8 inline-flex rounded-md bg-charcoal px-5 py-3 text-sm text-ivory transition hover:bg-espresso">
              View Highland Offering
            </Link>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-xl">
            <Image src="/images/placeholders/highland-card.svg" alt="Highland private offering" fill className="object-cover" />
          </div>
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4 text-espresso/70">Representation with Intention</p>
        <div className="grid gap-6 md:grid-cols-3">
          {representationPillars.map((pillar) => (
            <article key={pillar.title} className="rounded-xl border border-charcoal/10 bg-white/50 p-6">
              <h3 className="font-serif text-2xl text-charcoal">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-espresso/85">{pillar.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white/40">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4 text-espresso/70">Designed to Make a Property Feel Rare</p>
            <h2 className="font-serif text-4xl text-charcoal">Seller representation built for long-term brand equity.</h2>
            <p className="mt-5 text-espresso/85">
              R3LIA develops narrative-led campaigns that combine editorial positioning, refined visuals, and strategic release timing to attract aligned buyers without sacrificing discretion.
            </p>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-xl">
            <Image src="/images/placeholders/seller-marketing.svg" alt="Seller marketing" fill className="object-cover" />
          </div>
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4 text-espresso/70">Powered by Better Decisions</p>
        <div className="rounded-2xl border border-brass/30 bg-brass/10 p-8">
          <h2 className="font-serif text-3xl text-charcoal">Advisory strengthened by HAVN decision intelligence.</h2>
          <p className="mt-4 max-w-3xl text-espresso/85">
            HAVN quietly augments pricing, timing, and negotiation analysis so R3LIA guidance stays clear, grounded, and strategic in complex market conditions.
          </p>
          <Link href="/intelligence" className="mt-6 inline-flex text-sm text-charcoal underline decoration-brass underline-offset-4">
            Explore the intelligence layer
          </Link>
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4 text-espresso/70">About R3LIA</p>
        <h2 className="max-w-4xl font-serif text-4xl text-charcoal md:text-5xl">
          A modern brokerage and advisory practice for high-context residential decisions.
        </h2>
        <p className="mt-6 max-w-3xl text-espresso/85">
          R3LIA Realty represents discerning sellers and buyers with a disciplined blend of storytelling, structured strategy, and calm execution.
        </p>
      </Section>
    </>
  );
}
