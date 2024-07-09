import React, { useContext,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { CheckCircle} from '@mui/icons-material'
import VideoCard from './VideoCard'
import { Fetchdata } from '../Utils/Index';
import { CContext } from '../Context/Context'
import Loading from './Loading'

const VideoDetail = () => {

  const {id} = useParams()
const {videodetail,setvideodetail,setvideo} = useContext(CContext)


  useEffect(() => {
    const videopage = async() =>{
      const data = await Fetchdata(`videos?part=snippet,statistics&id=${id}`)
      setvideodetail(data.items[0])

      const videodatamain = await Fetchdata(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        setvideo(videodatamain.items)
    }
    videopage()
  }, [id])
  
   
  if(!videodetail?.snippet) return <Loading/>

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videodetail;

  return (

    <div className='min-h-screen'>
    <div className=' flex justify-center relative w-full mt-5'>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls 
      /> 
    </div>
    <p className='p-3 text-sm font-semibold text-white text-center lg:text-xl xl:text-2xl'>{title} </p>
    <div className=" text-gray-600 flex justify-evenly">
    
   <Link to={`/channel/${channelId}`}>
   <p className='text-sm w-[140px] md:text-l lg-text-l xl:text-l'>{channelTitle} <CheckCircle sx={{fontSize: 12}}/></p>
   </Link>
   <div className='flex items-center gap-4 '>
   <p className='text-sm md:text-l lg:text-l xl:text-l w-[100px] '>{parseInt(viewCount).toLocaleString()} Views</p>
   <p className='text-sm md:text-l lg:text-l xl:text-l w-[75px] '>{parseInt(likeCount).toLocaleString()} Likes</p>
   </div>
    </div>
    <div className='pt-5'>
    <VideoCard />
    </div>
    </div>
 
  )
}

export default VideoDetail