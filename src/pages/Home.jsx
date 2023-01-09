import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Feed />
      <Trending />
    </div>
  )
}

export default Home