import React, { useState } from 'react';
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FiEye, FiEyeOff} from "react-icons/fi";
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <>
    <div className='flex justify-center bg-[#E5E7EB] min-h-screen py-4'>
      <div className='bg-white w-full max-w-md rounded-2xl p-6 sm:p-10 shadow-lg'>
        <div className="flex justify-center mb-6">
          <img src="/src/assets/Graph-logo.png" alt="Graph-logo" className='h-12 sm:h-16' />
        </div>
        <h1 className="text-2xl text-center font-semibold mb-2">Get Started with 
          <span className="text-indigo-500">Metrix</span></h1>
        <p className="text-center text-sm text-gray-500 mb-8">Create your free account</p>
        <form action="">
          <div className="flex justify-center flex-col mb-3">
            {/* Name Field */}
            <div className="relative mb-5 ">
              <input
                className='peer w-full rounded bg-gray-100 px-12 pt-4 pb-2 text-black 
                  placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500'
                type="email" id="username" required placeholder="Enter Name"
              />
              <label htmlFor="username" className='absolute top-1 text-xs text-black-500 transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs 
                peer-focus:text-indigo-500 left-12'>Your Name</label>
              <CiUser className='absolute top-4 left-4 text-gray-500 size={18}' />
            </div>

            {/* Email Field */}
            <div className="relative mb-5 ">
              <input
                className='peer w-full rounded bg-gray-100 px-12 pt-4 pb-2 text-black 
                  placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500'
                type="email" id="useremail" required placeholder="Enter Email"
              />
              <label htmlFor="useremail" className='absolute top-1 text-xs text-black-500 transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs 
                peer-focus:text-indigo-500 left-12'>Your Email</label>
              <CiMail className='absolute top-4 left-4 text-gray-500 size={18}' />
            </div>

            {/* Password Field */}
            <div className="relative mb-3">
              <input
                className='peer w-full rounded bg-gray-100 px-12 pt-4 pb-2 text-black 
                  placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10'
                type={showPassword ? "text" : "password"}
                id="userpassword"
                required
                placeholder="Enter password"
              />
              <label htmlFor="userpassword" className='absolute left-12 top-1 text-xs text-black-500 transition-all 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs 
                peer-focus:text-indigo-500'>Create Password</label>
                <CiLock className='absolute top-4 left-4 text-gray-500 size={18}' />

              {/* Eye Icon Toggle */}
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-4 text-gray-500"
                tabIndex={-1}
              >
                {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
              </button>
            </div>
          </div>

          <div className='flex justify-end'>
            <span className='mb-7 text-xs text-right text-blue-600 
              hover:underline cursor-pointer'>Recover password</span>
          </div>

          <div>
            <p className="text-center text-sm text-gray-500 mb-6">Already have an account?
              <Link to='/' className="text-blue-600 hover:underline mx-1">Login</Link>
            </p>
          </div>

          <button type='submit' className='w-30 inline-block rounded bg-indigo-500 px-6 pb-2 pt-2.5 
            text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 
            ease-in-out hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-500 focus:shadow-lg 
            focus:outline-none focus:ring-0 active:bg-lightindigo-800 active:shadow-lg 
            motion-reduce:transition-none dark:active:shadow-black'><a href="Dashboard">SIGN UP</a></button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Register;
