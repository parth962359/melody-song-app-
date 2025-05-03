import React from 'react'
import {assets} from '../assets/assets';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    
    <div className=" w-[25%] h-screen hidden lg:flex flex-col mr-4  ">

<div className="w-full h-[20%] bg-[#121212] flex-col m-2 p-3 rounded-lg ">

  <div onClick={()=>{navigate("/")}} className=" flex text-white font-semibold hover:bg-[#ffffff2b] cursor-pointer px-8  py-4">
    <img src={assets.home_icon} alt="home" className='cursor-pointer w-8 h-8 '/>
    <h1 className='px-8 pt-1 text-lg'>Home</h1>
  </div>

  <div className=" flex text-white font-semibold hover:bg-[#ffffff2b] cursor-pointer px-8  py-4">
    <img src={assets.search_icon} alt="home" className='cursor-pointer w-8 h-8 '/>
    <h1 className='px-8 pt-1 text-lg'>Search</h1>
  </div>
</div>

<div className="w-full h-[66%] bg-[#121212] flex-col m-2 p-3 rounded-lg">
<div className='flex items-center justify-between'>
<div className=" flex text-white font-bold  gap-3">
    <img src={assets.stack_icon} alt="home" className='cursor-pointer w-9 '/>
    <h1 className=' pt-1.5 font-semibold'>Your Library</h1>
  </div>

<div className=" flex  gap-3">
    <img src={assets.arrow_icon} alt="home" className='w-5'/>
    <img src={assets.plus_icon} alt="home" className='w-5 '/>
    </div>
  </div>
<div className='flex-col mx-[-2%]'>
<Yess heading="Create your first playlist" description="it's easy we will help you" btinfo="create playlist" />
<Yess heading="Lets find some Podcast to follow" description="we'll keep you update one new episodes" btinfo="Browse podcasts" />
</div>
</div>


</div>
    
  )
}

const Yess=({heading, description, btinfo})=>{

  return (
    <>
    <div className='text-white bg-[#242424] h-38  m-1 my-3 px-5 rounded'>
      <h1 className='w-full h-8 py-5 font-semibold '>{heading}</h1>
      <p className='w-full py-2 text-gray-400'> {description}</p>
      <button className='bg-white text-black rounded-full cursor-pointer p-2 px-4 my-2'>{btinfo}</button>

    </div>
    </>
  )
}
export default Sidebar

