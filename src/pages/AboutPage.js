import Section from "../components/Section" ;
import ImgLine from "../components/ImgLine" ;
import img_snap01 from "../img/スナップ01.PNG" ;
import img_snap06 from "../img/スナップ06.PNG" ;
import img_snap02 from "../img/スナップ02.PNG" ;
import img_snap03 from "../img/スナップ03.PNG" ;
import img_f2p from "../img/fbeToProgrammigLanguage.png" ;


import "../css/AboutPages.css" ;

const About = ()=>{
    return (
        <main className="about">
            <Section type="center" >
                 {<>
                    <h1> FBEでできること </h1>
                    <summary>
                        <strong>〇FBEでできること</strong>
                        <ul>
                            <li>フローチャートを作成する</li>
                            <li>フローチャートを実行する</li>
                            <li>フローチャートをプログラミング言語のコードへ変換する</li>
                        </ul>
                    </summary>
                 </>}
            </Section>

            <Section type="center" >
                {<>
                    <h1> フローチャートを作成する </h1>
                    FBEを使うと簡単なボタンをクリックしていくだけでフローチャートを組み立てていくことができます。
                    プログラム実行のための最適なフローチャートが作りやすく、構造化プログラミングを容易に実現できます。

                    <ImgLine src={img_snap01} cap="フローチャートを作成する"></ImgLine>

                    フローチャートを構成する記号も多種多様で思い通りにプログラムを作り上げることが出来るでしょう。

                    <ImgLine src={img_snap06} cap="様々な記号"></ImgLine>

                    また、より詳細にプログラムを作りたい人向けに、各記号に多くのオプションを設定できます。
                    これによってより柔軟なプログラムの作成が可能になっています。

                </>}
            </Section>

            <Section type="center">
            {<>
                <h1> フローチャートを実行する </h1>
                FBEが他のフローチャートツールと大きく異なる最大の特徴は
                フローチャートを実行することが出来るところです。
                プログラミングやアルゴリズムを学ぶ人にとって、
                「このフローチャートの実行結果はどうなるだろうか」と
                イメージすることはとても重要ですが、FBEはそれをおおいに
                サポートします。

                <ImgLine src={img_snap02} cap="フローチャートを実行する"></ImgLine>

                FBEがフローチャートを実行する上での特徴は以下の通りです。

                <summary>
                    <strong>〇実行の特徴</strong>
                    <ul>
                        <li>実行タイプ</li>
                        <li>少しずつ実行するか一気に実行するかを選べる。</li>
                        <li>変数の値のトレーサ機能</li>
                        <li>配列テンプレート</li>
                    </ul>
                </summary>

                <p>
                    <div><strong>〇実行タイプ</strong></div>
                    例えば売上データを読み取って合計を求めるプログラムと、2Dアクションゲームとでは
                    データの表示方法に大きな違いがあります。FBEではこれを<b>実行タイプ</b>と呼び、
                    様々なものが用意されています。例えば以下のようなものがあります。
                    <summary>
                        <strong>〇実行タイプの例</strong>
                        <ul>
                            <li>メッセージボックス（デフォルト）</li>
                            <li>実行コンソール</li>
                            <li>表形式</li>
                            <li>2Dゲーム</li>
                        </ul>
                    </summary>

                    <ImgLine src={img_snap03} cap="実行タイプを選択する"></ImgLine>

                    また実行タイプによっては、詳細オプションを設定できるものもあり、
                    よりクリエイティブなプログラム作成を支援しています。
                </p>

            </>}
            </Section>

            <Section type="center" >
                {<>
                    <h1> フローチャートをプログラミング言語のコードへ変換する </h1>
                    作成したフローチャートはそのままプログラミング言語へ変換することも可能です。
                    今後変換できる言語も増えていきます。

                    <ImgLine src={img_f2p} cap="フローチャートをプログラミング言語へ"></ImgLine>
                    ※言語やフローチャートによっては変換できないこともあります。


                </>}
            </Section>





        </main>
    ) ;
};

export default About ;




