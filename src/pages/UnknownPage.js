import Section from "../components/Section" ;
import LinkButton from "../components/LinkButton" ;

const UnknownPage = (props)=>{
    console.error("not valid url : "+props.match.params.path);
    const pageName = props.match.params.path ;
    return (
        <>
            <Section type="center" >
                {<>
                    <h1>不明なページ</h1>
                    "{pageName}"は不正なURLです。
                    <LinkButton text="トップに戻る" href="./top" />
                </>}
            </Section>
        </>
    ) ;
};

export default UnknownPage ;


