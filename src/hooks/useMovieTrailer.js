 import { useDispatch } from "react-redux";
 import { addTrailerVideo } from '../utilis/movieSlice';
 import { API_OPTIONS } from '../utilis/constatnts';
 import  { useEffect } from 'react';


 const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const getMovieVideos= async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const json = await response.json(); // add await
        const filterData = json.results.filter((video) => video.type ==="Trailer"); // correct syntax for filter
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo());
        
      };
    
       useEffect(() =>{
        getMovieVideos()
       }, [])
    

}
export default useMovieTrailer;