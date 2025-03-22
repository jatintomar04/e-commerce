import React from 'react'

import Slider from '../components/Slider'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
   
    <Slider />
   <div className='w-full p-5 flex  flex-col items-center justify-center' >
     <div className='w-[500px] flex justify-between flex-wrap '>
        <button className='text-white bg-blue-600 p-1 rounded-lg inline-flex items-center transition-transform duration-300 hover:scale-110 '>All</button>
        <button className='text-white bg-blue-600 p-1 rounded-lg inline-flex items-center transition-transform duration-300 hover:scale-110'>Men's clothing</button>
        <button className='text-white bg-blue-600 p-1 rounded-lg inline-flex items-center transition-transform duration-300 hover:scale-110'>Jwellery</button>
        <button className='text-white bg-blue-600 p-1 rounded-lg inline-flex items-center transition-transform duration-300 hover:scale-110'>Electronic</button>
        <button className='text-white bg-blue-600 p-1 rounded-lg inline-flex items-centertransition-transform duration-300 hover:scale-110'>Women's Clothing</button>

        
    </div>
    <hr class="border-t-[1.3px] border-black w-full my-4" />
   </div>

   <Products />

   </>
   
  )
}

export default Home