import { useScorecardProvider } from "@/providers/ScorecardProvider"

export default function ScorecardStats()  {

  const { society, 
          course, 
          category, 
          bowstyle, 
          date, 
        } = useScorecardProvider();
  
  return (
      <div className="text-gray-200 px-7 my-5 ">
        <div className="text-3xl">
          {society}: {course}
        </div>
        <div className='py-2'>
          {category} {bowstyle}
        </div>
        <div>
          {date}
        </div>
      </div>
  );
}
