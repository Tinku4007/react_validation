import React from 'react'
import WithDashboardLayout from '../../../hoc/WithDashboardLayout';
import Widgets from './Widgets';
import Graph from './Graph';
import Review from './Review';
import MostServiceProvider from './MostServiceProvider';
import { increment } from './../../../reduxStore/slices/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counter);
  return (
    <>
      <div className='w-[95%] mx-auto'>
        <div className='w-full py-4'>
          Dashboard
        </div>
        <div className='w-full min-h-[calc(100vh-110px)] flex flex-col gap-y-5 box-shadow rounded-t-2xl p-5 bg-white'>
          <div className='flex flex-col gap-5'>
            <Widgets />
            <Graph />
            <div className='flex gap-5'>
              <MostServiceProvider />
              <Review />
            </div>
          </div>
        </div>

        <div className='py-4 bg-red-500 text-white'>
          <button onClick={() => dispatch(increment())} className='border px-2 py-1 border-white'>Increment</button>
        </div>
        <div>
          <p>{count}</p>
        </div>
      </div>
    </>
  )
}

export default WithDashboardLayout(Dashboard);