import ScorecardRow from "@/components/scorecard/row";
// import { useState } from 'react';

interface scorecardRowNumber {
    noOfRows: number
};

interface TargetRowProps {
    col: number,
    target: number,
    arrow: number,
    score: number,
    spot: boolean,
    total: number,
    getRunningTotal?: (score:number) => void
};

export const ScorecardTable = ({noOfRows}: scorecardRowNumber) => {
    const col1: Array<TargetRowProps> = [];
    const col2: Array<TargetRowProps> = [];
    const scores: Array<number> = [];

    const calculateRowsPerCol = () => {
        if(noOfRows % 2 == 0) {
            return noOfRows / 2
        } else {
            return Math.ceil(noOfRows / 2)
        };
    };

    // const getPreviousTotal = (index: number, column: number) => {
    //     if (column == 1) {
    //         return index != 0 ? col1[index - 1].total : 0;
    //     } else {
    //         return index != 0 ? col2[index - 1].total : 0;
    //     }
    // }

    const handleTotalUpdate = (score: number) => {
        console.log(scores);
        score != 0 ? scores.push(score) : "";
    }

    const updateScorecard = (rowValues: any) => {
        if (rowValues.col == 1) {
            const idx = col1.findIndex((element) => rowValues.target == element.target);
            col1[idx] = {...col1[idx], arrow: rowValues.arrow, score: rowValues.score, spot: rowValues.spot}
        } else {
            const idx = col2.findIndex((element) => rowValues.target == element.target);
            col2[idx] = {...col2[idx], arrow: rowValues.arrow, score: rowValues.score, spot: rowValues.spot}
        }
    }

    const rows1 = calculateRowsPerCol();
    const rows2 = noOfRows - rows1;

    for (let i=0; i < rows1; i++) {
        col1.push({'col': 1, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false, total: 0});
    }

    for (let i=0; i < rows2; i++) {
        col2.push({'col': 2, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false,total: 0});
    }

    return (
        <div className="container m-auto grid grid-cols-1 md:grid-cols-2">
            <div>
                <table className="m-auto">
                    <thead>
                        <tr>
                            <th className="py-5 border overflow-hidden">
                                <div className="-rotate-45">
                                    Target
                                </div>
                            </th>
                            <th className=" py-5 border overflow-hidden">
                                <div className="-rotate-45">
                                    Arrow
                                </div>
                            </th>
                            <th className=" py-5 border overflow-hidden">
                                <div className="-rotate-45">
                                    Score
                                </div>
                            </th>
                            <th className=" py-5 border overflow-hidden">
                                <div className="-rotate-45">
                                    Spot
                                </div>
                            </th>
                            <th className=" py-5 border overflow-hidden">
                                <div className="-rotate-45">
                                    Total
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {col1.map((target, index) => (
                            <ScorecardRow key={`col-1-${index}`} target={target.target} col={1} updated={updateScorecard} getRunningTotal={handleTotalUpdate}/>
                        ))}  
                    </tbody>                    
                </table>
            </div>    

            <div>
                <table className="m-auto">
                    <thead>
                        <tr>
                            <th className="py-5 border overflow-hidden">
                                <div className="-rotate-45">
                                    Target
                                </div>
                            </th>
                            <th className=" py-5 border overflow-hidden">
                                <div className="-rotate-45">
                                    Arrow
                                </div>
                            </th>
                            <th className=" py-5 border overflow-hidden">
                                <div className="-rotate-45">
                                    Score
                                </div>
                            </th>
                            <th className=" py-5 border overflow-hidden">
                                <div className="-rotate-45">
                                    Spot
                                </div>
                            </th>
                            <th className=" py-5 border overflow-hidden">
                                <div className="-rotate-45">
                                    Total
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {col2.map((target, index) => (
                            <ScorecardRow key={`col-2-${index}`} target={target.target} col={2} updated={updateScorecard} getRunningTotal={handleTotalUpdate}/>
                        ))}  
                    </tbody>                    
                </table>
            </div>    
        </div>
    )
}