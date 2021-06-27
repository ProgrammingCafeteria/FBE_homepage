const Section = (props)=>{
    const type = props.type ? props.type : "left" ;
    const text = props.children ? props.children : props.text ? props.text : "" ;
    return (
        <section className={type}>
            <div>
                <h1>
                    {props.title}
                </h1>
                <div className="fbe-description">
                    {text}
                </div>
            </div>
            <div>
                <img src={props.imgPath} alt="error"></img>
            </div>
        </section>

    ) ;
};

export default Section ;
