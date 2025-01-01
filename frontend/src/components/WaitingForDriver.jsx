import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setWaitingForDriver(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <div className='flex items-center justify-between'>
                <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
               <div className='text-right'>
                <h2 className='text-lg font-medium'>Sarthak</h2>
                <h4 className='-mt-1 text-xl font-semibold'>MP04AB1234</h4>
                <p className='text-sm text-gray-500'>Maruti Suzuki Alto</p>
               </div>
            </div>

            <div className='flex flex-col items-center justify-between gap-2'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='-mt-1 text-sm text-gray-600'> rgpv bhopal</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='-mt-1 text-sm text-gray-600'>Kankariya talab </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹321</h3>
                            <p className='-mt-1 text-sm text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default WaitingForDriver