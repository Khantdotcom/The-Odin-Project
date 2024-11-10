//input
//list for each page input, css style
//validation

//button, list of button needed
//display cv >> data storage structure
//steps

export function MyInput({name_id,label_for,type,required,size,className}){
    return (
        <>
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
        </>
    )
};

export function MyButton({type,onClick,className}){
    return(
        <button className={className} onClick={onClick}>
            {type}
        </button>
    )
}