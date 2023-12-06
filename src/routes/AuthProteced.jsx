import React from 'react'
import { getLocalStorage } from '../utils/LocalStorageUtills'
import { Navigate, Outlet } from 'react-router-dom'

const AuthProteced = () => {
    const admin = getLocalStorage('admin')
  return (
    admin ? <Navigate to='/dashboard'/> : <Outlet/>
  )
}

export default AuthProteced;