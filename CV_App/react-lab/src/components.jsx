//input
//list for input, css style

//validation
//button, list of button needed 
//example data structure
//section 
//display cv
//steps
export default function MyButton({count,onClick}){
    return(
    <button onClick={onClick}>
        {count}
    </button>)
}

function MyInput({label_for,type,required,size}){
    return (
        <>
        <label>
            {label_for}
        </label>
        <input 
        type={type}
        className="user_input"
        size={size}> 
        </input>
        </>
    )
};