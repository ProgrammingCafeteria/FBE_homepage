import Section from "../components/Section" ;
import LinkButton from "../components/LinkButton" ;


const UnknownPage = (props)=>{
    document.title = "Unvalid Page | FBE " ;
    console.error("not valid url : "+window.location);
    return (
        <main>
            <Section type="center" >
                {<>
                    <h1>不明なページ</h1>
                    このページは不正なURLです。
                    <LinkButton text="トップに戻る" href="./top" />
                </>}
            </Section>
        </main>
    ) ;
};

export default UnknownPage ;


