import React, { useState ,useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const UserLogin = () => {
const [email,setEmail] = useState('');
const [password, setPassword] =useState();
const [userData,setUserData] = useState();

const {user,setUser} = useContext(UserDataContext);
const navigate = useNavigate();

const  submitHandler = async(e) =>{
  e.preventDefault();
  
   const userData = {
    email: email,
    password: password
   }
   
   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
  
   if(response.status === 200){
     const data = response.data;
     setUser(data.user);
     localStorage.setItem('token', data.token);
     navigate('/home');
   }
   
  setEmail ('');
  setPassword('');
}
  return (
     <div className='flex flex-col justify-between h-screen p-7'>
     <div>
     <img  className="w-12 align-center"src="https://pngimg.com/d/uber_PNG24.png" alt="" />
       <form onSubmit ={(e)=>{
        submitHandler(e)       }}>
        <h3 className='mt-4 mb-5 text-xl font-medium'>What's your email</h3>
        <input 
         value={email}
         onChange={(e)=>{
          setEmail(e.target.value);
         }}
         
        type="email" 
        className='w-full px-4 py-2 text-lg bg-[#eeeeee]  mb-7border rounded placeholder:text-base' required placeholder='123@gmail.com'/>
         <h3 className='mt-4 mb-2 text-xl font-medium'>Enter password</h3>
         <input

         value = {password} 
          onChange = {(e)=>{
            setPassword(e.target.value);
          }}
          className='w-full px-4 py-2 text-lg bg-[#eeeeee]  mb-5 border rounded placeholder:text-base mt-2'
           type="password"  required placeholder='password'/>


           
          <button className='bg-[#1e1e1e]  text-white   text-xl font-semibold py-2 
       mt-4 pt-4  mb-3 pb-4 w-full rounded '>Login</button>


       </form>
      <p className='mt-4 text-center'>New here ?  <Link  to = '/signup' className='justify-end font-semibold text-blue-600'> Create new Account</Link></p>

     </div>
     <div>
      <Link
      to ='/captain-login' className='bg-[#508111] text-white  flex items-center justify-center text-xl  font-medium py-2 
       mt-4 pt-4 pb-4 w-full rounded'>Sign in as Captain</Link>
     </div>
     </div>
  )
}

export default UserLogin