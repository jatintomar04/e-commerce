import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { registerUser } from '../featuree/Auth/authSlice'
import Loading from './Loading'
import { useNavigate } from 'react-router'

const Register = () => {

  const {user, isLoading, isError, message} = useSelector((state)=> state.auth)


  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const [formData, setFormData] = useState({
    name : "",
    email : "",
    password :"",
    password2 :"",
  })


  const {name , email , password ,password2} = formData;


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  };

 const  handleSubmit = (e) => {
  e.preventDefault();

  if (password !== password2) {
    toast.error("Password do not match")
    
  } else {
    dispatch(registerUser(formData))
  }
 }
 useEffect(()=>{
  if(user){
    navigate("/")
  }

  if(isError && message){
  toast.error (message)
  }
  
    },[user , isError , message]);
    
    if(isLoading){
      return (
      <>
        <Loading />
        </>
      )
    }




  return (
   <>
 
    <div className=' flex  items-center justify-center p-5'>
    

    <form onSubmit={ handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
          placeholder="Enter your full name"
          required
        />
      </div>
    
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
    
      <div className="mb-4">
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
    
      <div className="mb-6">
        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          name="password2"
          value={password2}
          onChange={handleChange}
          className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
          placeholder="Confirm your password"
          required
        />
      </div>
    
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Register
      </button>
    </form>
    
        </div></>
  )
}

export default Register