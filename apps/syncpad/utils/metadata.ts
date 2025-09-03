import { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://syncpad.xyz"),
  title: {
    default: "syncpad | Hand-drawn look & feel • Collaborative • Secure",
    template: "%s | syncpad",
  },
  description:
    "syncpad is a secure, end-to-end encrypted collaborative whiteboard tool that lets you draw and brainstorm together in real time.",
  keywords: [
    "collaborative drawing",
    "online whiteboard",
    "real-time canvas",
    "digital whiteboard",
    "end-to-end encrypted whiteboard",
  ],
  authors: [{ name: "Om Sharma" }],
  creator: "Om Sharma",
  publisher: "syncpad",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syncpad.xyz",
    title: "syncpad — Collaborative whiteboarding made easy",
    description:
      "syncpad is a virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.",
    siteName: "syncpad",
    images: [
      {
        url: "/brand/syncpad1.png",
        width: 1349,
        height: 767,
        alt: "syncpad - Collaborative Drawing Tool UI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "syncpad — Collaborative whiteboarding made easy",
    description:
      "syncpad is a virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.",
    creator: "@1omsharma",
    images: ["/brand/syncpad1.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-site-verification-code",
  },

  alternates: {
    canonical: "https://syncpad.xyz",
  },

  icons: {
    icon: [
      { url: "/brand/favicon.png" },
      { url: "/brand/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: [{ url: "/brand/favicon.png" }],
  },

  other: {
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
  },
};

// Optional: page-specific
export const generateRoomMetadata: Metadata = {
  title: "Join Room | syncpad",
  description:
    "Join a secure, end-to-end encrypted drawing room. Collaborate in real-time with others. No login required.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Join Room | syncpad",
    description:
      "Join a secure, end-to-end encrypted drawing room. Collaborate in real-time with others. No login required.",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Join Room | syncpad",
  },
};

// Structured Data (JSON-LD)
export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "syncpad",
  url: "https://syncpad.xyz",
  description: "End-to-end encrypted real-time collaborative drawing tool",
  applicationCategory: "Productivity",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};
