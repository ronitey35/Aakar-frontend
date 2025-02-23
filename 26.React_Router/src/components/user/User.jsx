import React from 'react'

import { useNavigate } from 'react-router-dom'

const User = () => {

    const navigate = useNavigate()
  return (
    <div>

        <h1>This is a user page</h1>
        <button onClick={()=> navigate('/user/2')}>CLick to go to user 2</button>
    </div>
  )
}

export default User