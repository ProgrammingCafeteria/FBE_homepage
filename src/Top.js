import Section from "./Section" ;

const Top = ()=>{
    return (
        <>
            <Section
                type="left"
                title=
                    "Sectionコンポーネントの使い方について"
                description=""
                imgPath="img/background.png">
                    <>
                        Sectionコンポーネントは基本的なページセクションのテンプレートを提供します。以下の属性を指定してください。
                        <ul>
                            <li>type</li>
                            <li>title</li>
                            <li>imgPath</li>
                        </ul>
                    </>

            </Section>
            <Section title="type" imgPath="img/background.png">
                left,right,centerを指定する。デフォルトはleft。
            </Section>
            <Section title="title" imgPath="img/background.png">
                タイトルを指定する。
            </Section>
            <Section title="imgPath" imgPath="img/background.png">
                index.htmlからの画像のパスを指定する。
            </Section>
        </>
    ) ;
};

export default Top ;

