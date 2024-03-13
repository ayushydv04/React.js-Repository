// Using prop drilling
// import React from 'react'
// import Component1 from './Component1'

// const Button = ({count}) => {
//   return (
//     <>
//     <div>
//       <button> <span><Component1 count={count}/></span>I am Button</button>
//     </div>
//     </>
//   )
// }

// export default Button


import React, {useContext} from 'react'
import Component1 from './Component1'
import { counterContext } from '../Context/context'

const Button = () => {
    const value = useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component1/></span>I am button</button>
    </div>
  )
}

export default Button
