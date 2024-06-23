import { useDispatch } from 'react-redux'
import { Api_Options } from '../utils/Constants'
import { useEffect } from 'react'
import { addUpcoming } from '../utils/nowPlayingSlice'


const useUpcoming=()=>{
    const dispatch=useDispatch()
    const getUpcoming= async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', Api_Options)
        const response= await data.json()
        
        dispatch(addUpcoming(response.results))

   
     }
     useEffect (()=>{
      getUpcoming() 
     },[])
}
export default useUpcoming;  