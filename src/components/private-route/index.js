import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const PrivateRoute = () => {
    const [token, setToken] = useCookies(['my-token'])


  return(
    token? <Outlet/> : <Navigate to='/login'/>
  ) 
 
}

export default PrivateRoute