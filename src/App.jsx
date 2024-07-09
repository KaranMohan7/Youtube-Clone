import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ChannelDetail from './Components/ChannelDetail'
import SearchFeed from './Components/SearchFeed'
import FeedMain from './Components/FeedMain'
import Ani from './Components/Ani'
import Videodetail from './Components/Videodetail'


const App = () => {
  return (
    <>
    
    <div className=' bg-black'>
    <Ani/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<FeedMain/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/video/:id' element={<Videodetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App