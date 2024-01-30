import React from 'react'
import AddNote from './Pages/AddNote'
import Home from './Pages/Home'
import {Route , Routes} from 'react-router-dom'
import UpdateNote from './Pages/UpdateNote'
function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addnote' element={<AddNote/>} />
    <Route path='/updatenote/:id' element={<UpdateNote/>} />
    </Routes>
  )
}

export default App
