
/*
画像を表示します。

props
 src=imgタグのsrc属性を指定します。
 cap=キャプション、省略するとキャプションなし
*/
const ImgLine = (props)=>{
    const cap = props.cap ? <center>{props.cap}</center> : "" ;
    return (
        <>
            <div className="imgLine">
                <img src={props.src} alt="# ERROR"></img>
                {cap}
            </div>
        </>
    );
};

export default ImgLine ;


