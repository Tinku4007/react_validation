import React, { useEffect, useState } from 'react'
import WithDashboardLayout from '../../hoc/WithDashboardLayout';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { supportTicketAdminApi } from '../../utils/api';
import { CiSearch } from "react-icons/ci";
import arrowicon from '../../assets/arrow.png'
import eyesicon from '../../assets/eyes.png'


const SupportTicket = () => {
  const [supportTicketData, setSupportTicket] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await supportTicketAdminApi()
      setSupportTicket(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = (event) => {
    const searchData = event.target.value.toLowerCase();
    console.log(searchData)
    if (searchData === '') {
      fetchData()
    } else {
      const filteredClients = supportTicketData.filter((client) => (
        client.Username.toLowerCase().includes(searchData)
      ));
      setSupportTicket(filteredClients);
    }
  };
  return (
    <>
      <div className='w-[95%] mx-auto'>
        <div className='w-full py-4'>Service Provider</div>
        <div className='w-full min-h-[calc(100vh-110px)] flex flex-col gap-y-5 box-shadow rounded-t-2xl p-5 bg-white'>
          <div className='flex items-center p-[3px] outline-none border border-[#ccc] rounded-lg w-60 h-10 '>
            <input onChange={handleSearch} className='w-full outline-none h-full pl-3 placeholder:text-sm' placeholder='Search...' type="search" />
            <div className='bg-[#633a42] w-[40px] h-full rounded-md flex items-center justify-center'>
              <CiSearch className='fill-white' />
            </div>
          </div>
          <div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell component='th'>Ticket id</TableCell>
                  <TableCell component='th'>Username</TableCell>
                  <TableCell component='th'>Date</TableCell>
                  <TableCell component='th'>Subject</TableCell>
                  <TableCell component='th'>Last Update On</TableCell>
                  <TableCell component='th'>Status</TableCell>
                  <TableCell component='th'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {supportTicketData.map((item) => {
                  return (
                    <TableRow key={item?.Ticketid}>
                      <TableCell component='td'>{item.Ticketid}</TableCell>
                      <TableCell component='td'>{item.Username}</TableCell>
                      <TableCell component='td'>{item.Date}</TableCell>
                      <TableCell component='td'>{item.Subject}</TableCell>
                      <TableCell component='td'>{item.LastUpdateOn}</TableCell>
                      <TableCell component='td'>{item.status}</TableCell>
                      <TableCell component='td'>
                        <div className='flex items-center gap-2'>
                          <img className='w-4' src={eyesicon} alt="star icon" />
                          <img className='w-4' src={arrowicon} alt="arrow icon" />
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default WithDashboardLayout(SupportTicket);