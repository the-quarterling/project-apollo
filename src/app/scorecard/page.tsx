"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Card from "@/components/scorecard/card";
import ScorecardStats from "@/components/scorecard/stats";
import { ScorecardTable } from "@/components/scorecard/table";
import { ScorecardProvider } from '@/providers/ScorecardProvider'

export default function Scorecard() {    
  return (
    <>
      <Header />

      <ScorecardProvider>
        <Card/>
      </ScorecardProvider>

      <Footer />
    </>
  );
}
