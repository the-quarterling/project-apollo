'use client';

import { useScorecardCardStore } from '@/app/scorecard/store';

export default function ScorecardDetails({ scId }: { scId: string }) {
  const scorecards = useScorecardCardStore((state:any) => state.scorecards);
  const result = scorecards.find((obj:any) => obj.id === scId);

  if (!result) return null;

  const society = result.society;
  const course = result.course;
  const category = result.category;
  const bowstyle = result.bowstyle;
  const date = result.date;

  return (
    <div className="px-7 my-5 text-white">
      <div className="text-3xl">
        {society}: {course}
      </div>
      <div className="py-2 text-xl">
        {category} {bowstyle}
      </div>
      <div>{date}</div>
    </div>
  );
}
