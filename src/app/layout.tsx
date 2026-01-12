import type { Metadata } from "next";
import { Bangers, Comic_Neue, Courier_Prime } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
  display: "swap",
});

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  variable: "--font-comic-neue",
  subsets: ["latin"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  variable: "--font-courier-prime",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dharun Prasanth | Data Science Portfolio",
  description: "MSc Data Science student at University of Glasgow. Building production RAG systems, NLP infrastructure, and APIs. Explore my comic-style portfolio.",
  keywords: ["Data Science", "RAG", "NLP", "Python", "FastAPI", "LangChain", "Machine Learning"],
  authors: [{ name: "Dharun Prasanth S" }],
  openGraph: {
    title: "Dharun Prasanth | Data Science Portfolio",
    description: "MSc Data Science student building production AI systems. RAG pipelines, NLP APIs, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bangers.variable} ${comicNeue.variable} ${courierPrime.variable} antialiased`}
      >
        <Navbar />
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
