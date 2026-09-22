import type { Metadata } from "next";
import "./globals.css";
import SiteMotion from './site-motion';

export const metadata: Metadata = {
  title: {default: "Wassermech | Piping, Drainage & Sanitary Solutions", template: "%s | Wassermech"},
  description: "Wassermech Middle East LLC supplies European piping, drainage and sanitary systems across the UAE. Explore Peštan, Coestilen, Aerator HDPE, Future, Confluo, Fluenta and KAJ.",
  icons: {
    icon: "/assets/wassermech-mark.png",
    shortcut: "/assets/wassermech-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}<SiteMotion/></body>
    </html>
  );
}
