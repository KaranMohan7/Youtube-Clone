import React, {createContext, useState } from 'react'

export const CContext = createContext();

const Context = ({children}) => {
    
 const [searchTerm,setsearchTerm] = useState('');
 const [category,setcategory] = useState('New');
 const [videos,setvideo] = useState([]);
 const [channeldetail,setchanneldetail] = useState(null)
 const [videodetail,setvideodetail] = useState(null)

  return (
<CContext.Provider value={{searchTerm,setsearchTerm,category,setcategory,videos,setvideo,channeldetail,setchanneldetail,videodetail,setvideodetail}}>
    {children}
</CContext.Provider>
  )
}

export default Context