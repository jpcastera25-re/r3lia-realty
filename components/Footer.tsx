import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-espresso/85 md:flex-row md:items-end md:justify-between">
        <p className="font-serif text-lg text-charcoal">{site.name}</p>
        <p className="max-w-3xl">{site.footerCompliance}</p>
      </div>
    </footer>
  );
}
