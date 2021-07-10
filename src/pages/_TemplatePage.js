import Section from "../components/Section" ;
import "../css/_TemplatePage.css" ;
import background from "../img/background.png" ;

const PageTemplate = ()=>{
    return (
        <main class="template">
            <Section type="left" >
                <h1>Sectionコンポーネントの使い方について</h1>
                Sectionコンポーネントは基本的なページセクションのテンプレートを提供します。以下の属性を指定してください。
                <ul>
                    <li>type</li>
                        type属性には"left","right","center"のいずれかを指定してください。
                        それぞれ説明文（Sectionコンポーネントの子要素）と画像（imgPathで指定）
                    <li>imgPath</li>
                        imgPath属性には画像のパスを指定してください。画像をあらかじめimportしておいてそれを渡すと良いでしょう。
                        <p>
                            例：    <br />
                            <code>import img from "../img/img.png"      <br /><br />
                            ：：：                                      <br /><br />
                            &lt;Section imgPath="" &gt;...</code>       <br />
                        </p>
                        画像を表示する必要のない場合は指定しないでください。
                        <p>
                            例:<br />
                            <code>&lt;Section &gt;...</code>
                        </p>
                </ul>
            </Section>

            <Section type="center">
                <h1>各リソースの場所</h1>
                <ul>
                    <li>CSS</li>
                        src/css/に配置してください。基本的に各ページのJSファイル名とCSSファイル名は揃えてください。
                        <p>
                            例：<br/>
                            _TemplatePage.jsのCSSファイルは_TemplatePage.css
                        </p>
                    <li>画像</li>
                        src/img/に配置してください。
                    <li>ページコンポーネントファイル</li>
                        Topページのような あるページを表すコンポーネント （通常はsrc/index.jsに使用されるコンポーネント）
                        src/pages/に配置してください。
                    <li>汎用コンポーネントファイル</li>
                        LinkButtonのような 様々なページで使用できるコンポーネントは
                        src/components/に配置してください。
                </ul>
            </Section>

            <Section type="left">
                <h1> ページの作成について </h1>
                ページコンポーネントの構成は次のようにしてください。CSSなどが上手く反映されない可能性があります。
                <p>
                    <table>
                        <tr><td>ページコンポーネント</td>      <td>必須</td></tr>
                        <tr><td>+mainタグ</td>               <td>必須</td></tr>
                        <tr><td>++Sectionコンポーネント</td>  <td>複数可</td></tr>
                        <tr><td>+asideタグ</td>              <td>省略可</td></tr>
                    </table>
                </p>

            </Section>

            <Section type="left">
                <h1>各属性の使用例</h1>
            </Section>
            <Section type="left" imgPath={background}>
                <h1>type="left"の例</h1>
                こんな感じに説明を書くと説明が"左"に配置されます。
            </Section>
            <Section type="right" imgPath={background}>
                <h1>type="right"の例</h1>
                こんな感じに説明を書くと説明が"右"に配置されます。
            </Section>
            <Section type="center" imgPath={background}>
                <h1>type="center"の例</h1>
                こんな感じに説明を書くと説明が"中央"に配置されます。
            </Section>
            
        </main>

    ) ;
};

export default PageTemplate ;
