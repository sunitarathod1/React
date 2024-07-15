import React, { useState } from 'react'

const UseState = () => {
    const [name,setname] = useState("sunita")

    const update=()=>{
        setname("santosh")

    }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={update}>Click me!!</button>
    </div>
  )
}

export default UseState