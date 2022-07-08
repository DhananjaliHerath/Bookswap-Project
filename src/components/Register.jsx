import React from 'react'
import LoginImg from "../assets/login1.jpg"
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Register() {

  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
          firstName: "",
          lastName:"",
          userName: "",
          address:"",
          password: "",
          contactNo:""
      }

  });
  var jwt = localStorage.getItem("jwt")
    const userObj1 = localStorage.getItem('user1')
    const user1 = JSON.parse(userObj1);
    const navigate = useNavigate();
    // const back = (e) => {
    //     if (user1.userType == 'admin') {
    //         console.log("type: Admin")
    //         navigate("/home");
    //         // navigator('/home')
    //     } else if (user1.userType == 'employee') {
    //         console.log("type: employee")
    //         navigate("/bankemployee");
    //     } else if (user1.userType == 'customer') {
    //         console.log("type: customer")
    //         navigate("/customer");
    //     }
    // }
    const CreateUser = (e) => {
        console.log("firstName", firstName)
        console.log("lastName", lastName)
        console.log("userName", address)
        console.log("address", address)
        console.log("password", password)
        console.log("contactNo", contactNo)
        console.log("jwt", jwt)
        
        axios({
            method: "post",
            url: "http://18.130.213.30:8080/users/",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"

            },
            data: {
                firstName: firstName,
                lastName: lastName,
                address: address,
                userName: userName,
                password: password,
                contactNo: contactNo
            },
            // withCredentials: true,
            mode: "cors",
        }).then((res) => {
            console.log("response", res)
            if(res.status==200){
                alert('Successfully Added')
            }
        })
    }
    console.log(errors)
  

  

  
  return (
    <div className='relative w-full h-screen bg-gray-600'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay ' src={LoginImg} alt="" />
      
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[450px] w-full max-auto bg-white p-8' onSubmit={handleSubmit((data) => {
                    // data.preventDefault();
                    console.log(data);
                    if(errors != ''){CreateUser()}else(alert('please fill the fields'))
                })}>
            <h2 className='text-4xl font-bold text-center px-6 py-6'>Create an Account</h2>

            <div className='flex justify-between text-gray-600 py-2'>
           <p className='flex items-center relative'><input className='mr-2' type="checkbox" />MR</p>
           <p className='flex items-center relative'><input className='mr-2' type="checkbox" />MRS</p>
           
           </div>

            <div className='flex flex-col mb-4'>
              
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 ' type="text"placeholder='First Name'{...register("firstName", { required: "This is required" })}  onChange={(e) => setFName(e.target.value)} />
                <p className='text-red-400'> {errors.firstName?.message}</p>
            </div>

            <div className='flex flex-col mb-4'>
               
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text"placeholder='Last Name'{...register("lastName", { required: 'This is required' })}  onChange={(e) => setLName(e.target.value)} />
                <p className='text-red-400'> {errors.lastName?.message}</p>
            </div> 

             <div className='flex flex-col mb-4'>
              
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="Email" placeholder='Email' {...register("userName", { required: 'This is required', pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/  })}  onChange={(e) => setUserName(e.target.value)}/>
                <p className='text-red-400'> {errors.userName?.message}</p>
            </div>

            <div className='flex flex-col mb-4'>
                
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text" placeholder='Address' {...register("address", { required: 'This is required' })}  onChange={(e) => setAddress(e.target.value)}/>
                <p className='text-red-400'> {errors.address?.message}</p>
            </div>

            <div className='flex flex-col mb-4'>
                
               
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="Password" placeholder='Password'{...register(" password", { required: 'This is required', minLength: { value: 4, message: "Min length is 4" } })}  onChange={(e) => setPassword(e.target.value)} />
                
                <p className='text-red-400'> {errors.password?.message}</p>
            </div>

            <div className='flex flex-col mb-4'>
                
                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text" placeholder='Contact No' {...register("contact no", { required: 'This is required' })}  onChange={(e) => setContactNo(e.target.value)}/>
                <p className='text-red-400'> {errors.contactNo?.message}</p>
            </div>
           


            <div className='flex justify-between text-gray-600 '>
           <p className='flex items-center relative text-sm '><input className='mr-2' type="checkbox" />I agree to the terms and conditions and the privacy policy
            </p>

           

          </div>


            <button  type='submit' className='w-full py-3 mt-8 bg-amber-400 hover:bg-slate-500 relative text-black hover:text-white '>Sign In</button>
            <Link to={"/"}>
            <button className='w-full py-3 mt-8 bg-amber-400 hover:bg-slate-500 relative text-black hover:text-white '>Back to Login</button>
            </Link>
           
            
        </form>
      </div>
      
    </div>
  )
}
