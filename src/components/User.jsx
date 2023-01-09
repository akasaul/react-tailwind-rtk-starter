import React from 'react'
import {SlCalender} from "react-icons/sl";
const User = () => {
  return (
    <div className='flex-1'>
      <div className='cover relative cursor-pointer h-48 w-[100%]' style={{
    	backgroundImage: `url("https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg?w=900&t=st=1673247551~exp=1673248151~hmac=a101bd03cc2a60b3bae6b4b2dfb7f996f427390889a33c1b20dddda5c8b1cd9c")`
      }}>
        <img className='object-cover absolute bottom-[-25%] profile-pic rounded-full border-2 -mt-11 ml-3' src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B7F6/production/_128049074_muskgetty.png.webp" alt="" />
        <button className='p-2 px-3 bg-primary text-white rounded-full absolute bottom-[-60px] right-[20px]'>Follow</button>
      </div>
      <div className='mt-16 px-5'>
        <h3 className='text-[1.3rem]'>Elon Musk</h3>
        <p className='font-[300] text-shy'>@elonmusk</p>
        <div className='flex flex-col items-center'>
          <SlCalender className='text-primary' />
          <p>Joined June 2009</p>
          <div>
            <p>168 Following</p>
            <p>125M Followers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User