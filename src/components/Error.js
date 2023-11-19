import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err  = useRouteError();
  return (
    <div>
        <h1>Oops!! {err.status}</h1>
        <h1>Something went wrong !!</h1>
        <p>{err.data}</p>
    </div>
  )
}

export default Error