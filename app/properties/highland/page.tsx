import type { Metadata } from "next";
import Image from "next/image";
import { InquiryForm } from "@/components/InquiryForm";
import { Section } from "@/components/Section";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { highland } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Highland",
  description: "Private Offering 001: Highland, an oceanfront residence offered at $1,500,000.",
  openGraph: {
    title: "Highland | Private Offering 001",
    description: "An oceanfront residence offered at $1,500,000 with discreet buyer guidance by R3LIA Realty.",
    url: "https://r3liarealty.com/properties/highland"
  }
};

const section = (key: string) => highland.gallery.find((s) => s.key === key)!;

export default function HighlandPage() {
  const coastal = section("coastal-setting");
  const living = section("living-dining");
  const kitchen = section("kitchen");
  const suite = section("primary-suite");
  const balcony = section("views-balcony");
  const grounds = section("grounds-beach");
  const amenities = section("amenities");

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[76vh] items-end overflow-hidden px-6 py-20 md:min-h-[90vh] md:px-10">
        <div className="absolute inset-0">
          <Image
            src={highland.heroImage}
            alt={highland.heroImageAlt}
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
            sizes="100vw"
          />
        </div>
        <div className="hero-ambient pointer-events-none absolute inset-0 opacity-50" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="eyebrow mb-5 text-espresso/75">{highland.id}</p>
          <h1 className="font-serif text-5xl text-charcoal md:text-7xl">{highland.name}</h1>
          <p className="mt-5 max-w-2xl text-lg text-espresso/90">{highland.heroSubtitle}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-espresso/75">{highland.heroDescription}</p>
          <a
            href="#inquiry"
            className="mt-8 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm text-ivory transition hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
          >
            Request Private Showing
          </a>
        </div>
      </section>

      {/* Snapshot bar */}
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

      {/* Residence narrative */}
      <Section>
        <p className="eyebrow mb-4 text-espresso/70">The Residence</p>
        <p className="max-w-4xl font-serif text-3xl leading-relaxed text-charcoal md:text-4xl">
          {highland.narrative}
        </p>
      </Section>

      {/* Gallery */}
      <Section>
        <div className="space-y-14 md:space-y-20">

          {/* A. Coastal Setting — wide cinematic + beach-approach with text */}
          <article>
            <h2 className="mb-5 font-serif text-3xl text-charcoal">{coastal.title}</h2>
            <VisualPlaceholder
              src={coastal.images[0].src}
              alt={coastal.images[0].alt}
              objectPosition={coastal.images[0].objectPosition}
              className="min-h-[22rem] md:min-h-[38rem]"
              sizes="100vw"
            />
            <div className="mt-4 grid items-center gap-6 md:grid-cols-[1.4fr,1fr]">
              <VisualPlaceholder
                src={coastal.images[1].src}
                alt={coastal.images[1].alt}
                objectPosition={coastal.images[1].objectPosition}
                className="min-h-[16rem]"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <p className="text-sm leading-relaxed text-espresso/80">{coastal.note}</p>
            </div>
          </article>

          {/* B. Living & Dining — strong editorial full-width */}
          <article>
            <h2 className="mb-5 font-serif text-3xl text-charcoal">{living.title}</h2>
            <VisualPlaceholder
              src={living.images[0].src}
              alt={living.images[0].alt}
              objectPosition={living.images[0].objectPosition}
              className="min-h-[24rem] md:min-h-[36rem]"
              sizes="100vw"
            />
            {living.note && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-espresso/75">{living.note}</p>
            )}
          </article>

          {/* C. Kitchen — image + text spread */}
          <article className="grid items-center gap-6 rounded-3xl border border-charcoal/10 bg-white/35 p-5 md:grid-cols-[1.4fr,1fr] md:p-8">
            <VisualPlaceholder
              src={kitchen.images[0].src}
              alt={kitchen.images[0].alt}
              objectPosition={kitchen.images[0].objectPosition}
              className="min-h-[22rem]"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div>
              <h2 className="font-serif text-3xl text-charcoal">{kitchen.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-espresso/85">{kitchen.note}</p>
            </div>
          </article>

          {/* D. Primary Suite — text + main image, then 2-col supporting */}
          <article>
            <div className="grid items-center gap-6 md:grid-cols-[1fr,1.4fr]">
              <div>
                <h2 className="font-serif text-3xl text-charcoal">{suite.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-espresso/85">{suite.note}</p>
              </div>
              <VisualPlaceholder
                src={suite.images[0].src}
                alt={suite.images[0].alt}
                objectPosition={suite.images[0].objectPosition}
                className="min-h-[26rem]"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <VisualPlaceholder
                src={suite.images[1].src}
                alt={suite.images[1].alt}
                objectPosition={suite.images[1].objectPosition}
                className="min-h-[20rem]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <VisualPlaceholder
                src={suite.images[2].src}
                alt={suite.images[2].alt}
                objectPosition={suite.images[2].objectPosition}
                className="min-h-[20rem]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </article>

          {/* E. Views & Balcony — cinematic full-width */}
          <article>
            <h2 className="mb-5 font-serif text-3xl text-charcoal">{balcony.title}</h2>
            <VisualPlaceholder
              src={balcony.images[0].src}
              alt={balcony.images[0].alt}
              objectPosition={balcony.images[0].objectPosition}
              className="min-h-[24rem] md:min-h-[34rem]"
              sizes="100vw"
            />
            {balcony.note && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-espresso/75">{balcony.note}</p>
            )}
          </article>

          {/* F. Grounds & Beach Access — two-column pair */}
          <article>
            <h2 className="mb-5 font-serif text-3xl text-charcoal">{grounds.title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {grounds.images.map((img) => (
                <VisualPlaceholder
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  objectPosition={img.objectPosition}
                  className="min-h-[22rem]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ))}
            </div>
            {grounds.note && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-espresso/75">{grounds.note}</p>
            )}
          </article>

          {/* G. Amenities — 2×2 / 4-col grid */}
          <article>
            <h2 className="mb-5 font-serif text-3xl text-charcoal">{amenities.title}</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {amenities.images.map((img) => (
                <VisualPlaceholder
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  objectPosition={img.objectPosition}
                  className="min-h-[14rem] md:min-h-[16rem]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1200px) 25vw, 300px"
                />
              ))}
            </div>
          </article>

        </div>

        {/* Staging disclosure */}
        <p className="mt-10 text-xs leading-relaxed text-espresso/55">
          {highland.stagingDisclosure}
        </p>
      </Section>

      {/* What Makes It Rare */}
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

      {/* Buyer advisory */}
      <Section>
        <p className="eyebrow mb-4 text-espresso/70">Understand the Opportunity</p>
        <h2 className="max-w-4xl font-serif text-4xl text-charcoal">
          Private buyer guidance for the Highland opportunity.
        </h2>
        <p className="mt-5 max-w-3xl text-espresso/85">{highland.buyerAdvisoryNote}</p>
      </Section>

      {/* Inquiry form */}
      <Section id="inquiry" className="bg-white/40">
        <p className="eyebrow mb-4 text-espresso/70">Private Showings by Appointment</p>
        <h2 className="mb-8 font-serif text-4xl text-charcoal">Request a private showing.</h2>
        <InquiryForm
          submitLabel="Request Private Showing"
          defaultInquiryIntent="Private Showing"
          footerNote="Private inquiries are reviewed directly by the R3LIA team. Showings are available by appointment."
        />
      </Section>
    </>
  );
}
