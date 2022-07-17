import React from "react";
import { useNavigate } from "react-router-dom";
// import profile from "../assets/profile.jpg";
import AllusersList from "./AllusersList";
import Navbar from '../Navbar'



export default function Allusers() {
  const userObj1 = localStorage.getItem('user1')
  const user1 = JSON.parse(userObj1);
  const navigate = useNavigate();


//   const back = (e) => {
//     if (user1.userType == 'admin') {
//       console.log("type: Admin")
//       navigate("/home");
//       // navigator('/home')
//     } else if (user1.userType == 'employee') {
//       console.log("type: employee")
//       navigate("/bankemployee");
//     } else if (user1.userType == 'customer') {
//       console.log("type: customer")
//       navigate("/customer");
//     }
//   }
  return (
    
    <div className='grid grid-cols-1  h-screen w-full'>
      

      <div>
      <Navbar/>
      <br/> <br/> <br/> <br/> 
        <main className="profile-page">

          <section className="relative py-16 bg-slate-100 top-48">
            <div className="container mx-auto px-4 w-3/4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
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
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                      User List
                    </h3>

                  </div>
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                        <table class="min-w-full">
                          <thead class="bg-white border-b">
                          </thead>
                          <tbody maxWidth="300px">
                            <AllusersList />


                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
     
      </div>

    
    </div>





  )
};

