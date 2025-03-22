import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../featuree/Cart/CartSlice';
import Bill from './Bill';

const Cartitems = ({cartItem}) => {

    
    const dispatch = useDispatch()

   const handleRemove = (id) => {
        dispatch(removeFromCart(id))
       
    }

  
    
    
  return (
  
    <div class="w-full h-[200px] flex my-2 bg-slate-400">
    <div class="w-1/2 p-4 overflow-hidden flex items-center justify-center">

    <img className='h-40 rounded-sm' src={cartItem.image}  alt="" />

    </div>
    <div class="w-1/2 p-4 object-fit relative bg-blue-200 flex flex-col items-center
    justify-center">
         <p className='font-semibold'>{cartItem.title}</p>
     <h1 className='font-black '>prise ${cartItem.price}</h1>
    
     <p>Qty : 1</p>
     <button onClick={()=> handleRemove(cartItem.id)} className='bg-red-600 rounded-lg p-1 px-2 mt-2 absolute -top-3 right-0'  > <CiCircleRemove /></button>
    </div>
  </div>

   
  )
}

export default Cartitems