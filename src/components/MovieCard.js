import React from 'react'
import { IMG_CDN } from "../utilis/constatnts";

const MovieCard = ({poster_path
}) => {
  return (
    <div className='w-48'>
      <img alt="movieCard" src={IMG_CDN + poster_path}></img>
    </div>
  )
}

export default MovieCard