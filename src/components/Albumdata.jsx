import React from "react";
import { useNavigate } from "react-router-dom";

const Albumdata = ({ image, name, id, desc }) => {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => {
        navigate(`/album/${id}}`);
      }}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} className="rounded" alt="" />
      <p className="font-bold mt-2 mb-1"> {name}</p>
      <p className="text-slate-50 text-sm">{desc}</p>
    </div>
  );
};

export default Albumdata;
