import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formação · Adoração · Alcance | Felipe Guerra",
  description: "Uma nova forma de construir ministério. Formação, Adoração, Alcance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
