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
  const [fill_input,setInput] = useState({
    first_name:'', last_name:'',email:''
  })

  function Submit(e){

  }

  function InputChange(e){
    setInput({
      ...fill_input,
      [e.target.name] : e.target.value
     })
  }
  function Cancel(){
    MyInput.value.clear
  }
  const button_list = [{name_id:'submit', function:Submit(),className:'button'},
    {name_id:'cancel',function:Cancel(),className:'button'}
  ]

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
      onChange = {InputChange}
      className={input.className}/>))}
    </fieldset>
      {button_list.map((button)=>(
        <MyButton
          key = {button.name_id}
          name_id = {button.name_id}
          onClick={button.function}
          className={button.className}
        />
      ))}
      <p>fill_input</p>
    </div>
  )}

export default App