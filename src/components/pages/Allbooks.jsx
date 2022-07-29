import { React, useState, useEffect } from 'react'
import Navbar from '../Navbar'
import axios from "axios";
import Allbookslist from './Allbookslist';
import useFetch from "./usefetch";
import RingLoader from "react-spinners/RingLoader";




export default function Allbooks() {
  var Jwt = localStorage.getItem("jwt")
  const[titile, setTitile] = useState(null);
  const[genre, setGenre] = useState(null);
  const[city, setCity] = useState(null);
  var param = '';
  var inputw = '';
  const getData = (data) =>{
    console.log("from parent: " + data)
    setTitile(data);
  }
  const getFilterGData = (data) =>{
    console.log("from G parent: " + data)
    setGenre(data[0])
    setCity(data[1])
  }
  // console.log('test titile' + titile)
  // console.log('test genre' + genre)
  
  if(titile=='' & genre!=null){
    param = 'genre';
    inputw = genre
    // const { data, isPending, error} = useFetch('http://18.130.213.30:8080/books/?genre=', Jwt,genre);
  }
  else if(titile!=null & genre==null){
    param = 'title';
    inputw = titile
  //   const { data, isPending, error} = useFetch('http://18.130.213.30:8080/books/?titile=', Jwt,titile);
  }
  const { data, isPending, error} = useFetch('http://18.130.213.30:8080/books/?'+param+'=', Jwt,inputw);
  
  // console.log("data " + data)
  // console.log("pending " + isPending)
  // console.log("error " + error)
  // useEffect(() => {
  //   console.log('book lisr')

  // });
  

  return (

    <div>
      <Navbar onSubmit={getData} onChange={getFilterGData} />

      <section class="container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl justify-center items-center text-center">All Books</h2>

        <div class="flex items-center justify-center">
          {/* <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
          {isPending ?
           <div class='spinner-item grid h-screen place-items-center' >
           <RingLoader color={"#f37a24"}  size={150}   />
            </div>
          :
          <Allbookslist booksList={data} />}
           
        </div>
        {/* </div> */}
      </section>

    </div>


  )
}
