import React from 'react'
import Sidebar from '../../components/sheared/Sidebar';
import WithDashboardLayout from '../../hoc/WithDashboardLayout';

const Clients = () => {
  return (
    <>
     <div className='w-[95%] mx-auto'>
          <div className='w-full py-4'>
            Clients
          </div>
        <div className='w-full min-h-[calc(100vh-110px)] flex flex-col gap-y-5 box-shadow rounded-t-2xl p-5 bg-white'>
          <div className=''>
            fffff
          </div>
        </div>
      </div>
    </>
  )
};

export default WithDashboardLayout(Clients);