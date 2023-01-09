import React from 'react'
import {BsTwitter} from "react-icons/bs";
import {BiHome} from "react-icons/bi";
import {CiUser} from "react-icons/ci";
import {CgHashtag} from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className='hidden border-r-[1px] py-4 space-y-5 flex-col items-center md:items-end lg:items-center border-stroke w-24 sm:w-[25%] xs:flex'>
        <div className='p-2 hover:bg-slate-300/20 cursor-pointer rounded-full'>
          <BsTwitter className='text-[2rem] p-0' />
        </div>
        <div className='p-2 flex items-baseline hover:bg-slate-300/20 cursor-pointer rounded-full'>
          <BiHome className='text-[2rem] p-0' />
          <h3 className='hidden lg:block text-[1.5rem]'>Home</h3>
        </div>
        <div className='p-2 flex items-baseline hover:bg-slate-300/20 cursor-pointer rounded-full'>
          <CgHashtag className='text-[2rem] p-0' />
          <h3 className='hidden lg:block text-[1.5rem]'>Home</h3>
        </div>
        <div className='p-2 flex items-baseline hover:bg-slate-300/20 cursor-pointer rounded-full'>
          <CiUser className='text-[2rem] p-0' />
          <h3 className='hidden lg:block text-[1.5rem]'>Home</h3>
        </div>
    </div>
  )
}

export default Sidebar