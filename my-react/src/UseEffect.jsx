import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [Data,setData]=useState(0);
    const [Decr,setDecr]=useState(0)

    const Update=()=>{
        setData(Data+1);
    }
    
    const Decrease=()=>{
        setDecr(Decr-1)
    }
      useEffect(()=>{
        console.log(Data);
      });
  return (
    <div>UseEffect
        <h2> count:{Data} </h2>
        <h2> count:{Decr}</h2>
        <button onClick={Update}> Click me </button>
        <button onClick={Decrease}>Click me!</button>
    </div>
  )
}

export default UseEffect