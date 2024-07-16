import React from 'react'
import Props2 from "./Props2"

const Prop1 = () => {
    const user={uid:"101",
          uname:"sunita",
          email:"sr@gmail.com"
    }
    return(
        <div>
     <Props2 user={user} />
        {/* <Props2 user={"uid=101 , uname=sunita ,email=sr@gmail.com"}/> */}
    </div>
  )
}

export default Prop1