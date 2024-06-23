import React from 'react'
import VideoBackground from './videoBackground'
import VideoTitle from './videoTitle'

import { useSelector } from 'react-redux'
import useVideo from '../hooks/useVideo'

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlaying)
    useVideo()
 
    if(!movies) return;
   const mainMovie=movies[0]
   const { title,overview,id}=mainMovie
  return (
    <div className='pt-[30%] bg-black md:pt-0' >
      <VideoTitle title={title} overview={overview} />
      <VideoBackground  movieId={id} />
    </div>
  )
}

export default MainContainer

