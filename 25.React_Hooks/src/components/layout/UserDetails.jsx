import React from 'react'

const UserDetails = ({item}) => {
  return (
    <div>
      <h1>{item.id}</h1>
      <h2>{item.name}</h2>
      <h2>{item.email}</h2>
      <h2>{item.company.name}</h2>
      </div>

  )
}

export default UserDetails