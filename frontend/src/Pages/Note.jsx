import React from 'react'
import {Link } from 'react-router-dom'

function Note(props) {
  return (
    <div className='w-[300px] text-white pt-5 px-9 h-[200px] bg-pink-500  rounded border-2 border-gray-300'>
      <h1 className='font-semibold b-4'>{props.title}</h1>
      <p>{props.description}</p>

    <Link to={`/updatenote/${props.id}`}>

      <i class="fa-solid  text-2xl hover:cursor-pointer   mt-2 text-black ml-[220px]   fa-pen"></i>
      </Link>
      <i onClick={props.handleDelete} class="fa-solid mt-3  text-2xl hover:cursor-pointer text-black ml-[220px]   fa-trash"></i>
    </div>
  )
} 

export default Note
