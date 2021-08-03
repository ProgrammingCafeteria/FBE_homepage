
const NewLine = (props)=>{
    const brCnt = props.brCnt ? props.brCnt : 2 ;
    const brs = [] ;
    for(let i = 0;i < brCnt;i++){
        brs.push( <br key={i}/> );
    }
    return (
        <>{brs}</>
    ) ;
} ;

export default NewLine ;


