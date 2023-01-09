import React from 'react'
import Posts from './Posts';
import Sidebar from "./Sidebar";
import Sidebar2 from './Sidebar2';
const Home = () => {
  return (
    <div className='bg-light mx-0 pt-5'>
        <Sidebar/>
        <Sidebar2/>
        <Posts/>
    </div>
  )
}

export default Home