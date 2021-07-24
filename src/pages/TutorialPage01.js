//React
import React, { useState } from "react";
//コンポーネント
import Section from '../components/Section';
import LinkButton from '../components/LinkButton';
import ImgLine from '../components/ImgLine';
//CSS
import "../css/TutorialPage01.css";
//画像
import { flowchart_tutorial_imgs as imgs , sym_imgs as symImgs } from "../utils/variables";
import imgVar01 from "../img/変数01.png" ;




//マテリアルアイコン
// import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Button from '@material-ui/core/Button';

/*
::::一覧
フローチャートと記号
端子記号と順次構造
出力
入力
変数
 変数の表示
計算式
 表示させる
 使える演算（* /%に注意）
分岐
繰り返し
 実行してみる
 forパターン
ファイル読み込み
配列
 配列
 添え字
多分岐
----------------------------
定義済み処理
 定義済み処理とは
 引数とは

*/

const ThisPages = () => {
    return (
        <Section>
            <h1>このページは？</h1>
            このページではFBEでフローチャートを作る際に役立つ、
            フローチャートとプログラミングの知識を提供します。
            これらを学ぶことで基礎的なプログラミングの考え方を習得することもできます。

            <br />　<br />
            FBEの操作方法を知りたい方は
            以下のページから"FBEチュートリアル"を参照してください。
            <LinkButton href="/fbe_tutorial/1" text="FBE チュートリアル" />

            <h1>学習の心構え</h1>
            プログラミングの学習全般に言えることですが、
            プログラミングは奥が深く、
            <b>一度にすべてを理解することは
                並の人間にはできません</b>。
            なので、<b>3割理解出来たら（分からなくても）次のページへ進みましょう。</b>
            一度インプットした後、
            フローチャートの問題を解いたり、プログラムを自分で作ったりしているうちに、
            インプットの段階では理解できていなかったことが理解できてくるでしょう。
            次のページから始まるチュートリアルでも、分からないところはいったん置いておく
            を意識して見てみてください。

            <br /><br />
            それでは、次のページからフローチャートのチュートリアルを見てみましょう！

        </Section >
    );
};

const Junji = () => {
    return (
        <Section>
            <h1>フローチャートとプログラミング</h1>
            まずはフローチャートの例を見てみましょう。
            <ImgLine cap="" src={imgs[13]} />
            (プログラミングにおける)フローチャートでは,
            <b>コンピュータに何をしてほしいのか</b>を
            はじめから順に記号を使ってかいていきます。
            「何をしてほしいのか」ひとつひとつを<b>処理</b>
            といい、フローチャートでは処理を<b>流れ図記号</b>
            を使って表現します。
            流れ図記号の種類については、後のページで1つ1つ紹介していきます。

            <h1>端子記号と順次構造</h1>
            プログラムを書いていくうえで、"プログラムのはじめとおわり"を書いておくと
            ひとめでプログラムだとわかりやすくなります。なので、フローチャートでは
            <b>端子記号</b>を使って表します。
            <ImgLine cap="はじめ・おわり記号" src={imgs[1]} />
            つまり、はじめ記号からおわり記号までの間にプログラムを書いていきます。
            <br /> <br />
            何かプログラムを入れてみましょう。
            <ImgLine cap="" src={imgs[2]} />
            新しく出てきた記号は今は分からなくてもかまいません。
            ここで分かってほしいことは、
            <b>プログラムの初めと終わりにははじめ記号とおわり記号をかく</b>
            ということだけです。

        </Section>
    );
};

const Output = () => {
    return (
        <Section>
            <h1> 出力 </h1>
            今度はコンピュータに、出力をさせてみましょう。
            出力とは、簡単に言えば<b>画面に表示する事</b>です。
            人間で例えれば何かを"くちで言う"事と思えばいいでしょう。
            <br /><br />
            コンピュータに出力してもらうためには、<b>データ記号</b>を使います。
            データ記号は以下のような記号です。
            <ImgLine cap="データ記号" src={symImgs["out"]}/>
            例えば「プログラミング」という文字を表示するためには
            データ記号に「"プログラミング"を出力」というように書きます。
            プログラミングという文字をかこっている「"」はダブルコーテーションという記号で、
            それで囲まれたものが文字であることを表しています。
            Excelをやったことがある人にはなじみがあるかもしれませんが、
            よくわからない人は、"表示したいものを「"」で囲むんだー"という理解で今は大丈夫です。
            <br/><br/>
            
            ではこのデータ記号を使って簡単なプログラムを作ってみましょう。
            今回は"プログラミング"という文字を出力するプログラムを作って実行してみました。
            <ImgLine cap="プログラミングと表示するプログラム" src={imgs[3]}/>
            "プログラミング"と表示されました。

        </Section>
    );
};

