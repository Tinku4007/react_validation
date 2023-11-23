import React from 'react'
import UserIcon from '../../../assets/icon/UserIcon'
import servicedashboard from '../../../assets/service-dashboard.svg'
import calenderdashboard from '../../../assets/calendar-dashboard.svg'

const Widget = ({ item }) => {
  return (
    <>
      < div className={`${item.id === 2 ? 'bg-[#fff5d7]' : 'bg-[#e0edff]'} ${item.id === 3 ? 'bg-[#f1edeb]' : ''} w-full flex-1 flex items-center gap-x-2 px-4 py-4 rounded-2xl`}>
        <div className='flex items-center gap-3'>
          <div >
            {item.icon}
          </div>
          <div className='flex flex-col gap-1'>
            <span className='font-bold pt-0.5 text-[#222222]'>{item.count}</span>
            <p className='text-[11px] 2xl:text-xs font-medium text-[#5b5f64]'>{item.title}</p>
          </div>
        </div>
      </div >
    </>
  )
}

const Widgets = () => {
  const cardDetails = [
    {
      id: 1, count: 22, title: 'Clients', icon: <UserIcon />
    },
    {
      id: 2, count: 50, title: 'Service Providers', icon: <img className='w-10 h-10' src={servicedashboard} alt="" />
    },
    {
      id: 3, count: 45, title: 'Book Now Clicks', icon: <img className='w-10 h-10' src={calenderdashboard} alt="" />
    }
  ]

  return (
    <div className=' w-full flex flex-wrap flex-col sm:flex-row items-center gap-5 leading-4'>
      {cardDetails.map((item, index) => (
        <Widget key={index} item={item} />
      ))}
    </div>
  )
}

export default Widgets