import React from 'react'
import {assets} from '../assets/assets';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
   const navigate=useNavigate();

  return (
    <div className='flex-col w-full'>
    <div className='w-full  flex justify-between items-center bg-[#12121200] p-4 rounded-lg '>
        <div className='flex items-center gap-2'>
           <img onClick={()=>{navigate(-1)}} className='w-8 bg-black p-2 rounded-full cursor-pointer' src={assets.arrow_left} alt="" />
           <img onClick={()=>{navigate(+1)}} className='w-8 bg-black p-2 rounded-full cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
      <p className='bg-white text-black text-[15px] px-5 py-1 rounded-full hidden md:block cursor-pointer'> Explore Premium</p>
      <p className='bg-black text-white text-[15px] px-5 py-1 rounded-full hidden md:block cursor-pointer'> Install App</p>
      <p className='bg-red-600 w-8 text-center rounded-full p-1 text-black cursor-pointer font-bold'>
        P
      </p>
        </div>

    </div>
    <div className="w-full gap-4 flex ">
    <p className='bg-white text-black text-[15px] px-5 py-1 rounded-full cursor-pointer'> All</p><p className='bg-black text-white text-[15px] px-5 py-1 rounded-full  cursor-pointer'> Music</p>
    
    <p className='bg-black text-white text-[15px] px-5 py-1 rounded-full  cursor-pointer'> Podcasts</p>
    </div>
    </div>
  )
}

export default Navbar