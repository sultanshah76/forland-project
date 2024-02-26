import type { Metadata } from "next";
import { Sora, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";


const roboto = Sora({
  weight: '400',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "  FORLAND INDUSTRIAL SPORTS",
  description: "CREATED BY sultanshah_010(instagram id)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${roboto.className}`}>
        <Header/>
        <main className="px-28 ">
        {children}
        </main>
        <Footer/>
        </body>

    </html>
  );
}
