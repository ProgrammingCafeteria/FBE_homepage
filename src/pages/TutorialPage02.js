//React
import React,{useState} from "react" ;
//コンポーネント
import Section from '../components/Section';
import LinkButton from '../components/LinkButton';
import ImgLine from '../components/ImgLine';
import TutorialTemplate from "../components/TutorialTemplate" ;
//CSS
import "../css/TutorialPage02.css" ;
//画像
import snap07Img from "../img/スナップ07.PNG" ;
import snap08Img from "../img/スナップ08.PNG" ;
import snap09Img from "../img/スナップ09.PNG" ;
import snap10Img from "../img/スナップ10.PNG" ;
import snap11Img from "../img/スナップ11.PNG" ;
import snap12Img from "../img/スナップ12.PNG" ;
import snap14Img from "../img/スナップ14.PNG" ;
import snap15Img from "../img/スナップ15.PNG" ;
import snap16Img from "../img/スナップ16.PNG" ;
import snap18Img from "../img/スナップ18.PNG" ;
import snap19Img from "../img/スナップ19.PNG" ;
import snap20Img from "../img/スナップ20.PNG" ;
import snap21Img from "../img/スナップ21.PNG" ;
import snap22Img from "../img/スナップ22.PNG" ;
import snap23Img from "../img/スナップ23.PNG" ;
import snap24Img from "../img/スナップ24.PNG" ;
import snap25Img from "../img/スナップ25.PNG" ;
import snap26Img from "../img/スナップ26.PNG" ;
import snap27Img from "../img/スナップ27.PNG" ;
import snap28Img from "../img/スナップ28.PNG" ;
import snap29Img from "../img/スナップ29.PNG" ;
import snap30Img from "../img/スナップ30.PNG" ;
import snap31Img from "../img/スナップ31.PNG" ;
import snap32Img from "../img/スナップ32.PNG" ;

//マテリアルアイコン
// import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Button from '@material-ui/core/Button';


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

