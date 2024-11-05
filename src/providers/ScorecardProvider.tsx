import { createContext, useContext, useState, useEffect  } from 'react';

interface TargetRowProps {
    col: number,
    target: number,
    arrow: number,
    score: number,
    spot: boolean
};

const ScorecardContext = createContext<any>(undefined);

const ScorecardProvider: React.FC<any> = ({ children }) => {
    const [noOfTargetsTemp, setNoOfTargetsTemp] = useState<number>(40);
    const [noOfTargets, setNoOfTargets] = useState<number>(40);

    const [column1, setColumn1] = useState<Array<TargetRowProps>>([]);
    const [column2, setColumn2] = useState<Array<TargetRowProps>>([]);

    const [col1Total, setCol1Total] = useState<number>(0);
    const [col2Total, setCol2Total] = useState<number>(0);
    const [fullTotal, setFullTotal] = useState<number>(0);

    const [col1Spots, setCol1Spots] = useState<number>(0);
    const [col2Spots, setCol2Spots] = useState<number>(0);
    const [noOfSpots, setNoOfSpots] = useState<number>(0);

    const [society, setSociety] = useState<string>('');
    const [course, setCourse] = useState<string>('');
    const [category, setCategory] = useState<string>('gents');
    const [bowstyle, setBowstyle] = useState<string>('');
    const [date, setDate] = useState<Date>()

    const calculateRowsPerCol = () => {
        if(noOfTargets % 2 == 0) {
            return noOfTargets / 2
        } else {
            return Math.ceil(noOfTargets / 2)
        };
    };

    const updateScorecard = (rowValues: any) => {
        const col = rowValues.col == 1 ? column1 : column2;
        const idx = col.findIndex((element: TargetRowProps) => rowValues.target == element.target);

        col[idx] = rowValues;
        rowValues.col == 1 ?  setColumn1([...col]) : setColumn2([...col]);
    }

    const updateColumns = () => {
        const rows1 = calculateRowsPerCol();
        const rows2 = noOfTargets - rows1;

        const tempCol1 = [];
        const tempCol2 = [];

        for (let i=0; i < rows1; i++) {
            tempCol1.push({'col': 1, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false});
        }
    
        for (let i=0; i < rows2; i++) {
            tempCol2.push({'col': 2, 'target': i + 1, 'arrow': 0, 'score': 0, 'spot': false});
        }

        setColumn1(tempCol1);
        setColumn2(tempCol2);
    }

    const handleColumn1Update = () => {
        setCol1Total(column1.reduce(function (acc, obj) { return acc + obj.score; }, 0));
        setCol1Spots(column1.filter(i => (i.spot)).length);
    }

    const handleColumn2Update = () => {
        setCol2Total(column2.reduce(function (acc, obj) { return acc + obj.score; }, 0));   
        setCol2Spots(column2.filter(i => (i.spot)).length);
    }

    const handleTotalChange = () => {
        setFullTotal(col1Total + col2Total);
        setNoOfSpots(col1Spots + col2Spots);
    }

    useEffect(() => {
        updateColumns();
    },[noOfTargets]);

    useEffect(() => {
        handleColumn1Update()
    },[column1]);

    useEffect(() => {
        handleColumn2Update()
    },[column2]);

    useEffect(() => {
        handleTotalChange()
    },[col1Total, col2Total, col1Spots, col2Spots]);

    return (
        <ScorecardContext.Provider
            value={{
                noOfTargetsTemp,
                setNoOfTargetsTemp,
                noOfTargets,
                setNoOfTargets,
                noOfSpots,
                column1, 
                setColumn1,
                col1Total,
                column2,
                setColumn2,
                col2Total,
                fullTotal,
                updateScorecard,
                society,
                setSociety, 
                course, 
                setCourse,
                category, 
                setCategory, 
                bowstyle, 
                setBowstyle, 
                date, 
                setDate
            }}
        >
            {children}
        </ScorecardContext.Provider>
    );
};

const useScorecardProvider = () => {
    const context = useContext(ScorecardContext);
    if (!context) {
      throw new Error('useScorecardProvider() called outside of useScorecardProvider?');
    }
    return context;
};

export { ScorecardProvider, useScorecardProvider };