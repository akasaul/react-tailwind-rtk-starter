import React from 'react'
import {BsTwitter} from "react-icons/bs";
import {BiHome} from "react-icons/bi";
import {CiUser} from "react-icons/ci";
import {CgHashtag} from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className='flex flex-col lg:items-start items-end space-y-10 sm:p-5 sm:px-8  h-full'>
        <span className='hover:bg-slate-400/10 p-3 rounded-full'>
            <BsTwitter className='cursor-pointer text-3xl' />
        </span>
        <div className='flex flex-col'>
            <div className='flex space-x-4 cursor-pointer hover:bg-slate-400/10 p-3 hover:rounded-full  items-center'>
                <BiHome className='lg:text-2xl text-[2rem] cursor-pointer ' />
                <p className='text-heading lg:block hidden'>Home</p>
            </div>

            <div className='flex space-x-4 cursor-pointer hover:bg-slate-400/10 p-3 hover:rounded-full  items-center'>
                <CgHashtag className='lg:text-2xl text-[2rem] ' />
                <p className='text-heading  lg:block hidden'>Explore</p>
            </div>

            <div className='flex space-x-4 cursor-pointer hover:bg-slate-400/10 p-3 hover:rounded-full  items-center'>
                <CiUser className='lg:text-2xl text-[2rem] ' />
                <p className='text-heading  lg:block hidden'>Profile</p>
            </div>
        </div>
        <button className='bg-primary lg:block hidden border-1 rounded-full px-11 py-2 font-bold'>Tweet</button>
    </div>
  )
}

export default Sidebar