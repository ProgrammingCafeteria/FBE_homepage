
import {useEffect,useState} from "react" ;

let secCnt = 0 ;
const Section = (props)=>{
    let classes = [] ;
    const [secId,setSecId] = useState(secCnt);
    secCnt ++;
    classes.push(`sec_${secId}`);
    const id = props.id? props.id : "" ;
    let type = props.type ? props.type : "left" ;
    classes.push(type);
    const cn = props.className ? props.className : "" ;
    classes.push(cn);
    let imgDiv = "" ;
    if(props.imgPath){
        imgDiv = <div className="sectionImg"> <img src={props.imgPath} alt="errot" /></div> ;
    }
    let className = "" ;
    classes.forEach((ele)=>{
        className += `${ele} ` ;
    });
    useEffect(()=>{
        const scrollAni = (eve)=>{
            const $sec = document.querySelector(`section.sec_${secId}`);
            if(window.innerHeight >= $sec.getBoundingClientRect().top){
                $sec.classList.add("show");
            }
        } ;
        if(secId === 0){
            scrollAni();
        }else{
            window.addEventListener("load",scrollAni);
            window.addEventListener("scroll",scrollAni);
        }

    },[]);

    return (
        <section className={className} id={id} >
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












