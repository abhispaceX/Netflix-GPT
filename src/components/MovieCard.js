import React from 'react'
import {IMG_CDN_URL} from "../utils/Constants" 
const MovieCard = ({poster_path}) => {
    
  return (
    <div className='w-44'>
      <img src={IMG_CDN_URL+poster_path} alt='movie'/>
    </div>
  )
}

export default MovieCard
