import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
  <div>
  <div className='bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1690958385391-76844034f557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZmZpY3xlbnwwfHwwfHx8MA%3D%3D) ] flex flex-col justify-between w-full h-screen pt-5 bg-red-400  bg- pl -5'>
   <img  classname = 'ml-8 w-14 ' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
  <div className='px-4 py-4 pb-5 bg-white'>
    <h2  className='text-3xl font-bold'>Get Started with Uber</h2>
    <Link  to = '/login' className='flex justify-center py-2 mt-5 text-center text-white bg-black rounded inlinw-full'>Continue</Link>

  </div>

  </div>


  </div>
  )
}

export default Start