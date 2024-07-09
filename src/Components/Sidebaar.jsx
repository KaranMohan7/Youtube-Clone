import React, { useContext } from 'react'
import { categories } from '../Utils/Constant'
import { CContext } from '../Context/Context'

const Sidebaar = () => {
  
const {category,setcategory} = useContext(CContext);
  return (
    <>
    <div className='flex sm:flex-row lg:flex-col md:flex-col xl:flex-col gap-4  overflow-y-auto'>
      {
        
        categories.map((item,index) => (
       
          <button onClick={()=>setcategory(item.name)} key={index} className={`${category===item.name && 'bg-red-600 text-white'} rounded-full flex items-center gap-4 hover:bg-red-600  p-3 text-white transition-all ease-in-out duration-500 font-semibold`}>
            <span className={`${category===item.name ? 'text-white' : 'text-red-600'}`}>{item.icon}</span>
            <span>{item.name}</span>
            </button>
        ))
        
      } 
    </div>
    </>
  )
}

export default Sidebaar