import ScorecardRow from "@/components/scorecard/row";
import { useScorecardCardStore } from "@/app/scorecard/store";

interface TargetRowProps {
    col: number,
    target: number,
    arrow: number,
    score: number,
    spot: boolean
};

export const ScorecardTable = () => {
    const scorecard = useScorecardCardStore((state:any) => state.scorecard)
    const setScore = useScorecardCardStore((state:any) => state.setScore);

    const updateScorecard = (rowValues: any) => {
        const col = rowValues.col == 1 ? scorecard['col1'] : scorecard['col2'];
        const idx = col.findIndex((element: TargetRowProps) => rowValues.target == element.target);

        col[idx] = rowValues;

        setScore(scorecard);
    }

    const getPreviousTotal = (form: any) => {
        const tempArray = []
        let total;
        
        const idx = form.col == 1 ? scorecard['col1'].findIndex((element: TargetRowProps) => form.target == element.target) : scorecard['col2'].findIndex((element: TargetRowProps) => form.target == element.target);

        for (let i = 0; i <= idx; i++) {
            tempArray.push(
                form.col == 1 ? scorecard['col1'][i].score : scorecard['col2'][i].score
            )
        }
        total = tempArray.reduce((acc, current) => {
            return current + acc;
        }, 0)

        return total;
    }

    return (
        <div className="w-auto max-w-[90%] m-auto py-8 bg-white dark:bg-zinc-900 rounded-2xl grid grid-cols-1 md:grid-cols-2 justify-content-center shadow-lg dark:shadow-stone-100/15">
            <div className="m-auto w-full px-10">
                {scorecard['col1'].map((target: TargetRowProps, index:number) => (
                    <ScorecardRow key={`col-1-${index}-$`} target={target.target} col={1} updated={updateScorecard} getPreviousScores={getPreviousTotal}/>                    
                ))}  
            </div>

            <div className="m-auto w-full px-10">
                {scorecard['col2'].map((target: TargetRowProps, index:number) => (
                    <ScorecardRow key={`col-2-${index}`} target={target.target} col={2} updated={updateScorecard} getPreviousScores={getPreviousTotal}/>
                ))}  
            </div>
        </div>
    );
}