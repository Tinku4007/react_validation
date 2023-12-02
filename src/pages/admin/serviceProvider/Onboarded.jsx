import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ServiceProviderAdmin } from '../../../utils/api';
import deleteicon from '../../../assets/delete.png'
import arrowicon from '../../../assets/arrow.png'
import staricon from '../../../assets/start.png'
import eyesicon from '../../../assets/eyes.png'
import SendEmailNotification from './SendEmailNotification'

const Onboarded = () => {
    const [data, setData] = useState([])
    const [onboardDrawer, setOnboardDrawer] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await ServiceProviderAdmin()
            setData(response)
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
                            <TableCell component='th'>Business Name</TableCell>
                            <TableCell component='th'>Name</TableCell>
                            <TableCell component='th'>Location</TableCell>
                            <TableCell component='th'>Total Book Now Clicks</TableCell>
                            <TableCell component='th'>Profile View</TableCell>
                            <TableCell component='th'>Status</TableCell>
                            <TableCell component='th'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => {
                            return (
                                <TableRow key={item?.id}>
                                    <TableCell component='td'>{item.id}</TableCell>
                                    <TableCell component='td'>{item.BusinessName}</TableCell>
                                    <TableCell component='td'>{item.name}</TableCell>
                                    <TableCell component='td'>{item.Location}</TableCell>
                                    <TableCell component='td'>{item.TotalBookNowClicks}</TableCell>
                                    <TableCell component='td'>{item.ProfileView}</TableCell>
                                    <TableCell component='td'>{item.status}</TableCell>
                                    <TableCell component='td'>
                                        <div className='flex items-center gap-2'>
                                            <img className='w-4 cursor-pointer' onClick={() => setOnboardDrawer(true)} src={arrowicon} alt="arrow icon" />
                                            <img className='w-4 cursor-pointer' src={staricon} alt="star icon" />
                                            <img className='w-4 cursor-pointer' src={eyesicon} alt="star icon" />
                                            <img className='w-4 cursor-pointer' src={deleteicon} alt="delete icon" />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <SendEmailNotification onboardDrawer={onboardDrawer} setOnboardDrawer={setOnboardDrawer} />
            </div>
        </>
    )
}

export default Onboarded