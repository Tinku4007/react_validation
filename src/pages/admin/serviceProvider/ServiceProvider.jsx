import React, { useEffect, useState } from 'react'
import WithDashboardLayout from '../../../hoc/WithDashboardLayout';
import { ServiceProviderAdmin } from '../../../utils/api';
import Onboarded from './Onboarded';

const ServiceProvider = () => {
  return (
    <>
      <div className='w-[95%] mx-auto'>
        <div className='w-full py-4'>
          Service Provider
        </div>
        <div className='w-full min-h-[calc(100vh-110px)] flex flex-col gap-y-5 box-shadow rounded-t-2xl p-5 bg-white'>
          <div className=''>
            search input
          </div>
          <Onboarded />
        </div>
      </div>
    </>
  )
}

export default WithDashboardLayout(ServiceProvider);