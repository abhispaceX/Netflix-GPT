import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({title,movies}) => {

  return (
    <div className='flex flex-col'>
      <h1 className=' text-2xl text-white p-6' >{title}</h1>
      <div className="flex  overflow-x-scroll">
        <div className=' flex gap-3 px-5 ml-3'>
       { movies?.map((movie)=>
        (
            <div >
               <MovieCard key={movie.id} poster_path={movie.poster_path} />
            </div>
        ))}
        </div>
       </div>
    </div>
  )
}

export default MovieList
