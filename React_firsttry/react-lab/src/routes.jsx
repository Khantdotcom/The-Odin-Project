import App from './App.jsx';
import Profile from './profile.jsx';
import ErrorPage from './error_page.jsx';
// import Papaya from './papaya.jsx';
// import Sayama from './sayamaly.jsx';
// import DefaultProfile from './defaultProfile.jsx';

const routes = [
  {
    path : "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path : "profile/:name",
    element: <Profile/>,
    // children: [
    //   {index:true,element: <DefaultProfile/>},{
    //   path: "sayama",
    //   element: <Sayama/>
    // },{
    //   path: "papaya",
    //   element: <Papaya/>
    // }],
  },
];

export default routes;
