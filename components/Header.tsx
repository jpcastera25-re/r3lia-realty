import Link from "next/link";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/properties/highland", label: "Highland" },
  { href: "/advisory", label: "Advisory" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10 md:py-5">
        <Link
          href="/"
          className="group inline-flex flex-col leading-none text-charcoal outline-none transition focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-brass/50"
        >
          <span className="font-serif text-2xl tracking-[0.14em]">R3LIA</span>
          <span className="mt-1 text-[10px] tracking-[0.35em] text-espresso/75 transition group-hover:text-charcoal">REALTY</span>
        </Link>

        <div className="flex items-center gap-3 md:gap-8">
          <nav className="flex items-center gap-4 text-sm text-espresso md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-sm px-0.5 py-1 text-espresso/90 transition hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-full border border-charcoal/25 px-4 py-2 text-xs uppercase tracking-[0.18em] text-charcoal transition hover:border-charcoal/45 hover:bg-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/50"
          >
            {site.navCta}
          </Link>
        </div>
      </div>
    </header>
  );
}
