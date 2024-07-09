import React from 'react'
import { Link } from 'react-router-dom'
import {demoThumbnailUrl,demoChannelUrl, demoVideoUrl ,demoChannelTitle,demoVideoTitle} from '../Utils/Constant'
import { CheckCircle } from '@mui/icons-material'

const MainCard = ({item}) => {
console.log(item?.snippet?.channelId)

  return (
 
    <div className='bg-zinc-800 w-72 h-56 mt-4 rounded-md'>
       <Link to={item?.id?.videoId ? `/video/${item?.id?.videoId}`: demoVideoUrl}>
       <img className='w-full h-[118px] h' src={item?.snippet?.thumbnails?.medium?.url}/>
       </Link>
       <Link to={item?.id?.videoId ? `/video/${item?.id?.videoId}`: demoVideoUrl}>
       <p className='text-center'>{item?.snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}....</p>
       </Link>
       <Link to={item?.snippet?.channelId ? `/channel/${item?.snippet?.channelId}`: demoChannelUrl}>
       <p className='text-center mt-3 text-gray-600 text-sm'>- {item?.snippet?.channelTitle || demoChannelTitle}<CheckCircle sx={{fontSize:12,ml:2,textAlign:'center'}}/></p>
       </Link>
    </div>

  )
}

export default MainCard