import img01 from "../img/01.PNG";
import img02 from "../img/02.PNG";
import img03 from "../img/03.PNG";
import img04 from "../img/04.PNG";
import img05 from "../img/05.PNG";
import img06 from "../img/06.PNG";
import img07 from "../img/07.PNG";
import img08 from "../img/08.PNG";
import img09 from "../img/09.PNG";
import img10 from "../img/10.PNG";
import img11 from "../img/11.PNG";
import img12 from "../img/12.PNG";
import img13 from "../img/13.PNG";
import img14 from "../img/14.PNG";
import img15 from "../img/15.PNG";
import img16 from "../img/16.PNG";
import img17 from "../img/17.PNG";
import img18 from "../img/18.PNG";
import img19 from "../img/19.PNG";
import img20 from "../img/20.PNG";
import img21 from "../img/21.PNG";
import img22 from "../img/22.PNG";
import img23 from "../img/23.PNG";
import img24 from "../img/24.PNG";
import img25 from "../img/25.PNG";
import img26 from "../img/26.PNG";
import img27 from "../img/27.PNG";
import img28 from "../img/28.PNG";
import img29 from "../img/29.PNG";
import img30 from "../img/30.PNG";
import img31 from "../img/31.PNG";
import img32 from "../img/32.PNG";
import img33 from "../img/33.PNG";
import img34 from "../img/34.PNG";
import img35 from "../img/35.PNG";
import img36 from "../img/36.PNG";
import img37 from "../img/37.PNG";
import img38 from "../img/38.PNG";
import img39 from "../img/39.PNG";
import img40 from "../img/40.PNG";
import img41 from "../img/41.PNG";
import img42 from "../img/42.PNG";
import img43 from "../img/43.PNG";

import imgArray from "../img/array.PNG";
import imgBranch from "../img/branch.PNG";
import imgCalc from "../img/calc.PNG";
import imgEnd from "../img/end.PNG";
import imgFor from "../img/for.PNG";
import imgIn from "../img/in.PNG";
import imgOut from "../img/out.PNG";
import imgStart from "../img/start.PNG";
import imgWhile from "../img/while.PNG";

const downloadDetails = new Map() ;
downloadDetails.set(
    "beta",{
        "windows": {
            "downloadLink": "https://firebasestorage.googleapis.com/v0/b/flowchartbuildexecutor.appspot.com/o/fbe-win-tozip-beta.zip?alt=media&token=66cd15f6-6e11-495f-9e85-d90f674df1f9",
            "note": "Windows10で動作確認済みのexeファイルなどを含めたWindows向けパッケージです。"
        },
        "jar": {
            "downloadLink": "https://firebasestorage.googleapis.com/v0/b/flowchartbuildexecutor.appspot.com/o/fbe-jar-tozip-beta.zip?alt=media&token=8068d179-fc97-4c2b-80d8-40ae5b82e6f2",
            "note": <>Jarファイルおよび必要なファイルをまとめたJarパッケージ。実行にはJava,JavaFxが必要です。
                <a href="https://bell-sw.com/">LibericaJDK</a>などのJDKをインストールする必要があります。</>
        }
});
const targets = ["windows","mac","jar"] ;


const imgs = [];
imgs.push(null);
imgs.push(img01);
imgs.push(img02);
imgs.push(img03);
imgs.push(img04);
imgs.push(img05);
imgs.push(img06);
imgs.push(img07);
imgs.push(img08);
imgs.push(img09);
imgs.push(img10);
imgs.push(img11);
imgs.push(img12);
imgs.push(img13);
imgs.push(img14);
imgs.push(img15);
imgs.push(img16);
imgs.push(img17);
imgs.push(img18);
imgs.push(img19);
imgs.push(img20);
imgs.push(img21);
imgs.push(img22);
imgs.push(img23);
imgs.push(img24);
imgs.push(img25);
imgs.push(img26);
imgs.push(img27);
imgs.push(img28);
imgs.push(img29);
imgs.push(img30);
imgs.push(img31);
imgs.push(img32);
imgs.push(img33);
imgs.push(img34);
imgs.push(img35);
imgs.push(img36);
imgs.push(img37);
imgs.push(img38);
imgs.push(img39);
imgs.push(img40);
imgs.push(img41);
imgs.push(img42);
imgs.push(img43);

const imgs2 = {};
imgs2["array"] = (imgArray);
imgs2["branch"] = (imgBranch);
imgs2["calc"] = (imgCalc);
imgs2["end"] = (imgEnd);
imgs2["for"] = (imgFor);
imgs2["in"] = (imgIn);
imgs2["out"] = (imgOut);
imgs2["start"] = (imgStart);
imgs2["while"] = (imgWhile);



export { downloadDetails,targets };
export const flowchart_tutorial_imgs = imgs;
export const sym_imgs = imgs2;












