import { useState, useEffect  } from 'react';
import { StatBlock } from "@/components/StatBlock"
import { useScorecardProvider } from "@/providers/ScorecardProvider"

export default function ScorecardStats()  {
    const {col1Total, col2Total, fullTotal, noOfSpots} = useScorecardProvider();

    return (
        <>
            <div className="flex gap-4 px-7">
                <StatBlock title="1st half score" stat={col1Total} />
                <StatBlock title="2nd half score" stat={col2Total} />

            </div>
            <div className="flex gap-4 px-7 py-4">
                <StatBlock title="Spots" stat={noOfSpots}/>
                <StatBlock title="Overall score" stat={fullTotal}/>
            </div>
        </>

    );
}
