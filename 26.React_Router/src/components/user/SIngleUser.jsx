import React from 'react'

import { useParams } from 'react-router-dom'

const SIngleUser = () => {

    const {id}  = useParams()

  return (
    <div>
        <h1>THis is the detail of user: {id}</h1>
    </div>
  )
}

export default SIngleUser