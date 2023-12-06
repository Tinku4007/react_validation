import React, { useEffect, useState } from 'react'
import { RequstedAdminApi } from '../../../utils/api';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setrequstedDetails } from '../../../reduxStore/slices/serviceProviderSlice';

const Requsted = () => {
  const dispatch = useDispatch();
  const { requstedDetails } = useSelector(state => state.requsted);

  useEffect(() => {
    FetchData();
  }, [])

  const FetchData = async () => {
    try {
      const response = await RequstedAdminApi();
      dispatch(setrequstedDetails(response))
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component='th'>id</TableCell>
              <TableCell component='th'>Business Name</TableCell>
              <TableCell component='th'>Name</TableCell>
              <TableCell component='th'>Location</TableCell>
              <TableCell component='th'>Status</TableCell>
              <TableCell component='th'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requstedDetails && requstedDetails.map((item) => {
              return (
                <TableRow key={item?.id}>
                  <TableCell component='td'>{item.id}</TableCell>
                  <TableCell component='td'>{item.BusinessName}</TableCell>
                  <TableCell component='td'>{item.name}</TableCell>
                  <TableCell component='td'>{item.Location}</TableCell>
                  <TableCell component='td'>{item.status}</TableCell>
                  <TableCell component='td'>Delete</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default Requsted