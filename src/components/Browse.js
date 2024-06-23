
import useNowPlaying from '../hooks/useNowPlaying'
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'
import useUpcoming from '../hooks/useUpcoming'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'





const Browse = () => {
  useNowPlaying()
 
 usePopular()
 useTopRated()
 useUpcoming()
  
  return (
    <div>
      <Header showHeader={true}/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
