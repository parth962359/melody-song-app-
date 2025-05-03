import React from 'react'
import Navbar from './Navbar' 
import {useParams} from 'react-router-dom'  
import {albumsData ,assets, songsData} from '../assets/assets'
import {Playercontext} from '../context/Playercontext'
import { useContext } from 'react'


const Playlist = () => {
    const {id}=useParams();
    let correctid= id[0];
    const albumData =albumsData[correctid];
   const {playwithid}=useContext(Playercontext);
    
  return (
    <div>
        <Navbar/>
        <div className=" mt-10 flex gap-8 flex-col md:flex-row md:items-end"> 
            <img className='w-48 rounded' src={albumData.image} alt="" />
            <div className="flex flex-col">
<p>Playlist</p>
<h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
<h4>{albumData.desc}</h4>
            <p className="mt-1">
                <img className='inline-block m-1 w-5'src={assets.spotify_logo} alt="" />
                <b>Spotify </b>
                 . 1,323,154 likes
                . <b>50 songs , </b> 
                 about 3 hr 12 min
                <br/>
            </p>
            </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">

                <p><b className='mr-4'>#</b> Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='w-4 mt-1 ' src={assets.clock_icon} alt="" />

            </div>
<hr />
{
    songsData.map((song,index)=>(
        <div onClick={()=>{ playwithid(song.id) }} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] py-4 cursor-pointer">
            <p className='text-white  '>
                {index+1}
                <img src={song.image} alt="" className=" inline w-10 mx-2" />
                {song.name}
            </p>
            
            <p className='text-[15px] '>{albumData.name}</p>
            <p className="text-[15px] hidden sm:block"> 5 days ago</p>
            <p className='text-[15px]'>{song.duration}</p>
        </div>
    ))
}
    </div>
  )
}

export default Playlist