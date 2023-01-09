import React from 'react'
import {FiMoreHorizontal} from "react-icons/fi";
import {BiBarChart} from "react-icons/bi";
import {FaRegComment, FaRetweet} from "react-icons/fa";
import {AiOutlineRetweet, AiOutlineHeart} from "react-icons/ai";
import {BsUpload} from "react-icons/bs";


const Post = () => {
  return (
    <section className='border-b-[1px] p-3 border-stroke'>
      <div className='flex space-x-2'>
        <img className='object-cover h-11 w-11 rounded-full' src="https://i.guim.co.uk/img/media/28ee11b8843ae00a551486e6a6c639fa68b0338f/0_273_3300_1980/master/3300.jpg?width=620&quality=85&dpr=1&s=none" alt="" />
          <div className='flex flex-col'>
            <div className='flex flex-1 space-x-2'>
              <h3 className='text-sm font-[700] hover:underline cursor-pointer'>Nikodimos</h3>
              <p className='text-sm font-[300] text-shy'>@akasaul</p>
              <p  className='text-sm font-[300] text-shy'>.10m</p>
              <span className='flex-1'>
                <FiMoreHorizontal className='text-sm ml-auto font-[300] text-shy' />
              </span>
            </div>
              <p className='font-[400] leading-5 text-[15px] mb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non reiciendis obcaecati quidem neque optio laborum nulla enim, quia possimus.
              </p>
             <img className='rounded-lg mb-3' src="https://i.guim.co.uk/img/media/28ee11b8843ae00a551486e6a6c639fa68b0338f/0_273_3300_1980/master/3300.jpg?width=620&quality=85&dpr=1&s=none" alt="" />
             <div className='flex items-center justify-around'>
                <span className='p-2 rounded-full cursor-pointer hover:bg-slate-300/10 hover:text-primary'>
                  <BiBarChart />
                </span>
                <span className='p-2 rounded-full cursor-pointer hover:bg-slate-300/10 hover:text-primary'>
                  <FaRegComment />
                </span>
                <span className='p-2 rounded-full cursor-pointer hover:bg-slate-300/10 hover:text-green-600'>
                  <FaRetweet />
                </span>
                <span className='p-2 rounded-full cursor-pointer hover:bg-slate-300/10 hover:text-red-600'>
                  <AiOutlineHeart />
                </span>
                <span className='p-2 rounded-full cursor-pointer hover:bg-slate-300/10 hover:text-primary'>
                  <BsUpload />
                </span>
             </div>
          </div>
      </div>

    </section>
  )
}

export default Post