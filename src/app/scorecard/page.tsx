"use client";

import { useState } from 'react';
import { useScorecardCardStore } from "@/app/scorecard/store";
import { nanoid } from 'nanoid';

export default function ScorecardStats()  {
  const scorecardId = nanoid(5) + Date.now()

  // commit values to zustand store
  const storeSociety = useScorecardCardStore((state:any) => state.setSociety);
  const storeCourse = useScorecardCardStore((state:any) => state.setCourse);
  const storeCategory = useScorecardCardStore((state:any) => state.setCategory);
  const storeBowstyle = useScorecardCardStore((state:any) => state.setBowstyle);
  const storeDate = useScorecardCardStore((state:any) => state.setDate);
  const storeNoOfTargets = useScorecardCardStore((state:any) => state.setNoOfTargets);
  const storeScorecardID = useScorecardCardStore((state:any) => state.setScorecardID);

  // set local values to pass to zustand store later
  const [society, setSociety] = useState<string>('');
  const [course, setCourse] = useState<string>('');
  const [category, setCategory] = useState<string>('Gents');
  const [bowstyle, setBowstyle] = useState<string>('');
  const [date, setDate] = useState<string>();
  const [noOfTargets, setNoOfTargets] = useState<number>(40);

  const createScorecard = () => {
    storeSociety(society);
    storeCourse(course);
    storeCategory(category);
    storeBowstyle(bowstyle);
    storeDate(date);
    storeNoOfTargets(noOfTargets);
    storeScorecardID(scorecardId);

    useScorecardCardStore.persist.setOptions({
      name: `card-${scorecardId}`,
    })

    window.location.href = `scorecard/${scorecardId}/edit`
  }

  return (
    <div className="w-auto max-w-[90%] m-auto py-8 bg-white dark:bg-zinc-900 rounded-2xl justify-center shadow-lg text-center dark:shadow-stone-100/15">
      <div className="flex-wrap px-7 my-5 justify-center flex">
        <div className="me-4 py-4">
          <label htmlFor="society" className="block mb-2 text-sm text-start font-medium text-slate-900 dark:text-slate-100">Society</label>
          <input type="text" 
                  name="society"
                  className="input input-bordered"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSociety(event.target.value)}
          />
        </div>

        <div className="me-4 py-4">
          <label htmlFor="course" className="block mb-2 text-sm text-start font-medium text-slate-900 dark:text-slate-100">Course name</label>
          <input type="text" 
                  name="course"
                  className="input input-bordered"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCourse(event.target.value)}
          />
        </div>
      </div>

      <div className="flex-wrap px-7 my-5 justify-center flex">
        <div className="me-4 py-4">
          <label htmlFor="targets" className="block mb-2 text-sm text-center font-medium text-slate-900 dark:text-slate-100">Number of targets</label>

          <div className="inline-flex w-20 h-20 items-center justify-center bg-teal-300 rounded-full">
            <input type="number" 
                    name="targets"
                    className="w-20 h-20 text-center text-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    min="0"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNoOfTargets(parseInt(event.target.value))}
            />
          </div>
        </div>
      </div>

      <div className="flex-wrap px-7 my-5 justify-center flex">
        <div className="me-4 py-4">
          <label htmlFor="category" className="block mb-2 text-sm text-start font-medium text-slate-900 dark:text-slate-100">Category</label>
          <select name="category"
                 className="input input-bordered"
                 onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value)} 
          >
            <option value="Gents">Gents</option>
            <option value="Ladies">Ladies</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="me-4 py-4">
          <label htmlFor="bowstyle" className="block mb-2 text-sm text-start font-medium text-slate-900 dark:text-slate-100">Bow style</label>
          <input type="text" 
                  name="bowstyle"
                  className="input input-bordered"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBowstyle(event.target.value)}
          />
        </div>
      </div>

      <div className="flex-wrap px-7 my-5 justify-center flex">
        <div className="me-4 py-4">
          <label htmlFor="date" className="block mb-2 text-sm text-start font-medium text-slate-900 dark:text-slate-100">Date</label>
          <input type="date" 
                  name="date"
                  className="input input-bordered"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
          />
        </div>
      </div>

      <div className="flex-wrap px-7 my-5 justify-center flex">
          <button className="btn btn-primary rounded-3xl" onClick={createScorecard}>
            Update card
          </button>
      </div>
    </div>

  );
}
