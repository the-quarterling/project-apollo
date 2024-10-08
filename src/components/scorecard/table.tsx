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
    spot: boolean,
    total: number
};

export const ScorecardTable = ({noOfRows}: scorecardRowNumber) => {
    const col1: Array<TargetRowProps> = [];
    const col2: Array<TargetRowProps> = [];

    const [total, setTotal] = useState<number>(0);

    const calculateRowsPerCol = () => {
        if(noOfRows % 2 == 0) {
            return noOfRows / 2
        } else {
            return Math.ceil(noOfRows / 2)
        };
    };

    const getPreviousTotal = (form: any) => {
        const tempArray = []
        let total;
        
        const idx = form.col == 1 ? col1.findIndex((element) => form.target == element.target) : col2.findIndex((element) => form.target == element.target);

        for (let i = 0; i <= idx; i++) {
            tempArray.push(
                form.col == 1 ? col1[i].score : col2[i].score
            )
        }
        total = tempArray.reduce((acc, current) => {
            return current + acc;
        }, 0)

        return total;
    }


    const updateScorecard = (rowValues: any) => {
        const col = rowValues.col == 1 ? col1 : col2 ; 
        const idx = col.findIndex((element) => rowValues.target == element.target);

        col[idx] = {...col[idx], arrow: rowValues.arrow, score: rowValues.score, spot: rowValues.spot}
    }

    const rows1 = calculateRowsPerCol();
    const rows2 = noOfRows - rows1;

    for (let i=0; i < rows1; i++) {
        col1.push({'col': 1, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false, total: 0});
    }

    for (let i=0; i < rows2; i++) {
        col2.push({'col': 2, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false, total: 0});
    }

    return (
        <div className="w-auto max-w-[90%] m-auto bg-white dark:bg-zinc-900 rounded-2xl grid grid-cols-1 md:grid-cols-2 justify-content-center shadow-lg dark:shadow-stone-100/15">
            <div className="m-auto">
                {col1.map((target, index) => (
                    <ScorecardRow key={`col-1-${index}-$`} target={target.target} col={1} updated={updateScorecard} getPreviousScores={getPreviousTotal}/>                    
                ))}  
            </div>

            <div className="">
                {col2.map((target, index) => (
                    <ScorecardRow key={`col-2-${index}`} target={target.target} col={2} updated={updateScorecard} getPreviousScores={getPreviousTotal}/>
                ))}  
            </div>
        </div>
    );
}