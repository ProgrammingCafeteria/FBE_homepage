import Section from "./Section" ;
import "./css/_TemplatePage.css" ;
import LinkButton from "./LinkButton" ;

const PageTemplate = ()=>{
    return (
        <>
            <Section 
             type="left"
             title="テンプレートページ"
             text="このページを参考にページを作成してください"
             afterText={<LinkButton text="TOPへ" href="./top" />}

             imgPath="img/background.png"
             >
            </Section>

            <Section 
             type="right"
             title="typeをrightにする"
             text="title,text,afterTextが右に移動します"
             afterText={<LinkButton text="今すぐダウンロードする" href="./download" />}

             imgPath="img/background.png"
             >
            </Section>
        </>
    ) ;
};

export default PageTemplate ;
