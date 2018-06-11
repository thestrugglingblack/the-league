import React from 'react'
import { Status } from './status'

export const NotFound = () => {
  return(
      <Status code={404}>
      <div>
        <p>404 Page Not Found</p>
      </div>
      </Status>
    )
}
