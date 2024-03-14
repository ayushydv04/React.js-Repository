import React from 'react'
import { memo } from 'react';

const Navbar = ({adjective, getAdjective}) => {
    console.log("Check navbar rendering");
  return (
    <div>
      I am {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
