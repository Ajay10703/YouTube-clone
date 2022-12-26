import React from 'react'
import './sidebar.css'
import { TopBtn } from './Data'
import { MidBtn } from './Data'
import { Explore } from './Data'
const Sidebar = () => {

    
  return (
    <div className="sidebar ">
      {TopBtn.map((b)=>(<div className="btn-holder py-1">
       <i class={b.icon}></i>
       <span>{b.name}</span>
       </div>))} 
       <hr />
       {MidBtn.map((b)=>(<div className="btn-holder py-1">
       <i class={b.icon}></i>
       <span>{b.name}</span>
       </div>))} 
       <hr />
       <span className='mx-4 side-headings'>Subscription</span>
       <div className="btn-holder py-1">
       <i class="bi bi-person-circle mx-3"></i>
       <span>The Shadow YT</span>
       </div>
       <hr />
       <span className='mx-4 side-headings'>Explore</span>
       {Explore.map((b)=>(<div className="btn-holder py-1">
       <i class={b.icon}></i>
       <span>{b.name}</span>
       </div>))} 
    </div>
  )
}

export default Sidebar