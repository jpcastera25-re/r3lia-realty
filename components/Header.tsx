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
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link href="/" className="font-serif text-xl tracking-wide text-charcoal">
          {site.name}
        </Link>
        <nav className="flex items-center gap-4 text-sm text-espresso md:gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-charcoal">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
