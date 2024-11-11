import 'react-tabs/style/react-tabs.css';
import ScorecardRow from "@/components/scorecard/row";
import { useScorecardCardStore } from "@/app/scorecard/store";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

interface TargetRowProps {
    col: number,
    target: number,
    arrow: number,
    score: number,
    spot: boolean
};

export const ScorecardTable = () => {
    const scorecard = useScorecardCardStore((state:any) => state.scorecard)

    const firstHalf = scorecard.filter((scorecard:TargetRowProps) => scorecard.col === 1);
    const secondHalf = scorecard.filter((scorecard:TargetRowProps) => scorecard.col === 2);

    return (
        <div className="w-auto 
                        max-w-[90%] 
                        m-auto 
                        px-1 
                        py-8 
                        bg-white 
                        dark:bg-zinc-900 
                        rounded-2xl 
                        justify-content-center 
                        shadow-lg 
                        dark:shadow-stone-100/15 
                        scorecard-tabs">
            <Tabs>
                <TabList>
                    <Tab>First half</Tab>
                    <Tab>Second half</Tab>
                </TabList>

                <TabPanel forceRender={true}>
                    <div className="m-auto w-full pt-8 px-10">
                        {firstHalf.map((target: TargetRowProps, index:number) => (
                            <ScorecardRow key={`col-1-${index}-$`} target={target.target} col={1}/>                    
                        ))}  
                    </div>
                </TabPanel>
                <TabPanel forceRender={true}>
                    <div className="m-auto pt-8 w-full px-10">
                        {secondHalf.map((target: TargetRowProps, index:number) => (
                            <ScorecardRow key={`col-2-${index}`} target={target.target} col={2}/>
                        ))}  
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}