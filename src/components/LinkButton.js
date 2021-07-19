import {Link} from "react-router-dom" ;

const LinkButton = (props)=>{
    const href = props.href ? props.href : "/" ;
    const text = props.text ? props.text : href ;
    const newTab = props.newTab === true ? "_blank" : "_self" ;
    return (
        <div className="text-align-center">
            <a className="fbe-button" href={href}  target={newTab}>{text}</a>
            {/* <Link className="fbe-button" to={href}  target={newTab}>{text}</Link> */}
        </div>
    );
};

export default LinkButton ;








