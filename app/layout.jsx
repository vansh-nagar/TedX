import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/bars/navbar";
import Footer from "@/components/bars/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TEDxBITJaipur - Ideas Worth Spreading",
  description:
    "Official TEDxBITJaipur website: Discover inspiring talks, events, and ideas worth spreading at BIT Jaipur.",
  keywords: [
    "TEDx",
    "BIT Jaipur",
    "TED Talks",
    "Inspiration",
    "Events",
    "Innovation",
    "TEDxBITJaipur",
    "TEDx Jaipur",
    "TEDx BIT Jaipur",
    "TEDx India",
    "TEDx Event",
    "TED Talks Jaipur",
    "Ideas Worth Spreading",
    "TEDx Speakers",
    "TEDxBIT",
    "TEDxBITJaipur 2026",
    "TEDx Rajasthan",
    "Jaipur Events",
    "BIT Jaipur",
    "TEDx Students",
    "TEDx College Event",
  ],
  authors: [{ name: "TEDxBITJaipur Team", url: "https://bitjaipur.ac.in" }],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#E62B1E", // TED red
  icons: {
    icon: "/vercel.svg", // Changed to vercel.svg
    shortcut: "/vercel.svg",
    apple: "/vercel.svg", // optional, for Apple devices
  },
  openGraph: {
    title: "TEDxBITJaipur - Ideas Worth Spreading",
    description:
      "Explore TEDxBITJaipur talks, events, and inspiring ideas at BIT Jaipur.",
    url: "https://tedxbitjaipur.com",
    siteName: "TEDxBITJaipur",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TEDxBITJaipur",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEDxBITJaipur - Ideas Worth Spreading",
    description:
      "Discover talks, events, and innovative ideas at TEDxBITJaipur.",
    images: ["/og-image.png"],
    site: "@TEDxBITJaipur",
    creator: "@TEDxBITJaipur",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
