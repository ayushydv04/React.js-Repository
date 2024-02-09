import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const[name, setName] = useState('Ayush') //IF you want to pass some default value

// Way - 1
  // const[form, setForm] = useState({email:"", phone:""}) 
// Way - 2
  const[form, setForm] = useState({}) //By not passing anything


  const handleClick = ()=>{
    alert("Button is Clicked")
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
  }

  return (  
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      <input type="text" name='email' value={form.email?form.name:''} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:''} onChange={handleChange} />
    </>
  )
}

export default App
