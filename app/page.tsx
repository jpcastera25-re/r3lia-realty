import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { highland } from "@/lib/properties";
import { representationPillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    site.hero.subheadline,
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      site.hero.subheadline,
    url: "/",
    images: [
      {
        url: highland.currentOfferingImage,
        alt: highland.currentOfferingImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description:
      site.hero.subheadline,
    images: [highland.currentOfferingImage]
  }
};

export default function Home() {
  return (
    <>
      {/* Hero — two-column editorial */}
      <section className="px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">

            {/* Left: copy and CTAs */}
            <div>
              <p className="eyebrow mb-5 text-espresso/70">{site.hero.eyebrow}</p>
              <h1 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
                {site.hero.headline}
              </h1>
              <p className="mt-6 text-base text-espresso/85 md:text-lg">{site.hero.subheadline}</p>
              <div className="mt-8 flex flex-wrap gap-4">
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

            {/* Right: brand image panel */}
            <div className="relative min-h-[22rem] overflow-hidden rounded-3xl border border-charcoal/10 shadow-soft md:min-h-[36rem]">
              <Image
                src={highland.homepageBrandImage}
                alt={highland.homepageBrandImageAlt}
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block rounded-full border border-charcoal/20 bg-ivory/85 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-charcoal/70 backdrop-blur-sm">
                  Private Offering 001 · Highland
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HAVN — built by R3LIA */}
      <Section className="bg-white/35">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4 text-espresso/70">{site.havn.eyebrow}</p>
            <h2 className="font-serif text-2xl text-charcoal md:text-4xl">{site.havn.headline}</h2>
            <p className="mt-5 text-espresso/85">
              {site.havn.operatorStatement}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-espresso/85">Organize homes, understand tradeoffs and decide what comes next, alongside the agent who invited you. Outside agents keep their own brokerage affiliation and relationship with their buyers.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/havn"
                className="rounded-full bg-charcoal px-6 py-3 text-sm text-ivory transition hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
              >
                About HAVN
              </Link>
              <a
                href={site.havn.url}
                className="rounded-full border border-charcoal/25 px-6 py-3 text-sm text-charcoal transition hover:bg-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
              >
                havnway.com
              </a>
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-charcoal/15 bg-ivory p-8 shadow-soft md:p-10">
            <p className="font-serif text-3xl tracking-[0.18em] text-charcoal">HAVN</p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-espresso/85">
              {site.havn.forAgents.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Representation pillars */}
      <Section>
        <p className="eyebrow mb-5 text-espresso/70">Brokerage services</p>
        <div className="grid gap-6 md:grid-cols-3">
          {representationPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-charcoal/10 bg-white/55 p-7 shadow-soft transition hover:-translate-y-0.5"
            >
              <h2 className="font-serif text-2xl text-charcoal">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-espresso/85">{pillar.description}</p>
            </article>
          ))}
        </div>
        <Link href="/advisory" className="mt-6 inline-flex text-sm text-charcoal underline decoration-brass underline-offset-4">Explore buying, selling and planning</Link>
      </Section>

      {/* Current Offering */}
      <Section className="pt-10 md:pt-14">
        <p className="eyebrow mb-5 text-espresso/70">Current Offering</p>
        <div className="grid items-center gap-8 rounded-3xl border border-charcoal/10 bg-white/45 p-6 shadow-soft md:grid-cols-[1fr,1.3fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-espresso/70">{highland.id}</p>
            <h2 className="mt-3 font-serif text-5xl text-charcoal md:text-6xl">{highland.name}</h2>
            <p className="mt-4 text-lg text-espresso">Offered at {highland.price}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-espresso/75">
              {highland.rentalOffering}
            </p>
            <Link
              href="/properties/highland"
              className="mt-8 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm text-ivory transition hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
            >
              View Highland Offering
            </Link>
          </div>
          <VisualPlaceholder
            src={highland.currentOfferingImage}
            alt={highland.currentOfferingImageAlt}
            objectPosition="center"
            className="min-h-[24rem]"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>
        <p className="mt-3 text-xs text-espresso/50">
          {highland.marketingDisclosure} {highland.stagingDisclosure} Full presentation notes available on the{" "}
          <Link
            href="/properties/highland"
            className="underline decoration-espresso/30 underline-offset-2 hover:text-espresso/70"
          >
            Highland offering page
          </Link>
          .
        </p>
      </Section>

      <Section className="bg-white/35 pb-20 md:pb-28">
        <p className="eyebrow mb-4 text-espresso/70">Our evolution</p>
        <h2 className="max-w-4xl font-serif text-3xl text-charcoal md:text-4xl">A broader identity. The same focus on better decisions.</h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-espresso/85">
          Rate Rebate Realty began with a simple goal: help buyers understand their options and keep more value in their purchase. As our work expanded, we adopted R3LIA Realty as our registered trade name, bringing real estate representation and practical technology under one broader identity. HAVN grew from that work: a workspace where buyers and their agents can organize homes, understand tradeoffs, and decide what comes next.
        </p>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-espresso/75">{site.legal.licenseLine}</p>
        <div className="mt-6 flex flex-wrap gap-6 text-sm">
          <a href="https://raterebaterealty.com" className="text-charcoal underline decoration-brass underline-offset-4">Explore Rate Rebate Realty</a>
          <Link href="/intelligence" className="text-charcoal underline decoration-brass underline-offset-4">How we approach home decisions</Link>
        </div>
      </Section>
    </>
  );
}
