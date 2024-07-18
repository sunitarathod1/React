import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(0);
    console.log(inputRef.current);

    const RefInc=()=>{
        inputRef.current = inputRef.current+1;
        console.log(inputRef.current)
    }
  return (
    <div>UseRef
        <h1>
            {inputRef.current}
        </h1>
        <button onClick={RefInc}> click me! </button>
    </div>
  )
}

export default UseRef