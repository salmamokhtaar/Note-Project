import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='bg-pink-500 mb-10  p-4  px-5 flex justify-between '>
    <Link to={'/'}> <h1 className='text-5xl text-white text-bold'>Notey</h1> </Link>
<Link to={"/addnote"} className=' bg-white py-3 rounded px-4'>Add Note</Link>
    </div>
  )
}

export default Header
