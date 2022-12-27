import React from 'react'
import './sidebar.css'
import { MinBt } from './Data'
const Sidebar2 = () => {

    
  return (
    <div className="sidebar " id='sidebar2'>
      
       {MinBt.map((b)=>(<div className="btn-holder  btn-holder2  py-1">
       <div className="d-flex "><i class={b.icon}></i></div>
       <div className="d-flex"><span className='d-block minbtn mx-auto '>{b.name}</span></div>
       </div>))} 
    </div>
  )
}

export default Sidebar2