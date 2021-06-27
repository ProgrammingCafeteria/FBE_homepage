import Section from "./Section" ;

const Unknown = (props)=>{
    console.log(props.match.params.path);
    const pageName = props.match.params.path ;
    return (
        <>
            <Section
             type="center"
             title="不明なページ"
             text={<>"{pageName}"は不正なURLです。<a href="/">トップに戻る</a></>}
            />

        </>
    ) ;
};

export default Unknown ;

