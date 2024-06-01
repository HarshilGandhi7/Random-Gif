import { useEffect } from "react";
import { useState } from "react";
import Loading from './Loading';
import axios from "axios";
import useGif from "../../hooks/UseGif";

export default function Random(){
    const MY_API_KEY='lEkNsfWh0T4IbwQrsoKUwyLkZA1YDKAz'
    useEffect(()=>{
        randomGenerator();
    },[]) 
    const {loading,imgsrc,randomGenerator}=useGif();

    return(
        <div className="bg-dottted z-10">
            <div className="bg-green-400 w-content h-content mt-10 rounded-2xl border border-black flex flex-col items-center p-5">
            <div className="underline font-bold text-2xl">A Random GIF</div>
            {
                loading && <Loading></Loading>
            }
            {
                !loading && <img src={imgsrc} alt=""   className="pt-5 pb-5"/>
            }
            <button onClick={randomGenerator} className="w-[90%]  bg-white hover:bg-slate-400 duration-700 rounded-lg h-10">Generate</button>   
        </div>
        </div>
    )
}