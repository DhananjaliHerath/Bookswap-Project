import React from 'react'
import LoginImg from "../assets/login1.jpg"
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


export default function ContactUs() {
    
    const [userName, setUserName] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [typeOfIssue, setTypeOfIssue] = useState('');
    const [email, setEmail] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            typeOfIssue: "",
            subject: "",
            description: "",
            email: "",
            userName: ""
        }

    });

    return (
        <div>
            <Navbar />
            <div className='bg-gray-600 h-screen w-full bg-cover bg-center relative'>
                <img src={LoginImg} className='w-full h-full object-cover absolute mix-blend-overlay ' />
                {/* <div className='p-24 text-center items-center'> */}
                <div className='flex justify-center items-center h-full top-10'>
                    <form className='max-w-[500px] w-full max-auto bg-white p-8 pb-20 h-screen' onSubmit={handleSubmit((data) => {
                        // data.preventDefault();
                        console.log(data);
                        if (errors != '') { } else (alert('please fill the fields'))
                    })}>
                        <div className='flex flex-col space-y-9 py-8'>
                            <h2 className='text-4xl font-bold text-center px-1 py-1'>Contact Us</h2><br></br><br></br>
                            <div className='flex flex-col mb-3'>

                                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 ' type="text" placeholder='Type Of Issue' {...register("typeOfIssue", { required: 'This is required' })} onChange={(e) => setTypeOfIssue(e.target.value)} />
                                <p className='text-red-400'> {errors.userName?.message}</p>
                            </div>

                            <div className='flex flex-col mb-3'>

                                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 ' type="text" placeholder='Subject' {...register("subject", { required: 'This is required'})} onChange={(e) => setSubject(e.target.value)} />
                                <p className='text-red-400'> {errors.userName?.message}</p>
                            </div>

                            <div className='flex flex-col mb-3'>
                                {/* <textarea></textarea> */}

                                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 ' type="textarea" placeholder='Desctription' {...register("description", { required: 'This is required' })} onChange={(e) => setDescription(e.target.value)} />
                                <p className='text-red-400'> {errors.userName?.message}</p>
                            </div>

                            <div className='flex flex-col mb-3'>

                                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 ' type="text" placeholder='User Name' {...register("userName", { required: 'Enter the only numbers'})} onChange={(e) => setUserName(e.target.value)} />
                                <p className='text-red-400'> {errors.contactNo?.message}</p>
                            </div>

                            <div className='flex flex-col mb-3'>

                                <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 ' type="text" placeholder='Email'{...register("email", { required: 'This is required',pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,})} onChange={(e) => setEmail(e.target.value)} />
                                <p className='text-red-400'> {errors.password?.message}</p>
                            </div>

                            <button type='submit' className='w-full py-2 mt-6 bg-amber-400 hover:bg-slate-500 relative text-black hover:text-white '>Submit</button>
                            {/* <Link to={"/"}>
                                <button className='w-full py-2 mt-4 bg-amber-400  hover:bg-slate-500   relative text-black hover:text-white '>Back to Login</button>
                            </Link> */}

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
