import ScorecardStats from "@/components/scorecard/stats";
import ScorecardDetails from "@/components/scorecard/details";
import { ScorecardTable } from "@/components/scorecard/table";

export default function Card({ params }: {
  params: {card: string}
}) {
  return (
        <>
          <ScorecardDetails scId={params.card}/>

          <ScorecardStats scId={params.card}/>
         
          <ScorecardTable  scId={params.card}/>
          
        </>
  );
}
