import React from 'react'


const MostService = () => {
    return (
        <>
            <div className='border-b'>
                <div className='flex gap-3 pt-4'>
                    <div >
                        <img className='w-10 rounded-full h-10' src="https://bcoder-dev-bucket.s3.amazonaws.com/beauty-spot/cec9a3052d36e38c86269d9545ff8f011dee5853.jpg" alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#808080] text-sm font-semibold'> Business  </span>
                        <p className='text-[#a6a6a6] font-medium text-xs'></p>
                        <div>
                            <span className='text-[#a6a6a6] font-medium text-sm'>@standingon</span>
                        </div>
                    </div>
                </div>
                <div className='text-right'>
                    <span className='text-[11px] 2xl:text-xs font-medium mt-5 text-[#808080]'>64 Wiew</span>
                </div>
            </div>
        </>
    )
}

const MostServiceProvider = () => {
    return (
        <>
            <div className='box-shadow h-[25rem] overflow-scroll no-scrollbar p-5 w-1/2 rounded-2xl'>
                <h2 className='text-sm font-semibold text-[#272727]'>
                    Most Viewed Service Providers
                </h2>
                <MostService />
                <MostService />
                <MostService />
                <MostService />
                <MostService />
                <MostService />
                <MostService />
                <MostService />
            </div>
        </>
    )
}

export default MostServiceProvider