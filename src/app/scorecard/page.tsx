"use client";

import Header from "@/components/header";

import { ScorecardTable } from "@/components/scorecard/table";
import { useState } from 'react';

export default function Home() {
  const [noOfTargetsTemp, setNoOfTargetsTemp] = useState<number>(40)
  const [noOfTargets, setNoOfTargets] = useState<number>(40)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoOfTargetsTemp(e.target.value);
  };

  const updateCard = () => {
    setNoOfTargets(noOfTargetsTemp);
  };
    

  return (

    <div>
      <Header />

      <main>
        <div className="grid-rows-1 my-4">
          <label className="input input-bordered items-center gap-2 py-2 my-4 grid-cols-6">
              No of targets:
              <input type="number" 
                    min="0"
                    value={noOfTargetsTemp}
                    onChange={handleInputChange}
              />
          </label>
        </div>

        <div className="grid-rows-1 my-4">
          <button className="btn btn-primary grid-cols-1" onClick={updateCard}>
            Update card
          </button>
        </div>

        <div className="grid-rows-1 my-4">
          <ScorecardTable noOfRows={noOfTargets} />
        </div>
      </main>
    </div>
  );
}
