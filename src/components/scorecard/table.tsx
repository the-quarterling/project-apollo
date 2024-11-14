'use client';

import 'react-tabs/style/react-tabs.css';
import { useScorecardCardStore } from '@/app/scorecard/store';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

interface TargetRowProps {
  col: number;
  target: number;
  arrow: number;
  score: number;
  spot: boolean;
}

export const ScorecardTable = ({ scId }: { scId: string }) => {
  const scorecards = useScorecardCardStore((state: any) => state.scorecards);
  const result = scorecards.find((obj: any) => obj.value.id === scId);
  if (!result) return null;

  const scorecard = result.value.scorecard;

  const firstHalf = scorecard.filter(
    (scorecard: TargetRowProps) => scorecard.col === 1
  );
  const secondHalf = scorecard.filter(
    (scorecard: TargetRowProps) => scorecard.col === 2
  );

  const handleArrowUpdate = (e: any, index: number) => {
    result.value.scorecard[index].arrow = parseInt(e);
  };

  const handleScoreUpdate = (e: any, index: number) => {
    result.value.scorecard[index].score = parseInt(e);
  };

  const handleSpotUpdate = (e: any, index: number) => {
    result.value.scorecard[index].spot = e;
  };

  // const calculateRunningTotal = (i:number) => {
  // console.log(i);
  // const tempArray = []
  // let total;

  // for (let i = 0; i <= i; i++) {
  //     tempArray.push(
  //         scorecard[i].score
  //     )
  // }

  // total = tempArray.reduce((acc, current) => {
  //     return current + acc;
  // }, 0);

  // return total;
  // return col === 1 ? total : total - firstHalfScore;
  // }

  return (
    <div
      className="w-auto 
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
                        scorecard-tabs"
    >
      <Tabs>
        <TabList>
          <Tab>First half</Tab>
          <Tab>Second half</Tab>
        </TabList>

        <TabPanel forceRender={true}>
          <div className="flex flex-row text-center pt-12 pb-3 px-10">
            <div className="w-1/5">
              <div className="-rotate-45">Target</div>
            </div>
            <div className="w-1/5">
              <div className="-rotate-45">Arrow</div>
            </div>
            <div className="w-1/5">
              <div className="-rotate-45">Score</div>
            </div>
            <div className="w-1/5">
              <div className="-rotate-45">Spot</div>
            </div>
            <div className="w-1/5">
              <div className="-rotate-45">Total</div>
            </div>
          </div>

          <div className="m-auto w-full pt-8 px-10">
            {firstHalf.map((target: TargetRowProps, index: number) => (
              <form className="flex flex-column" key={`col-1-${index}-$`}>
                <div className="border w-1/5 h-20 text-center place-content-center">
                  {target.target}
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                  <input
                    className="text-center w-full h-20"
                    name="arrow"
                    type="number"
                    min="1"
                    defaultValue={target.arrow}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleArrowUpdate(event.target.value, index)
                    }
                  ></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                  <input
                    className="text-center w-full h-20"
                    name="score"
                    type="number"
                    defaultValue={target.score}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleScoreUpdate(event.target.value, index)
                    }
                  ></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                  <input
                    type="checkbox"
                    name="spot"
                    defaultChecked={target.spot}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleSpotUpdate(event.target.checked, index)
                    }
                  ></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                  {/* <span>{calculateRunningTotal(index)}</span> */}
                </div>
              </form>
            ))}
          </div>
        </TabPanel>

        <TabPanel forceRender={true}>
          <div className="flex flex-row text-center pt-12 pb-3 px-10">
            <div className="w-1/5">
              <div className="-rotate-45">Target</div>
            </div>
            <div className="w-1/5">
              <div className="-rotate-45">Arrow</div>
            </div>
            <div className="w-1/5">
              <div className="-rotate-45">Score</div>
            </div>
            <div className="w-1/5">
              <div className="-rotate-45">Spot</div>
            </div>
            <div className="w-1/5">
              <div className="-rotate-45">Total</div>
            </div>
          </div>

          <div className="m-auto w-full pt-8 px-10">
            {secondHalf.map((target: TargetRowProps, index: number) => (
              <form className="flex flex-column" key={`col-2-${index}-$`}>
                <div className="border w-1/5 h-20 text-center place-content-center">
                  {target.target}
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                  <input
                    className="text-center w-full h-20"
                    name="arrow"
                    type="number"
                    min="1"
                    defaultValue={target.arrow}
                    //    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleArrowUpdate(event.target.value)}
                  ></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                  <input
                    className="text-center w-full h-20"
                    name="score"
                    type="number"
                    defaultValue={target.score}
                    //    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleScoreUpdate(event.target.value)}
                  ></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                  <input
                    type="checkbox"
                    name="spot"
                    defaultChecked={target.spot}
                    // onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSpotUpdate(event.target.checked)}
                  ></input>
                </div>
                <div className="border w-1/5 h-20 text-center place-content-center">
                  {/* {arrow != 0 && */}
                  {/* <span>{total}</span> */}
                  {/* } */}
                </div>
              </form>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
