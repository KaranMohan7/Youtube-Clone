import React,{useContext,useEffect} from 'react'
import { CContext } from '../Context/Context';
import VideoCard from './VideoCard';
import { Fetchdata } from '../Utils/Index';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const {searchTerm} = useParams()

  const {setvideo} = useContext(CContext);

  useEffect(() => {
   const fetchvideo = async() => {
 const data = await Fetchdata(`search?part=snippet&q=${searchTerm}&maxResults=50`)
        setvideo(data.items);
   }
  fetchvideo();
  }, [searchTerm])
  

  return (
    <div>
    <div className="p-5 text-white ">
       <span className='text-xl  font-semibold md:text-2xl lg:text-4xl'>Search Results For <span className='text-red-500'> {searchTerm} </span>videos</span>
      <VideoCard/>
    </div>
    </div>
  )
}

export default SearchFeed