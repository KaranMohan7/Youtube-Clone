import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ChannelCard from './ChannelCard'
import { Fetchdata } from '../Utils/Index'
import { CContext } from '../Context/Context'

import VideoCard from './VideoCard'


const ChannelDetail = () => {
  

  const {channeldetail,setchanneldetail,setvideo} = useContext(CContext)
  const {id} = useParams();
  

  useEffect(() => {
    const fetchpage = async() => {
      const data = await Fetchdata(`channels?part=snippet&id=${id}&maxResults=50`);
      setchanneldetail(data?.items[0])
      
      const videodata = await Fetchdata(`search?channelId=${id}&part=snippet&order=date&maxResults=50`)
      setvideo(videodata?.items)
   
    }
   fetchpage()
  }, [id])
  
  return (
    <div className='min-h-screen '>
   <div className='w-full h-60 z-10 bg-gradient-to-r from-blue-400 to-slate-50' />
   <ChannelCard channeldetail={channeldetail}/>
   <div>
    <VideoCard />
   </div>
   
    </div>
  )
}

export default ChannelDetail