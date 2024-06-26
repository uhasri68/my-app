import MovieCard from "./MovieCard";
const MovieList = ({title, movies}) => {
    return (
      <div className="px-6">
        <h1 className="py-4 font-bold text-xl text-white">{title}</h1>

          <div className="flex overflow-x-scroll p3-6">
              <div className="flex">
                 { movies && movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                  ))} 
              </div>
          </div>
      </div>
    )
  }
  
  export default MovieList;