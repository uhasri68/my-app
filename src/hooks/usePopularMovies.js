
import {API_OPTIONS} from "../utilis/constatnts"
import { useDispatch } from 'react-redux';
import {addPopularMovies} from "../utilis/movieSlice"
import  { useEffect } from 'react';

const usePopularMovies= () =>{

    //FETCH  data from TMDB API and update the store
    const dispatch = useDispatch()
    const getPopularMovies = async () =>{
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const json = await response.json();
      //console.log(json);
      dispatch(addPopularMovies(json.results))
    };
  
    useEffect(() =>{
        getPopularMovies();
    }, []);
  
  
}

export default usePopularMovies;
