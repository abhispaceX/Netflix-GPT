import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='  w-screen aspect-video px-24 pt-[20%] absolute bg-gradient-to-r from-black'>
      <h1 className=' text-3xl font-bold text-white' >{title}</h1>
      <p className=' w-6/12 text-white'>{overview}</p>
      <div className='mt-4' >
        <button className=' w-28 h-12 rounded-lg bg-white text-xl text-black ' > ▶️ Play</button>
        <button className=' w-28 h-12 rounded-lg bg-white text-xl text-black bg-opacity-50 mx-3'  > more info</button>
      </div>
    </div>
  )
}

export default VideoTitle
