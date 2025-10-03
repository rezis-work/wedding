import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ნუკი & ლევანის ქორწილი - RSVP",
  description:
    "RSVP ნუკი და ლევანის ქორწილზე - 23 ოქტომბერი, 2025, გთხოვთ შეავსოთ ფორმა ქვემოთ",
  icons: {
    icon: "/rings.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
