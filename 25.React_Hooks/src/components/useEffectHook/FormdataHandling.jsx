import React, { useState } from 'react'

const Hooks = () => {
const [formData,setFormData]= useState({
    userName: "",
    email: ""
})

const handleChange = (e)=> {
setFormData({
    ...formData,
    [e.target.name]: e.target.value
    
})
}
console.log(formData)

  return (
    <form >
<input onChange={handleChange}  name='userName' type="text" placeholder='Enter your name' value={formData.name} />
<input onChange={handleChange} name='email' type="text " value={formData.email} placeholder='Enter your email' />

    </form>
  )
}

export default Hooks