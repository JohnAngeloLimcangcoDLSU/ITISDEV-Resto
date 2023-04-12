import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useContext } from 'react'

const useAuth = () => {
    const user = { loggedIn: false}
    return user && user.loggedIn
}

const ProtectedRoutes = () => {
    const location = useLocation()
  const isAuth = useAuth()
  return isAuth ? (<Outlet />) : 
  (<Navigate to="/" replace state={{from: location}}/>)
}

export default ProtectedRoutes