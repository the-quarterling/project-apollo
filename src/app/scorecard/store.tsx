"use client";

import ScorecardDetails from '@/components/scorecard/details';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface Scorecard {
    col: number,
    target: number,
    arrow: number,
    score: number,
    spot: boolean,
    runningTotal: number
}

const calculateColums = (targets:number) => {
    const tempScorecard = [];
    
    let col1Length;
    let col2Length;
    
    if(targets % 2 == 0) {  
        col1Length = targets / 2
    } else {
        col1Length = Math.ceil(targets / 2)
    };

    col2Length = targets - col1Length;

    for (let i=0; i < col1Length; i++) {
        tempScorecard.push({'col': 1, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false, 'runningTotal': 0});
    }

    for (let i=0; i < col2Length; i++) {
        tempScorecard.push({'col': 2, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false, 'runningTotal': 0});
    }

    return tempScorecard
}

//get scorecard row function (col, target)
export const useScorecardCardStore = create(
    persist(
        (set, get) => ({
            scorecardID: '',
            society: '',
            course: '',
            category: '',
            bowstyle: '',
            date: '',
            noOfTargets: 0,
            scorecard: [],
            firstHalfScore: 0,
            secondHalfScore: 0,
            spots: 0,
            setScorecardID: (val: string) => set((state:any) => ({ scorecardID: val })),
            setSociety: (val: string) => set((state:any) => ({ society: val })),
            setCourse: (val: string) => set((state:any) => ({ course: val })),
            setCategory: (val: string) => set((state:any) => ({ category: val })),
            setBowstyle: (val: string) => set((state:any) => ({ bowstyle: val })),
            setDate: (val: string) => set((state:any) => ({ date: val })),
            setNoOfTargets: (val: number) => set((state:any) => ({ noOfTargets: val, scorecard: calculateColums(val) })),
            setScorecard: (val:[]) => set( (state: any) => {
                return { 
                    scorecard: [...val],
                    firstHalfScore: state.scorecard.filter((scorecard: Scorecard) => scorecard.col === 1).reduce(function (acc: any, obj: any) { return acc + obj.score; }, 0), 
                    secondHalfScore: state.scorecard.filter((scorecard:Scorecard) => scorecard.col === 2).reduce(function (acc: any, obj: any) { return acc + obj.score; }, 0), 
                    spots: state.scorecard.filter((i:any) => (i.spot)).length,
                }
            })
        }),
        {
            name: 'scorecard-storage',
            storage: createJSONStorage(() => localStorage)
        },
    ),
);


// [
//     ZUwHR1731337860161: {
//         scorecardID: '',
//         society: '',
//         course: '',
//         category: '',
//         bowstyle: '',
//         date: '',
//         noOfTargets: 0,
//         scorecard: [
    //          ({'col': 1, 'target':  1, 'arrow': 0, 'score': 0, 'spot': false, 'runningTotal': 0}
    //          ({'col': 2, 'target': 1, 'arrow': 0, 'score': 0, 'spot': false, 'runningTotal': 0}
    //     ],
//         firstHalfScore: 0,
//         secondHalfScore: 0,
//         spots: 0,
//     }
// ]