const T_basic_tech_1 = ()=>{
    return (
        <Section type="left">
            <h1>基本的な操作方法</h1>
            FBEでできることは主に以下の通りです。
            <ul>
                <li>フローチャートの作成</li>
                <li>フローチャートの実行</li>
                <li>フローチャートをソースコードに変換する</li>
            </ul>

            <hr />

            <h2 id="howto_make">フローチャートの作成</h2>
            まず、FBEをひらくと次のような画面が表示されているはずです。
            （すでに何かがある場合は"ファイル"タブから"新規作成"をクリックしましょう）
            <ImgLine cap="開始画面" src={snap07Img} />
            ここに「"Hello FBE !"と表示する流れ図記号」を追加してみましょう。<br />
            「はじめ記号」と「おわり記号」の間の<b>"＋ボタン"</b>をクリックします。
            次のようなウィンドウが表示されるはずです。
            <ImgLine cap="記号の追加ウィンドウ" src={snap08Img} />
            今回は「"Hello FBE !"と表示する流れ図記号」を追加したいので、
            <b>"表示"記号</b>をクリックします。すると次の画面へ移動します。
            <ImgLine src={snap09Img} />
            見事に表示するための流れ図記号が追加できました。
            ですが、何を表示するかなどの細かな設定をする必要があります。
            追加したときに現れた小さなウィンドウ（<b>設定ウィンドウ</b>）で流れ図記号の細かな設定ができます。
            もし閉じてしまったら流れ図記号をダブルクリックすると再度開くことが出来ます。
            表示記号で表示させたい値は<b>対象</b>オプションに入力します。
            初期値のままでは「変数」が表示されてしまうので、これを「"Hello FBE !"」
            に書き換えましょう。
            <ImgLine cap="表示する文字の変更" src={snap10Img} />
            <b>「保存して戻る」ボタン</b>をクリックして設定ウィンドウを閉じます。
            <ImgLine src={snap11Img} />
            表示内容を変更することが出来ました！これで初めてのフローチャートの作成が完了しました！
            次はFBE最大の特徴であるフローチャートの実行をしてみましょう！

            <h2 id="howto_exe">フローチャートの実行</h2>
            FBEで作成したフローチャートを実行するには、<b>"実行"タブから実行ボタン</b>
            を選択します。
            <ImgLine src={snap12Img} />
            すると次のようなウィンドウが出てきます。
            <ImgLine cap="実行タイプウィンドウ" src={snap14Img} />
            通常、プログラムのデータの出力形式は様々あります。
            例えば、簡単なプログラムであればメッセージダイアログで結果を出力したり、
            あるプログラムでは読み取った売上データを集計し、表形式で表示させたり、
            またあるプログラムでは2次元配列をゲーム画面に見立てて表示するなど、
            一口にデータを入出力するといっても様々な形式があります。<br />
            FBEではこのような形式を<b>実行タイプ</b>として、
            実行前に選ぶことで、簡単に実行形式を選ぶことが出来ます。
            上の画面では青色になっている「デフォルト」が選択中の実行タイプです。
            「デフォルト」では実行結果をメッセージダイアログで一つずつ表示します。
            （簡単なプログラムであればデフォルトが最適な実行タイプなので）
            今回はこのままにしておきます。<br /><br /><br />

            実行タイプには細かな設定をオプションとして設定できます。
            大抵の実行タイプにある「実行タイプ」オプション（少し紛らわしいですが）は
            フローチャートの実行を"一記号ずつ行うか"・"全て一度に実行するか"を選ぶことが出来ます。
            始めの内はよくわからないと思うので、<b>"すべて実行する"</b>を選んでおきましょう！
            （初期値では"1つずつ実行"になっているので忘れずに変更しておきましょう）
            <ImgLine cap="実行タイプを選択" src={snap15Img} />

            OKボタンを押すと次のような画面になるはずです。
            <ImgLine cap="実行タイプを選択" src={snap16Img} />
            変化した部分は以下の通りです。
            <ul>
                <li>FBEウィンドウが左右に分割された</li>
                <li>"実行制御"ウィンドウが表示された</li>
            </ul>
            2つに分割されたFBEウィンドウの左側には作成したフローチャートが、
            右側には実行の途中結果（変数の値）が表示されます。
            <br /><br />
            "実行制御ウィンドウ"は実行ボタンなどがあります。
            この実行ボタンを押すとプログラムの実行が始まるので、
            <b>実行ボタンを押してみましょう！</b>
            <ImgLine cap="プログラムの実行" src={snap18Img} />
            プログラムが実行されて、「Hello FBE !」と実行されました！
            OKボタンを押して次に進みましょう！
            <ImgLine cap="実行の終了" src={snap19Img} />
            フローチャートがおわり記号にきて実行が終了しました。
            OKボタンを押して実行制御ウィンドウの終了ボタンを押して、実行を終了しましょう。
            <br /><br />
            <b>おめでとうございます！これで初めての流れ図の実行が完了しました！</b>
            <br />
            ここまで来たら、他の流れ図記号を追加してみたり、
            それらの記号がどのような動きをするのかを試してみるといいでしょう！

            <h2 id="howto_tosrc">フローチャートをソースコードに変換する</h2>
            ソースコードをプログラミング言語のソースコードへ変換してみましょう！
            ここではJavaScriptのソースコードへ変換してみます。
            まずは、<b>"コード変換"タブからJavaScript</b>を選択します。
            <ImgLine cap="コード変換を選択する" src={snap20Img} />
            次にソースコードの出力先フォルダを選びます。
            コード変換では複数のファイルが作成されるため、
            それらを出力する<b>フォルダ（ファイルではありません！）を
            選択</b>してください。
            今回は"work内のJavaScriptコード変換フォルダ"を選択してみます。
            <ImgLine cap="出力先フォルダを選択する" src={snap21Img} />
            次にフローチャートの実行と同じように、<b>実行タイプを指定</b>します。
            これを選択するとJavaScriptソースコードへの変換が開始されます。
            <ImgLine cap="実行タイプを選択する" src={snap22Img} />
            しばらくすると、ソース変換が完了して、完了のメッセージダイアログが表示されます。
            <ImgLine cap="コード変換を選択する" src={snap23Img} />
            OSのファイル閲覧ソフト（Windows:エクスプローラ,Mac:Finderなど）で
            出力先フォルダである"work内のJavaScriptコード変換フォルダ"を見てみると、
            いくつかのファイルが作成されました。
            <h4>作成されたファイル</h4>
            <ul>
                <li>index.html</li>
                <li>lib.js</li>
                <li>main.js</li>
                <li>style.css</li>
            </ul>
            JavaScriptでの実行結果を見るために<b>index.html</b>
            ファイルをダブルクリックして開いてみましょう。
            ブラウザが起動して、次のような画面が表示されます。
            <ImgLine cap="index.htmlを開いてみる" src={snap24Img} />
            "実行する"ボタンをおしてみましょう。
            <ImgLine cap="index.htmlを開いてみる" src={snap25Img} />
            実行することが出来ました！



        </Section>
    ) ;
};

