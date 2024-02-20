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
      element: <Home/>
    },
    {
      path: "/About",
      element: <About/>
    },
    {
      path: "/login",
      element: <Login/>
    }
  ])

  return (
    <>
      <Navbar/>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
