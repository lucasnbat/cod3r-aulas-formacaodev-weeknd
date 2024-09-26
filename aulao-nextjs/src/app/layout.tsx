import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google"; // importe a fonte

export const metadata: Metadata = {
  title: "Next.js Essencial",
  description: "Aulão Next.js",
};

// guarda config. numa var
const font = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
