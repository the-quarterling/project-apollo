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

    const calculateRowsPerCol = () => {
        if(noOfTargets % 2 == 0) {
            return noOfTargets / 2
        } else {
            return Math.ceil(noOfTargets / 2)
        };
    };

    const updateColumns = () => {

        const rows1 = calculateRowsPerCol();
        const rows2 = noOfTargets - rows1;

        const tempCol1 = [];
        const tempCol2 = [];

        for (let i=0; i < rows1; i++) {
            tempCol1.push({'col': 1, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false, total: 0});
        }
    
        for (let i=0; i < rows2; i++) {
            tempCol2.push({'col': 2, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false, total: 0});
        }

        setColumn1(tempCol1);
        setColumn2(tempCol2);
        
        console.log(1, rows1, tempCol1, column1);
        console.log(2, rows2, tempCol2, column2);
    }

    // const handleColumn1Update = () => {}
    // const handleColumn2Update = () => {}

    useEffect(() => {
        updateColumns();
    },[noOfTargets]);

    // useEffect(() => {
    //     handleColumn1Update()
    // },[column1]);

    // useEffect(() => {
    //     handleColumn2Update()
    // },[column2]);

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