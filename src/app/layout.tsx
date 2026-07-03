import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/components/lang-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Karla Molina · UGC / SMM",
  description:
    "Karla Molina — Creative & UGC Strategist, UGC Creator y Social Media Manager en Barcelona. Tu marca no necesita más contenido, necesita mejor contenido.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${openSans.variable} antialiased`}
    >
      <body>
        <LangProvider>
          <Nav />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
