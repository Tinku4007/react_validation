import React from 'react'

const Graph = () => {
  return (
    <>
      <div className='flex justify-between gap-5'>
        <div className='box-shadow w-1/2 rounded-2xl'>
          <h2 className='text-sm font-semibold text-[#272727]'>
            Total Signups
          </h2>
        </div>
        <div className='box-shadow w-1/2 rounded-2xl'>
          <h2 className='text-sm font-semibold text-[#272727]'>
            Total Book Now Clicks
          </h2>
        </div>
      </div>
    </>
  )
}

export default Graph