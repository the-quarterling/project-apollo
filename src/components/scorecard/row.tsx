"use client";

import { useScorecardCardStore } from "@/app/scorecard/store";

interface ScorecardRow {
    target: number,
    col: number
};

interface TargetRowProps {
    col: number,
    target: number,
    arrow: number,
    score: number,
    spot: boolean
};

export default function ScorecardRow({target, col}: ScorecardRow) {
    const scorecard = useScorecardCardStore((state:any) => state.scorecard)
    const firstHalfScore = useScorecardCardStore((state: any) => state.firstHalfScore);
    const setScorecard = useScorecardCardStore((state:any) => state.setScorecard);

    // calculate row we are editing
    const rowIndex = scorecard.findIndex((a:TargetRowProps) => (a.target === target && a.col === col));

    // //get values from zustand store
    const arrow = scorecard[rowIndex].arrow;
    const score = scorecard[rowIndex].score;
    const spot = scorecard[rowIndex].spot;


    const calculateRunningTotal = () => {
        const tempArray = []
        let total;

        for (let i = 0; i <= rowIndex; i++) {
            tempArray.push(
               scorecard[i].score
            )
        }
        

        total = tempArray.reduce((acc, current) => {
            return current + acc;
        }, 0)

        return col === 1 ? total : total - firstHalfScore;
    }

    const total = calculateRunningTotal();

    const handleArrowUpdate = (event:string) => {
        scorecard[rowIndex].arrow = parseInt(event);
        setScorecard(scorecard);    
    }

    const handleScoreUpdate = (event:string) => {
        scorecard[rowIndex].score = parseInt(event);
        setScorecard(scorecard);
    }

    const handleSpotUpdate = (event:boolean) => {
        scorecard[rowIndex].spot = event;
        setScorecard(scorecard);    
    }

    return (
        <div>
            {
                target == 1 && (             
                    <div className="flex flex-row text-center py-6">
                        <div className="w-1/5">
                            <div className="-rotate-45">
                                Target
                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="-rotate-45">
                                Arrow
                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="-rotate-45">
                                Score
                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="-rotate-45">
                                Spot
                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="-rotate-45">
                                Total
                            </div>
                        </div>
                    </div>
                )
            }
            <form className="flex flex-column">
                <div className="border w-1/5 h-20 text-center place-content-center">
                    {target}
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                
                    <input className="text-center w-full h-20" 
                           name="arrow" 
                           type="number" 
                           min="1"
                           defaultValue={arrow}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleArrowUpdate(event.target.value)}
                    ></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                    <input className="text-center w-full h-20" 
                           name="score" 
                           type="number"
                           defaultValue={score}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleScoreUpdate(event.target.value)}
                    ></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                    <input type="checkbox" 
                        name="spot"
                        defaultChecked={spot}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSpotUpdate(event.target.checked)}
                    ></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                    {arrow != 0 &&
                        <span>{total}</span>
                    }
                </div>
            </form>
        </div>
    );
}
