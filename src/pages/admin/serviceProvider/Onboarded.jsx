import { Box, Modal, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ServiceProviderAdmin } from '../../../utils/api';
import deleteicon from '../../../assets/delete.png'
import arrowicon from '../../../assets/arrow.png'
import staricon from '../../../assets/start.png'
import eyesicon from '../../../assets/eyes.png'
import SendEmailNotification from './SendEmailNotification'
import { Link } from 'react-router-dom';
import { OnboardedStore } from '../../../store/Store';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
};

const Onboarded = () => {
    const [openModal, setOpenModal] = useState(false);
    const [onboardDrawer, setOnboardDrawer] = useState(false)
    const onboardedUseStore = OnboardedStore();

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
                                            <Link to={`/admin/Service-provider/${item?.id}`}>  <img className='w-4 cursor-pointer' src={eyesicon} alt="star icon" /></Link>
                                            <img className='w-4 cursor-pointer' src={deleteicon} alt="delete icon" onClick={() => setOpenModal(true)} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <Modal open={openModal}
                    onClose={() => setOpenModal(false)}
                >
                    <Box sx={style}>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <h4>Confirm Delete</h4>
                                <p>Are you sure you want to delete Beauty Spot?</p>
                            </div>
                            <div className='flex items-center justify-end gap-2'>
                                <button onClick={() => setOpenModal(false)} className='text-[#61373f] border border-[#61373f] rounded-lg w-20 h-[34px]'>Cancel</button>
                                <button className='bg-[#61373f] text-white rounded-lg w-20 h-[34px]'>Ok</button>
                            </div>
                        </div>
                    </Box>
                </Modal>
                <SendEmailNotification onboardDrawer={onboardDrawer} setOnboardDrawer={setOnboardDrawer} />
            </div>
        </>
    )
}

export default Onboarded