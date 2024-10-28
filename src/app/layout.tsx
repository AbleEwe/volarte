import type { Metadata } from "next";
import { Montserrat, Nixie_One } from 'next/font/google'
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Vuelos Parapente Talapla",
  description: "Experiencias inolvidables",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat", 
});

const nixie_one = Nixie_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nixie_one", 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${nixie_one.variable}`}>
      <NavBar />
      <body>
        {children}
      </body>
      <Footer/>
    </html>
  );
}
