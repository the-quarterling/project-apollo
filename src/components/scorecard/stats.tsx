import { useScorecardCardStore } from "@/app/scorecard/store";

export default function ScorecardStats()  {
    const firstHalfScore = useScorecardCardStore((state:any) => state.firstHalfScore)
    const secondHalfScore = useScorecardCardStore((state:any) => state.secondHalfScore)
    const spots = useScorecardCardStore((state:any) => state.spots)

    const fullTotal = firstHalfScore + secondHalfScore

    return (
        <>
            <div className="flex flex-row flex-wrap gap-4 px-7">
                <div className="bg-white dark:bg-zinc-900 rounded-xl flex-auto text-center p-4 shadow-lg dark:shadow-stone-100/15">
                    <div className="title">
                        1st half score
                    </div>
                    <div className="stat text-5xl"> 
                        {firstHalfScore}
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-xl flex-auto text-center p-4 shadow-lg dark:shadow-stone-100/15">
                    <div className="title">
                        2nd half score
                    </div>
                    <div className="stat text-5xl"> 
                        {secondHalfScore}
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-xl flex-auto text-center p-4 shadow-lg dark:shadow-stone-100/15">
                    <div className="title">
                       Spots
                    </div>
                    <div className="stat text-5xl"> 
                        {spots}
                    </div>
                </div>
            </div>

            <div className="flex flex-row flex-wrap gap-4 px-7 py-7">
                <div className="bg-white dark:bg-zinc-900 rounded-xl flex-auto text-center p-4 shadow-lg dark:shadow-stone-100/15">
                    <div className="title">
                        Total
                    </div>
                    <div className="stat text-5xl"> 
                        {fullTotal}
                    </div>
                </div>
            </div>
        </>
    );
}
