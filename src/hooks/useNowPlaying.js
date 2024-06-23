import { useDispatch } from 'react-redux'
import { Api_Options } from '../utils/Constants'
import { useEffect } from 'react'
import { addNowPlaying } from '../utils/nowPlayingSlice'


const useNowPlaying=()=>{
    const dispatch=useDispatch()
    const getNowPlaying= async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', Api_Options)
        const response= await data.json()
        
        dispatch(addNowPlaying(response.results))

   
     }
     useEffect (()=>{
      getNowPlaying() 
     },[])
}
export default useNowPlaying;  