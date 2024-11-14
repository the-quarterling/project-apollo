'use client';

import { useScorecardCardStore } from "@/app/scorecard/store";

export default function ScorecardDetails({scId}:{scId: string}) {
  const scorecards = useScorecardCardStore((state:any) => state.scorecards);

  const checkId = (obj:any) => {
    return obj.value.id === scId
  };

  const result = scorecards.find(checkId);
  
  const society = result.value.society;
  const course = result.value.course;
  const category = result.value.category;
  const bowstyle = result.value.bowstyle;
  const date = result.value.date;

  return (
      <div className="px-7 my-5 text-white">
        <div className="text-3xl">
          {society}: {course}
        </div>
        <div className='py-2 text-xl'>
          {category} {bowstyle}
        </div>
        <div>
          {date}
        </div>
      </div>
  );
}
