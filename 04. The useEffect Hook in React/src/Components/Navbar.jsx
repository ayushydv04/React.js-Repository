import React from 'react'
import { useEffect } from 'react'


const Navbar = ({color}) => {

    //Case-1 :- Run on every render
    useEffect (()=>{
        alert("Run on every render")
    })

    //Case-2 :- Run only on first render
    useEffect (()=>{
        alert("This is very first render")
    }, [])

    //Case-3 :- Run only when certain values change
    useEffect(() => {
      alert("Running because color was changed")
    }, [color])
    

    //Example of cleanup function
    useEffect(() => {
      alert("Hey welcome to my page.")

      return () => {
        alert("Components was unmounted")
      }
    }, [])
    

  return (
    <div>
      This is Navbar of {color} color.
    </div>
  )
}

export default Navbar
