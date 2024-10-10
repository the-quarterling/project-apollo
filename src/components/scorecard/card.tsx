"use client";

import ScorecardStats from "@/components/scorecard/stats";
import { useScorecardProvider } from "@/providers/ScorecardProvider"
import { ScorecardTable } from "@/components/scorecard/table";

export default function Card() {

const {noOfTargetsTemp, noOfTargets, setNoOfTargets, setNoOfTargetsTemp} = useScorecardProvider();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempValue = e.target.value == "" ? 0 : parseInt(e.target.value)
    setNoOfTargetsTemp(tempValue);
  };

  const updateCard = () => {
    setNoOfTargets(noOfTargetsTemp);
  };
    
  return (
        <main>
          <div>
            <label className="input input-bordered items-center gap-2 py-2 my-4 grid-cols-6">
                No of targets:
                <input type="number" 
                      min="0"
                      value={noOfTargetsTemp}
                      onChange={handleInputChange}
                />
            </label>
          </div>

          <div>
            <button className="btn btn-primary grid-cols-1" onClick={updateCard}>
              Update card
            </button>
          </div>

          <ScorecardStats />
  
          <ScorecardTable />
        </main>
  );
}
