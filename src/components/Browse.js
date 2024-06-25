import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import Search from './Serach';

const Browse = () => {
  const showSearch = useSelector(store => store.gpt.showGptSearch);  // corrected useSelector

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      {showSearch ? 
        <Search /> // render if showSearch is true
        : 
        (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        ) // render if showSearch is false
      }
    </div>
  )
}

export default Browse;