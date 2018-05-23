import React from 'react'
import { Route } from 'react-router-dom'

export const Status = ({code, children}) => (
  <Route render={({ staticContext}) => {
      if(staticContext)
      staticContext.status = code
      return children
  }}/>
)
