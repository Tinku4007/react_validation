import React, { useEffect, useState } from 'react'
import WithDashboardLayout from '../../hoc/WithDashboardLayout';
import { ServiceProviderAdmin } from '../../utils/api';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ServiceProvider = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await ServiceProviderAdmin()
      console.log(response, 'dddddd')
      setData(response.data)
    } catch (error) {
      console.log(error, 'error service provider data fatching')
    }

  }
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
                {data.map((item) => {
                  return (
                    <TableRow key={item?.id}>
                      <TableCell component='td'>{item.id}</TableCell>
                      <TableCell component='td'>{item.name}</TableCell>
                      <TableCell component='td'>{item.email}</TableCell>
                      <TableCell component='td'>{item.review}</TableCell>
                      <TableCell component='td'>{item.status}</TableCell>
                      <TableCell component='td'>Delete</TableCell>
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

export default WithDashboardLayout(ServiceProvider);