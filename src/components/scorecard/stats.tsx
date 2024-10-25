import { StatBlock } from "@/components/StatBlock"
import { useScorecardCardStore } from "@/app/scorecard/store";

export default function ScorecardStats()  {
    const targets = useScorecardCardStore((state:any) => state.targets)

    const col1Total = targets['col1'].reduce(function (acc: any, obj: any) { return acc + obj.score; }, 0);
    const col2Total = targets['col2'].reduce(function (acc: any, obj: any) { return acc + obj.score; }, 0);
    const fullTotal = col1Total + col2Total;

    const col1Spots = targets['col1'].filter(i => (i.spot)).length;
    const col2Spots = targets['col2'].filter(i => (i.spot)).length;
    const spots = col1Spots + col2Spots;

    return (
        <>
            <div className="flex flex-row flex-wrap gap-4 px-7">
                <StatBlock title="1st half score" stat={col1Total} />
                <StatBlock title="2nd half score" stat={col2Total} />
                <StatBlock title="Spots" stat={spots}/>

            </div>
            <div className="flex gap-4 px-7 py-4">
                <StatBlock title="Overall score" stat={fullTotal}/>
            </div>
        </>

    );
}
