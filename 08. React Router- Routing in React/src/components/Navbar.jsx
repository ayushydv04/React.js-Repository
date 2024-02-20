import React from 'react'

// Well replace anchor tag with Links of react-router-dom

// To use we'll first import links

import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/login"><li>Login</li></Link>
    </nav>
  )
}

export default Navbar