const T_basic_tech_2 = ()=>{
    return (
        <Section type="center">
            <h1 id="howto_saveProject">プロジェクトの保存と読み込み</h1>
            <h2 id="howto_saveProject">プロジェクトの保存</h2>
            FBEでは編集内容を保存するときに<b>「FBE形式」</b>で保存します。
            「FBE形式」の拡張子は".fbe"です。
            プロジェクトの保存は"とりあえず今閉じておいて後で続きを作りたい"
            といったときに便利なので使えるようにしておきましょう。
            プロジェクトをFBE形式で保存するには、まず"ファイル"タブの保存をクリックします。
            <ImgLine cap={"\"ファイル\"タブの保存を選択"} src={snap26Img} />
            次に保存先を選択します。今回は"workフォルダ"に保存してみます。
            <ImgLine cap={"保存先を選択する"} src={snap27Img} />
            またここでファイル名を変更することもできます。
            今回は「HelloFBE」と保存することにします。
            その後"保存"ボタンを押すと保存されます。
            <ImgLine cap={"\"ファイル\"タブの保存を選択"} src={snap28Img} />
            これで保存ができました。保存できたかOSのファイル閲覧ソフト
            （Windows:エクスプローラ,Mac:Finderなど）で確認してみましょう。
            <ImgLine cap={"\"ファイル\"タブの保存を選択"} src={snap29Img} />
            きちんと保存ができているのが分かります。

            <h2 id="howto_saveProject">プロジェクトの読み込み</h2>

            保存したFBEファイルを読み込んで中身を見てみましょう。
            FBEファイルを読み込むことを<b>インポート</b>と言います。

            FBEでは<b>インポートするとすでにあるプロジェクトの後ろに追加されます（置き換わらずに）</b>。
            これによって、他のファイルのパーツを流用するといったことが可能になります。
            <br /><br />
            ですがこれでは分かりにくいので今回は現在のプロジェクトをまっさらにして（消して）から、
            インポートしてみましょう。
            まっさらにするには、"ファイル"タブの新規作成をクリックします。
            途中なにかウィンドウが出てきたら適当にOKボタンなどを押してください。
            最終的に次のようになっていればOKです。
            <ImgLine cap="" src={snap07Img} />
            インポートするには"ファイル"タブのインポートをクリックしましょう。
            <ImgLine cap="ファイルタブのインポートを選択する" src={snap30Img} />
            次にインポートするFBEファイルを選択します。
            <ImgLine cap="インポートするファイルを選択する" src={snap31Img} />
            少しするとインポートが完了します。
            さきほど保存したHelloFBE.fbeファイルをインポートできました！
            <ImgLine cap="インポートができる" src={snap32Img} />


        </Section>
    );
}

//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------


const pageList = [
    {
        "pageId":"1" ,
        "title":"FBEのインストール",
        "jsx":
            <T_getStart />
        },
    {
        "pageId":"2" ,
    "title":"基本的な操作方法",
    "jsx":
            <T_basic_tech_1 />

        },
    {
        "pageId":"3" ,
        "title":"プロジェクトの保存",
        "jsx":
            <T_basic_tech_2 />

        },
];
export const pages = pageList ;

const TutorialPage02 = (props)=>{
    return (
        <TutorialTemplate className="tp02" match={props.match} title={<>FBE<br />チュートリアル</>} pageList={pageList} url="/fbe_tutorial/"/>
    );
};



export default TutorialPage02 ;

