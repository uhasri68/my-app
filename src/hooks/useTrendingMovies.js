
import {API_OPTIONS} from "../utilis/constatnts"
import { useDispatch } from 'react-redux';
import { addTrendingMovies} from "../utilis/movieSlice"
import  { useEffect } from 'react';

const useTrendingMovies = () =>{

    //FETCH  data from TMDB API and update the store
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () =>{
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
      const json = await response.json();
      //console.log(json);
      dispatch(addTrendingMovies(json.results))
    };
  
    useEffect(() =>{
      getNowPlayingMovies();
    }, []);
  
  
}

export default useTrendingMovies;
