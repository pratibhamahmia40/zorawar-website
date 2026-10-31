import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zorawar Footwear – Kids & Ladies Footwear",
  description:
    "Zorawar Footwear – Premium kids and ladies footwear. Quality you can feel, style your family will love.",
  keywords: "kids footwear, ladies footwear, shoes, Zorawar, footwear store India",
  openGraph: {
    title: "Zorawar Footwear",
    description: "Premium kids and ladies footwear. Quality you can feel, style your family will love.",
    type: "website",
    url: "https://zorawarfootwear.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
