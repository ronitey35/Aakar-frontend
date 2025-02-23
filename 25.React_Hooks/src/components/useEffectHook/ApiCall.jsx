import React, { useEffect, useState } from 'react'
import UserDetails from '../UserDetails';

const Effect = () => {
    const [user,setUser]= useState([])



useEffect(()=> {
   async function fetchUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()
          setUser(data)
    }catch(error){
        console.log("Error occured" + error)
    }
   }

fetchUser()
},[])
console.log(user)
  return (
    <div>

{user.map((item)=>  (
    <UserDetails key={item.id}   item= {item} />
)   )}


    </div>
  )
}

export default Effect