import { createContext, useContext, useState, useEffect  } from 'react';

interface TargetRowProps {
    col: number,
    target: number,
    arrow: number,
    score: number,
    spot: boolean,
    total: number
};

const ScorecardContext = createContext<any>(undefined);

const ScorecardProvider: React.FC<any> = ({ children }) => {
    const [noOfTargetsTemp, setNoOfTargetsTemp] = useState<number>(40);
    const [noOfTargets, setNoOfTargets] = useState<number>(40);
    const [column1, setColumn1] = useState<Array<TargetRowProps>>([]);
    const [column2, setColumn2] = useState<Array<TargetRowProps>>([]);

    const updateColumns = () => {
        
    }

    const handleColumn1Update = () => {}
    const handleColumn2Update = () => {}

    useEffect(() => {
        console.log('noOfTargets', noOfTargets);
    },[noOfTargets]);

    useEffect(() => {
        handleColumn1Update()
    },[column1]);

    useEffect(() => {
        handleColumn2Update()
    },[column2]);

    return (
        <ScorecardContext.Provider
            value={{
                noOfTargetsTemp,
                setNoOfTargetsTemp,
                noOfTargets,
                setNoOfTargets,
                column1, 
                setColumn1,
                column2,
                setColumn2
            }}
        >
            {children}
        </ScorecardContext.Provider>
    );


};


// [
//     {'col': 1, 'target': 1, 'arrow': 0, 'score': 0, 'spot': false, total: 0},
//     {'col': 1, 'target': 2, 'arrow': 0, 'score': 0, 'spot': false, total: 0},
//     {'col': 1, 'target': 3, 'arrow': 0, 'score': 0, 'spot': false, total: 0},
//     {'col': 1, 'target':4, 'arrow': 0, 'score': 0, 'spot': false, total: 0}
// ]

const useScorecardProvider = () => {
    const context = useContext(ScorecardContext);
    if (!context) {
      throw new Error('useScorecardProvider() called outside of useScorecardProvider?');
    }
    return context;
};

export { ScorecardProvider, useScorecardProvider };