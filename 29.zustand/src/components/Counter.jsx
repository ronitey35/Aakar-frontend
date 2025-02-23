import React from 'react'
import useCounterStore from '../store'

const Counter = () => {

    const {count,increment,decrement,reset} = useCounterStore()
  return (
    <div>
        <h2  className='text-2xl font-medium  text-center'>Counter : {count} </h2>

        <div className='flex justify-center gap-5 mt-6  '>
            <button onClick={increment} className='px-4 py-2  bg-green-500 rounded-md text-white '>Increment</button>
            <button disabled={count==0} onClick={decrement} className='px-4 py-2 text-white  bg-red-500 rounded-md'>Decrement</button>
            <button onClick={reset} className='px-4 py-2 text-white bg-orange-500 rounded-md '>Reset</button>
            
        </div>
    </div>
  )
}

export default Counter