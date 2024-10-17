"use client";

import { ScorecardProvider } from '@/providers/ScorecardProvider';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />

        <ScorecardProvider>
            {children}
        </ScorecardProvider>

        <Footer />
    </>
  );
}
