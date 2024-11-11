import { useScorecardCardStore } from "@/app/scorecard/store";

export default function ScorecardDetails()  {
  const society = useScorecardCardStore((state:any) => state.society);
  const course = useScorecardCardStore((state:any) => state.course);
  const category = useScorecardCardStore((state:any) => state.category);
  const bowstyle = useScorecardCardStore((state:any) => state.bowstyle);
  const date = useScorecardCardStore((state:any) => state.date);

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
