import { useEffect } from "react";
import { useState } from "react";
import Loading from './Loading';
import axios from "axios";
import useGif from "../../hooks/UseGif";

export default function Tag(){
    const MY_API_KEY={};
    useEffect(()=>{
        randomGenerator();
    },[]) 
    const [topic,setTopic]=useState('cat');
    const {loading,imgsrc,randomGenerator}=useGif(topic);
    function changetopic(event){
        setTopic(event.target.value);
        val.value=event.target.value;
    }

    return(
        <div className="bg-dotted w-full h-full flex flex-col items-center pt-10">
            <div className="bg-green-400 w-content h-content rounded-2xl border border-black flex flex-col items-center p-5 ">
                <div className="underline font-bold text-2xl">Random {topic} GIF</div>
                {
                    loading && <Loading></Loading>
                }
                {
                    !loading && <img src={imgsrc} alt=""   className="pt-5 pb-5"/>
                }
                <input value={topic} name="val" onChange={changetopic} className="w-[90%]  bg-white hover:bg-slate-400 duration-700 rounded-lg h-10 mb-3 text-center"></input>   
                <button onClick={randomGenerator} className="w-[90%]  bg-white hover:bg-slate-400 duration-700 rounded-lg h-10">Generate</button>   
            </div>
        </div>
    )
}