import React from 'react'
import './post.css'
import { postData } from './Data'
const Posts = () => {
  return (
    <div className='posts offset  py-3 row' id='posts'>
       {postData.map((p)=>(
        <div className="post col-lg-4 col-xl-3 col-md-6  px-1">
        <div className="p-top mx-1">
        <img src={p.image}alt="" className='post-img '/>
        </div>
       <div className="post-bottom mx-1 my-2" >
       <div className="post-title">
         <div className="float-left mr-2"><img src={p.url} alt=""  className='channel-img'/> </div>  <span>{p.dist}</span>
        </div>
        <div className="ml-5 mt-1"><div className="channel-name text-muted"><span>{p.name}</span></div>
        <div className="post-View text-muted"><span>{p.likeCount} view - {p.time} ago</span></div></div>
       </div>
    </div>
       ))}
    </div>
  )
}

export default Posts
