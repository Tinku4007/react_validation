import { Box, Modal, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import deleteicon from '../../../assets/delete.png'
import arrowicon from '../../../assets/arrow.png'
import staricon from '../../../assets/start.png'
import eyesicon from '../../../assets/eyes.png'
import SendEmailNotification from './SendEmailNotification'
import { Link } from 'react-router-dom';
import { OnboardedStore } from '../../../store/Store';
import Confirmation from '../../../components/sheared/Confirmation';
import { ServiceProviderAdmin, ServiceProviderAdminDelete } from '../../../utils/api'

const Onboarded = () => {
    const [onboardDrawer, setOnboardDrawer] = useState(false)
    const onboardedUseStore = OnboardedStore();
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [userId, setUserId] = useState();

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await ServiceProviderAdmin()
            onboardedUseStore?.setonboardedUser(response)
        } catch (error) {
            console.log(error, 'error service provider data fatching')
        }
    }

    const modalOpen = (id) => {
        setUserId(id)
        setIsConfirmationModalOpen(true)
    }

    const handleConfirmation = async () => {
        try {
            await ServiceProviderAdminDelete(userId)
            setIsConfirmationModalOpen(false)
            fetchData()
        } catch (error) {
            console.log(error, 'onboarding delete api eroor')
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
                        {onboardedUseStore?.onboardedUser.map((item) => {
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
                                            <Link to={`${item?.id}`}>  <img className='w-4 cursor-pointer' src={eyesicon} alt="star icon" /></Link>
                                            <img className='w-4 cursor-pointer' src={deleteicon} alt="delete icon" onClick={() => modalOpen(item?.id)} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <SendEmailNotification onboardDrawer={onboardDrawer} setOnboardDrawer={setOnboardDrawer} />
                <Confirmation
                    isOpen={isConfirmationModalOpen}
                    onClose={() => setIsConfirmationModalOpen(false)}
                    onConfirm={handleConfirmation}
                    title='Confirm Delete'
                    message="Are you sure you want to proceed?"
                >
                </Confirmation>
            </div>
        </>
    )
}

export default Onboarded