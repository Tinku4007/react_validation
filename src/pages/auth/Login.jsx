import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { profileValidation } from '../../utils/validation/formValidation';
import { useForm } from "react-hook-form";
import WithAuthLayout from '../../hoc/WithAuthLayout';
import { LoginAdmin } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import PasswordHide from '../../assets/Password-hide.svg';
import PasswordShow from '../../assets/Password-show.svg';
import { setLocalStorage } from '../../utils/LocalStorageUtills';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reduxStore/slices/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setIsPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(profileValidation) });

  const onSubmit = async data => {
    const loginData = {
      email: data.email,
      password: data.password,
    }
    try {
      const resData = await LoginAdmin(loginData);
      dispatch(setUser(resData));
      setLocalStorage('admin', resData);
      navigate('/admin/dashboard');
    } catch (error) {
      console.log('Login error:', error)
    }
  }

  return (
    <>
      <div className='2xl:max-w-[335px] w-full max-w-[270px] mx-auto h-full flex flex-col gap-2'>
        <h2 className="font-bold text-base heading">Log In</h2>
        <h4 className="2xl:text-base font-semibold text-xs">Welcome back!</h4>
        <p className="text-[12px] 2xl:text-base text-input-placeholder">Please enter your email and password to sign in</p>
        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative mt-2">
            <label className="2xl:text-sm absolute bg-white text-input-label -top-2 left-5 text-[11px] px-1" htmlFor="email">Email</label>
            {/* <img src={EmailIcon} alt="email-svg" width={12} /> */}
            <input placeholder="michellejohnson125@gmail.com" className="w-full outline-none text-[12px] text-input-placeholder" type="email" id="email" {...register("email")} />
          </div>
          <p className="text-[red] text-[12px]">{errors.email?.message}</p>
          <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex gap-x-2 rounded-xl p-3 relative mt-4">
            <label className="2xl:text-sm absolute bg-white text-input-label -top-2 left-5 text-[11px] px-1" htmlFor="password">Password</label>
            {/* <img src={PasswordIcon} alt="password-svg" width={12} /> */}
            <input placeholder="********" className="w-full outline-none text-[12px] text-input-placeholder" type={passwordVisible ? 'text' : 'password'} id="password" {...register('password')} />
            <img src={passwordVisible ? PasswordHide : PasswordShow} alt="password-hide" width={12} className="cursor-pointer" onClick={() => setIsPasswordVisible(!passwordVisible)} />
          </div>
          <p className="text-[red] text-[12px]">{errors.password?.message}</p>
          <p className="text-[11px] my-2 mr-2 text-input-placeholder w-max ml-auto" to='/auth/forgot-password'>Forgot Password ?</p>
          <button type="submit" className="sign-in text-center mt-6 bg-[#E5B3B2] w-max mx-auto text-white text-[10px] px-12 py-3 rounded-lg flex items-center gap-x-2">
            <span>Sign In</span>
            {/* {loading && <span className="loader"></span>} */}
          </button>
        </form>
      </div>
    </>
  )
}

export default WithAuthLayout(Login);