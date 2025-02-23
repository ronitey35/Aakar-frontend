import React, { useEffect, useRef, useState } from 'react'

const RefExample = () => {

    const [count,setCount]  = useState(0)

    const previousCount = useRef(null);

    useEffect(()=> {
      previousCount.current= count;
    },[count])

  return (
    <div>
        <p>Current Count: {count}</p>
        <p>Previous Count: {previousCount.current}</p>

        <button onClick={()=> setCount(count + 1)}>

            Click to increase
        </button>
    </div>
  )
}

export default RefExample