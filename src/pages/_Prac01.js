import React,{useState,useEffect,createContext,useContext} from "react" ;
import Section from "../components/Section";

const Contexts = React.createContext({
    "cnt": [0, ()=>{}],
}) ;

const CompA = ()=>{
    return <h1>
        count:
        <Contexts.Consumer>
            {
                (context)=>context["cnt"][0]
            }
        </Contexts.Consumer>
    </h1>;
};
const CompB = ()=>{
    const cnt = useContext(Contexts);
    const inc = (eve)=>{
        cnt["cnt"][1](prev => prev+1 );
    };
    const dec = (eve)=>{
        cnt["cnt"][1](prev => prev-1 );
    };
    const cle = (eve)=>{
        cnt["cnt"][1](0 );
    };
    return (
        <div>
            <button onClick={inc}>UP</button>
            <button onClick={dec}>DOWN</button>
            <button onClick={cle}>CLEAR</button>
        </div>);
};

const Prac01 = (props)=>{
    const [cnt,setCnt] = useState(0) ;
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCnt(prev => Math.round((prev+0.1)*10)/10);
        },100);
        return ()=>{
            clearInterval(timer);
        };
    },[]);
    return (
        <main>
            <Section type="center">
                <Contexts.Provider value={{"cnt":[cnt,setCnt]}}>
                    <CompA />
                    <CompB />
                </Contexts.Provider>
            </Section>
        </main>
    ) ;
};

export default Prac01 ;




