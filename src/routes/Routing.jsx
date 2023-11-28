import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from '../pages/admin/dashboard/Dashboard'
import Login from '../pages/auth/Login';
import { getLocalStorage } from '../utils/LocalStorageUtills';
import AuthProteced from './AuthProteced';
import AdminProtected from './AdminProtected';
import Clients from '../pages/admin/Clients';
import Review from '../pages/admin/Review';
import SearchList from '../pages/admin/SearchList';
import SupportTicket from '../pages/admin/SupportTicket';
import ServiceProvider from '../pages/admin/serviceProvider/ServiceProvider';

const Root = () => {
    const navigate = useNavigate();
    const isAuthenicates = getLocalStorage('loginData')
    useEffect(() => {
        if (isAuthenicates) {
            navigate('/admin/dashboard')
        } else {
            navigate('/auth/login')
        }
    })
    return null
}

const Routing = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Root />} />
                <Route path='/auth' element={<AuthProteced />}>
                    <Route path='login' element={<Login />} />
                </Route>
                <Route path='/admin' element={<AdminProtected />}>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='clients' element={<Clients />} />
                    <Route path='Review' element={<Review />} />
                    <Route path='Search-List' element={<SearchList />} />
                    <Route path='Service-provider' element={<ServiceProvider/>} />
                    <Route path='Support-ticket' element={<SupportTicket />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routing