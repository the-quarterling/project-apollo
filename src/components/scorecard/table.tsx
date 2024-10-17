import ScorecardRow from "@/components/scorecard/row";
import { useState, useEffect } from 'react';
import { useScorecardProvider } from "@/providers/ScorecardProvider"

interface scorecardRowNumber {
    noOfRows: number
};

interface TargetRowProps {
    col: number,
    target: number,
    arrow: number,
    score: number,
    spot: boolean
};

export const ScorecardTable = () => {
    const {column1, column2, updateScorecard} = useScorecardProvider();

    const getPreviousTotal = (form: any) => {
        const tempArray = []
        let total;
        
        const idx = form.col == 1 ? column1.findIndex((element: TargetRowProps) => form.target == element.target) : column2.findIndex((element: TargetRowProps) => form.target == element.target);

        for (let i = 0; i <= idx; i++) {
            tempArray.push(
                form.col == 1 ? column1[i].score : column2[i].score
            )
        }
        total = tempArray.reduce((acc, current) => {
            return current + acc;
        }, 0)

        return total;
    }

    return (
        <div className="w-auto max-w-[90%] m-auto py-8 bg-white dark:bg-zinc-900 rounded-2xl grid grid-cols-1 md:grid-cols-2 justify-content-center shadow-lg dark:shadow-stone-100/15">
            <div className="m-auto w-full px-10">
                {column1.map((target: TargetRowProps, index:number) => (
                    <ScorecardRow key={`col-1-${index}-$`} target={target.target} col={1} updated={updateScorecard} getPreviousScores={getPreviousTotal}/>                    
                ))}  
            </div>

            <div className="m-auto w-full px-10">
                {column2.map((target: TargetRowProps, index:number) => (
                    <ScorecardRow key={`col-2-${index}`} target={target.target} col={2} updated={updateScorecard} getPreviousScores={getPreviousTotal}/>
                ))}  
            </div>
        </div>
    );
}