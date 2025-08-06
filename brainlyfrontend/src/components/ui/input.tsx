interface Inputprps {
    reference?: React.Ref<HTMLInputElement>,
    placeholder?:string;
    onChange?:()=> void,
}

export function Input(props:Inputprps){
    return(
        <>
        <input onChange={props.onChange}  ref={props.reference} placeholder={props.placeholder} className="border shadow cursor-text rounded p-1 m-2"></input>
        </>
    )
}