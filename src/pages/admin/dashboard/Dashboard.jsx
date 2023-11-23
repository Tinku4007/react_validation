import React from 'react'
import WithDashboardLayout from '../../../hoc/WithDashboardLayout';
import Widgets from './Widgets';
import Graph from './Graph';

const Dashboard = () => {
  return (
    <>
      <div className='w-[95%] mx-auto'>
        <div className='w-full py-4'>
          Dashboard
        </div>
        <div className='w-full min-h-[calc(100vh-110px)] flex flex-col gap-y-5 box-shadow rounded-t-2xl p-5 bg-white'>
          <div className='flex flex-col gap-5'>
            <Widgets />
            <Graph/>
          </div>
        </div>
      </div>
    </>
  )
}

export default WithDashboardLayout(Dashboard);