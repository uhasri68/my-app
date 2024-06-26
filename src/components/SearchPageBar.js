import React from 'react'
import lang from "../utilis/languageConstants"
import { useSelector } from 'react-redux'

const SearchPageBar = () => {

 const langkey = useSelector(store => store.config.lang)

  // fallback to 'en' if langkey is not available in our translations
  const translations = lang[langkey] || lang['en']

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12'>
        <input type='text' className='p-4 m-4 col-span-9'
         placeholder= {translations.gptSearchPlaceholder || ''}
        ></input>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg'>
          {translations.search || ''}
        </button>
      </form>
    </div>
  )
}

export default SearchPageBar;