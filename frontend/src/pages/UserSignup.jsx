import React , {useState }from 'react'
import { Link } from 'react-router-dom'


const UserSignup = () => {
 const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [firstname,setFirstname] = useState('')
const[lastname,setLastname] = useState('')
const [userData,setUserData] = useState()

 const submitHandler = (e) => {
  
   e.preventDefault();
   setUserData({
    fullname :{
      firstname:firstname,
      lastname:lastname,
      
    },
    email :email,
    password : password,
   })
  //  console.log(userData);
   setEmail('');
   setPassword('');
   setFirstname('');
   setLastname('');
   
 }
 
  
  return (
    <div>
  

  <div className='flex flex-col justify-between h-screen p-7'>
     <div>
     <img  className="w-12 align-center"src="https://pngimg.com/d/uber_PNG24.png" alt="" />
       <form onSubmit ={(e)=>{
        submitHandler(e)       }}>

          
        <h3 className='mt-4 mb-5 text-xl font-medium'>What's your name</h3>
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
        
        
        <h3 className='mt-4 mb-5 text-xl font-medium'>What's your email</h3>
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


           
          <button className='bg-[#1e1e1e]  text-white   text-xl font-semibold py-2 
       mt-4 pt-4  mb-3 pb-4 w-full rounded '>Signup</button>


       </form>
      <p className='mt-4 text-center'>Already have an account ? <Link  to = '/login' className='justify-end font-semibold text-blue-600'> Login here</Link></p>

     </div>
     <div>
     <p className='font-sans leading-4 text-gray-500 text-s'>By proceeding, you consent to get calls , whatsapp or sms messages , including automated means , from uber and its affiliates to the number provided.</p>
     </div>
     </div>

    </div>
  )
}

export default UserSignup