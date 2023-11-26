import React from 'react'
import Sidebar from '../components/sheared/Sidebar'
import { useGlobalContext } from '../context/GlobalProviders'
import Header from '../components/sheared/Header';

const DashboardLayout = ({ children }) => {
    return (
        <section className='h-full h-screen w-full flex bg-[#fafafa]'>
            <div className='flex flex-col min-h-screen fixed left-0 h-full z-30 bg-[#fafafa]'>
                {/* <div className='flex flex-col min-h-screen'> */}
                <Sidebar />
            </div>
            <div className={`flex flex-1 flex-col test ml-52`}>
                {/* <div className='flex flex-1 flex-col'> */}
                <Header />
                <div className='flex-1 overscroll-y-auto'>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default DashboardLayout;