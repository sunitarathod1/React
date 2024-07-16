//import React from 'react'

import CompA from "./CompA"

var CompB = (props) => {
  return (
    <div>CompB
        <p>name:{props.name} age:{props.age} location:{props.location}</p>
        <p>name:{props.name} age:{props.age} location:{props.location}</p>
   <CompA/>
    </div>

  )
}

export default CompB