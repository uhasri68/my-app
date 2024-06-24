import React from 'react';
const VideoTitle = ({ title, overview }) => { // Add curly braces to destructure the props
  return (
    <div className=' w-screen aspect-video px-24 pt-[16%]  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-10 text-lg w-2/4'>{overview}</p>
        <div>
            <button className='bg-white text-black px-8 p-4 text-xl rounded-lg m-2 hover:bg-opacity-80'>Play▶️ 
            </button>
            <button className='bg-gray-600 bg-opacity-50  text-xl px-8 p-4 rounded-lg hover:bg-opacity-80'>MoreInfo

            </button>
        </div>
    </div>
  )
}

export default VideoTitle;