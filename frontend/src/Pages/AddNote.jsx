import React from 'react'
import Header from '../Components/Header'
 import { useEffect, useState } from 'react'
 import axios from "axios"
import { useNavigate } from 'react-router-dom'
function AddNote() {

const [title,setTitle] = useState("")
const [description, setDescription] = useState("")
const navigate = useNavigate()

const handleRegisteredNote =(e)=>{
  axios.post("http://localhost:5000/note/create", {
    "title" : title,
    "description" : description
  }).then((response)=>{
    alert("Note created Successfully")
    navigate("/")
  }).catch((error)=> console.log(error))
}
useEffect(() =>{
    document.body.style.backgroundColor = '#FFE7C1'
  })
  return (<div>
    <Header />
    <div class="shadow-xl shadow-gray  bg-pink-400 w-[350px] h-[230px] absolute left-[600px] mt-20 ">
      <div class="p-10">
        <form>
          <input value={title} onChange={(e)=>setTitle(e.target.value)}
           className="" type="text" placeholder="Enter title" />
          <br />
          <br />
    <input value={description} onChange={(event) => setDescription(event.target.value)} className="" type="text" placeholder="Enter description" />
        </form>
        <div class="flex justify-between mt-8">
          <button class="bg-pink-500 rounded-full text-white px-3">Close</button>
          <button onClick={handleRegisteredNote} class="bg-pink-500 rounded-full text-white px-3">Save</button>
        </div>
      </div>
      </div>
    </div>
  

  )

}








export default AddNote
