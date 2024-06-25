import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constatnts";
import { useDispatch } from "react-redux";
import { addUseUpcomingMovies } from "../utilis/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  
  const getUpcomingMovies = async() => {
    const result = await fetch("https://api.themoviedb.org/3/movie/upcoming" ,API_OPTIONS);
    const json = await result.json();  // add await 
    dispatch(addUseUpcomingMovies(json.results));  // pass data to action
  }
  
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  return {};  // hooks should always return something
}

export default useUpcomingMovies;