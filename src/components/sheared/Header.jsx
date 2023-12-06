import React from 'react'
import { clearLocalStorage } from '../../utils/LocalStorageUtills'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth);

    const handleLogoutClick = () => {
        clearLocalStorage('admin');
        navigate('/auth/login');
    }
    const handleBellClick = () => {

    }
    const handleChangePassClick = () => {

    }
    return (
        <div className='bg-white w-full h-12 flex items-center justify-end gap-x-8 px-3'>
            {/* Drawer */}
            {/* <div className='relative'>
                <span className='absolute bg-[#907f83] w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] -top-2 -right-2'>0</span>
                <img className='cursor-pointer' src={BellIcon} alt='bell-icon' width={16} onClick={handleBellClick} />
            </div> */}
            <span>{user?.email}</span>
            <button onClick={handleLogoutClick}>Logout</button>
            <div className='flex gap-x-2 items-center relative transition' >
                <div className='flex gap-x-2 items-center cursor-pointer' >
                    {/* <h2 className='text-[12px] user-name-head'>{getFromLocalStorage('admin').name}</h2> */}
                    <h2 className='text-[12px] user-name-head'>bcoder</h2>
                    <div className=' user-image flex gap-1'>
                        <img className='2xl:w-9 w-8 h-8 object-cover rounded-full border border-primary-900 p-[2px]' />
                        {/* <img src={UpArrowIcon} alt="dropdown-icon" className={`${dropdownVisible ? 'rotate-0' : 'rotate-180'}`} /> */}
                    </div>
                </div>

                <div className='w-[250px] hidden text-xs absolute right-0 top-11 bg-primary-300 box-shadow rounded-lg z-[9999]'>
                    <div className='flex px-4 pt-4 items-center gap-x-1 '>
                        <div className=' w-3/12 relative cursor-pointer' onClick={handleBellClick}>
                            <img className='w-12 h-12 object-cover rounded-full border border-primary-900 p-[2px]' />
                            {/* <span className='absolute right-1 top-8'><img src={EditProfileIcon} alt="edit-profile" /></span> */}
                        </div>
                        <div className=' w-9/12 flex flex-col gap-y-1 leading-none'>
                            {/* <span className='font-medium text-xs'>{getFromLocalStorage('admin').name}</span> */}
                            <div className='flex items-center gap-2'>
                                {/* <span><img className='w-3 h-3' src={Gmail} alt="gmail" /> </span> */}
                                {/* <p className='text-lightGray text-xs'>{getFromLocalStorage('admin').email}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className='flex  pt-4 flex-col gap-y-3'>
                        <div className='flex px-4 items-center gap-2 cursor-pointer' onClick={handleChangePassClick}>
                            {/* <span><img className='w-4 h-4' src={ChangePasswordIcon} alt="changepassword-img" /></span> */}
                            <p className='text-lightGray'>Change Password</p>
                        </div>
                        <div className='bg-red-500 px-4 rounded-b-lg flex items-center gap-2 py-3 cursor-pointer' onClick={handleLogoutClick}>
                            {/* <span><img className='w-4 h-4' src={LogOut} alt="logout-img" /></span> */}
                            <p className=' font-medium text-red-900'>Logout</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Header