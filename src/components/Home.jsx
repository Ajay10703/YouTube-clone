import React,{ useState } from 'react'
import Navbar from "./Navbar";
import Posts from './Posts';
import Sidebar from "./Sidebar";

import Sidebar2 from './Sidebar2';
const Home = () => {


  const [show,setShow]=useState(true)
  const [showed,setShowed]=useState(<Sidebar/>)
  const [mar,setmar]=useState("sideb")
  const sidebarHandler=()=>{
      setShowed(show?<Sidebar2/>:<Sidebar/>);
      setmar(show?"sides":"sideb");
      setShow(!show)
  }


  return (

    <div className='bg-light mx-0 '>
      <Navbar show={showed} ck={sidebarHandler}/>
        {showed}
        
        <Posts margin={mar}/>
    </div>
  )
}

export default Home