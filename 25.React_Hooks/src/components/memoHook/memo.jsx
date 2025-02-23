import React, { useState } from 'react'
import { useMemo } from 'react'

const Memo = () => {
    const [add,setAdd] = useState(0)
    const [subtract,setSubtract] = useState(100)

const memoMultiplication = useMemo( function multiplicaion(){
    console.log("Multiplication")
    return add * 20
},[add])

   
  return (
    <div>
        <h1>{add}</h1>
        <button onClick={()=>setAdd(add + 1)}> Addition</button>
        <h2>{subtract}</h2>
        <button onClick={()=> setSubtract(subtract-1)}>Subtract</button>
           {memoMultiplication}
    </div>
  )
}

export default Memo