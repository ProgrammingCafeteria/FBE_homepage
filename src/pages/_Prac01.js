
import Section from "../components/Section" ;
import { useState } from "react";


const OnOffLb = (props)=>{
    return (<label>Now:{props.value?"On":"Off"}</label>) ;
};
const ChangeBtn = (props)=>{
    let [value,setValue] = [props.value,props.setValue];
    let click = (eve)=>{
        setValue(prevState=>!prevState);


    };
    return (
        <div>
            <button onClick={click}>Toggle</button>
        </div>
    ) ;
};
const OnBtn = (props)=>{
    let setValue = props.setValue;
    let click = (eve)=>{
        setValue(true);
    };
    return (
        <div>
            <button onClick={click}>ToOn</button>
        </div>
    ) ;
};
const OffBtn = (props)=>{
    let setValue = props.setValue;
    let click = (eve)=>{
        setValue(prevState=>false);
    };
    return (
        <div>
            <button onClick={click}>ToOff</button>
        </div>
    ) ;
};
const List = (props)=>{
    let lis = props.values.map((v,i,a)=><li>{v}</li>);
    return (
        <div>
            mapで変化前
            <ul>{props.values}</ul>
            mapで変化後
            <ul> {lis} </ul>
        </div>
    ) ;
};


const PageTemplate = ()=>{
    let [value,setValue] = useState(true);
    const listValues = [10,30,50,20,40,0] ;
    return (
        <main>
            <Section type="left">
                <h1>useStateの練習</h1>
                <OnOffLb value={value} />
                <ChangeBtn value={value} setValue={setValue}/>
                <OnBtn setValue={setValue}></OnBtn>
                <OffBtn setValue={setValue}></OffBtn>
            </Section>
            <Section type="left">
                <h1>Listの練習</h1>
                <List values={listValues} />
            </Section>
        </main>

    ) ;
};

export default PageTemplate ;
