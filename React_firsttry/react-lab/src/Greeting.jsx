

function Greeting(){
    return <h1>&quot;I am so excited for learning&quot;</h1>;
}

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
//state and rendering 

export function getFinalState(baseState, queue) {
    let finalState = baseState;
    //for (let update of queue){
    //if(typeof update==='function'{
    //finalState = update(finalState)})} else return finalState=update
    //logic-diff type in list, use the function
  
    for (let i = queue.length - 1; i >= 0; i--) {
      if (queue[i] === "n => n+1") {
        finalState += 1;
      } else {
        finalState = queue[i];
        break;
      }
    }
    return finalState;
  }
  