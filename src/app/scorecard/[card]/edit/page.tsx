"use client";

import ScorecardStats from "@/components/scorecard/stats";
import ScorecardDetails from "@/components/scorecard/details";
import { ScorecardTable } from "@/components/scorecard/table";

export default function Card() {

  return (
        <>
          <ScorecardDetails />

          <ScorecardStats />
  
          <ScorecardTable />
        </>
  );
}
