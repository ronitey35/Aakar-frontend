import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>THis is Home</h1>
       <Link to='/about' >click to go to about</Link> 
    </div>
  )
}

export default Home