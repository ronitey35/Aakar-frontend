import { useCallback, useState } from "react"
import Children from "./Children"

 

const CallbackHook = () => {

    const [add,setAdd] = useState(0)
    

    const hello = useCallback(()=> {
        console.log("hello")
    },[])
  return (
    <div>
        
       <h1>THis is a callback</h1>
       {add}

        <Children hello={hello} add={add}/>

<button onClick={()=> setAdd(add + 1)} >click</button>
    </div>
  )
}

export default CallbackHook