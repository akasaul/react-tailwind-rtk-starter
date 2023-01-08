import React from 'react'

const Post = () => {
  return (
    <section className='p-4 flex space-x-2 border-b-[1px] border-stroke'>
      <div className='w-24'>
        <img className='object-cover h-11 w-11 rounded-full' src="https://i.pinimg.com/564x/c0/f1/44/c0f1446a6730ee617bed9dc4d6c1bb8f.jpg" alt="" />
      </div>
      <div className='flex flex-col space-y-1'>
        <div className='flex items-center space-x-3'>
          <h3 className='text-body'>Nikodimos Jemaneh</h3>
          <p className='text-caption font-[400] text-shy'>@nikoismyname</p>
          <p className='text-caption font-[400] text-shy'>.5m</p>
        </div>
        <p className='text-body font-[300]'>
          I am a walking dead but I'm just a talking head a zombile floating 
          but I got your mom dtroten.
        </p>
        <div className=''>
          <img className='w-full rounded-3xl' src="https://i.pinimg.com/564x/2f/89/97/2f89978d50494d16e996cb8400d44009.jpg" alt="" />
        </div>
        <div className='flex items-center justify-between p-3'>
          <img src="/images/comment.svg" alt="" />
          <img src="/images/like.svg" alt="" />
          <img src="/images/retweet.svg" alt="" />
          <img src="/images/upvote.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Post