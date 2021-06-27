const Section = (props)=>{
    const type = props.type ? props.type : "left" ;
    const text = props.text ;
    const afterText = props.afterText ;

    const imgDiv = props.imgPath ? <div> <img src={props.imgPath} alt="errot" /></div> : "";
    return (
        <section className={type}>
            <div>
                <h1>
                    {props.title}
                </h1>
                <div className="fbe-description">
                    {text}
                </div>
                {afterText}
            </div>
            {imgDiv}
        </section>

    ) ;
};

export default Section ;
