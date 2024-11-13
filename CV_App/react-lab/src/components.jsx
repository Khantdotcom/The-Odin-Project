//input
//list for each page input, css style
//validation

//button, list of button needed
//display cv >> data storage structure
//steps

function MyInput({name_id,label_for,type,required,size,className,onChange}){
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
    onChange={onChange}
    >
    </input>
    </div>
    </>

    )
};

function MyButton({name_id,onClick,className}){
    return(
        <button className={className} onClick={onClick}>
            {name_id}
        </button>
    )
}

export {MyInput,MyButton}