import Section from "../components/Section" ;
import LinkButton from "../components/LinkButton" ;


const Top = ()=>{
    return (
        <main>
            <Section type="left" imgPath="img/background.png" >
                 {<>
                    <h1><b>Flowchart<br />Build<br />Executor</b></h1>
                    FBEを使えば オリジナルのフローチャートを作成するだけでなく 実行することが出来ます<br />アルゴリズムの学習などに役立ててください！
                    <LinkButton text="今すぐダウンロードする" href="./download" />
                 </>}
            </Section>

            <Section type="right" imgPath="img/background.png">
                {<>
                    <h1>フローチャートを 実行する</h1>
                    FlowchartBuildExecutor(FBE)はフローチャートを通して アルゴリズムやプログラミングを 学ぶすべての人に向けて 
                    フローチャートを作成して<b>実行する</b>機能があります。
                </>}
            </Section>

            <Section type="left" imgPath="img/background.png">
                {<>
                    <h1>様々な実行タイプ</h1>
                    一口に実行するといってもプログラムの実行形式は様々にあります。
                    例えば、データを表形式で表示したり、2次元配列をゲームの盤面に見立てて表示したり...
                    FBEでは様々な実行タイプを<b>実行前に選ぶだけ</b>で様々な実行の形式を体験できます。
                </>}
            </Section>

            <Section type="right" imgPath="img/background.png">
                {<>
                    <h1>フローチャートを プログラミング言語へ</h1>
                    作成したフローチャートは通常FBE形式で保存されますが、JavaScriptなどの
                    <b>プログラミング言語のソースコードへ変換する</b>ことも可能です。
                    今後のアップデートで、より多くの言語への変換を可能にしていく予定です。
                </>}
            </Section>

            <Section type="center" >
                {<>
                    <h1 className="smaller">さあ、フローチャートを 実行しましょう！</h1>
                    <LinkButton text="ダウンロードする" href="/download"></LinkButton>
                </>}
            </Section>

            <Section type="center" >
                {<>
                    <h1 className="smaller">開発者の方ですか？</h1>
                    FBEは継続的にアップデートし、Github上にソースコードを公開しています。
                    もしあなたがJavaやJavaFxに詳しいのであればぜひ開発にご協力ください。
                    <LinkButton text="GitHubへ" href="https://github.com/TBSten/FlowchartBuildExecutor_for_pc"></LinkButton>
                </>}
            </Section>



        </main>
    ) ;
};

export default Top ;




