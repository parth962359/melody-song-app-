import React from 'react'
import Navbar from './Navbar'
import {albumsData,songsData} from '../assets/assets'
import Bigesthit from './Bigesthit'
import Albumdata from './Albumdata'
const Displayhome = () => {
  return (
    <div>
      <Navbar />
      <div >
        <h1 className="text-2xl font-bold my-3">Featured charts</h1>
      <div className="gap-5 flex overflow-x-scroll  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
{albumsData.map((item,index)=>(<Albumdata key={index} image={item.image} name={item.name} id={item.id} desc={item.desc}/>
))}
      </div>
      </div>

      <div >
        <h1 className="text-2xl font-bold my-3">Today's Biggest Hits</h1>
      <div className=" flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
{songsData.map((item,index)=>(<Bigesthit key={index} image={item.image} name={item.name} id={item.id} desc={item.desc}/>
))}
      </div>
      </div>
    </div>
  )
}

export default Displayhome