import React from 'react'
import { Navigate } from 'react-router'
import Pay from '../page/Pay'

const PrivateRoute = ({authenticate}) => {
  return authenticate == true ? <Pay/> : <Navigate to="/login" />
    
  
}

export default PrivateRoute