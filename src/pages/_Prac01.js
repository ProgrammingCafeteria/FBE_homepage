import React,{useState,useEffect} from "react" ;
import Section from "../components/Section";


const Prac01 = (props)=>{
    const [page,setPage] = useState(1);
    const [before,setBefore] = useState(page-1);
    const beforeUrl = `/prac${("00"+before).slice(-2)}` ;
    useEffect(()=>{
        console.log("init");
        console.log(beforeUrl);
        console.log();
    },[]);
    
    useEffect(()=>{
        console.log("render");
    });

    return (
        <main>
            <Section type="center">
                <h1>{page}</h1>
            </Section>
        </main>
    ) ;
};

export default Prac01 ;




