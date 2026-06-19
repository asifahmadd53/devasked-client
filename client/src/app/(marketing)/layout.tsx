import { Geist_Mono, Montserrat } from "next/font/google";
import "../globals.css";
import { HeroHeader } from "@/components/layout/Navbar";
import { FooterBlock } from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-subtle">
            <HeroHeader/>
            <div className={`${montserrat.variable} ${geistMono.variable} h-full antialiased min-h-full flex flex-col`}>
                {children}
            </div>
            <FooterBlock/>
        </div>
    )
}