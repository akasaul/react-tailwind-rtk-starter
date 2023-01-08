import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div className='flex'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='feed'>
        <Feed />
      </div>
      <div className='trending hidden sm:block'>
        <Trending />
      </div>
    </div>
  )
}

export default Home