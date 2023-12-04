import React, { useEffect } from 'react'
import Sidebar from '../../components/sheared/Sidebar';
import WithDashboardLayout from '../../hoc/WithDashboardLayout';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { ClientAdmin } from '../../utils/api';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import deleteicon from '../../assets/delete.png'
import arrowicon from '../../assets/arrow.png'
import Confirmation from '../../components/sheared/Confirmation';

const Clients = () => {
  const [clientData, setClientDats] = useState([])
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    fetchclient();
  }, [])

  const fetchclient = async () => {
    try {
      const response = await ClientAdmin()
      // if (response) {
      setClientDats(response.data)
      // }
    } catch (error) {
      console.log(error, 'client fatching data')
    }
  }

  const modalOpen = (id) => {
    setUserId(id)
    setIsConfirmationModalOpen(true)
  }

  const handleSearch = (event) => {
    const searchData = event.target.value.toLowerCase();
    console.log(searchData)
    if (searchData === '') {
      fetchclient()
    } else {
      const filteredClients = clientData.filter((client) => (
        client.name.toLowerCase().includes(searchData)
      ));
      setClientDats(filteredClients);
    }
  };

  const handleConfirmation = async () => {
    // try {
    //   await ServiceProviderAdminDelete(userId)
    //   setIsConfirmationModalOpen(false)
    //   fetchData()
    // } catch (error) {
    //   console.log(error, 'onboarding delete api eroor')
    // }
  }

  return (
    <>
      <div className='w-[95%] mx-auto'>
        <div className='w-full py-4'>
          Clients
        </div>
        <div className='w-full min-h-[calc(100vh-110px)] flex flex-col gap-y-5 box-shadow rounded-t-2xl p-5 bg-white'>
          <div className='flex items-center p-[3px] outline-none border border-[#ccc] rounded-lg w-60 h-10 '>
            <input onInput={handleSearch} className='w-full outline-none h-full pl-3 placeholder:text-sm' placeholder='Search...' type="search" />
            <div className='bg-[#633a42] w-[40px] h-full rounded-md flex items-center justify-center'>
              <CiSearch className='fill-white' />
            </div>
          </div>
          <div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell component='th'>id</TableCell>
                  <TableCell component='th'>Name</TableCell>
                  <TableCell component='th'>Email</TableCell>
                  <TableCell component='th'>Review</TableCell>
                  <TableCell component='th'>Status</TableCell>
                  <TableCell component='th'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clientData.map((item) => {
                  return (
                    <TableRow key={item?.id}>
                      <TableCell component='td'>{item.id}</TableCell>
                      <TableCell component='td'>{item.name}</TableCell>
                      <TableCell component='td'>{item.email}</TableCell>
                      <TableCell component='td'>{item.review}</TableCell>
                      <TableCell component='td'>{item.status}</TableCell>
                      <TableCell component='td'>
                        <div className='flex items-center gap-2'>
                          <img className='w-4 cursor-pointer' src={deleteicon} alt="delete icon" onClick={() => modalOpen(item?.id)} />
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
      <Confirmation
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={handleConfirmation}
        title='Confirm Delete'
        message="Are you sure you want to proceed?"
      >
      </Confirmation>
    </>
  )
};

export default WithDashboardLayout(Clients);