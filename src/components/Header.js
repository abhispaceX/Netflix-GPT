import React, { useEffect } from 'react'
import { onAuthStateChanged,signOut } from "firebase/auth";

import { auth } from '../utils/firebase';
import {Logo} from '../utils/Constants'
import {useDispatch,useSelector} from 'react-redux'
import { addUser, removeUser } from "../utils/Slice";
import { useNavigate } from 'react-router-dom';

function Header({showHeader}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user =useSelector(state=>state.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({
            uid:uid, email:email, displayName:displayName, photoURL:photoURL
          }))
          navigate("/browse")
           
        } else {
          dispatch(removeUser())
          navigate("/")
          
          // ...
        }
      })
        // Unsiubscribe when component unmounts
      return ()=> unSubscribe()
      
},[])
if (!showHeader) return null;

  return ( 
    <div className='absolute w-screen px-8 py-20 z-10 flex flex-col md:flex-row justify-between' >
      <div className=' py-1  z-20  mx-10 w-32 '>
     <img src= {Logo} alt='Netflix-logo'/>
    </div>
    {user && <div className='  m-3 p-2' >
       <img className=' w-10  rounded-lg' src={user.photoURL} alt='profile'/>
        <button onClick={handleSignOut}  >Logo Out </button> 
        </div>
    }
   </div>
      
    
  )
}

export default Header
