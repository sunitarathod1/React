//import React from 'react'
import CompB from './CompB.jsx'

var CompA = () => {
  return (
    <div>
        
        <p name="sunita" age={30} location="bangalore"/>
        <p name="swati" age={25} location="jaipur"/>
        <p name="preeti" age={24} location="ahemdabad"/>
        < CompB name={"name"} age={"age"}  />
    </div>
  )
}

export default CompA