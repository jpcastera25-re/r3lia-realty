"use client";

import { useState } from "react";

type InquiryFormProps = {
  submitLabel?: string;
  defaultInquiryIntent?: "Private Showing" | "Seller Advisory" | "Private Consultation";
  footerNote?: string;
  sourcePage?: string;
};

type FormState = "idle" | "submitting" | "success" | "error";

const roleOptions = ["Direct Buyer", "Buyer's Agent", "Seller Inquiry", "Market Inquiry", "Other"];

const fieldClassName =
  "w-full rounded-lg border border-charcoal/20 bg-white/90 px-3 py-2.5 text-sm text-espresso shadow-sm transition placeholder:text-espresso/45 hover:border-charcoal/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/45";

export function InquiryForm({
  submitLabel = "Submit Inquiry",
  defaultInquiryIntent = "Private Consultation",
  footerNote = "Private inquiries are reviewed directly by the R3LIA team.",
  sourcePage = ""
}: InquiryFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const getValue = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)?.value ?? "";

    const payload = {
      fullName: getValue("fullName"),
      email: getValue("email"),
      phone: getValue("phone"),
      inquiryRole: getValue("inquiryRole"),
      inquiryIntent: getValue("inquiryIntent"),
      preferredShowingWindow: getValue("preferredShowingWindow"),
      message: getValue("message"),
      companyWebsite: getValue("companyWebsite"),
      sourcePage
    };

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setFormState("success");
      } else {
        const json = await res.json().catch(() => ({})) as { message?: string };
        setErrorMessage(
          json.message ?? "Something went wrong. Please email jp@r3liarealty.com directly."
        );
        setFormState("error");
      }
    } catch {
      setErrorMessage("Something went wrong. Please email jp@r3liarealty.com directly.");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="rounded-3xl border border-charcoal/15 bg-white/70 p-8 shadow-soft">
        <p className="font-serif text-2xl text-charcoal">Thank you.</p>
        <p className="mt-3 text-espresso/85">Your inquiry has been sent to the R3LIA team.</p>
      </div>
    );
  }

  const isSubmitting = formState === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl border border-charcoal/15 bg-white/70 p-6 shadow-soft md:grid-cols-2 md:p-8"
    >
      {/* Honeypot — hidden from real users */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="fullName" className="text-sm text-espresso/85">
          Full name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          className={fieldClassName}
          placeholder="Enter your full name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-espresso/85">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClassName}
          placeholder="name@email.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm text-espresso/85">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={fieldClassName}
          placeholder="(555) 555-5555"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="inquiryRole" className="text-sm text-espresso/85">
          Inquiry role
        </label>
        <select id="inquiryRole" name="inquiryRole" className={fieldClassName} defaultValue="Direct Buyer">
          {roleOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2 md:col-span-2">
        <label htmlFor="inquiryIntent" className="text-sm text-espresso/85">
          Inquiry intent
        </label>
        <select
          id="inquiryIntent"
          name="inquiryIntent"
          className={fieldClassName}
          defaultValue={defaultInquiryIntent}
        >
          <option>Private Showing</option>
          <option>Seller Advisory</option>
          <option>Private Consultation</option>
        </select>
      </div>

      <div className="space-y-2 md:col-span-2">
        <label htmlFor="preferredShowingWindow" className="text-sm text-espresso/85">
          Preferred showing window
        </label>
        <input
          id="preferredShowingWindow"
          name="preferredShowingWindow"
          type="text"
          className={fieldClassName}
          placeholder="Weekday afternoons, weekends, or specific dates"
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <label htmlFor="message" className="text-sm text-espresso/85">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={fieldClassName}
          placeholder="Share your goals, timing, and property context."
        />
      </div>

      {formState === "error" && (
        <p className="md:col-span-2 text-sm text-red-700">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-fit items-center rounded-full bg-charcoal px-6 py-2.5 text-sm text-ivory transition hover:bg-espresso disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55 md:col-span-2"
      >
        {isSubmitting ? "Sending…" : submitLabel}
      </button>

      <p className="text-xs text-espresso/70 md:col-span-2">{footerNote}</p>
    </form>
  );
}
