import { Drawer } from '@mui/material'
import React from 'react'

const SendEmailNotification = ({ onboardDrawer, setOnboardDrawer }) => {
    return (
        <Drawer PaperProps={{ elevation: 0, style: { borderRadius: "60px 0 0 60px", width: "380px" } }} anchor='right' open={onboardDrawer} onClose={() => setOnboardDrawer(false)}>
            <div className='bg-[#fafafa] px-8 pt-8 border-b flex flex-col gap-5 pb-4'>
                <div>
                    <h4 className='text-lg font-semibold'>Send Email Notification</h4>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <img className='w-8 h-8 rounded-full' src="https://bcoder-dev-bucket.s3.amazonaws.com/beauty-spot/cec9a3052d36e38c86269d9545ff8f011dee5853.jpg" alt="" />
                        <span className='text-sm font-medium'>Dior</span>
                    </div>
                    <span>Active</span>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-4'>
                        <p className='text-xs font-semibold'>Location:</p>
                        <span className='text-xs font-medium text-[#9f9f9f]'>Northolt, London, UK</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='text-xs font-semibold'>Email:</p>
                        <span className='text-xs font-medium text-[#9f9f9f]'>teerenzel@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='px-8 pt-5'>
                <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative mt-2">
                    <label className="2xl:text-sm absolute bg-white text-input-label -top-2 left-5 text-[11px] px-1" htmlFor="email">Subject</label>
                    {/* <img src={EmailIcon} alt="email-svg" width={12} /> */}
                    <input placeholder="michellejohnson125@gmail.com" className="w-full outline-none text-[12px] text-input-placeholder" type="email" id="email" />
                </div>
                <div className="border border-input-placeholder border-[#000E2F70] flex items-start gap-x-2 rounded-lg p-3 relative mt-4">
                    <label className="absolute bg-white text-input-label -top-2 left-5 text-[11px] px-1" htmlFor="message">Message</label>
                    {/* <img src={EmailIcon} alt="message-svg" width={12} /> */}
                    <textarea className="w-full outline-none text-[12px] text-input-placeholder resize-none" rows={9} type="text" id="message" />
                </div>
                <div className="mt-6 flex items-center justify-center gap-x-3">
                    <span className=" bg-white flex-1 text-center text-primary-700 border border-[#ba8a8c] text-[10px] px-6 py-3 rounded-lg cursor-pointer" onClick={() => setOnboardDrawer(false)}>Back</span>
                    <button type="submit" className="flex-1 text-center bg-[#ba8a8c] border border-primary-700 text-white text-[10px] px-6 py-3 rounded-lg cursor-pointer flex items-center justify-center gap-x-2">Submit
                    </button>
                </div>
            </div>
        </Drawer>
    )
}

export default SendEmailNotification