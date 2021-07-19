import Section from '../components/Section';
import LinkButton from '../components/LinkButton';
import ImgLine from '../components/ImgLine';
import React,{useState} from "react" ;
import "../css/TutorialPage01.css" ;
import defaultImg from "../img/background.png" ;
import { makeStyles } from '@material-ui/core/styles';
/*
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
*/
import Button from '@material-ui/core/Button';


const T_getStart = ()=>{
    return (
        <Section type="left">
            <h1>FBEのインストール</h1>
            FBEを使用するためにお使いのPCにインストールが必要です。
            インストール方法はご使用のOSによって違うので、
            以下から確認してください。
            <LinkButton href="#install_win" text="Windowsの方はこちら" />
            <LinkButton href="#install_other" text="その他の方はこちら" />

            <div id="install_win" className="top-bottom-margin">
                <h2>Windowsへのインストール</h2>
                FBEのWindowsへのインストールは以下の手順で行います。

                <ul>
                    <li>ダウンロード</li>
                    <li>解凍</li>
                    <li>起動</li>
                </ul>
                <h2>ダウンロード</h2>
                下のボタンをクリックして、ダウンロードページへ移動します。
                ダウンロードページに移動したらWindowsの欄を選んで、Zipファイルをダウンロードします。
                <LinkButton href="/download" text="Windows版をダウンロード" newTab={true} />

                <h2>解凍</h2>
                ダウンロードしたZipファイルを
                <a href="https://www.vector.co.jp/soft/win95/util/se169348.html">Lhaplus</a>
                などの解凍ソフトで適当なフォルダ（ドキュメント・デスクトップなど）に解凍してください。

                <h2>起動</h2>
                解凍したフォルダの中にある、<b>FlowchartBuildExecutor.exe</b>
                をダブルクリックしてください。FBEが起動します。


                <br />
                これだけでインストールは完了です。

            </div>

            <hr />

            <div id="install_other" className="top-bottom-margin">
                <h2>その他のOSへのインストール</h2>
                今現在、FBEは上記で紹介したOS以外ではサポートしていません。
                ですが、FBEはJavaで作成されているため、JDKおよびJavaFxが
                動作する環境では利用ができることがあります。
                もしあなたのPCでFBEが利用不可あれば
                <a href="https://bell-sw.com/">LibericaJDK</a>
                などをインストールして、FBEのインストールにチャレンジしてみてもいいかもしれません。
            </div>

            
        </Section>
    ) ;
};
const T_basic_tech = ()=>{
    return (
        <Section type="left">
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
    ) ;
};

//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
const pageList = [
    {"tid":"1" ,
        "jsx":
            <T_getStart />
        },
    {"tid":"test2" ,
        "jsx":
            <T_basic_tech />

        },
    {"tid":"test3" ,
        "jsx":
            <Section type="center">
                <h1>TEST 3</h1>
            </Section>

        },
];
export const pages = pageList ;


const TutorialPage01 = (props)=>{
    console.log(props);
    const [pages,setPages] = useState(pageList);

    console.log(props);
    let pageIdx = -1 ;
    pages.forEach((ele,idx)=>{
        if(ele["tid"] === props.match.params.tid){
            pageIdx = idx ;
        }
    });
    let [nowPageIdx,setNowPageIdx] = useState(pageIdx) ;
    console.log("nowPageIdx :"+nowPageIdx);
    if(nowPageIdx < 0){
        //ページが存在しない時
        pages[nowPageIdx] = {
            "jsx":
                <Section type="center">
                    <h1>ERROR !</h1>
                    <h1>Not Found In Tutorials !</h1>
                    このページは存在しません。URLを確かめてください。
                    <LinkButton href="/tutorial/test1" text="チュートリアルの始めへ" />
                    <LinkButton href="/top" text="TOPへ" />
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
            <main className="tp">
                <Section type="center" id="tutorial_top">
                    <h1>FBE<br />チュートリアル</h1>
                </Section>

                <Section type="center" className="top-move-bt-sec">
                    <div className="tp-move-bt-bar">
                        {0 < nowPageIdx ?<LinkButton href={`/tutorial/${pages[nowPageIdx-1]["tid"]}`} text="前のページへ"></LinkButton>:<div></div>}
                        {nowPageIdx < pages.length-1 ?<LinkButton href={`/tutorial/${pages[nowPageIdx+1]["tid"]}`} text="次のページへ"></LinkButton>:<div></div>}
                    </div>
                </Section>

                {pages[nowPageIdx]["jsx"]}

                <Section type="center" className="top-move-bt-sec">
                    <div className="tp-move-bt-bar">
                        {console.log(pages)}
                        {0 < nowPageIdx ?<LinkButton href={`/tutorial/${pages[nowPageIdx-1]["tid"]}`} text="前のページへ"></LinkButton>:<div></div>}
                        {nowPageIdx < pages.length-1 ?<LinkButton href={`/tutorial/${pages[nowPageIdx+1]["tid"]}`} text="次のページへ"></LinkButton>:<div></div>}
                    </div>
                </Section>

                
            </main>



            {/* 

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
                    
                    <li><a href="#sec_02">FBEのインストール</a></li>
                    <li><a href="#install_win">　Windows</a></li>
                    <li><a href="#install_other">　その他のOS</a></li>
                    
                    <li><a href="#sec_03">基本的な操作方法</a></li>
                    <li><a href="#howto_make">フローチャートの作成</a></li>
                    <li><a href="#howto_exe">フローチャートの実行</a></li>
                    <li><a href="#howto_tosrc">フローチャートをソースコードに変換する</a></li>
                    <li><a href="#howto_saveProject">プロジェクトの保存</a></li>


                </ul>
            </div> */}

        </>
    
    ) ;
};

export default TutorialPage01 ;

