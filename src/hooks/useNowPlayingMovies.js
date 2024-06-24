
import {API_OPTIONS} from "../utilis/constatnts"
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from "../utilis/movieSlice"
import  { useEffect } from 'react';

const useNowPlayingMovies = () =>{

    //FETCH  data from TMDB API and update the store
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () =>{
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await response.json();
      //console.log(json);
      dispatch(addNowPlayingMovies(json.results))
    };
  
    useEffect(() =>{
      getNowPlayingMovies();
    }, []);
  
  
}

export default useNowPlayingMovies;
