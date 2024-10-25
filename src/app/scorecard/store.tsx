"use client";

import { create } from "zustand";
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
    console.log('setTargets');
    return {'col1': tempCol1, 'col2': tempCol2 }
}

export const useScorecardCardStore = create(
    persist(
        (set, get) => ({
            society: '',
            course: '',
            category: 'Gents',
            bowstyle: '',
            date: '',
            targets: [],
            setSociety: (val: string) => set((state:any) => ({ society: val })),
            setCourse: (val: string) => set((state:any) => ({ course: val })),
            setCategory: (val: string) => set((state:any) => ({ category: val })),
            setBowstyle: (val: string) => set((state:any) => ({ bowstyle: val })),
            setDate: (val: string) => set((state:any) => ({ date: val })),
            setTargets: (val: number) => set((state:any) => ({ targets: calculateColums(val) })),
            setScore: (val:[]) => set((state:any) => ({ targets: val }))
        }),
        {
            name: 'scorecard-storage',
            storage: createJSONStorage(() => localStorage), 
        },
    ),
);