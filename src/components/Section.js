

const Section = (props)=>{
    const id = props.id? props.id : "" ;
    const type = props.type ? props.type : "left" ;
    let imgDiv = "" ;
    if(props.imgPath){
        imgDiv = <div className="sectionImg"> <img src={props.imgPath} alt="errot" /></div> ;
    }
    return (
        <section className={type} id={id}>
            <div>
                <div className="fbe-descriptions">
                    {props.children}
                </div>
            </div>
            {imgDiv}
        </section>

    ) ;
};

export default Section ;



