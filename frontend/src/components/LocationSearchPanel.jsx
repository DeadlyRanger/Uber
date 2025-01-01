import React from 'react'

const LocationSearchPanel = (props) => { 
 

  const locations = [
    "24B , Near Kapoor Cafe ,Bhopal",
    "13 , UIT RGPV ,APJ HOSTEL Main GatE ,Bhopal",
    "24B , Near RGPV Main Gate ,Bhopal",
  ]
  return (
    <div>

      {/* this is just a sample data */}
      
      {
        locations.map(function(elem,idx){
 
        return <div key={idx} onClick={()=> {props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }
        }
        className='flex items-center justify-start gap-5 p-2 mb-2 border-4 border-white rounded-xl active:border-black'>
          <h2 className='bg-[#eee] h-10  w-10 flex justify-center items-center rounded-full '><i className="text-2xl ri-map-pin-fill"></i></h2>
          <h4 className='font-medium '>{elem}</h4>
        </div>
       
        })
      }

     
      


    </div>
  )
}

export default LocationSearchPanel