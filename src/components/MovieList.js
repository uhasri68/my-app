import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
  console.log(movies)
  const posterPath = movies?.[0]?.poster_path; // using optional chaining

  return (
    <div>
        <div>
            <h1>{title}</h1>
            <div>
              {posterPath && <MovieCard posterPath={posterPath} />} 
              {/* Only render MovieCard when posterPath is defined */}
            </div>
        </div>
    </div>
  )
}

export default MovieList;