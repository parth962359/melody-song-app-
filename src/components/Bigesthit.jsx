import React from 'react'
import { Playercontext } from '../context/Playercontext'
import { useContext } from 'react';

const Bigesthit = ({image,name,id,desc}) => {

  const {playwithid}=useContext(Playercontext);
  
  return (
   
          <div onClick={()=>{ playwithid(id) }} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img src={image} className="rounded" alt="" />
      <p className="font-bold mt-2 mb-1"> {name}</p>
      <p className="text-slate-50 text-sm">{desc}</p>
    </div>
    
  )
}

export default Bigesthit