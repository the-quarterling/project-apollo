"use client";

import { useState, useEffect } from 'react';

interface ScorecardRow {
    target: number,
    col: number,
    prevTotal: number,
    updated: (rowValues:any ) => void,
    getRunningTotal: (score:number) => void
};

export default function ScorecardRow({target, col, prevTotal, updated, getRunningTotal}: ScorecardRow) {
    const [arrow, setArrow] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [spot, setSpot] = useState<boolean>(false);

    const handleArrowChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        setArrow(parseInt(e.target.value));
    };

    const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = !e.target.value ? 0 : parseInt(e.target.value)
        setScore((value));
    }

    const handleSpotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpot(e.target.checked);
    }

    const updateScorecard = () => {
        const rowValues = {
            'col': col, 
            'target': target, 
            'arrow': arrow, 
            'score': score, 
            'spot': spot
        }
        getRunningTotal(score)
        updated(rowValues);
    }

    useEffect(() => {
        updateScorecard()
    },[arrow, score, spot]);

    return (
        <tr className="text-center">
            <td className="border w-20 text-lg">
                {target}
            </td>
            <td className="border">
                <input className="w-24 h-24 text-center" type="number" min="0" onChange={handleArrowChange}></input>
            </td>
            <td className="border">
                <input className="w-24 h-24 text-center" type="number" onChange={handleScoreChange}></input>
            </td>
            <td className="border w-20">
                <input type="checkbox" onChange={handleSpotChange}></input>
            </td>
            <td className="border w-20">
                {prevTotal}
            </td>
        </tr>
    );
}
