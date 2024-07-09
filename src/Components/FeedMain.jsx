import React,{useContext,useEffect} from 'react'
import Sidebaar from './Sidebaar'
import { CContext } from '../Context/Context';
import VideoCard from './VideoCard';
import { Fetchdata} from '../Utils/Index';

const FeedMain = () => {

  const {category,setvideo} = useContext(CContext);

  useEffect(() => {
   const fetchvideo = async() => {
 const data = await Fetchdata(`search?part=snippet&q=${category}&maxResults=50`)
        setvideo(data.items);
   }
  fetchvideo();
  }, [category])
  

  return (
    <div className=' md:flex '>
        <div className='w-full p-6 md:w-52 lg:w-52 sticky md:border-r-2 lg:border-r-2 flex justify-center '>
            <Sidebaar/>
        </div>
    <div className="p-5 text-white ">
       <span className='text-xl  font-semibold md:text-2xl lg:text-4xl'>{category} <span className='text-red-500'>Videos</span></span>
      <VideoCard/>
    </div>
    </div>
  )
}

export default FeedMain