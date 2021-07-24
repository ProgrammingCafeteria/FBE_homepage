import Section from '../components/Section';
import React from "react" ;


const MorePage = (props)=>{
    return (
        <main>
            <Section type="center">
                <div className="ta-center">
                    <h1>ドキュメント</h1>
                    このページでは以下の情報を提供します。
                    <br />
                    <ul className="ta-center disp-ib">
                        <li><a href="/flowchart_tutorial/1">フローチャート 入門</a></li>
                        <li><a href="/fbe_tutorial/1">FBE チュートリアル</a></li>
                    </ul>
                </div>
            </Section>

            {/* {props.children && React.cloneElement(this.props.children, { someExtraProp: "TEST" })} */}

        </main>
    ) ;
};

export default MorePage ;

