import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MyButton,MyInput} from './components'
function App() {
  const input_list = [
    { name_id: 'first_name', label_for: 'First Name', type: 'text', required: true, size: 10, className: 'text'},
    { name_id: 'email', label_for: 'Email', type: 'email', required: true, size: 15, className: 'text'},
    { name_id: 'last_name', label_for: 'Last Name', type: 'text', required: true, size: 15, className: 'text'},
    { name_id: 'ph', label_for: 'Phone Number', type: 'number', required: true, size: 15, className: 'ph-num'},   
  ];
  const [fill_input,setInput] = useState({
    first_name:'', last_name:'',email:'',ph:''
  })


  function InputChange(e){
    setInput({
      ...fill_input,
      [e.target.name] : e.target.value
     })
  }
  const button_list = [{name_id:'submit',className:'button'},
    {name_id:'cancel',className:'button'}
  ]

  return (
    <div className='input-area'>
    <fieldset>    
      {input_list.map((input)=>(
      <MyInput 
      key={input.name_id}
      {...input}
      //name_id={input.name_id}
      //type={input.type}
      //required={input.required}
      // size = {input.size}
      // label_for={input.label_for}
      onChange = {InputChange}
      // className={input.className}
      />))}
    </fieldset>
      {button_list.map((button)=>(
        <MyButton
          key = {button.name_id}
          // name_id = {button.name_id}
          // className={button.className}
          {...button}
        />
      ))}
      <p>{JSON.stringify(fill_input)}</p>
    </div>
  )}


export default App