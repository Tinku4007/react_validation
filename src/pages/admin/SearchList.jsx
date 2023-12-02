import React, { useEffect, useState } from 'react'
import WithDashboardLayout from '../../hoc/WithDashboardLayout';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { SearchListAdminApi } from '../../utils/api';
import { CiSearch } from 'react-icons/ci';


const SearchList = () => {
  const [searchlistData, setSearchlistData] = useState([])

  useEffect(() => {
    fetchSerachlist()
  }, [])

  const fetchSerachlist = async () => {
    try {
      const response = await SearchListAdminApi()
      setSearchlistData(response)
    } catch (error) {
      console.log(error, 'Search list fetch data error')
    }
  }

  const handleSearch = (data) => {
    const searchData = data?.target?.value
    if(searchData === ''){
      fetchSerachlist()
    }
    const filteredClients = searchlistData.filter((client)=>
    client.Clientname.toLowerCase().includes(searchData) ||
    (client.id && String(client.id).toLowerCase().includes(searchData))
    )
    setSearchlistData(filteredClients)
  }

  return (
    <>
      <div className='w-[95%] mx-auto'>
        <div className='w-full py-4'>Search List</div>
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
                  <TableCell component='th'>Search Keywords</TableCell>
                  <TableCell component='th'>Client Username</TableCell>
                  <TableCell component='th'>Date & time</TableCell>
                  <TableCell component='th'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchlistData.map((item) => {
                  return (
                    <TableRow key={item?.id}>
                      <TableCell component='td'>{item.id}</TableCell>
                      <TableCell component='td'>{item.SearchKeywords}</TableCell>
                      <TableCell component='td'>{item.Clientname}</TableCell>
                      <TableCell component='td'>{item.dateTime}</TableCell>
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

export default WithDashboardLayout(SearchList);