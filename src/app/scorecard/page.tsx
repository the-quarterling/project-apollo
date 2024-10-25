"use client";

import Link from "next/link";
import { useScorecardCardStore } from "@/app/scorecard/store";

export default function ScorecardStats()  {

  const setSociety = useScorecardCardStore((state:any) => state.setSociety);
  const setCourse = useScorecardCardStore((state:any) => state.setCourse);
  const setCategory = useScorecardCardStore((state:any) => state.setCategory);
  const setBowstyle = useScorecardCardStore((state:any) => state.setBowstyle);
  const setDate = useScorecardCardStore((state:any) => state.setDate);
  const setTargets = useScorecardCardStore((state:any) => state.setTargets);

  return (
    <div className="w-auto max-w-[90%] m-auto py-8 bg-white dark:bg-zinc-900 rounded-2xl justify-center shadow-lg text-center dark:shadow-stone-100/15">
      <div className="flex-wrap px-7 my-5 justify-center flex">
        <div className="me-4 py-4">
          <label htmlFor="society" className="block mb-2 text-sm text-start font-medium text-slate-900 dark:text-slate-100">Society</label>
          <input type="text" 
                  id="society"
                  className="input input-bordered"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSociety(event.target.value)}
          />
        </div>

        <div className="me-4 py-4">
          <label htmlFor="course" className="block mb-2 text-sm text-start font-medium text-slate-900 dark:text-slate-100">Course name</label>
          <input type="text" 
                  id="course"
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
                    id="targets"
                    className="w-20 h-20 text-center text-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    min="0"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTargets(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex-wrap px-7 my-5 justify-center flex">
        <div className="me-4 py-4">
          <label htmlFor="category" className="block mb-2 text-sm text-start font-medium text-slate-900 dark:text-slate-100">Category</label>
          <select id="category"
                 className="input input-bordered"
                 onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value)} 
          >
            <option value="Gents">Gents</option>
            <option value="Ladies">Ladies</option>
            <option value="Other">Other</option>
      b      </select>
        </div>

        <div className="me-4 py-4">
          <label htmlFor="bowstyle" className="block mb-2 text-sm text-start font-medium text-slate-900 dark:text-slate-100">Bow style</label>
          <input type="text" 
                  id="bowstyle"
                  className="input input-bordered"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBowstyle(event.target.value)}
          />
        </div>
      </div>

      <div className="flex-wrap px-7 my-5 justify-center flex">
        <div className="me-4 py-4">
          <label htmlFor="date" className="block mb-2 text-sm text-start font-medium text-slate-900 dark:text-slate-100">Date</label>
          <input type="date" 
                  id="date"
                  className="input input-bordered"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
          />
        </div>
      </div>

      <div className="flex-wrap px-7 my-5 justify-center flex">
          <Link className="btn btn-primary rounded-3xl" href="/scorecard/card">
            Update card
          </Link>
      </div>
    </div>

  );
}
