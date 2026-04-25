import { InquiryForm } from "@/components/InquiryForm";
import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <Section>
      <p className="eyebrow mb-4 text-espresso/70">Contact</p>
      <h1 className="font-serif text-5xl text-charcoal">Private consultation and showing inquiries.</h1>
      <p className="mt-5 max-w-3xl text-espresso/85">
        Share your objectives and timeline. A representative will respond with a private next-step brief.
      </p>
      <div className="mt-10 max-w-4xl">
        <InquiryForm />
      </div>
    </Section>
  );
}
