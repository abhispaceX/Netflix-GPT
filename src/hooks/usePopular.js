import { useDispatch } from 'react-redux'
import { Api_Options } from '../utils/Constants'
import { useEffect } from 'react'
import { addPopular} from '../utils/nowPlayingSlice'


const usePopular=()=>{
    const dispatch=useDispatch()
    const getPopular= async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', Api_Options)
        const response= await data.json()
        
        dispatch(addPopular(response.results))

   
     }
     useEffect (()=>{
      getPopular() 
     },[])
}
export default usePopular;  