import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import { getProduct } from '../featuree/Products/ProductSlice'
import Loading from './Loading'
import { addTocart } from '../featuree/Cart/CartSlice'


const Singleproduct = () => {


  const {user} = useSelector((state)=> state.auth)
  const {product , isLoading , isError} = useSelector((state)=> state.products)

  const {id} = useParams()
  const dispatch =useDispatch()
  const navigate = useNavigate()

  const handleAddtoCart = ()=> {
    dispatch(addTocart(product))
    if (!user) {
      toast.error("Please log in first!", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/login");
    }

  }
 
  useEffect(()=>{
    
    
    dispatch(getProduct(id))
  },[])

  if(!product || isLoading){
    return <Loading />
  };

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-red-600">404 - Product Not Found</h1>
      </div>
    );
  }


 

  return (
    <>


    <div class="container p-5 flex items-center justify-center">
    <div class="card border rounded-lg shadow-lg p-5 ">
      {/* <!-- Product Image --> */}
      <img
        src={product.image}
        alt="Product"
        class="w-full h-72 object-contain rounded-md mb-4"
      />
      {/* <!-- Card Body --> */}
      <div class="card-body">
        {/* <!-- Product Title --> */}
        <h5 class="text-xl font-bold mb-2">{product.title}</h5>
        {/* <!-- Product Description --> */}
        <p class="text-gray-600 text-sm mb-4">
         {product.description}
        </p>
        {/* <!-- Product Price --> */}
        <p class="text-lg font-semibold mb-4">${product.price}</p>
        {/* <!-- Action Buttons --> */}
        <div class="flex flex-col md:flex-row gap-3">
                

        <button onClick={()=>{handleAddtoCart(product)}} class="bg-green-500 hover:bg-green-600 flex justify-center text-white px-4 py-2 rounded-lg w-full">
              Add to Cart
            </button>
          
        </div>
      </div>
    </div>
  </div>
  </>
  
  )
}

export default Singleproduct