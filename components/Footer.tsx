import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-[#f1ebe1] px-6 py-14 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 text-sm text-espresso/85 md:grid-cols-4">

        {/* Brand */}
        <div>
          <p className="font-serif text-2xl tracking-[0.12em] text-charcoal">R3LIA</p>
          <p className="mt-1 text-[10px] tracking-[0.34em] text-espresso/70">REALTY</p>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-espresso/75">{site.tagline}</p>
        </div>

        {/* Navigation */}
        <div>
          <p className="eyebrow mb-3 text-espresso/65">Navigation</p>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="transition hover:text-charcoal">Home</Link></li>
            <li><Link href="/properties/highland" className="transition hover:text-charcoal">Highland</Link></li>
            <li><Link href="/advisory" className="transition hover:text-charcoal">Advisory</Link></li>
            <li><Link href="/intelligence" className="transition hover:text-charcoal">Intelligence</Link></li>
            <li><Link href="/contact" className="transition hover:text-charcoal">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="eyebrow mb-3 text-espresso/65">Contact</p>
          <ul className="space-y-1.5 text-xs leading-relaxed">
            <li className="font-medium text-charcoal">{site.contact.brokerName}</li>
            <li className="text-espresso/70">{site.contact.brokerTitle}</li>
            <li className="text-espresso/70">
              Listing brokerage: {site.legal.listingBrokerage}
            </li>
            <li className="mt-2">
              <a
                href={`mailto:${site.contact.email}`}
                className="transition hover:text-charcoal"
              >
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={site.contact.phoneHref}
                className="transition hover:text-charcoal"
              >
                {site.contact.phone}
              </a>
            </li>
            <li className="mt-2 text-espresso/70">{site.contact.address}</li>
            <li className="text-espresso/70">Private showings by appointment.</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="eyebrow mb-3 text-espresso/65">Legal</p>
          <p className="rounded-xl border border-charcoal/10 bg-white/45 px-4 py-3 text-xs leading-relaxed text-espresso/75">
            {site.legal.footerNotice}
          </p>
        </div>

      </div>
    </footer>
  );
}
