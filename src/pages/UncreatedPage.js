import Section from "../components/Section" ;
import LinkButton from "../components/LinkButton" ;

const UncreatedPage = (props)=>{
    return (
        <main>
            <Section type="center" >
                {<>
                    <h1>準備中...</h1>
                    まだ準備中です...
                    <LinkButton text="トップに戻る" href="./top" />
                </>}
            </Section>
        </main>
    ) ;
};

export default UncreatedPage ;


