import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utilis/constatnts';
import { addTrailerVideo } from '../utilis/movieSlice';
import { useDispatch, useSelector } from 'react-redux';


const VideoBackground = ({movieId}) => {
  const dispatch = useDispatch()
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)

  //fetching trailer video && updating the stores

  const getMovieVideos= async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US', API_OPTIONS);
    const json = await response.json(); // add await
    const filterData = json.results.filter((video) => video.type ==="Trailer"); // correct syntax for filter
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo());
    
  };

   useEffect(() =>{
    getMovieVideos()
   }, [])

  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/L4DrolmDxmw?si=s-XEuKu0xPlJuAIx"+trailerVideo?.key} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground