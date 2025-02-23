import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from './AuthProvider'

const AuthConsumer = () => {
    const {user,login,logOut } = useContext(AuthContext)
  return (
    <div>

{user?(
    <div>
        <p>welcome, {user.name}</p>
        <button  onClick={logOut} >Logout</button>
        </div>
): (
  <div>

    <p>please login</p>
    <button onClick={login}>Login</button>
  </div>
)  }

    </div>
  )
}

export default AuthConsumer

