import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='absolute top-0 w-full p-3 text-4xl text-center ' onClick={()=>{
    props.setVehiclePanel(false)
  }}><i className='text-gray-500 ri-arrow-down-wide-line'></i></h5>
  <h3 className='m-5 text-2xl font-semibold'>Choose a Vehicle</h3>
  
  {/* uber go */}
  <div onClick={()=>{props.setConfirmRidePanel(true) 
    props.setVehiclePanel(false)
  }}
  className='flex items-center justify-between w-full p-3 mb-2 border-4 active:border-black rounded-2xl'>
    <img  className = "h-12 m-4"     src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
    <div className='w-1/2 '>
      <h4 className='items-center text-base font-medium'>
        UberGo 
        <span className='px-2'><i className="ri-user-fill"></i> 4 </span>
      </h4>
      <h5 className='text-xl font-medium '>2 mins away </h5>
      <p className='font-normal text-gray-500 font-xs'> Affordable, compact rides </p>
    </div>
    <h2 className='py-5 mx-6 text-xl font-semibold'>₹193.20</h2>
  </div>

{/* moto */}
  <div onClick={()=>{props.setConfirmRidePanel(true)
    props.setVehiclePanel(false)
  }}
  className='flex items-center justify-between w-full p-3 mb-2 border-4 active:border-black rounded-2xl'>
    <img  className = "m-4 h-14"    src = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
    <div className='w-1/2 '>
      <h4 className='items-center text-base font-medium'>
       Moto
        <span className='px-2'><i className="ri-user-fill"></i> 2 </span>
      </h4>
      <h5 className='text-xl font-medium '>12 mins away </h5>
      <p className='font-normal text-gray-500 font-xs'> Affordable, compact motorcycle  rides </p>
    </div>
    <h2 className='py-5 mx-6 text-xl font-semibold'>₹153.20</h2>
  </div>


{/* premier */}

  <div onClick={()=>{props.setConfirmRidePanel(true)
    props.setVehiclePanel(false)
  }}
   className='flex items-center justify-between w-full p-3 mb-2 border-4 active:border-black rounded-2xl'>
    <img  className = "h-12 m-4"    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
    <div className='w-1/2 '>
      <h4 className='items-center text-base font-medium'>
        UberAuto 
        <span className='px-2'><i className="ri-user-fill"></i> 3 </span>
      </h4>
      <h5 className='text-xl font-medium '>40 mins away </h5>
     
    </div>
    <h2 className='py-5 mx-6 text-xl font-semibold'>₹130</h2>
  </div>




    </div>
  )
}

export default VehiclePanel