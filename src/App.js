import React, { useState } from "react";
// import index from "./index";


const Buttonclick =() =>{
    let [count,setCount]=useState(0)


    return(
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}
export default Buttonclick;