"use client";

import { useScorecardProvider } from "@/providers/ScorecardProvider"

export default function ScorecardStats()  {

  const { noOfTargetsTemp, 
          setNoOfTargets, 
          setNoOfTargetsTemp, 
          setSociety, 
          setCourse,
          setCategory, 
          setBowstyle, 
          setDate,
        } = useScorecardProvider();

  const handleTargetInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempValue = e.target.value == "" ? 0 : parseInt(e.target.value)
    setNoOfTargetsTemp(tempValue);
  };

  const updateCard = () => {
    setNoOfTargets(noOfTargetsTemp);
  };
  
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

          <button onClick={() => setNoOfTargetsTemp(noOfTargetsTemp - 1)} className="text-3xl px-6">
            -
            <span className="sr-only">Remove target</span>
          </button>

          <div className="inline-flex w-20 h-20 items-center justify-center bg-teal-300 rounded-full">
            <input type="number" 
                    id="targets"
                    className="w-20 h-20 text-center text-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    min="0"
                    value={noOfTargetsTemp}
                    onChange={handleTargetInputChange}
            />
          </div>

          <button onClick={() => setNoOfTargetsTemp(noOfTargetsTemp + 1)} className="text-3xl px-6">
            +
            <span className="sr-only">Add target</span>
          </button>
        </div>
      </div>

      <div className="flex-wrap px-7 my-5 justify-center flex">
        <div className="me-4 py-4">
          <label htmlFor="category" className="block mb-2 text-sm text-start font-medium text-slate-900 dark:text-slate-100">Category</label>
          <select id="category"
                 className="input input-bordered"
                 onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value)} 
          >
            <option value="gents">Gents</option>
            <option value="ladies">Ladies</option>
            <option value="other">Other</option>
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
          <button className="btn btn-primary rounded-3xl" onClick={updateCard}>
            Update card
          </button>
      </div>
    </div>

  );
}
