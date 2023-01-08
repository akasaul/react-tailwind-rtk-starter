import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <div>
        <header className='flex border-b-[1px] border-stroke items-center p-2 px-3 justify-between'>
            <p>Home</p>
            <img src="/images/magic.svg" alt="" />
        </header>

        <article className='flex items-start p-3 mb-2 h-32 border-b-[1px] border-stroke w-full space-x-3'>
            <img className='h-10 w-10 object-cover rounded-full' src="https://i.pinimg.com/564x/c0/f1/44/c0f1446a6730ee617bed9dc4d6c1bb8f.jpg" />
            <div className='flex flex-col h-full justify-center space-y-8'>
                <input className='bg-transparent' placeholder="What's happening?" />
                <div className='flex items-center space-x-3'>
                    <img src="/images/photo.svg" alt="" />
                    <img src="/images/gif.svg" alt="" />
                    <img src="/images/bars.svg" alt="" />
                    <img src="/images/date.svg" alt="" />
                </div>
            </div>
            <div className='h-full ml-auto flex flex-col justify-end flex-1'>
                <button className='p-2 px-3 rounded-full hover:shadow-sm hover:shadow-primary bg-primary self-end'>Tweet</button>
            </div>
        </article>

        <Post />
    </div>
  )
}

export default Feed