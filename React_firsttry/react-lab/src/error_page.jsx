import {Link} from "react-router-dom"

const ErrorPage = ()=>{
    return(
        <div>
            <h1>Ohh no, you are lost!</h1>
            <Link to='/'>Go back to home page</Link>
        </div>
    );
};

export default ErrorPage;