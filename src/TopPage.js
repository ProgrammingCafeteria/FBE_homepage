import Section from "./Section" ;
import LinkButton from "./LinkButton" ;

const Top = ()=>{
    return (
        <>
            <Section 
             type="left"
             title={<b>Flowchart<br />Build<br />Executor</b>}
             imgPath="img/background.png"
             text={<>FBEを使えば オリジナルのフローチャートを作成するだけでなく 実行することが出来ます<br />アルゴリズムの学習などに役立ててください！</>}
             afterText={<LinkButton text="今すぐダウンロードする" href="./download" />}
             >
            </Section>
            <Section 
             type="right"
             title={<>作りやすさと 実行しやすさ</>}
             text={<>
                FlowchartBuildExecutor(FBE)はフローチャートを通して アルゴリズムやプログラミングを 学ぶすべての人に向けて 
                サクッと作って実行ができるように 様々な仕組みが用意されています！
             </>}
             imgPath="img/background.png">
                
            </Section>
            
            
        </>
    ) ;
};

export default Top ;

