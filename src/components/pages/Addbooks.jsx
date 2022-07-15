import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Addbooks() {
  const [showModal, setShowModal] = React.useState(false);


  const [bookOwner, setBookOwner] = useState('');
  const [currentlyWith, setCurrentlyWith] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [isbn, setISBN] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [status, setStatus] = useState('');
  const [title , setTitle] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        bookOwner: "",
        currentlyWith: "",
        description: "",
        genre:"",
        isbn: "",
        ownerId: "",
        status: "",
        title:  "",
             
    }

});

  var jwt = localStorage.getItem("jwt")
  const userObj1 = localStorage.getItem('user')
  const user = JSON.parse(userObj1);
  const navigate = useNavigate();

  const AddnewBooks = (e) => {
    console.log("bookOwner", bookOwner)
    console.log("currentlyWith", currentlyWith)
    console.log("description", description)
    console.log("genre", genre)
    console.log("isbn", isbn)
    console.log("ownerId", ownerId)
    console.log("status",status)
    console.log("title", title)
   
    console.log("jwt", jwt)
    
    axios({
        method: "post",
        url: "http://18.130.213.30:8080/books/",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Authorization": `Bearer ` + jwt

        },
        data: {

            // bookOwner: bookOwner,
            currentlyWith: currentlyWith,
            description: description,
            genre:  genre,
            isbn: isbn,
            ownerId: parseInt(ownerId),
            status:status,
            title: title
            
        },
        // withCredentials: true,
        mode: "cors",
    }).then((res) => {
        console.log("response", res)
        if(res.status==200){
            alert('Successfully Added')
            navigate("/")
        }
       
    })
}
console.log(errors)




  return (
    <>
      <button
        className=" bg-amber-400 hover:bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full  mx-auto items-center"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Your New Books
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-32 mx-auto  max-w-screen ">

              <div className="border-0 rounded-lg shadow-lg relative max-w-[700px] px-3  w-full bg-white outline-none focus:outline-none " 
                   >
 
                <div className="flex  flex-col justify-between p-5 mb-3 ">
                  <h3 className="text-3xl font-semibold">
                    
                  </h3>
                  <div className='flex space-x-3 mr-4 mt-10'  >
                    <div className=' w-1/2 '>
                        <label for="email" class="block mb-2 w-96 text-sm mt-2 font-medium text-gray-900 dark:text-gray-300 ">Book Owner</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Book Owner"  onChange={(e) => setBookOwner(e.target.value)}/>
                    
                    </div>

                    
                    <div className=' w-1/2 '>
                        <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300">Currently with</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Currently with" onChange={(e) => setCurrentlyWith(e.target.value)} />
                      
                    </div>
                    </div>
                    <div className='flex space-x-3 mr-4'  >
                    <div className=' w-1/2 '>
                        <label for="email" class="block mb-2 w-96 text-sm mt-2 font-medium text-gray-900 dark:text-gray-300 ">Description</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Description"  onChange={(e) => setDescription(e.target.value)}/>
                       
                    </div>

                    
                    <div className=' w-1/2 '>
                        <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300">Genre</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Genre"   onChange={(e) => setGenre(e.target.value)}/>

                  
                    </div>
                    </div>
                    <div className='flex space-x-3 mr-4'  >
                    <div className=' w-1/2 '>
                        <label for="email" class="block mb-2 w-96 text-sm mt-2 font-medium text-gray-900 dark:text-gray-300 ">ISBN</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ISBN"  onChange={(e) => setISBN(e.target.value)}/>
                   
                    </div>

                    
                    <div className=' w-1/2 '>
                        <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300">Owner Id</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Owner Id"   onChange={(e) => setOwnerId(e.target.value)}/>
                
                    </div>
                    </div>
                    <div className='flex space-x-3 mr-4'  >
                    <div className=' w-1/2 '>
                        <label for="email" class="block mb-2 w-96 text-sm mt-2 font-medium text-gray-900 dark:text-gray-300 ">Status</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Status"  onChange={(e) => setStatus(e.target.value)}/>
                
                    </div>

                    
                    <div className=' w-1/2 '>
                        <label for="email" class="block mb-2 w-96 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Title"  onChange={(e) => setTitle(e.target.value)}/>
                   
                    </div>
                    </div>

                
                    
                    
                    <div>
                        <label for="email" class="block mb-2 text-sm  mt-2 font-medium text-gray-900 dark:text-gray-300">Book Image</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Image" required/>
                    </div>
                    
                </div>
                
                {/*body*/}
                <div className="relative p-6 flex-auto">
                
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-amber-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={AddnewBooks}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}