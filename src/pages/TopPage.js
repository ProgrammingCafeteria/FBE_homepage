import Section from "../components/Section" ;
import LinkButton from "../components/LinkButton" ;

const Top = ()=>{
    return (
        <>
            <Section type="left" imgPath="img/background.png" >
                 {<>
                    <h1><b>Flowchart<br />Build<br />Executor</b></h1>
                    FBEを使えば オリジナルのフローチャートを作成するだけでなく 実行することが出来ます<br />アルゴリズムの学習などに役立ててください！
                    <LinkButton text="今すぐダウンロードする" href="./download" />
                 </>}
            </Section>

            <Section type="right" imgPath="img/background.png">
                {<>
                        <h1>作りやすさと 実行しやすさ</h1>
                        FlowchartBuildExecutor(FBE)はフローチャートを通して アルゴリズムやプログラミングを 学ぶすべての人に向けて 
                        サクッと作って実行ができるように 様々な仕組みが用意されています！
                </>}
            </Section>


        </>
    ) ;
};

export default Top ;

