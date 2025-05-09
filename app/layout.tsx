import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FadeIn from "./scrollfade";
import ClientWrapper from "./leniswrapper"; // új import

const figtree = Figtree({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-figtree',
});


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body className={`${figtree.variable} antialiased bg-[#000314] h-screen flex flex-col select-none  `}>
        <ClientWrapper /> {/* Lenis itt aktiválódik */}
        <Navbar />

        <>
          {/* Fix blur háttér – mindig az oldal alján */}
          <div className="fixed bottom-0 left-0 w-full  h-24 md:h-96 bg-blue-800  blur-3xl md:blur-[20rem] opacity-10 z-0 pointer-events-none " />

          {/* Fő tartalom */}
          <main className="relative z-10 flex-grow flex justify-center items-start pt-24">
            <div className="w-[75vw]">
              <FadeIn>{children}</FadeIn>
            </div>
          </main>
        </>


        <Footer />
      </body>
    </html>
  );
}
