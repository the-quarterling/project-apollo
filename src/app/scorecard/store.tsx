"use client";

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface Scorecard {
    id: string,
    col: number,
    target: number,
    arrow: number,
    score: number,
    spot: boolean,
    runningTotal: number
}

export const useScorecardCardStore = create(
    persist(
        (set) => ({
            scorecards: [],

            addScorecard: (value: Scorecard) => set((state:any) => ({
                scorecards: [...state.scorecards, { value }]
            })),

            editScorecard: (value: any, id: string) => ({
                // need to edit scorecard here:
            }),
            
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