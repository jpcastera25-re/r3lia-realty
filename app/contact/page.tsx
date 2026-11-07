import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a private consultation with R3LIA Realty for buyer, seller, and market inquiries.",
  openGraph: {
    title: "Contact | R3LIA Realty",
    description: "Begin a private conversation with R3LIA Realty.",
    url: "https://r3liarealty.com/contact"
  }
};

export default function ContactPage() {
  return (
    <Section>
      <p className="eyebrow mb-4 text-espresso/70">Contact</p>
      <h1 className="font-serif text-5xl text-charcoal">Begin a private conversation.</h1>
      <p className="mt-5 max-w-3xl text-espresso/85">
        Tell us whether you are buying, selling or considering a move, and share your priorities and timing.
      </p>
      <div className="mt-6 max-w-3xl space-y-2 text-sm leading-relaxed text-espresso/85">
        <p>{site.legal.licenseLine}</p>
        <p>{site.contact.brokerName}, {site.contact.brokerTitle} · {site.legal.licensedName}</p>
        <p><a href={`mailto:${site.contact.email}`} className="underline decoration-brass underline-offset-4">{site.contact.email}</a>{" · "}<a href={site.contact.phoneHref} className="underline decoration-brass underline-offset-4">{site.contact.phone}</a></p>
        <p>{site.contact.address}</p>
      </div>
      <div className="mt-10 max-w-4xl">
        <InquiryForm
          submitLabel="Begin Private Conversation"
          sourcePage="Contact page"
          footerNote="Private inquiries are reviewed directly by the R3LIA team."
        />
      </div>
    </Section>
  );
}
