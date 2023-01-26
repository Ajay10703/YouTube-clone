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
      
//     show? document.querySelector('#sidebar').style.display="none"
//     :document.querySelector('#sidebar').style.display="block";
//     show?  document.querySelector('#sidebar2').style.display="block"
//      :document.querySelector('#sidebar2').style.display="none";
//      show? document.querySelector('#posts').style.marginLeft="80px"
//     :document.querySelector('#posts').style.marginLeft="230px";
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