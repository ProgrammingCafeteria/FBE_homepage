import Section from '../components/Section';
import React from "react" ;
import "../css/TutorialPageTemplate.css" ;
import defaultImg from "../img/background.png" ;

const TutorialPageTemplate = (props)=>{
    // const page = props.page ? props.page : -1 ;
    const page = 2 ;

    const li = [] ;
    if(props.menuItems){
        props.menuItems.forEach((ele)=>{
            li.push(<li key={ele.id}><a href="{ele.id}">{ele.text}</a></li>);
        });
    }

    const anchors = [] ;
    if(page > 1){
        anchors.push(<div key="tutorial_to_before"><a href={`/tutorial_${("00"+(page-1)).slice(-2)}`}> 前のページへ </a></div>) ;
    }else{
        anchors.push(<div key="tutorial_to_before"></div>) ;
    }
    anchors.push(<div key="tutorial_to_top"><a href={`/top`}> TOPへ </a></div>) ;
    if(true){
        //本当はpageの大きさによって表示するか否かを判断したいところ
        anchors.push(<div key="tutorial_to_after"><a href={`/tutorial_${("00"+(page+1)).slice(0,2)}`}> 次のページへ </a></div>) ;
    }else{
        anchors.push(<div key="tutorial_to_after"></div>) ;
    }
    return (
        <>
            <main className="tp">
                <Section type="center" id="sec_01" imgPath={defaultImg}>
                    <h1>FBE<br />チュートリアル</h1>
                    <b>Flowchart Build Executor (FBE)</b>とは
                    フローチャートを作成して、実行ができるフリーソフトです。
                    このページでは初心者向けにチュートリアルを掲載しています。
                    FBEを初めて触る人はこちらを参考にFBEを学ぶことで
                    よりFBEを使いこなすことが出来るでしょう。
                </Section>

                <Section type="center">
                    <div className="tutorial_anchors">
                        {
                            anchors
                        }
                    </div>
                </Section>

                {
                    props.children 
                }

                <Section type="center">
                    <div className="tutorial_anchors">
                        {
                            anchors
                        }
                    </div>
                </Section>
            </main>

            <div id="menu">
                <ul>
                    <h3>チュートリアル</h3>
                    {
                        li
                    }
                    {
                        anchors
                    }
                </ul>

            </div>

        </>
    
    ) ;
};

export default TutorialPageTemplate ;

