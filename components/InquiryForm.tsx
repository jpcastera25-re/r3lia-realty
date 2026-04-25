type InquiryFormProps = {
  submitLabel?: string;
};

const roleOptions = ["Direct Buyer", "Buyer’s Agent", "Seller Inquiry", "Market Inquiry", "Other"];

export function InquiryForm({ submitLabel = "Submit Inquiry" }: InquiryFormProps) {
  const fieldClassName =
    "w-full rounded-lg border border-charcoal/20 bg-white/90 px-3 py-2.5 text-sm text-espresso shadow-sm transition placeholder:text-espresso/45 hover:border-charcoal/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/45";

  return (
    <form className="grid gap-5 rounded-3xl border border-charcoal/15 bg-white/70 p-6 shadow-soft md:grid-cols-2 md:p-8">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm text-espresso/85">
          Full name
        </label>
        <input id="name" name="name" type="text" className={fieldClassName} placeholder="Enter your full name" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-espresso/85">
          Email
        </label>
        <input id="email" name="email" type="email" className={fieldClassName} placeholder="name@email.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm text-espresso/85">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={fieldClassName} placeholder="(555) 555-5555" />
      </div>
      <div className="space-y-2">
        <label htmlFor="role" className="text-sm text-espresso/85">
          Inquiry role
        </label>
        <select id="role" name="role" className={fieldClassName} defaultValue="Direct Buyer">
          {roleOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2 md:col-span-2">
        <label htmlFor="intent" className="text-sm text-espresso/85">
          Inquiry intent
        </label>
        <select id="intent" name="intent" className={fieldClassName} defaultValue="Private Consultation">
          <option>Private Showing</option>
          <option>Seller Advisory</option>
          <option>Private Consultation</option>
        </select>
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
      <button
        type="submit"
        className="md:col-span-2 inline-flex w-fit items-center rounded-full bg-charcoal px-6 py-2.5 text-sm text-ivory transition hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/55"
      >
        {submitLabel}
      </button>
      <p className="md:col-span-2 text-xs text-espresso/70">
        Placeholder form only. CRM routing and compliance disclosures will be added before launch.
      </p>
    </form>
  );
}
