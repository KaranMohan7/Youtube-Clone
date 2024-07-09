import React, { useContext } from 'react'
import { CContext } from '../Context/Context'
import MainCard from './MainCard'
import ChannelCard from './ChannelCard'
import Loading from './Loading'

const VideoCard = () => {

    const {videos} = useContext(CContext)
    if(!videos.length) return <Loading/>
   
  return (
    <div className='flex justify-center gap-1 flex-wrap items-center '>
{
         videos.map((item,index)=>(
            <div className='flex ' key={index}>
              {item.id.videoId && <MainCard item={item}/>}
            { item.id.channelId && <ChannelCard channeldetail={item}/> }
           </div>
         ))
}
        </div>
  )
}

export default VideoCard