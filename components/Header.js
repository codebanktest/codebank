import React, { useState } from 'react';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { GoScreenFull } from "react-icons/go";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdCloseFullscreen } from "react-icons/md";
import { AiOutlineFullscreenExit } from "react-icons/ai";


export default function Header(){

  const [isFullscreen, setisFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if(!document.fullscreenElement){
      document.documentElement.requestFullscreen().then(() => {
        setisFullscreen(true)
      })
    } else {
      if(document.exitFullscreen){
        document.exitFullscreen().then(() => {
          setisFullscreen(false);
        })
      }
    }
  }

  return <>
  <header className="header flex flex-sb">
      <div className="logo flex gap-2">
        <h1>ADMIN</h1>
        <div className="headerham flex flex-center">
        <HiMiniBars3BottomLeft />
        </div>
        </div>

       <div className="rightnav flex gap-2">
        <div onClick={toggleFullscreen}>
         {isFullscreen ? <AiOutlineFullscreenExit /> :  <GoScreenFull />}
          
        </div>
        <div className="notification" >
          <MdOutlineNotificationsActive />
        </div>
        <div className="profilenav">
               <FaRegUserCircle />
        </div>
       </div>
    
  </header>
  </>
}