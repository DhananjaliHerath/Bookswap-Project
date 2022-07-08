import React from 'react'
import { Link } from "react-router-dom";
import LoginImg from "../assets/login1.jpg"
export default function Newregister() {
  return (
     
    <div className='bg-gray-600 h-screen w-full bg-cover bg-center relative'>
    <img src={LoginImg} className='w-full h-full object-cover absolute mix-blend-overlay ' />
    {/* <div className='p-24 text-center items-center'> */}
    <div className='flex justify-center items-center h-full'>

    <form className='max-w-[500px] w-full max-auto bg-white p-8 pb-20'>
        <h2 className='text-4xl font-bold text-center px-6 py-6'>Create an Account</h2>

        <div className='flex justify-between text-gray-600 py-2'>
       <p className='flex items-center relative'><input className='mr-2' type="checkbox" />MR</p>
       <p className='flex items-center relative'><input className='mr-1' type="checkbox" />MRS</p>
       
       </div>

       <div className='flex space-x-8'>
       <div className=' w-1/2 '>
          
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 px-2 placeholder-gray-500 placeholder-opacity-100 ' type="text"placeholder='First Name'/>
          <p className='text-red-400'></p>
      </div>

      <div className=' w-1/2   mb-4'>
         
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text"placeholder='Last Name' />
          <p className='text-red-400'></p>
      </div> 


       </div>

       

         <div className='flex flex-col mb-4'>
          
            <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="Email" placeholder='Email' />
            <p className='text-red-400'></p>
        </div>

        <div className='flex flex-col mb-4'>
            
            <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text" placeholder='Contact No'/>
            <p className='text-red-400'> </p>
        </div>

        <div className='flex flex-col mb-4'>
           
            <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="Password" placeholder='Password' />
            <p className='text-red-400'></p>
        </div>

        <div className='flex space-x-8'>
       <div className=' w-1/2 '>
          
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 px-2 placeholder-gray-500 placeholder-opacity-100 ' type="text"placeholder='AddressLine1'/>
          <p className='text-red-400'></p>
      </div>

      <div className=' w-1/2   mb-4'>
         
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text"placeholder='AddressLine2' />
          <p className='text-red-400'></p>
      </div> 
      </div>
      <div className='flex space-x-8'>
       <div className=' w-1/2 '>
          
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 px-2 placeholder-gray-500 placeholder-opacity-100 ' type="text"placeholder='City'/>
          <p className='text-red-400'></p>
      </div>

      <div className=' w-1/2   mb-4'>
         
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text"placeholder='Province' />
          <p className='text-red-400'></p>
      </div> 
      </div>

       


        <div className='flex justify-between text-gray-600 '>
       <p className='flex items-center relative text-sm '><input className='mr-2' type="checkbox" />I agree to the terms and conditions and the privacy policy
        </p>

       

      </div>


        <button  type='submit' className='w-full py-3 mt-8 bg-amber-400 hover:bg-slate-500 relative text-black hover:text-white '>Sign up</button>
        <Link to={"/"}>
        <button className='w-full py-3 mt-8 bg-amber-400  hover:bg-slate-500   relative text-black hover:text-white '>Back to Login</button>
        </Link>
       
        
    </form>
    </div>
</div>
  )
}
