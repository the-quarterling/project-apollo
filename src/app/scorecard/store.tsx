"use client";

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const calculateColums = (targets:number) => {
    const tempCol1 = [];
    const tempCol2 = [];
    
    let col1Length;
    let col2Length;
    
    if(targets % 2 == 0) {
        col1Length = targets / 2
    } else {
        col1Length = Math.ceil(targets / 2)
    };

    col2Length = targets - col1Length;

    for (let i=0; i < col1Length; i++) {
        tempCol1.push({'col': 1, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false});
    }

    for (let i=0; i < col2Length; i++) {
        tempCol2.push({'col': 2, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false});
    }
    console.log(tempCol1, tempCol2);

    return {'col1': tempCol1, 'col2': tempCol2 }
}


const calcFirstHalfTotal = () => { 
    return useScorecardCardStore.getState().scorecard['col1'].reduce(function (acc: any, obj: any) { return acc + obj.score; }, 0)
};

const calcSecondHalfTotal = () => { 
    return useScorecardCardStore.getState().scorecard['col2'].reduce(function (acc: any, obj: any) { return acc + obj.score; }, 0)
};

const calculateSpots = () => {
    const col1Spots = useScorecardCardStore.getState().scorecard['col1'].filter(i => (i.spot)).length;
    const col2Spots = useScorecardCardStore.getState().scorecard['col2'].filter(i => (i.spot)).length;
    return col1Spots + col2Spots;    
}

export const useScorecardCardStore = create(
    persist(
        (set, get) => ({
            society: '',
            course: '',
            category: 'Gents',
            bowstyle: '',
            date: '',
            noOfTargets: 0,
            scorecard: [],
            firstHalfScore: 0,
            secondHalfScore: 0,
            spots: 0,
            setSociety: (val: string) => set((state:any) => ({ society: val })),
            setCourse: (val: string) => set((state:any) => ({ course: val })),
            setCategory: (val: string) => set((state:any) => ({ category: val })),
            setBowstyle: (val: string) => set((state:any) => ({ bowstyle: val })),
            setDate: (val: string) => set((state:any) => ({ date: val })),
            setNoTargets: (val: number) => set((state:any) => ({ noOfTargets: val, scorecard: calculateColums(val) })),
            setScore: (val:[]) => set((state:any) => ({ targets: val, firstHalfScore: calcFirstHalfTotal(), secondHalfScore: calcSecondHalfTotal(), spots: calculateSpots() }))
        }),
        {
            name: 'scorecard-storage',
            storage: createJSONStorage(() => localStorage), 
        },
    ),
);
