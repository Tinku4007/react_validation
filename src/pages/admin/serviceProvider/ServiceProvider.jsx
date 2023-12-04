import React, { useEffect, useState } from 'react';
import WithDashboardLayout from '../../../hoc/WithDashboardLayout';
import { ServiceProviderAdmin } from '../../../utils/api';
import Onboarded from './Onboarded';
import Requsted from './Requsted';
import { Tab, Tabs } from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import { OnboardedStore } from '../../../store/Store';

const ServiceProvider = () => {
  const onboardedUseStore = OnboardedStore();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const searchInput = (data) => {
    const inputValue = data?.target?.value.toLowerCase();
    if (inputValue === '') {
      onboardedUseStore?.onboardedUser
    } else {
      const filteredUsers = onboardedUseStore.onboardedUser.filter((user) =>
        user?.name.toLowerCase().includes(inputValue)
      );
      onboardedUseStore?.setonboardedUser(filteredUsers)
    }
  };


  return (
    <>
      <div className='w-[95%] mx-auto'>
        <div className='w-full py-4'>Service Provider</div>
        <div className='w-full min-h-[calc(100vh-110px)] flex flex-col gap-y-5 box-shadow rounded-t-2xl p-5 bg-white'>
          <div className='flex items-center p-[3px] outline-none border border-[#ccc] rounded-lg w-60 h-10 '>
            <input onChange={searchInput} className='w-full outline-none h-full pl-3 placeholder:text-sm' placeholder='Search...' type="search" />
            <div className='bg-[#633a42] w-[40px] h-full rounded-md flex items-center justify-center'>
              <CiSearch className='fill-white' />
            </div>
          </div>
          <div className='flex gap-4'>
            <Tabs value={value} onChange={handleChange}>
              <Tab label='Onboarded' />
              <Tab label='Requested' />
            </Tabs>
          </div>
          {value === 0 && <Onboarded />}
          {value === 1 && <Requsted />}
        </div>
      </div>
    </>
  );
};

export default WithDashboardLayout(ServiceProvider);
