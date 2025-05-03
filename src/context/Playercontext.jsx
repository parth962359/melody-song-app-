import { createContext, useRef, useState,useEffect } from "react";
import { songsData } from "../assets/assets";

export const Playercontext=createContext();




const PlayercontextProvider=(props)=>{

    const audioRef= useRef();
    const seekBar= useRef();
    const seekBg= useRef();

    const [track,settrack]=useState(songsData[2]);
    const [playerstatus, setplayerstatus] =useState(false);

    const [Time, setTime] =useState({
        currentTime:{
            second:0,
            minute:0
        },
        TotalTime:{
            second:0,
            minute:0
        }
    });


const playwithid=async(id)=>{

    await settrack(songsData[id]);
    await audioRef.current.play();
    setplayerstatus(true);

}

const previous=async()=>{

    let newid = (Math.abs(track.id-1))%(songsData.length);
    await settrack(songsData[newid]);
    await audioRef.current.play();
    setplayerstatus(true);

}
const next=async()=>{

    let newid = (track.id+1)%(songsData.length);
    await settrack(songsData[newid]);
    await audioRef.current.play();
    setplayerstatus(true);

}
const seeksong=async(e)=>{


    audioRef.current.currentTime=(e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration;
    console.log(e);
    
}

    useEffect(()=>{

        setTimeout(()=>{

            audioRef.current.ontimeupdate=()=>{
            
            seekBar.current.style.width=((Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%")
           
            setTime({
                currentTime:{
                    second:Math.floor(audioRef.current.currentTime%60),
                minute:Math.floor((audioRef.current.currentTime/60))
                },
                TotalTime:{
                    second:Math.floor(audioRef.current.duration%60),
                minute:Math.floor((audioRef.current.duration/60))
                }
            })
        }
        },1000)

    },[audioRef])

    const play=()=>{
        audioRef.current.play();
        setplayerstatus(true);
    }

    const pause=()=>{
        audioRef.current.pause();
        setplayerstatus(false);
    }

const contextvalue={    
audioRef ,
seekBar,
seekBg,
track,
settrack,
playerstatus,setplayerstatus,
setTime, Time,
play,pause,
playwithid,previous,next,seeksong
}
return (

    <Playercontext.Provider value={contextvalue}>
        {props.children}
    </Playercontext.Provider>
)
}

export default PlayercontextProvider;