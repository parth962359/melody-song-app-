import React, { useContext } from "react";
import Sidebar from "./components/Sidebar/";
import Player from "./components/Player/";
import {Playercontext} from "./context/Playercontext/";
// import Navbar from "./components/Navbar/";
import Display from "./components/Display/";
const App = () => {

  const {audioRef,track}=useContext(Playercontext);  
  return (
    <>
      <div className=" w-screen h-screen bg-black ">
        
        <div className="h-[90%] flex ">
          <Sidebar/>
          <Display />
        </div>
        <Player/>
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
};

export default App;
