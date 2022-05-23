import React, { useState } from 'react'
import CarService from '../services/CarService';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const CarShop = () => {
  const navigate = useNavigate();
  const [success,setSuccess] = useState();
    const [car, setCar] =useState({
        id: "",
        issue: "",
        make: "",
        model: "",
        year: "",

    });
    
    const handleChange = (e) => {
        const value = e.target.value;
        setCar({ ...car, [e.target.name]: value});
    };
    
    const saveCar = (e) => {
        e.preventDefault();
        CarService.saveCar(car)
        .then((response)=>{
            console.log(response)
            setSuccess(true)
          
        }).catch((error)=>{
            console.log(error);
        });
        setCar("")
        
    };
    

    
  return (
    <div class="flex items-center justify-center h-screen font-light">
    <div>
      {success ? <h1 className='text-green-400 font-extrabold'>Success!</h1> : null}
     <h1>Jims Auto Shop</h1>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
      <div className= {"font-thin"}>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Make
        </label>
        <input 
        name = "make"
        value= {car.make}
        onChange ={(e) => handleChange(e)}
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Make"/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Model
        </label>
        <input
        name = "model"
        value={car.model}
        onChange ={(e) => handleChange(e)}
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Model"/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Year
        </label>
        <input
        name = "year"
        value={car.year}
        onChange ={(e) => handleChange(e)}
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Year"/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Mechanical Issue
        </label>
        <input
        name = "issue"
        value={car.issue}
        onChange ={(e) => handleChange(e)}
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Issue"/>
      </div>
      <div class="flex items-center justify-between">
        <button onClick ={saveCar} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Add Car
        </button>
        <button onClick = {()=> navigate("/")} class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Car List
        </button>
        
      </div>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
    &copy;2020 Jims Auto. All rights reserved.
  </p>
  <div>
  {

  }
  </div>
    </div>
    </div>
  )
}

export default CarShop

