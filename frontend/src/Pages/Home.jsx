import React from 'react'
import Header from '../Components/Header'
import Note from '../Pages/Note'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const [notes, setNotes] =  useState([])

  const getAllNotes =() => {
      axios.get("http://localhost:5000/get").then((response)=>{
        setNotes(response.data)
      }).catch((error) => console.log(error))
  }

  useEffect(() =>{
      getAllNotes()
    document.body.style.backgroundColor = ''
  },[])



    {/* delete api */}
   
    const deleteNote = (id) => {
    axios.delete(`http://localhost:5000/note/delete/${id}`).then(()=>{
      alert(id+ " Note has been deleted successfully")
      getAllNotes()
    }).catch((error) => console.log(error))
    }
  
    // {update api}

    
  return (
    <div>
      <Header/>
    <div className='h-screen grid grid-cols-[300px_300px_300px_300px] justify-evenly '>
  {
    notes.map((items) =>{
      return <Note  handleDelete={()=> deleteNote(items._id)}
       id={items._id}  
       title={items.title} 
       description={items.description}/>
    })
  }
  


    </div>
    </div>
  )
}

export default Home
