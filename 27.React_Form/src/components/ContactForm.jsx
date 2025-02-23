import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const FormData = z.object({
name:z.string().min(4,"Name must be greater that 4 letter").max(100, "name cannot exceeds more than 100"),
email: z.string().email("Invalid email").max,
address: z.string().max(23, "cannot exceeds more that 23")
})



const ContactForm = () => {

    const {register,handleSubmit,reset,formState:{errors} }= useForm( {
        resolver: zodResolver(FormData)
    } )



const FormSumbitter = (data)=> {
console.log(data)
reset()
    }
  return (
    <div>
       <form onSubmit={handleSubmit(FormSumbitter)} >
         <div className='bg-blue-600'>
         <label htmlFor="name">Name:</label>
         <input    
         {...register("name")}
         type="text" />
        <FaUser/>
         </div>
         {errors.name && (
            <p>{errors.name.message}</p>
         ) }
         <div>
            <label htmlFor="email">Email:</label>
            <input 

            className='placeholder:text-orange-600'
            placeholder='email'
            {...register("email")}
            
            type="text" />
            <MdEmail/>
            {errors.email && (
            <p>{errors.email.message}</p>
         ) }
         </div>
         <button className='border hover:bg-red-600  ' type='submit'>submit</button>
         <button className='hover:bg-blue-500' type='reset'>reset</button>
         
       </form>

    </div>
  )
}

export default ContactForm