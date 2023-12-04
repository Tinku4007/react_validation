import React from 'react'
import WithDashboardLayout from '../../../hoc/WithDashboardLayout'

const ServiceProviderDetails = () => {
  console.log('want this')
  return (
    <>
      <div className='w-[95%] mx-auto'>
        <div className='w-full py-4'>Service Provider Details</div>
        <div className='w-full min-h-[calc(100vh-110px)] flex flex-col gap-y-5 box-shadow rounded-t-2xl p-5 bg-white'>
          <div className='flex items-center p-[3px] outline-none border border-[#ccc] rounded-lg w-60 h-10 '>
          </div>

        </div>
      </div>
    </>
  )
}

export default WithDashboardLayout(ServiceProviderDetails)