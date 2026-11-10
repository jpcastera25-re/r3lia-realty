import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "HAVN",
  description:
    site.havn.operatorStatement,
  openGraph: {
    title: "HAVN | Built by R3LIA Realty",
    description:
      site.havn.operatorStatement,
    url: "https://r3liarealty.com/havn"
  }
};

export default function HavnPage() {
  const { havn } = site;
  return (
    <>
      <Section>
        <p className="eyebrow mb-4 text-espresso/70">{havn.eyebrow}</p>
        <h1 className="max-w-4xl font-serif text-4xl text-charcoal md:text-5xl">{havn.headline}</h1>
        <p className="mt-6 max-w-3xl text-espresso/85">{havn.summary}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={havn.cta.href}
            className="rounded-full bg-charcoal px-6 py-3 text-sm text-ivory transition hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
          >
            {havn.cta.label}
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-charcoal/25 px-6 py-3 text-sm text-charcoal transition hover:bg-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
          >
            Contact the brokerage
          </Link>
        </div>
      </Section>

      <Section className="bg-white/35">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow mb-4 text-espresso/70">For home buyers</p>
            <h2 className="font-serif text-2xl text-charcoal md:text-3xl">A place to think through a home.</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-espresso/85">
              {havn.forBuyers.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-brass/30 bg-brass/10 p-8 md:p-10">
            <h2 className="font-serif text-2xl text-charcoal">Availability</h2>
            <p className="mt-4 text-sm leading-relaxed text-espresso/85">{havn.availability}</p>
            <p className="mt-5 text-sm">
              <a href={`mailto:${site.contact.email}`} className="underline decoration-brass underline-offset-4 transition hover:text-charcoal">
                {site.contact.email}
              </a>
            </p>
          </div>
        </div>
      </Section>

      <Section className="pb-20 md:pb-28">
        <p className="eyebrow mb-4 text-espresso/70">Who operates HAVN</p>
        <h2 className="max-w-4xl font-serif text-2xl text-charcoal md:text-3xl">
          The brokerage behind the workspace.
        </h2>
        <p className="mt-5 max-w-3xl text-espresso/85">
          {havn.operatorStatement}
        </p>
        <p className="mt-4 max-w-3xl text-xs text-espresso/70">{site.legal.licenseLine}</p>
        <h2 className="mt-10 font-serif text-2xl text-charcoal">Agent visibility and privacy</h2>
        <p className="mt-4 max-w-3xl text-espresso/85">
          Agents can see saved homes, comparisons, activity and requests or questions a buyer chooses to send them.
          They cannot read the text of a buyer&rsquo;s private notes or Ask HAVN conversations.
          HAVN staff may access workspace data when needed to operate the service, fix problems or respond to security issues.
          See HAVN&rsquo;s{" "}
          <a href={`${havn.url}/privacy`} className="underline decoration-brass underline-offset-4 transition hover:text-charcoal">
            Privacy Policy
          </a>{" "}
          for how information is handled.
        </p>
        <h2 className="mt-10 font-serif text-2xl text-charcoal">Listing information</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-espresso/85">
          Home listings carry their own source and brokerage disclosures. Listings shown in HAVN identify the listing
          brokerage and how to reach it. Information is deemed reliable but not guaranteed and should be independently
          verified.
        </p>
      </Section>
    </>
  );
}
