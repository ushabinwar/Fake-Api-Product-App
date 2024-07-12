import React from 'react'

import Home from './components/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'


const App = () => {
   const {search, pathname} = useLocation()
  //  console.log(pathname, search)
  return (
    <div className="h-screen w-full flex">
     {(pathname != "/" || search.length > 0) && <Link to="/" className='absolute text-red-500 top-[3%] left-[19.5%] text-lg font-base border px-4 py-1.5 border-red-500 rounded-md'>Home</Link>
      }
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
     </Routes>
     
      
    </div>
  )
}

export default App
