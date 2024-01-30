import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import { useParams } from 'react-router-dom'
function UpdateNote() {
    
    
const [title,setTitle] = useState(" ")
const [description, setDescription] = useState(" ")
const navigate = useNavigate()
const params = useParams()
 

// get single api 
const SinglegetData =() =>{
      axios.get(`http://localhost:5000/findid/${params.id}`).then((response)=>{
       
      setTitle(response.data[0].title)
        setDescription(response.data[0].description)
    }).catch((error) => console.log(error))
}

// update

const handleUpdateNote = (event) => {
    event.preventDefault()
    axios.put(`http://localhost:5000/note/update/${params.id}`, {
        "title" : title,
        "description" : description
    }).then(()=>{
        alert("Note has been updated successfully")
        navigate("/")
    }).catch((error) => console.log(error))

}




useEffect(() =>{
    document.body.style.backgroundColor = '#FFE7C1'
    SinglegetData()
  },[]);

  return (
    <div>
         <h1 className='text-3xl mt-20 text-black font-bold text-center'>Update your Note</h1>

  <div class="shadow-xl shadow-gray bg-pink-400 w-[350px] h-[230px] absolute left-[600px] top-[130px]">
   
      <div class="p-10">
        <form>
          <input value={title} onChange={(e) =>setTitle(e.target.value)}
           className="" type="text" placeholder="Enter title" />
          <br />
          <br />
    <input value={description} onChange={(e) =>setDescription(e.target.value)}
     className="" type="text" placeholder="Enter description" />
        </form>
        <div class="flex justify-between mt-8">
    <button onClick={handleUpdateNote}  class="border-2 bg-white border-black rounded text-black px-3">Update</button>    
          </div>
          </div>
          </div>
          </div>
  )
}

export default UpdateNote
