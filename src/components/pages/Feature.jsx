import { React, useState, useEffect } from 'react'
import Navbar from '../Navbar'
import axios from "axios";
import Allbookslist from './Allbookslist';
import useFetch from "./usefetch";
import RingLoader from "react-spinners/RingLoader";
import Featurelist from './Featurelist';
import { useNavigate } from "react-router-dom";
import Addfeature from './Addfeature';




export default function Feature() {
  const userObj1 = localStorage.getItem('user1')
  const user1 = JSON.parse(userObj1);
  const navigate = useNavigate();

  

  return (

    <div>
      <Navbar  />
      <Addfeature/>

      <section class="container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl justify-center items-center text-center">Featured Books</h2>

        
          <Featurelist />
           
      
        {/* </div> */}
      </section>

    </div>


  )
}
