import type { Metadata } from "next";
import { Montserrat, Nixie_One, Open_Sans } from 'next/font/google'
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Vuelos Parapente en Tapalpa",
  description: "Experiencias inolvidables",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat", 
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open_sans",
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
    <html lang="en" className={`${montserrat.variable} ${nixie_one.variable} ${open_sans.variable}`}>
      <body>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
