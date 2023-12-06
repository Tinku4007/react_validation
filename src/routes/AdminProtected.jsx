import React from 'react'
import { getLocalStorage } from '../utils/LocalStorageUtills'
import { NavLink, Outlet } from 'react-router-dom'

const AdminProtected = () => {
    const admin = getLocalStorage('admin')
  return (
    admin ? <Outlet/> : <NavLink to='/auth/login' /> 
  )
}

export default AdminProtected