import { useState } from "react"


function Counter(){
    const [count,setCount] = useState(0)

    return(
        <div>
            <h1>This is a Counter {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    )
}

export default Counter