const Input = () => {
    return (
        <Section>
            <h1>入力</h1>
            前回紹介したデータ記号、実はデータの出力だけでなく、
            データの入力もできるんです。
            データの入力とは人間がコンピュータに何かを教えることです。
            コンピュータは教えてもらったことをもとに、出力することが多々あります。
            例えば年齢を入力する例は次の通りです。
            <ImgLine cap="年齢を入力する" src={symImgs["in"]} />
            <br /><br /><br />

            今回は数字を入力してその数字をそのまま出力するプログラムを用意して実行してみます。
            それでは実行してみるとどうなるか試してみましょう！
            <ImgLine cap="数字を入力" src={imgs[4]} />
            入力記号のところでコンピュータが入力を求めてきました。
            上の例では3と答えています。
            <ImgLine cap="出力" src={imgs[5]} />
            3と答え終わると、その後表示がされました。
            ちなみに、上の例のような入力したものをそのまま出力するプログラムを
            <b>おうむがえし</b>するプログラムと言ったりします。
            頭の片隅に置いておいてください。

        </Section>
    );
};

const Variable = () => {
    return (
        <Section>
            <h1>変数</h1>
            人間が何かを覚えておくためには、メモ用紙が必要です。
            人であれば、たとえば「年齢は15と覚えていて！」と言われれば
            「年齢:15」といったふうにメモを取るでしょう。
            仮にメモを取らなくても頭の中でそのように覚えているはずです。
            <br />
            コンピュータにとってのメモ用紙を<b>変数</b>と言います。
            先ほどのように、「年齢は15と覚えていて！」と言われると、
            コンピュータは年齢と書いたメモ用紙に15と書きこみます。
            <ImgLine src={ imgVar01}/>
            こうすることで、あとで年齢を思い出したいときに、このメモ用紙を見て
            年齢を知ることが出来ます。もしメモ用紙（変数）に15と書いていなければ
            コンピュータは年齢を答えることが出来ません。
            <br /><br />
            ではフローチャートで変数を使うためにはどのように書くのか見てみましょう。
            フローチャートでは<b>計算記号</b>を使います。
            <ImgLine src={ symImgs["calc"]}/>
            上のように長方形の中で「0→変数」と書きます。<br />
            この例では「変数」というメモ帳（変数）に0という数字を入れています。
            時々プログラミングでは矢印の左右が入れ替わって「変数←0」と表記されることもありますが、
            矢印の出元(?)の値を矢印の先に入れるということは必ず変わりません。
            矢印の左右で覚えないようにしてください。
            <br/><br/>
            
            計算記号をプログラムに使ってみましょう。    
            今回は単純に年齢に10と入れるだけのプログラムを作ってみます。
            <ImgLine src={ imgs[6]}/>
            このプログラムでは入出力は何もないため、何も表示されません。
            なので人間には何が変わったのかは分かりませんが、コンピュータの頭の中では
            次のようにメモが残されています。
            <ImgLine src={ imgs[7]}/>
            <br/><br/>

            では次にこの値を使ってデータを出力してみましょう。
            <ImgLine src={ imgs[8]}/>

            上のように「年齢を出力」と書くことで、
            年齢にメモされた数字（10）を表示させることが出来ました。
            <br /><br />

            変数に値を入れることを「変数に代入する」ともいうので、
            覚えておきましょう。

            <div className="memo">
                <h1>年齢を「"」で囲まないでいいのか</h1>
                コンピュータは年齢を出力と言われたときに、
                「年齢という文字をそのまま表示する」のか
                「年齢という変数の中身を表示する」のかを
                どうやって判断するのでしょうか。<br />
                答えは
                <b>「"」で囲まれている文字はそのまま出力</b>して、
                <b>「"」で囲われてない文字は変数としてその中身を出力</b>します。
                <br/>
                つまり、出力のチュートリアルでプログラミングという文字を
                「"」で囲むようにしていたのは、プログラミングという文字だからであって、
                変数ではないからだったのです。
                <br/>
                これを踏まえて、変数を表示させたいのか・文字として表示させたいのかを
                「"」で囲うか否かでしっかり区別するようにしましょう。
            </div>


        </Section>
    );
};

