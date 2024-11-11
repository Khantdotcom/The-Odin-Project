//input
//list for each page input, css style
//validation

//button, list of button needed
//display cv >> data storage structure
//steps

export function MyInput({name_id,label_for,type,required,size,className}){
    return (
        <>
        <div style={{display:"flex", flexDirection:"column"}}>
        <label htmlFor={name_id}>
        {label_for}
    </label>
    <input 
    name={name_id}
    type={type}
    className={className}
    size={size}
    required ={required}
    >
    </input>
    </div>
    <p>{input.value}</p>
    </>

    )
};

export function MyButton({name_id,onClick,className}){
    return(
        <button className={className} onClick={onClick}>
            {name_id}
        </button>
    )
}