import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(0);
    console.log(inputRef.current);

    const RefInc=()=>{
        inputRef.current = inputRef.current+1;
        console.log(inputRef.current.className)
        
    }
  return (
    <div>useRef<input
             Data=       {inputRef.current}
        
         ref={inputRef} className="helloo"/>
        
        <input type='text' placeholder='welcome' ref={inputRef}/>
        <button onClick={RefInc}> click me! </button>
        
        
    </div>
  );
};

export default UseRef