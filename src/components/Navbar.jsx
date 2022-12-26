import React from 'react'
import './navbar.css'
const Navbar = () => {
    return (
        <nav className="py-2 navbar-light  bg-light">
<div className=" d-flex justify-content-between  ">
            <div className="brand d-flex col-2">
              <i className="bi bi-list mx-3"></i>
                <a className="navbar-brand  mx-1" href="/"><i className="bi bi-youtube  mr-1"></i>YouTubes<sup>IN</sup></a>
            </div>
                <div className="input-group col-8 justify-content-center">
                    <input type="text" placeholder='Search' className='search-input d-none d-md-block' />
                    <button className='btn input-btn d-none d-md-block'><i className="bi bi-search"></i></button>
                    <div className="icon-holder d-md-none"><i className="bi bi-search "></i></div>
                    <div className="icon-holder"><i className="bi bi-mic-fill"></i></div>
                </div>
                <div className="user d-flex col-2 justify-content-end">
                    <i className="bi  bi-camera-reels mx-3"></i>
                    <i className="bi  bi-bell mx-3"></i>
                    <i className="bi bi-person-circle mx-3"></i>
                </div>
            
                </div>
        </nav>
    )
}

export default Navbar