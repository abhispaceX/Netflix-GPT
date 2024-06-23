// useVideo.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/nowPlayingSlice';
import { Api_Options } from '../utils/Constants';

const useVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.videoTrailer);

  const videoTrailer = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, Api_Options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const videoData = await response.json();
      

      if (!videoData || !videoData.results || videoData.results.length === 0) {
       
        return;
      }

      const trailer = videoData.results.find((video) => video.type === "Trailer");
      const filteredTrailer = trailer || videoData.results[0];
      dispatch(addTrailerVideo(filteredTrailer));
      console.log('Dispatched trailer:', filteredTrailer);
    } catch (error) {
      console.error('Failed to fetch trailer video:', error);
    }
  };

  useEffect(() => {
    if (!trailerVideo) {
      videoTrailer();
    }
  }, [movieId, trailerVideo]);  // Include movieId and trailerVideo in the dependency array
};

export default useVideo;