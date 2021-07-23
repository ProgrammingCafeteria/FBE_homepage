import iconImg from "../img/icon.png" ;


const Header = ()=>{

    window.addEventListener("load" , ()=>{
        document.querySelector("header")
            .classList.add("show");
        document.querySelector("#header-menu-btn")
            .classList.add("show");
    });
    return (
        <>
            <header>
                <div>
                    <img src={iconImg} alt="icon" ></img>
                    <div><b>F</b> lowchart <b>B</b>uild <b>E</b>xecutor</div>
                </div>
                <ul>
                    <li><a href="/">トップ</a></li>
                    <li><a href="/download">ダウンロード</a></li>
                    <li><a href="/about">機能</a></li>
                    <li><a href="/more">より詳しく知るには</a></li>
                    <li><a href="/conntact">問い合わせ</a></li>
                    <li><a href="/credit">クレジット</a></li>
                </ul>
                <div id="header-menu-btn">MENU</div>
            </header>
        </>
    );
};

export default Header ;


