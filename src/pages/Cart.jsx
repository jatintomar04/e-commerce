import React from 'react'
import { useSelector } from 'react-redux'
import Cartitems from '../components/Cartitems'
import Bill from '../components/Bill'
import Noitem from './Noitem'

const Cart = () => {

  const {CartItems} = useSelector((state)=> state.cart)

  if (CartItems.length === 0){
    return <>
    <Noitem />
    </>
  }
 
  return (
  <>
  
 {
  CartItems.map(cartItem =><Cartitems cartItem ={cartItem} key={cartItem} /> )
 }

 <Bill />
 </>
  )
}

export default Cart