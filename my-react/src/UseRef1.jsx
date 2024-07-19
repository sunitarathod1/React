import React from 'react'
import UseRef from './UseRef'

const UseRef1 = () => {
    const inputRef =UseRef(0)

    const Update = () =>{
        inputRef.current =inputRef.UseRef+1;
        console.log(inputRef.current)
    }
  return (
    <div>UseRef1
        <h1>
        value:{inputRef} </h1>
        <button onClick={Update}>Click me!</button>
    </div>
  )
}

export default UseRef1