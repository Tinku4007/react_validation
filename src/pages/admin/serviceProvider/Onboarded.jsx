import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ServiceProviderAdmin } from '../../../utils/api';

const Onboarded = () => {
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
        </>
    )
}

export default Onboarded