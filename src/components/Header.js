import React from 'react'

function Header() {
  return (
    <div className='relative ' >
         <div className='absolute py-4  z-20  mx-14 w-2/12 '>
     <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='Netflix-logo'/>
    </div>
    <div  className='relative '>
    <div className='absolute inset-0 bg-black  opacity-60'></div>
      <img className=' w-full h-screen object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/1ac1cee7-5580-4cfa-b701-99d1a8f2d148/IN-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ebbef551-d229-4865-8cdc-fb00f8960227_large.jpg' alt='bg'/>
    </div>
    </div>
  )
}

export default Header
