// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  
//   const [count, setCount] = useState(0)
//   const girlfriend = ["Emi Fukada", "Ai Honda", "E"]
//   const gflist = girlfriend.map((gf)=>{
//     return <li key={gf}>{gf}</li>;
//   })

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//         <ul>
//           {gflist}
//         </ul>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import {Link} from 'react-router-dom';
const App = () =>{
  return(
    <div>
      <h1>Another Hello</h1>
      <p>I'm sooo excited to learn too!</p>
      <nav>
        <ul>
          <li>
            <Link to='profile/:name'>Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App