import React from 'react'

// Well replace anchor tag with Links of react-router-dom

// To use we'll first import links

import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav>
        <Links href="/"><li>Home</li></Links>
        <Links href="/about"><li>About</li></Links>
        <Links href="/login"><li>Login</li></Links>
    </nav>
  )
}

export default Navbar
