import { StatBlock } from "@/components/StatBlock"

export default function ScorecardStats()  {
    return (
        <>
            <div className="flex gap-4 px-7">
                <StatBlock title="1st half score" stat="12"/>
                <StatBlock title="2nd half score" stat="24"/>
                <StatBlock title="Spots" stat="2"/>
            </div>
            <div className="flex gap-4 px-7 py-4">
                <StatBlock title="Overall score" stat="24"/>
            </div>
        </>

    );
}
