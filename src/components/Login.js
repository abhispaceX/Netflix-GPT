import React, { useState } from 'react'
import Header from './Header'




const Login = () => {
  const [isSignIn,setIsSignIn]=useState(true)
  const handleSignIn=()=>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
     <form className= 'bg-black bg-opacity-70 absolute z-30  flex flex-col  p-16 w-4/12 mx-auto left-0 right-0 mt-14 '>
      <h1 className=' text-3xl text-white'>{isSignIn? 'Sign In':'Sign Up'}</h1>
      {!isSignIn && <input  className='p-4 m-4 rounded-lg bg-gray-600'  type='text' placeholder='Name'></input> }
    <input  className='p-4 m-4 rounded-lg bg-gray-700'  type='text' placeholder=' Email Address'></input>
    <input  className='p-4 m-4 rounded-lg'  type='password' placeholder='password'></input>
    <button className='rounded p-2 m-4 bg-red-600' >Sign In</button>
    <p className=' text-white' onClick={handleSignIn} >{isSignIn? 'New to Netflix? signup':'Already have an account? Sign In'}</p>
    </form>
      <div >
        <Header/>
    </div>
    
    </div>
  )
}

export default Login
