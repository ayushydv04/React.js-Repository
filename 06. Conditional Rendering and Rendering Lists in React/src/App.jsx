import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)

  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey i am grocery todo",
      desc: "I am a good todo but i am grocery todo"
    },
  ])

  // We can also make a conponent type here

  const Todo = ({todo}) => {
    return (<>
        <div className='to'>

          <div className='todo'>{todo.title}</div>
          <div className='todo'>{todo.desc}</div>
        </div>
      {/* Way 1 of list rendering */}
      </>
    )
  }



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Way 1 of List Rendering */}
      {/* {todos.map(todo => {
        return <Todo key={todo.title} todo={todo} />
      })} */}


      {todos.map(todo => {
        return <div className='to'>

        <div className='todo'>{todo.title}</div>
        <div className='todo'>{todo.desc}</div>
      </div>
      })}

      {/* <Todo/> */}
      {/* Way 1 of CONDITIONAL RENDERING -> this type of rendering helps to give if and else both value*/}
      {/* {showbtn?<button>Button clicked</button> : "Nothing in button"} */}

      {/* Wat 2 of CONDITIONAL RENDERING -> This type of rendering gives only if value*/}
      {showbtn && <button>Show Button</button>}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}> {/*To toggle show button */}
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
