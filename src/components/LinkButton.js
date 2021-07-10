const LinkButton = (props)=>{
    const href = props.href ? props.href : "/" ;
    const text = props.text ? props.text : href ;
    return (
        <div className="text-align-center">
            <a className="fbe-button" href={href}>{text}</a>
        </div>
    );
};

export default LinkButton ;








