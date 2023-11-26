import React from 'react'

const Reviewdetaild = ({ item }) => {
  return (
    <>
      < div className={` w-full flex-1 justify-between flex items-center gap-x-2 px-4 py-4 rounded-2xl`}>
        <div className='flex gap-3 justify-between'>
          <div >
            {item.imgUrl}
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-[#808080] text-sm font-semibold'> {item.name}</span>
            <p className='text-[#a6a6a6] font-medium text-xs'> {item.username}</p>
            <div>
              *
              <span className='text-[#a6a6a6] font-medium text-sm'>{item.rating}</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-[11px] font-medium 2xl:text-xs text-[#808080]'>{item.date}</div>
          <div className='text-[#54a43a] bg-[#f0f7ed] capitalize h-[32px] border flex items-center gap-x-1 py-1 px-2 text-sm rounded-lg cursor-pointer'>
            <span className='text-xs'>Publish</span>
          </div>
        </div>
      </div >
    </>
  )
}

const Review = () => {
  const review = [
    { id: 1, name: 'tinku', username: '@tinku', rating: 5, imgUrl: <img className='w-10 rounded-full h-10' src="https://bcoder-dev-bucket.s3.amazonaws.com/beauty-spot/50ab62d4e617c65dbc033d61030aaa9e0cd4548b.jpg" />, date: '22 Nov 2023, 2:16 am' },
    { id: 2, name: 'Yikes', username: '@tinku', rating: 5, imgUrl: <img className='w-10 rounded-full h-10' src="https://bcoder-dev-bucket.s3.amazonaws.com/beauty-spot/d9a2936a84877840a05a0ad39adcbf3ecc2db4a8.jpg" />, date: '22 Nov 2023, 2:16 am' },
    { id: 3, name: 'Yikes', username: '@tinku', rating: 5, imgUrl: <img className='w-10 rounded-full h-10' src="https://bcoder-dev-bucket.s3.amazonaws.com/beauty-spot/467e173b12e2410ea7e2f50d5017d7d53c1a0a25.jpg" />, date: '22 Nov 2023, 2:16 am' },
    { id: 4, name: 'tinku', username: '@tinku', rating: 5, imgUrl: <img className='w-10 rounded-full h-10' src="https://bcoder-dev-bucket.s3.amazonaws.com/beauty-spot/ed8bf5e564330bfb63cdb9eacd3efb2f65dd9575.jpg" />, date: '22 Nov 2023, 2:16 am' },
    { id: 5, name: 'kiskj', username: '@tinku', rating: 5, imgUrl: <img className='w-10 rounded-full h-10' src="https://bcoder-dev-bucket.s3.amazonaws.com/beauty-spot/ed8bf5e564330bfb63cdb9eacd3efb2f65dd9575.jpg" />, date: '22 Nov 2023, 2:16 am' },
    { id: 6, name: 'tinku', username: '@tinku', rating: 5, imgUrl: <img className='w-10 rounded-full h-10' src="https://bcoder-dev-bucket.s3.amazonaws.com/beauty-spot/cec9a3052d36e38c86269d9545ff8f011dee5853.jpg" />, date: '22 Nov 2023, 2:16 am' },
  ]
  return (
    <>
      <div className='box-shadow h-[25rem] overflow-scroll no-scrollbar p-5 w-1/2 rounded-2xl'>
        <h2 className='text-sm font-semibold text-[#272727]'>
          Review
        </h2>
        <div className=''>
          {
            review.map((item) => (
              <Reviewdetaild key={item.id} item={item} />

            ))
          }
        </div>
      </div>
    </>
  )
}

export default Review