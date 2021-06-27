import Section from "./Section" ;

const Top = ()=>{
    return (
        <>
            <Section 
             type="center"
             title={<b>FlowChartBuilder</b>}
             imgPath="img/background.png">
                FBEを使うとフローチャートを作って実行できます！FBEを使ってアルゴリズムの勉強をしましょう！
            </Section>
            
            <Section 
             type="left"
             title={<>作るフローチャート</>}
             imgPath="img/background.png">
                フローチャートをボタンを押して作成しましょう。
                ドラッグアンドドロップする必要はないのでより作成しやすくなっています。
                それも面倒な人のために<b>最初から数多くのテンプレート</b>を用意しています。
            </Section>
            
            <Section 
             type="right"
             title={<>動くフローチャート</>}
             imgPath="img/background.png">
                作ったフローチャートは簡単に実行ができます。
                フローチャートをプログラムに直すことなく<b>フローチャートのまま実行</b>できます。
                様々な実行タイプがあるため、<b>表示方法</b>も選ぶことが出来ます。
            </Section>
            
            
        </>
    ) ;
};

export default Top ;

