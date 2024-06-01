import { useEffect } from "react";
import { useState } from "react";
import Loading from "../src/Components/Loading";
import axios from "axios";
export default function useGif(topic){
    const MY_API_KEY='j1GXzV2e8dYprnpmrUj1uw3JJFdaDGgE'
    const [imgsrc,setimgsrc]=useState('');
    const [loading,setloading]=useState(false);
    async function randomGenerator(tag){
        setloading(true);
        const response=await axios.get(topic?`https://api.giphy.com/v1/gifs/random?api_key=${MY_API_KEY}&tag=${topic}&rating=g`:`https://api.giphy.com/v1/gifs/random?api_key=${MY_API_KEY}&tag&rating=g`);
        setimgsrc(response.data.data.images.original.url);
        setloading(false);
    }
    return {loading,imgsrc,randomGenerator};
}