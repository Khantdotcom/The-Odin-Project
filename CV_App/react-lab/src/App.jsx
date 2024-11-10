import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MyButton,MyInput} from './components'
function App() {
  const [count, setCount] = useState(0);
  const input_list = [
    { name_id: 'name', label_for: 'First Name', type: 'text', required: true, size: 10, className: 'text' },
    { name_id: 'email', label_for: 'Email', type: 'email', required: true, size: 15, className: 'text'},
    { name_id: '_lname', label_for: 'Last Name', type: 'text', required: true, size: 15, className: 'text' },
    { name_id: 'ph', label_for: 'Phone Number', type: 'number', required: true, size: 15, className: 'ph-num' },   
  ];

  return (

    <div className='input-area'>
    <fieldset>    
      {input_list.map((input)=>(
      <MyInput 
      key={input.name_id}
      name_id={input.name_id}
      type={input.type}
      required={input.required}
      size = {input.size}
      label_for={input.label_for}
      className={input.className}/>
    ))}</fieldset>
    </div>
  )
}

export default App
