import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FadeIn from "./scrollfade";
import ClientWrapper from "./leniswrapper"; // új import

const figtree = Figtree({
  variable: "--font-figtree"
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body className={`${figtree.variable} antialiased bg-neutral-900 h-screen flex flex-col select-none`}>
        <ClientWrapper /> {/* Lenis itt aktiválódik */}
        <Navbar />

        <main className="flex-grow flex justify-center items-start pt-24">
          <div className="w-[70vw]">
            <FadeIn>{children}</FadeIn>
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
