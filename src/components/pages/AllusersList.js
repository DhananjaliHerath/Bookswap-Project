import axios from "axios";
import { Link } from "react-router-dom";
import Allusers from "./Allusers";

import { useState, useEffect} from "react";

const AllusersList = () => {
    var jwt = localStorage.getItem("jwt")
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
   

    // console.log(jwt)
    // var tansactions = '';

    // fetch(url, {
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //             "Authorization": `Bearer ` +user1.jwt
    //         })
    //         .then(res => {
    //             console.log(res)

    //         });
    const handleClick=(userId)=>{
        setShowModal(true)
        DeleteUser(userId)
    }
    const DeleteUser = (userId) => {
        // const UserID = props.userID
        console.log(userId)
        axios({
            method: "delete",
            url: "http://18.130.213.30:8080/users/" + userId,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Authorization": `Bearer ` + jwt
            }, data: null,
            // data: {
            //     uFName: uFName,
            //     uLName: uLName,
            //     address: address,
            //     userEmail: userEmail,
            //     password: password,
            //     userType: userType
            // },
            // withCredentials: true,
            mode: "cors",
        }).then((res) => {
            console.log("response", res)
            // var users = res.data;
            // localStorage.setItem("UserList", JSON.stringify(users))
        })
    }


    const handleClickView=(userId)=>{
        setShowModal1(true)
        ViewUser(userId)
    }
    const ViewUser = (userId) => {
        // const UserID = props.userID
        console.log(userId)
        axios({
            method: "get",
            url: "http://18.130.213.30:8080/users/" + userId,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Authorization": `Bearer ` + jwt
            }, data: null,
            // data: {
            //     uFName: uFName,
            //     uLName: uLName,
            //     address: address,
            //     userEmail: userEmail,
            //     password: password,
            //     userType: userType
            // },
            // withCredentials: true,
            mode: "cors",
        }).then((res) => {
            console.log("response", res)
            var users = res.data.body;
            localStorage.setItem("Singleuser", JSON.stringify(users))
        })
    }



    axios({
        method: "get",
        url: "http://18.130.213.30:8080/users/",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,PATCH,OPTIONS",
            "Authorization": `Bearer ` + jwt
        }, data: null,
        // data: {
        //     uFName: uFName,
        //     uLName: uLName,
        //     address: address,
        //     userEmail: userEmail,
        //     password: password,
        //     userType: userType
        // },
        // withCredentials: true,
        mode: "cors",
    }).then((res) => {
        console.log("response", res.data.body)
        var users = res.data.body;
        localStorage.setItem("AllusersList", JSON.stringify(users))
        
    }).catch((err=>{console.log ("error ; "+err.name)}))
    // }
    const usersObj = localStorage.getItem('AllusersList')
    const AllusersList = JSON.parse(usersObj);
    console.log(AllusersList)

    const SingleusersObj = localStorage.getItem('Singleuser')
    const SingleuserList = JSON.parse(SingleusersObj);
    console.log(SingleuserList)


  

    return (
        <>
        <tbody maxWidth="150px">
            {AllusersList.map((blog) => (
                <tr class="bg-white border-b transition duration-300 ease-in-out ">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.userId}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {blog.userName}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {blog.firstName}  {blog.lastName}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {blog.addressLine1}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {blog.addressLine2}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {blog.city}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {blog.province}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {blog.contactNo}
                    </td>
                   


                    {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button to={() => Userview()} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>

                    </td > */}
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    {/* <button type="button"  onClick={()=>DeleteUser()}> */}
                    <button type="button" onClick={() => setShowModal(true)} onClickCapture={()=>handleClick(blog.userId)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <button type="button" onClick={() => setShowModal1(true)} onClickCapture={()=>handleClickView(blog.userId)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    
                    </td>
                    
                </tr>
            ))}

        </tbody>
        {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-red-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                            Delete account ?
                                        </h4>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </p>
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
           
      {showModal1 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                     User Deatails
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal1(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-10 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div>
      

      {/* <div  class=" h-40 w-40 mb-4  mr-4 mt-10 item-center justify-center mx-96 relative " >
                        <center>
                       <img src="https://www.participate.nyc.gov/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg" alt="man avatar" class="h-full w-full rounded-full overflow-hidden shadow justify-center items-center mx-72" />
                       </center> </div> 
    */}

                <br/><br/><br/>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src= "https://www.participate.nyc.gov/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg"  class="h-full w-full rounded-full overflow-hidden shadow justify-center items-center mx-72" 
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                          style={{ maxWidth: "150px" }}
                        />
                       
    
                        <br /><br />
                      </div>
                    </div>
                    </div>
       <div class="text-gray-700 items-center justify-center mx-36">
                       <div class="grid md:grid-cols-2 text-sm items-center justify-center mt-20">
                           <div class="grid grid-cols-2 " >
                               <div class="px-4 py-2 font-semibold">First Name</div>
                               <div class="px-4 py-2">{SingleuserList.firstName}</div>
                           </div>
                           <div class="grid grid-cols-2">
                               <div class="px-4 py-2 font-semibold">Last Name</div>
                               <div class="px-4 py-2">{SingleuserList.lastName}</div>
                           </div>
                           <div class="grid grid-cols-2">
                               <div class="px-4 py-2 font-semibold">Title</div>
                               <div class="px-4 py-2">Mr</div>
                           </div>
                           <div class="grid grid-cols-2">
                               <div class="px-4 py-2 font-semibold">Contact No.</div>
                               <div class="px-4 py-2">{SingleuserList.contactNo}</div>
                           </div>
                           {/* <div class="grid grid-cols-2">
                               <div class="px-4 py-2 font-semibold">Current Address</div>
                               <div class="px-4 py-2">{SingleuserList.addressLine1} {SingleuserList.addressLine2} </div>
                               </div> */}
                           <div class="grid grid-cols-2">
                               <div class="px-4 py-2 font-semibold">Password</div>
                               <div class="px-4 py-2">{SingleuserList.password}</div>
                           </div>
                           <div class="grid grid-cols-2">
                               <div class="px-4 py-2 font-semibold">Email.</div>
                               <div class="px-4 py-2">
                                   <a class="text-blue-800" href="mailto:{user.userName}">{SingleuserList.userName}</a>
                               </div>
                           </div>
                           {/* <div class="grid grid-cols-2">
                               <div class="px-4 py-2 font-semibold">City</div>
                               <div class="px-4 py-2">{SingleuserList.city}</div>
                           </div>
                           <div class="grid grid-cols-2">
                               <div class="px-4 py-2 font-semibold">Province</div>
                               <div class="px-4 py-2">{SingleuserList.province}</div>
                           </div>
                            */}
                           

                       </div>
                       
                   </div>
                   
                   
               </div>
           
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal1(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal1(false)}
                  >
                    Save Changes
                  </button> */}
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

export default AllusersList;