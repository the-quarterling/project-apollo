"use client";

import { useState, useEffect } from 'react';

interface ScorecardRow {
    target: number,
    col: number,
    updated: (rowValues:any ) => void,
    getPreviousScores: (target: number) => number
};

export default function ScorecardRow({target, col, updated, getPreviousScores}: ScorecardRow) {
    const [arrow, setArrow] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [spot, setSpot] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);
    const [form, setForm] = useState<any>({
        'col': col, 
        'target': target,  
        'arrow': arrow, 
        'score': score, 
        'spot': spot
    });

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

    const handleFormUpdate = (e: any) => {
        const checkedValue = e.target.name == "spot" ? e.target.checked  : e.target.value
        setForm({...form, [e.target.name]: checkedValue })
    }

    const updateScorecard = () => {
        const rowValues = {
            'col': col, 
            'target': target, 
            'arrow': arrow, 
            'score': score, 
            'spot': spot
        }
        updated(rowValues);
    }

    useEffect(() => {
        updateScorecard()
        setTotal(getPreviousScores(form));
    },[form]);

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
            <form onChange={handleFormUpdate} className="flex flex-column">
                <div className="border w-1/5 h-20 text-center place-content-center">
                    {target}
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                    <input className="text-center w-full h-20" name="arrow" type="number" min="0" onChange={handleArrowChange}></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                    <input className="text-center w-full h-20" name="score" type="number" onChange={handleScoreChange}></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                    <input type="checkbox" name="spot" onChange={handleSpotChange}></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                    {total}
                </div>
            </form>
        </div>
  
    );
}
