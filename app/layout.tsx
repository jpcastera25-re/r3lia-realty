import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { highland } from "@/lib/properties";

const globalDescription =
  "R3LIA Realty brings thoughtful representation and practical technology to buying, selling and considering a home.";

const globalOgDescription =
  "Thoughtful representation and practical technology for clearer home decisions.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`
  },
  description: globalDescription,
  robots: { index: true, follow: true },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: globalOgDescription,
    type: "website",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: highland.currentOfferingImage,
        alt: highland.currentOfferingImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: globalOgDescription,
    images: [highland.currentOfferingImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-ivory text-espresso antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
