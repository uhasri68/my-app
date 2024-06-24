import React from 'react';
const VideoTitle = ({ title, overview }) => { // Add curly braces to destructure the props
  return (
    <div className='px-30 pt-36 mx-16'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-gray-600 background-opacity-50 text-white px-8 p-4 text-xl rounded-lg m-2'>Play⏯️ 
            </button>
            <button className='bg-red-500 text-white text-xl px-8 p-4 rounded-lg'>MoreInfo

            </button>
        </div>
    </div>
  )
}

export default VideoTitle;