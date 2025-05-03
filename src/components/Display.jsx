import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Displayhome from './Displayhome'
import Playlist from './Playlist/'
import { albumsData } from '../assets/assets'
const Display = () => {

const displayref=useRef();
const location=useLocation();
const isalbum=location.pathname.includes('album');
const albumid=isalbum?location.pathname.slice(-4)[0]:"";
console.log(albumid);
const bgcolor=albumsData[Number(albumid)].bgColor;
useEffect(()=>{

  if(isalbum){
    displayref.current.style.background=`linear-gradient(${bgcolor},#121212)`;
  }
  else{
    displayref.current.style.background=`#121212`;

  }
}
)

  return (
    <div ref={displayref} className='w-[100%] m-2  px-6 rounded bg-[#121212] text-white overflow-auto 
    lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path="/" element={<Displayhome/>} />
            <Route path="/album/:id" element={<Playlist/>} />
        </Routes>
    </div>
  )
}

export default Display