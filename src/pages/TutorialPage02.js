import Section from '../components/Section';
import LinkButton from '../components/LinkButton';
import ImgLine from '../components/ImgLine';
import React from "react" ;
import "../css/TutorialPage01.css" ;
import defaultImg from "../img/background.png" ;

const TutorialPage01 = (props)=>{
    return (
        <>
            <main className="tp01">
                <Section type="center" id="sec_01" imgPath={defaultImg}>
                    <h1>FBE<br />チュートリアル</h1>
                    <b>Flowchart Build Executor (FBE)</b>とは
                    フローチャートを作成して、実行ができるフリーソフトです。
                    このページでは初心者向けにチュートリアルを掲載しています。
                    FBEを初めて触る人はこちらを参考にFBEを学ぶことで
                    よりFBEを使いこなすことが出来るでしょう。
                </Section>

                <Section type="left" id="sec_03">
                    <h1>基本的な操作方法</h1>
                    FBEでできることは主に以下の通りです。
                    <ul>
                        <li>フローチャートの作成</li>
                        <li>フローチャートの実行</li>
                        <li>フローチャートをソースコードに変換する</li>
                    </ul>
                    <h2 id="howto_make">フローチャートの作成</h2>
                    今回は下のようなフローチャートの作成を通して、
                    FBEでのフローチャート作成をマスターしましょう。
                    <ImgLine cap="ダウンロードページ(デザインが異なる場合があります)" src={defaultImg} />

                    <h2 id="howto_exe">フローチャートの実行</h2>
                    ..................
                    <h2 id="howto_tosrc">フローチャートをソースコードに変換する</h2>
                    ..................

                    <hr />

                    <h2>その他の操作</h2>
                    <h2 id="howto_saveProject">プロジェクトの保存</h2>
                    FBEでは編集内容を保存するときに<b>「FBE形式」</b>で保存します。
                    「FBE形式」の拡張子は".fbe"です。
                    プロジェクトをFBE形式で保存するには、..................
                    
                </Section>

            </main>

            <div id="menu">
                <ul>
                    <h3>チュートリアル</h3>
                    <li><a href="#sec_01">トップ</a></li>
                    
                    <li><a href="#sec_03">基本的な操作方法</a></li>
                    <li><a href="#howto_make">フローチャートの作成</a></li>
                    <li><a href="#howto_exe">フローチャートの実行</a></li>
                    <li><a href="#howto_tosrc">フローチャートをソースコードに変換する</a></li>
                    <li><a href="#howto_saveProject">プロジェクトの保存</a></li>


                </ul>
            </div>

        </>
    
    ) ;
};

export default TutorialPage01 ;

