function Greeting(){
    return <h1>&quot;I am so excited for learning&quot;</h1>;
}

export default Greeting

function Profile({person}){
    return(
    <img
            className="profile-img"
            alt={person.name}
            width={100}
            height={100}
            src="The-Odin-Project\Cv_Application\react-lab\public\vite.svg"
        />);
}

function Comment({owner,context}){
    return(
        <>
        <Profile />
        <p>{context}</p>
        </>
    );
}

function Item({ispacked, name}){
    return(
        <li>
            {ispacked? name +'gg':name}
        </li>
    );}

//props, conditional , mapping list// state

