//React
import React, { useState } from "react";
//コンポーネント
import Section from './Section';
import LinkButton from './LinkButton';
//CSS
import "../css/TutorialTemplate.css";






//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------




const TutorialPage01 = (props) => {
    const pageList = props.pageList ;
    const title = props.title ;
    const url = props.url ;

    const [listShow,setListShow] = useState(false);
    const handleClickList = (eve)=>{
        setListShow(prev => !prev);
    };
    console.log(pageList);
    const lists = pageList.map((ele)=>{
        return <li key={ele.pageId}><a href={url+ele.pageId}>{ele.title}</a></li>;
    });
    const [pages, setPages] = useState(pageList);

    let pageIdx = -1;
    pages.forEach((ele, idx) => {
        if (ele["pageId"] === props.match.params.pageId) {
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
                    <LinkButton href="/" text="TOPへ" />
                </Section>
        };
    }

    return (
        <>
            <ul className={"tutorial-menu "}>
                <h1 onClick={handleClickList}>一覧</h1>
                {listShow ? lists : "" }
                <div onClick={handleClickList}>{listShow ? "＞閉じる" : "＜開く"}</div>
            </ul>

            <main className={props.className+" tutorialTemplate tutorials"}>
                <Section type="center" id="tutorial_top">
                    <h1 className="ta-center">{title}</h1>
                </Section>

                <Section type="center" className="top-move-bt-sec">
                    <div className="tp-move-bt-bar">
                        {0 < nowPageIdx ? <LinkButton href={`${url}${pages[nowPageIdx - 1]["pageId"]}`} text="前のページへ"></LinkButton> : <div></div>}
                        {nowPageIdx < pages.length - 1 ? <LinkButton href={`${url}${pages[nowPageIdx + 1]["pageId"]}`} text="次のページへ"></LinkButton> : <div></div>}
                    </div>
                </Section>

                {pages[nowPageIdx]["jsx"]}

                <Section type="center" className="top-move-bt-sec">
                    <div className="tp-move-bt-bar">
                        {0 < nowPageIdx ? <LinkButton href={`${url}${pages[nowPageIdx - 1]["pageId"]}`} text="前のページへ"></LinkButton> : <div></div>}
                        {nowPageIdx < pages.length - 1 ? <LinkButton href={`${url}${pages[nowPageIdx + 1]["pageId"]}`} text="次のページへ"></LinkButton> : <div></div>}
                    </div>
                </Section>


            </main>

        </>

    );
};

export default TutorialPage01;

