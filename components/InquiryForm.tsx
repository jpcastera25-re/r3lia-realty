export function InquiryForm() {
  return (
    <form className="grid gap-4 rounded-2xl border border-charcoal/15 bg-white/60 p-6 shadow-soft md:grid-cols-2">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm text-espresso/80">
          Full name
        </label>
        <input id="name" name="name" type="text" className="w-full rounded-md border border-charcoal/20 bg-white px-3 py-2" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-espresso/80">
          Email
        </label>
        <input id="email" name="email" type="email" className="w-full rounded-md border border-charcoal/20 bg-white px-3 py-2" />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm text-espresso/80">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className="w-full rounded-md border border-charcoal/20 bg-white px-3 py-2" />
      </div>
      <div className="space-y-2">
        <label htmlFor="intent" className="text-sm text-espresso/80">
          Inquiry intent
        </label>
        <select id="intent" name="intent" className="w-full rounded-md border border-charcoal/20 bg-white px-3 py-2">
          <option>Private Showing</option>
          <option>Seller Advisory</option>
          <option>Private Consultation</option>
        </select>
      </div>
      <div className="space-y-2 md:col-span-2">
        <label htmlFor="message" className="text-sm text-espresso/80">
          Message
        </label>
        <textarea id="message" name="message" rows={5} className="w-full rounded-md border border-charcoal/20 bg-white px-3 py-2" />
      </div>
      <button
        type="submit"
        className="md:col-span-2 inline-flex w-fit items-center rounded-md bg-charcoal px-5 py-2.5 text-sm text-ivory transition hover:bg-espresso"
      >
        Submit Inquiry
      </button>
      <p className="md:col-span-2 text-xs text-espresso/70">
        Placeholder form only. CRM routing and compliance disclosures will be added before launch.
      </p>
    </form>
  );
}
