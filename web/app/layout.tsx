import type { Metadata, Viewport } from "next";
import { Providers } from "../components/Providers";
import { site } from "../content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  alternates: { canonical: "/" },
  verification: { google: site.googleVerification },
  openGraph: {
    title: site.title,
    description: site.shareDescription,
    url: "/",
    siteName: site.name,
    images: [{ url: site.fallbackImage, width: 1200, height: 675, alt: site.name }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.shareDescription,
    images: [site.fallbackImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F6CBD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
