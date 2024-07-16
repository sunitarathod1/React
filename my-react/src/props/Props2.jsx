import React from 'react'

const Props2 = (props) => {
  return (
    <div>
        <h4>{JSON.stringify(props)}</h4>
        <h1>{props.user.uid}</h1>
        {/* <h2>{props.ploc[1]}</h2> */}
    </div>
  )
}

export default Props2