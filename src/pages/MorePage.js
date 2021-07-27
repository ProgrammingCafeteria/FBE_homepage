import Section from '../components/Section';
import LinkButton from "../components/LinkButton" ;
import React from "react" ;
import "../css/MorePage.css" ;


const MorePage = (props)=>{
    return (
        <main className="more">
            <Section type="center">
                <div className="ta-center">
                    <h1>ドキュメント</h1>
                    このページでは以下の情報を提供します。
                    <br />
                    <ul className="ta-center disp-ib">
                        <li>
                            <LinkButton href="/flowchart_tutorial/1" text="フローチャート　入門"/>
                            フローチャートの基本的な書き方についてのレッスン
                        </li>

                        <li>
                            <LinkButton href="/fbe_tutorial/1" text="FBE チュートリアル"/>
                            FBEの基本操作についてのレッスン
                        </li>

                        {/* 各記号のプロパティの設定内容など */}

                    </ul>
                </div>
            </Section>

            {/* {props.children && React.cloneElement(this.props.children, { someExtraProp: "TEST" })} */}

        </main>
    ) ;
};

export default MorePage ;

