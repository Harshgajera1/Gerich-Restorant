import React, { useRef, useState } from 'react'
import { meal } from '../Constants'
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs'

const Intro = () => {
  const[videoPlay,setVideoPlay] = useState(false)
  const videoRef = useRef()

  return (
    <div className='video'>
      <video 
        src={meal} ref={videoRef} 
        type='video/mp4' 
        loop
        controls={true}
        muted
      />

      <div className='video-overlay flex-center'>
        <div className='video-overlay-circle flex-center'
          onClick={()=>{
            setVideoPlay(!videoPlay)
            videoPlay ? videoRef.current.pause() : videoRef.current.play()
          }}
        >
        {
          videoPlay ? <BsPauseFill color='#fff' fontSize={30}/>
          : <BsFillPlayFill color='#fff' fontSize={30}/>
        }
        </div>
      </div>
    </div>
  )
}

export default Intro