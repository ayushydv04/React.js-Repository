import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './App.css'
import Navbar from "./components/Navbar"
import About from "./components/About"
import Home from "./components/Home"
import Login from "./components/Login"
import User from "./components/User"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home/></>
    },
    {
      path: "/About",
      element: <><Navbar /><About/></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User /></>
    }
  ])

  return (
    <>
  
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
