import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
 import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CaptainSignup = () => {

  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [firstname,setFirstname] = useState('')
  const[lastname,setLastname] = useState('')
  const [userData,setUserData] = useState()
  

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')

  

  const {captain,setCaptain} = React.useContext(CaptainDataContext) ;
  
   const submitHandler = async (e) => {
    
     e.preventDefault();
     const captainData ={
      fullname :{
        firstname:firstname,
        lastname:lastname,
        
      },
      email :email,
      password : password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
     }
     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

     if (response.status === 201) {
       const data = response.data
       setCaptain(data.captain)
       localStorage.setItem('token', data.token)
       navigate('/captain-home')
     }
 
    
    
   
     setEmail('');
     setPassword('');
     setFirstname('');
     setLastname('');
     setVehicleColor('')
     setVehiclePlate('')
     setVehicleCapacity('')
     setVehicleType('')
     
   }
  return (
    <div>
      <div className='flex flex-col justify-between h-screen p-7'>
     <div>
     <img  className="w-12 align-center"src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
       <form onSubmit ={(e)=>{
        submitHandler(e)       }}>

          
        <h3 className='mt-4 mb-5 text-xl font-medium'>What's our Captain name</h3>
        <div className='flex gap-4 mb-6'>
        <input 
         
         type="text" 
         className='w-1/2 px-4 py-2 text-lg bg-[#eeeeee]  border rounded placeholder:text-base' required 
         value = {firstname} 
         onChange={(e)=>{
           setFirstname(e.target.value);
         }}
         placeholder='firstname'/>

<input 
         
         type="text" 
         className='w-1/2 px-4 py-2 text-lg bg-[#eeeeee]   border rounded placeholder:text-base' required 
         value = {lastname} 
         onChange={(e)=>{
           setLastname(e.target.value);
         }}
         placeholder='lastname'/>
        </div>
        
        
        <h3 className='mt-4 mb-5 text-xl font-medium'>What's our Captain email</h3>
        <input 
         
        type="email" 
        className='w-full px-4 py-2 text-lg bg-[#eeeeee]  mb-7border rounded placeholder:text-base' required 
        value = {email} 
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
        placeholder='123@gmail.com'/>

        
         <h3 className='mt-4 mb-2 text-xl font-medium'>Enter password</h3>
         <input
          className='w-full px-4 py-2 text-lg bg-[#eeeeee]  mb-5 border rounded placeholder:text-base mt-2'
           type="password"  
           value = {password} 
           onChange={(e)=>{
             setPassword(e.target.value);
           }}
           required placeholder='password'/>

<h3 className='mb-2 text-lg font-medium'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>


           
          <button className='bg-[#1d6109]  text-white   text-xl font-semibold py-2 
       mt-4 pt-4  mb-3 pb-4 w-full rounded '>Create Captain Account</button>


       </form>
      <p className='mt-4 text-center'>Already have an account ? <Link  to = '/captain-login' className='justify-end font-semibold text-blue-600'> Login here</Link></p>

     </div>
     <div>
     <p className='font-sans leading-4 text-gray-500 text-s'>By proceeding, you consent to get calls , whatsapp or sms messages , including automated means , from uber and its affiliates to the number provided.</p>
     </div>
     </div>





    </div>
  )
}

export default CaptainSignup