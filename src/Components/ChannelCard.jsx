import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../Utils/Constant'

const ChannelCard = ({channeldetail}) => {
  
  return (
    <div className=' w-72 h-56 flex flex-col items-center justify-center text-white m-auto'>
    <Link  to={`/channel/${channeldetail?.id?.channelId}`}>
    <img className=' w-36 md:w-40 lg:w-48 rounded-full' src={channeldetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }/>
    </Link>
     <p className='font-semibold text-center mt-2'>{channeldetail?.snippet?.title}</p>
     {
      channeldetail?.statistics?.subscriberCount && (
        <p>{parseInt(channeldetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers</p>
      )
     }
   
    </div>
  )
}

export default ChannelCard