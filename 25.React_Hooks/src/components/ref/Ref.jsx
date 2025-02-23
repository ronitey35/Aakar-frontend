import React, { useEffect, useRef } from 'react'

const Ref = () => {

    const inputRef = useRef(null)

    useEffect(()=> {
        inputRef.current.focus()
    },[])
  return (
    <div>

        <input ref={inputRef} type="text" placeholder='Enter here' />
    </div>
  )
}

export default Ref