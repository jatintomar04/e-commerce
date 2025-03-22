import React from 'react'
import { useSelector } from 'react-redux'

const Bill = () => {
    const {CartItems} = useSelector((state)=> state.cart)
   

    const total = CartItems.reduce((p,c) => p + c.price, 0);

  return (
    <div class="w-full flex-col items-center justify-center px-2 h-[200px] flex gap-2 bg-slate-400">
       
       <h1 className='font-black text-xl'> Your Bill</h1>
        <p className=' text-lg'>Total items : {CartItems.length} </p>
        <h1 className='font-black text-xl'> Total Amount : {total} </h1>
        <button className='text-lg font-bold bg-green-600 p-1 px-3 rounded-lg' > Pay Now </button>
    </div>
  )
}

export default Bill