import {useState} from "react" ;
import { Link } from "react-router-dom";


const LinkButton = (props)=>{
    const [href,setHref]= useState(props.href ? props.href : "/") ;

    // const href = props.href ? props.href : "/" ;
    const text = props.text ? props.text : href ;
    const newTab = props.newTab === true ? "_blank" : "_self" ;
    const handleClick = (eve) =>{
        if(/^#/.test(href)){
            console.log("same page link");
            setTimeout(()=>{
                document.querySelector("html").scrollTop -= 50 ;
            },10);
        }
    } ;
    return (
        <div className="text-align-center">
            <a className="fbe-button" href={href} target={newTab} onClick={handleClick}>
                {text}
            </a>
            {/* <Link className="fbe-button" to={href} >{text}</Link> */}
        </div>
    );
};

export default LinkButton ;








