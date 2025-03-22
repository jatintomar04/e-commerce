import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { LoginUser } from '../featuree/Auth/authSlice'
import Loading from './Loading'
import { useNavigate } from 'react-router'



const Login = () => {

  const {user, isLoading, isError , message} = useSelector((state)=> state.auth )
 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
   
    email : "",
    password :"",
    
  })


  const {password ,email} = formData;


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  };

 const  handleSubmit = (e) => {
  e.preventDefault();

 dispatch(LoginUser(formData))
 }

 useEffect(()=>{
  if(user){
    navigate("/")
  }
  
    if(isError && message){
    toast.error (message)
    }
  
    },[user]);
  
    if(isLoading){
      return (
      <>
       <Loading />
        </>
      )
    }

  return (
    <>   

     <div className='  h-[450px] flex items-center justify-center'>
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
<div className="mb-4">
<label htmlFor="email" className="block text-sm font-medium text-gray-700">
  Email
</label>
<input
  type="email"
  id="email"
  name="email"
  value={email}
  onChange={handleChange}
  className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
  placeholder="Enter your email"
  required
/>
</div>

<div className="mb-6">
<label htmlFor="password" className="block text-sm font-medium text-gray-700">
  Password
</label>
<input
  type="password"
  id="password"
  name="password"
  value={password}
  onChange={handleChange}
  className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
  placeholder="Enter your password"
  required
/>
</div>

<button
type="submit"
className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
>
Login
</button>
</form>
</div>
</>
   
   

  )
}

export default Login