import Section from "./Section" ;
import LinkButton from "./LinkButton" ;

const UnknownPage = (props)=>{
    console.log(props.match.params.path);
    const pageName = props.match.params.path ;
    return (
        <>
            <Section
             type="center"
             title="不明なページ"
             text={<>"{pageName}"は不正なURLです。</>}
             afterText={<LinkButton text="トップに戻る" href="./top" />}
            />

        </>
    ) ;
};

export default UnknownPage ;

