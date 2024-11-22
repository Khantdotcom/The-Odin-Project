import { Outlet, useParams } from "react-router-dom";
import Papaya from './papaya.jsx';
import Sayama from './sayamaly.jsx';
import DefaultProfile from './defaultProfile.jsx';

const Profile = ()=>{
    const {name} = useParams();
    return(
        <div>
            <h1>Hello</h1>
            <p>I'm so excited to learn</p>
            {name==="sayama"?(<Sayama/>):
            name==="papaya"?(<Papaya/>):(<DefaultProfile/>)}
        </div>
    );
};

export default Profile;