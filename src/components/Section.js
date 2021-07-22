

const Section = (props)=>{
    const id = props.id? props.id : "" ;
    let type = props.type ? props.type : "left" ;
    console.log(type);
    const cn = props.className ? props.className : "" ;
    let imgDiv = "" ;
    if(props.imgPath){
        imgDiv = <div className="sectionImg"> <img src={props.imgPath} alt="errot" /></div> ;
    }
    return (
        <section className={type} id={id} className={cn}>
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



