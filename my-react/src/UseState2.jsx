import React, { useState } from 'react';

const UseState2 = () => {

    const[name,setname]=useState("sunita")
    const[Age,setage]=useState(0);
    const[isEmployee,setisemployee]=useState(false)

    const update=()=>{
        setname("santosh");
    }

    const update1=()=>{
        setage(Age+1);
    }

    const toggle=()=>{
        setisemployee(!isEmployee)
    }

  return (
    <div>UseState2
        <p>name:{name} </p>
        <button onClick={update}>update</button>
        <p> age:{Age}</p>
        <button onClick={update1}>update1</button>
        <p>employee:{isEmployee? "yes" : "no"}</p>
        <botton onClick ={toggle}>toggle</botton>
    </div>
  )
}

export default UseState2