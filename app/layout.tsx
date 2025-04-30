import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { openSans } from "@/components/fonts";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Mother's Day Tribute Blog | Celebrating Moms Everywhere",
    template: "%s | Mother's Day Tribute Blog",
  },
  description:
    "Discover heartwarming Mother's Day tributes, inspiring stories, health tips, and articles celebrating mothers. Explore featured stories, browse categories, and share the love.",
  keywords: [
    "Mother's Day",
    "mom tribute",
    "mother stories",
    "celebrating moms",
    "inspiration for mothers",
    "motherhood blog",
    "family love",
    "parenting articles",
    "maternal health",
  ],
  applicationName: "Mother's Day Tribute Blog",
  // authors: [{ name: 'Your Blog Name or Your Name', url: siteUrl }], // Optional: Add author info
  // creator: 'Your Name or Company', // Optional: Specify the creator
  // publisher: 'Your Blog Name or Publisher', // Optional: Specify the publisher

  // // **Robots and Indexing**
  // robots: {
  //   index: true, // Allow search engines to index the site
  //   follow: true, // Allow search engines to follow links
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },

  // **Open Graph (Facebook, LinkedIn, etc.)**
  // openGraph: {
  //   title: 'Mother\'s Day Tribute Blog | Celebrating Moms Everywhere',
  //   description: 'Explore heartwarming tributes, stories, and inspiration celebrating mothers everywhere on our dedicated blog.',
  //   url: siteUrl, // Canonical URL of the homepage
  //   siteName: 'Mother\'s Day Tribute Blog',
  //   images: [
  //     {
  //       url: ogImageUrl, // Your primary OG image
  //       width: 1200,
  //       height: 630,
  //       alt: 'Banner for the Mother\'s Day Tribute Blog',
  //     },
  //     // You can add more images if needed
  //   ],
  //   locale: 'en_US', // Set the locale
  //   type: 'website', // Type for the homepage
  // },

  // // **Twitter Card**
  // twitter: {
  //   card: 'summary_large_image', // Use 'summary_large_image' for richer display with image
  //   title: 'Mother\'s Day Tribute Blog | Celebrating Moms Everywhere',
  //   description: 'Discover heartwarming Mother\'s Day tributes, inspiring stories, and articles celebrating mothers.',
  //   // site: '@yourTwitterHandle', // Optional: Your site's Twitter handle
  //   // creator: '@creatorTwitterHandle', // Optional: Creator's Twitter handle
  //   // images: [twitterImageUrl], // URL of the Twitter card image
  // },

  // // **Other Useful Metadata**
  // metadataBase: new URL(siteUrl), // Base URL for resolving relative image paths etc.
  // alternates: {
  //   canonical: '/', // Canonical path for the homepage relative to metadataBase
  //   // languages: { // If you have multiple language versions
  //   //   'en-US': '/en-US',
  //   //   'es-ES': '/es-ES',
  //   // },
  // },
  // icons: { // Optional: Favicons etc.
  //   icon: '/favicon.ico',
  //   shortcut: '/shortcut-icon.png',
  //   apple: '/apple-icon.png',
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/apple-touch-icon-precomposed.png',
  //   },
  // },
  // manifest: '/site.webmanifest', // Optional: Link to your web app manifest
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
