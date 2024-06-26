import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies=useSelector((store)=>store?.movies)
  
  return (
    <div  className='bg-black ' >
        <div className=' -mt-52 relative z-10 ' >
      <MovieList title={"Now Playing"} movies={movies.nowPlaying}/>
      <MovieList title={"Upcoming"} movies={movies.upcoming}/>
      <MovieList title={"Top Rated"} movies={movies.nowPlaying}/>
      <MovieList title={"Popular"} movies={movies.popular}/>
      
      </div>
    </div>
  )
}

export default SecondaryContainer
