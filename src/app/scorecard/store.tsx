"use client";

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface Scorecard {
    col: number,
    target: number,
    arrow: number,
    score: number,
    spot: boolean
}


export const useScorecardCardStore = create(
    persist(
        (set) => ({
            scorecards: [],

            addScorecard: (value: Scorecard) => set((state:any) => ({
                scorecards: [...state.scorecards, value]
            })),

            editScorecard: (val: any, id: string) => set((state:any) => ({
                scorecards: state.scorecards.map((a: any) => {
                    if(a.id == id) {
                        return {
                            ...a, 
                            scorecard: val,
                            firstHalfTotal: val.filter((i: any) => (i.col === 1)).reduce(function (acc: any, obj: any) { return acc + obj.score; }, 0),
                            secondHalfTotal: val.filter((i: any) => (i.col === 2)).reduce(function (acc: any, obj: any) { return acc + obj.score; }, 0),
                            spots: val.filter((i: any) => (i.spot)).length
                        }
                    } else {
                        return {...a}
                    }
                })
            })),

            removeScorecard: () => ({
                // to be used when a scorecard is saved (requires aws)
            }),
        }),
        {
            name: 'scorecard-storage',
            storage: createJSONStorage(() => localStorage)
        },
    ),
);