import React, { useContext } from 'react'
import { logo } from '../Utils/Constant'
import { Search } from '@mui/icons-material'
import { CContext } from '../Context/Context'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const {searchTerm,setsearchTerm} = useContext(CContext);
  const navigate = useNavigate();

  const handlesubmit = (e) =>{
            e.preventDefault();
            if(searchTerm){
              navigate(`/search/${searchTerm}`)
              setsearchTerm('')
            }
  }
 
  return (

   <div>
   <div className="w-full bg-black p-2 flex items-center justify-between">
    <div className='p-2'>
   <Link to='/'><img className='w-12' src={logo}/></Link>
   </div> 
   <div className=" pr-1 lg:pr-10 text-white flex items-center">
    <form onSubmit={handlesubmit}>
    <input onChange={(e)=>{
 setsearchTerm(e.target.value)
    }} className='outline-none p-3 w-40  h-7 md:w-60 lg:w-80 rounded-full md:h-10 lg:h-8 text-black' value={searchTerm} type='text' placeholder='Search'>
      </input>
    <button className='p-1  ml-4 bg-red-500 font-semibold  rounded-full text-white'><Search/></button></form>
   </div>
   </div>

   </div>
  )
}

export default Navbar