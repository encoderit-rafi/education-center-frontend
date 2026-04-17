import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import TopNavBar from "@/components/blocks/top-nav-bar";
import Footer from "@/components/blocks/footer";
import FloatingChatbot from "@/components/blocks/floating-chatbot";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-headline" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "TEPTH | The Exam Preparation & Testing House",
  description: "Prep Smarter, Score Higher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        manrope.variable,
        inter.variable,
        "font-sans",
      )}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body selection:bg-red-100 selection:text-red-900">
        <TopNavBar />
        <main>{children}</main>
        <Footer />
        <FloatingChatbot />
      </body>
    </html>
  );
}
