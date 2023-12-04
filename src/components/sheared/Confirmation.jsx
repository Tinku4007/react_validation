import { Box, Modal } from '@mui/material'
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
    borderRadius: '10px'
};


const Confirmation = ({ title, isOpen, onClose, onConfirm, message }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={style} display='flex' flexDirection='column' gap='15px'>
                <div className='flex flex-col gap-1'>
                    <h5 className='text-base font-medium'>{title}</h5>
                    <p className='text-sm'>{message}</p>
                </div>
                <div className='flex items-center justify-end gap-3'>
                    <button className='text-[#61373f] border border-[#61373f] rounded-lg w-20 h-[34px]' onClick={onClose}>Cancel</button>
                    <button className='bg-[#61373f] text-white rounded-lg w-20 h-[34px]' onClick={onConfirm}>Confirm</button>
                </div>
            </Box>
        </Modal>
    )
}

export default Confirmation