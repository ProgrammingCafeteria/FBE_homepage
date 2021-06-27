const Section = (props)=>{
    const type = props.type ? props.type : "left" ;
    console.log(props);
    return (
        <section className={type}>
            <div>
                <h1>
                    {props.title}
                </h1>
                <div className="fbe-description">
                    {props.children}
                </div>
            </div>
            <div>
                <img src={props.imgPath} alt="error"></img>
            </div>
        </section>

    ) ;
};

export default Section ;
