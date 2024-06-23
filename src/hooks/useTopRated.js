import { useDispatch } from 'react-redux'
import { Api_Options } from '../utils/Constants'
import { useEffect } from 'react'
import { addTopRated } from '../utils/nowPlayingSlice'


const useTopRated=()=>{
    const dispatch=useDispatch()
    const getTopRated= async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', Api_Options)
        const response= await data.json()
        console.log(response.results)
        
        dispatch(addTopRated(response.results))

   
     }
     useEffect (()=>{
      getTopRated() 
     },[])
}
export default useTopRated;  