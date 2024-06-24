import { useSelector } from 'react-redux';


const VideoBackground = () => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)

  //fetching trailer video && updating the stores
  return (
    <div>
      <iframe  className='w-screen aspect-video' src={"https://www.youtube.com/embed/L4DrolmDxmw?si=s-XEuKu0xPlJuAIx"+trailerVideo?.key +"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground    