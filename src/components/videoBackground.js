import React, { useEffect } from 'react';
import useVideo from '../hooks/useVideo';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.videoTrailer);

  useVideo(movieId);

  useEffect(() => {
    
  }, [trailerVideo]);

  return (
    <div className='w-screen h-screen -mt-20 '>
      {trailerVideo ? (
           <div className="  top-10 left-0 w-full h-full">
           <iframe
             className="w-full h-full object-cover"
             src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
             title="YouTube video player"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerPolicy="strict-origin-when-cross-origin"
           />
         </div>
       ) : (
         <div className="w-full h-full flex justify-center items-center">Loading...</div>
       )}
     </div>
  );
};

export default VideoBackground;