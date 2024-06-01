import { useState } from 'react'
import './index.css'
import Random from './Components/Random'
import Tag from './Components/Tag'

function App() {
  
  return (
    <div className='bg-dotted w-full h-full flex flex-col items-center p-10'>
      <div className='w-11/12 bg-white text-center h-16 flex flex-row items-center justify-center font-bold text-3xl rounded-lg'>RANDOM GIFS</div>
      <Random></Random>
      <Tag></Tag>
    </div>
  )
}

export default App
