import React, { useContext, useState } from 'react'
import {assets, songsData} from "../assets/assets"
import {Playercontext} from "../context/Playercontext"
const player = () => {

    const {seekBg,seekBar,playerstatus,play,pause,track,Time,previous,next,seeksong} = useContext(Playercontext);


  return (
    <div className='w-screen h-[10%] bg-black text-white flex justify-between items-center'>

<div className="hidden lg:flex justify-center items-center gap-1 m-3 mt-6">
        <img src={track.image} alt="" className='w-10 gap-1' />
    
    <div className="text-md "> 
        <p className='text-[15px]'> {track.name}</p>
        <p className='text-[8px]'> {track.desc.slice(0,12)}</p>
    </div>
</div>




<div className="flex flex-col justify-center items-center "> 
<div className="flex gap-4">
    
    <img src={assets.shuffle_icon} alt="" className='cursor-pointer w-4'/>
    <img onClick={previous} src={assets.prev_icon} alt="" className='cursor-pointer w-4'/>
   {playerstatus?  <img onClick={pause} src={assets.pause_icon} alt="" className='cursor-pointer w-4'/>:<img onClick={play}  src={assets.play_icon} alt="" className='cursor-pointer w-4'/> 
   }
    <img onClick={next} src={assets.next_icon} alt="" className='cursor-pointer w-4'/>
    <img  src={assets.loop_icon} alt="" className='cursor-pointer w-4'/>

     </div>

     <div className=" flex justify-center items-center gap-3 py-1 ">
        <p>{Time.currentTime.minute}:{Time.currentTime.second}</p>
        <div ref={seekBg} onClick={seeksong} className=" w-[50vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer  ">
            <hr ref={seekBar} className='h-1 w-0 border-none bg-green-800 rounded-full'/>
        </div>
        <p>{Time.TotalTime.minute}:{Time.TotalTime.second}</p>
     </div>

</div>




<div className=" hidden lg:flex  mx-2 justify-center items-center gap-2 opacity-75">
<img src={assets.plays_icon} alt="" className='w-4' />
<img src={assets.mic_icon} alt="" className='w-4' />
<img src={assets.queue_icon} alt="" className='w-4' />
<img src={assets.speaker_icon} alt="" className='w-4' />
<img src={assets.volume_icon} alt="" className='w-4' />
<div className='w-20 bg-slate-50 rounded h-1'></div>
<img src={assets.mini_player_icon} alt="" className='w-4' />
<img src={assets.zoom_icon} alt="" className='w-4' />
</div>

    </div>
  )
}

export default player