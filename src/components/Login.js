import React, { useRef, useState } from 'react'
import validation from '../utils/validation'

import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import {addUser} from '../utils/Slice'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { photoURL } from '../utils/Constants'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import {Logo} from '../utils/Constants'




const Login = () => {
  const [isSignIn,setIsSignIn]=useState(true)
  const dispatch=useDispatch()
  const [errorMessage,setErrorMessage]=useState()
  const navigate=useNavigate()
  
  const name=useRef()
  const email=useRef()
  const password=useRef()
  const handleSignIn=()=>{
    setIsSignIn(!isSignIn)
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const mesage=validation(email.current.value, password.current.value)
    setErrorMessage(mesage)
    if(mesage) return

    if(!isSignIn){
      try {
        const credential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
        console.log('User created:', credential.user);
        const user = credential.user;
        await  updateProfile(user,{
          displayName: name.current.value,
          photoURL: photoURL
        })
        console.log(auth.currentUser.photoURL)
        
               dispatch(
                addUser({
                  uid:auth.currentUser.uid,
                  email: auth.currentUser.email,
                  displayName:auth.currentUser.displayName,
                  photoURL: auth.currentUser.photoURL
                })
              );
       
      } catch (e) {
        if (e.code === 'auth/weak-password') {
          setErrorMessage('The password provided is too weak.');
        } else if (e.code === 'auth/email-already-in-use') {
          setErrorMessage('The account already exists for that email.');
        } else {
          setErrorMessage(e.message);
        }
      }
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" "+errorMessage)
      });
    }
    
  }
  return (
    <div>
       <div className='relative ' >
      <div className='absolute top-0 py-4  z-20  mx-14 w-20  '>
      <Header showHeader={false} />
      <div className=' py-1  z-20  mx-10 w-40 '>
     <img src= {Logo} alt='Netflix-logo'/>
    </div>
    </div>   
   </div>
     <form on onSubmit={handleSubmit} className= 'bg-black bg-opacity-70 absolute z-30  flex flex-col  p-16 w-4/12 mx-auto left-0 right-0 mt-40 '>
      <h1 className=' text-3xl text-white'>{isSignIn? 'Sign In':'Sign Up'}</h1>
      {!isSignIn && <input  ref={name} className='p-4 m-4 rounded-lg bg-gray-600' required type='text' placeholder='Name'></input> }
    <input ref={email} className='p-4 m-4 rounded-lg bg-gray-700' required  type='text' placeholder=' Email Address'></input>
    <input ref={password} className='p-4 m-4 rounded-lg'  type='password' placeholder='password'></input>
    <button className='rounded p-2 m-4 bg-red-600' >Sign In</button>
    <p className=' text-white' onClick={handleSignIn} >{isSignIn? 'New to Netflix? signup':'Already have an account? Sign In'}</p>
    <p className=' text-red-600'>{errorMessage}</p>
    </form>
    <div className=' relative'>
    <div className='absolute inset-0 bg-black  opacity-60'></div>
      <img className=' w-full h-screen object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/1ac1cee7-5580-4cfa-b701-99d1a8f2d148/IN-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ebbef551-d229-4865-8cdc-fb00f8960227_large.jpg' alt='bg'/>
      </div>
     
    </div>
  )
}

export default Login
