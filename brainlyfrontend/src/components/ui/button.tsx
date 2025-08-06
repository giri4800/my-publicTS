interface Buttonprps{
    varient:"primary" | "secondary" ;
    size?:"sm";
    onClick: ()=> void ;
    title:string
}

const varientStyles = {
    "primary":"bg-blue-700 text-blue-100 p-2 m-2 b-1 hover:bg-sky-700 rounded cursor-pointer",
    "secondary":"bg-blue-100 text-blue-700 p-2 m-2 b-1 hover:bg-sky-200 rounded cursor-pointer"
}

export const  Button=(props:Buttonprps)=>{
    return (
    <>
        <button onClick={props.onClick} className={`${varientStyles[props.varient]}`}> {props.title} </button>
    </>
)

}

 