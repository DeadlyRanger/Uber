import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
// import { use } from 'react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [ confirmRidePanel, setConfirmRidePanel ] = useState(false)
  const [ vehicleFound, setVehicleFound ] = useState(false)
  const panelRef = useRef(null)
  const vehicleFoundRef = useRef(null)

  const waitingForDriverRef = useRef(null)
  const panelCloseRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const [vehiclePanel,setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)
  const [ ride, setRide ] = useState(null)

  const [ waitingForDriver, setWaitingForDriver ] = useState(false)



  const submitHandler = (e) => {
    e.preventDefault();

  }

  useGSAP(function () {
    if (panelOpen) {
        gsap.to(panelRef.current, {
            height: '70%',
            padding: 24
            // opacity:1
        })
        gsap.to(panelCloseRef.current, {
            opacity: 1
        })
    } else {
        gsap.to(panelRef.current, {
            height: '0%',
            padding: 0
            // opacity:0
        })
        gsap.to(panelCloseRef.current, {
            opacity: 0
        })
    }
}, [ panelOpen ])


useGSAP(function () {
    if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(vehiclePanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ vehiclePanel ])



useGSAP(function () {
  if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(confirmRidePanelRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ confirmRidePanel ])



useGSAP(function () {
  if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(vehicleFoundRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ vehicleFound ])


useGSAP(function () {
  if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ waitingForDriver ])

  
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <img className='absolute w-16 left-5 top-5 ' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
      <div  
      className='w-screen h-screen'>
        {/* images for temporary */}
        <img className='object-cover w-full h-full' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

      </div>
      <div className='absolute bottom-0 flex flex-col justify-end w-full h-screen '>
        <div className='h-[30%] relative p-5 bg-white'>
          <h5 ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false)
            }}
            className='absolute px-4 text-3xl cursor-pointer opacity:0 right-3 top-6'>
            <i className="ri-arrow-down-wide-line "></i>
          </h5>

          <h4 className='mt-3 text-2xl font-semibold '>Find Your Trip</h4>
          <form className='flex justify-start gap-10 mt-8' onSubmit={(e) => { submitHandler(e) }}>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup} onChange={(e) => {
                setPickup(e.target.value)
              }}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg " type="text" placeholder='Add a pickup location' />

            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination} onChange={(e) => {
                setDestination(e.target.value)
              }}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg  " type="text" placeholder='Add a drop location' />
          </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white '>
          <LocationSearchPanel panelOpen={panelOpen} setPanelOpen={setPanelOpen}
            vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel}  />

        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed bottom-0 z-10 w-full p-4 py-8 translate-y-full bg-white border border-gray-200 rounded-t-3xl'>
     
         <VehiclePanel 
         setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
         />
        
      </div>

      <div ref={confirmRidePanelRef} className='fixed bottom-0 z-10 w-full p-4 py-8 translate-y-full bg-white border border-gray-200 rounded-t-3xl'>
     
         <ConfirmRide 
         setConfirmRidePanel={setConfirmRidePanel} 
        setVehicleFound={setVehicleFound}
         />
   
    
  </div>


  <div ref={vehicleFoundRef} className='fixed bottom-0 z-10 w-full p-4 py-8 translate-y-full bg-white border border-gray-200 rounded-t-3xl'>
     
     <LookingForDriver  setVehicleFound={setVehicleFound} />

</div>


<div ref={waitingForDriverRef} className='fixed bottom-0 z-10 w-full p-4 py-8 bg-white border border-gray-200 rounded-t-3xl'>
     
     <WaitingForDriver  waitingForDriver={waitingForDriver} />

</div>

    </div>
  )
}

export default Home