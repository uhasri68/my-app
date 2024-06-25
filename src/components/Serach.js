import React from 'react'
import SearchPageBar from './SearchPageBar';
import SearchSuggestons from './SearchSuggestons';
import { BG_URL } from '../utilis/constatnts';

const Serach = () => {
  return (
    <div>
         <div className="absolute -z-10">
            <img 
            src= {BG_URL} alt="bgImge">
            </img>
        </div>

      <SearchPageBar/>
      <SearchSuggestons/>
    </div>
  )
}

export default Serach;