const Calc = () => {
    return (
        <Section>
            <h1>計算</h1>
            前回、変数に0や10といった数字を入れていましたが、
            そこには計算式を入れることもできます。
            <ImgLine cap="1+1の計算結果を答えに入れる" src={imgs[9]} />
            これを実行すれば"答えを出力"のところで1+1の計算結果である2が表示されるはずです。
            <ImgLine cap="" src={imgs[10]} />
            予想通り2が表示されました。
            <br /><br />

            基本的に使用できる計算は以下の5つです。
            <ul>
                <li>足し算</li>
                <li>引き算</li>
                <li>掛け算</li>
                <li>割り算</li>
                <li>余り算</li>
            </ul>
            <ImgLine cap="使用できる5つの計算" src={imgs[11]} />
            ここで注意したいのが、掛け算割り算余り算は普段見る
            "×","÷"ではなく、"*","/"を使うことです。 
            また、"( )"（かっこ）を使った計算もできます。

            <div className="memo">
                <h1>計算について</h1>
                FBEでフローチャートを作成する際には上のように計算式を
                組み立てれば問題ないのですが、実は必ずしも上の通りとは限らない時があります。
                例えば、ある参考書では掛け算割り算は"×","÷"を使うことになっていますし、
                余り算は"5 mod 2"や、"mod(5,2)"のように書かれたりします。
                とはいえ"×","÷"で書かれていたらその通り読めますし、
                あまり算については問題に"あまりは～と表す"とあると思うので、
                その時々で臨機応変に対応していく必要があります。
            </div>


        </Section>
    );
};




//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------


const pageList = [
    {
        "tid": "1",
        "jsx":
            <ThisPages />
    },
    {
        "tid": "2",
        "jsx":
            <Junji />
    },
    {
        "tid": "3",
        "jsx":
            <Output />
    },
    {
        "tid": "4",
        "jsx":
            <Input />
    },
    {
        "tid": "5",
        "jsx":
            <Variable />
    },
    {
        "tid": "6",
        "jsx":
            <Calc />
    },
];
export const pages = pageList;


const TutorialPage01 = (props) => {
    const [pages, setPages] = useState(pageList);

    let pageIdx = -1;
    pages.forEach((ele, idx) => {
        if (ele["tid"] === props.match.params.tid) {
            pageIdx = idx;
        }
    });
    let [nowPageIdx, setNowPageIdx] = useState(pageIdx);
    if (nowPageIdx < 0) {
        //ページが存在しない時
        pages[nowPageIdx] = {
            "jsx":
                <Section type="center">
                    <h1>ERROR !</h1>
                    <h1>Not Found In Tutorials !</h1>
                    このページは存在しません。URLを確かめてください。
                    <LinkButton href="/flowchart_tutorial/1" text="チュートリアルの始めへ" />
                    <LinkButton href="/" text="TOPへ" />
                </Section>
        };
    }


    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       width: '100%',
    //     },
    //     heading: {
    //       fontSize: theme.typography.pxToRem(15),
    //       fontWeight: theme.typography.fontWeightRegular,
    //     },
    //   }));
    // const classes = useStyles();

    return (
        <>
            <main className="tp01 tutorials">
                <Section type="center" id="tutorial_top">
                    <h1 className="ta-center">フローチャート<br />チュートリアル</h1>
                </Section>

                <Section type="center" className="top-move-bt-sec">
                    <div className="tp-move-bt-bar">
                        {0 < nowPageIdx ? <LinkButton href={`/flowchart_tutorial/${pages[nowPageIdx - 1]["tid"]}`} text="前のページへ"></LinkButton> : <div></div>}
                        {nowPageIdx < pages.length - 1 ? <LinkButton href={`/flowchart_tutorial/${pages[nowPageIdx + 1]["tid"]}`} text="次のページへ"></LinkButton> : <div></div>}
                    </div>
                </Section>

                {pages[nowPageIdx]["jsx"]}

                <Section type="center" className="top-move-bt-sec">
                    <div className="tp-move-bt-bar">
                        {0 < nowPageIdx ? <LinkButton href={`/flowchart_tutorial/${pages[nowPageIdx - 1]["tid"]}`} text="前のページへ"></LinkButton> : <div></div>}
                        {nowPageIdx < pages.length - 1 ? <LinkButton href={`/flowchart_tutorial/${pages[nowPageIdx + 1]["tid"]}`} text="次のページへ"></LinkButton> : <div></div>}
                    </div>
                </Section>


            </main>

        </>

    );
};

export default TutorialPage01;

