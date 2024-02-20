import React from 'react'

import { useParams } from 'react-router-dom'

const User = () => {

    const params = useParams()
    

  return (
    <div>
      I am {params.user}
    </div>
  )
}

export default User
