import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CarService from '../services/CarService';

const CarList = () => {

   const navigate =  useNavigate();
  const [cars, setCars] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
      const fetchData = async()=> {
          setLoading(true);
          try {
               const response = await CarService.getCars(); 
               setCars(response.data)
          }catch(error){
              console.log(error)
          }
          setLoading(false);
      };
        fetchData();
  }, [])
  return (
      <div className='container max-auto my-8 '>
    <div className='h-12'>
     <button onClick={()=> navigate("/addCar")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Car</button>
    </div>
    <h1>Jims Cars</h1>
    <div className='flex shadow border-b'>
        <table className='min-w-full' >
            <thead className='bg-gray-50'>
                <tr className='text-left'>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Issue</th>
                </tr>
            </thead>
            {!loading && (
            <tbody>
                {cars.map((car) => (
                <tr>
                    <td>
                      <div>{car.make}</div>
                    </td>
                    <td>
                      <div>{car.model}</div>
                    </td>
                    <td>
                      <div>{car.year}</div>
                    </td>
                    <td>
                      <div>{car.issue}</div>
                    </td>
                </tr>
                ))}
            </tbody>)}
        </table>
    </div>
    </div>
  )
}

export default CarList
