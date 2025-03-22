import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";



const Cards = ({ product }) => {
 

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const {id} = useParams()
  const dispatch =useDispatch()

  

  const handleNavigation = () => {
    if (user) {
      navigate("/cart");
    } else {
      toast.error("Please log in first!", {
        position: "top-center",
        autoClose: 3000,
      });
     
      navigate("/login");
    }
  };

  return (
    <>
    <div className=" text-white text-center p-3 rounded shadow  flex flex-col justify-center items-center ">
    <Link to={`/product/${product.id}`}>
  <img
    className="h-44 w-44 object-contain transition-transform duration-300 hover:scale-110"
    src={product.image}
    alt={product.title}
  />
</Link>
      <p className="mt-2 font-bold text-gray-700">{product.title}</p>
      <h2 className="text-lg font-bold mt-2 text-blue-600">Price: ${product.price}</h2>
      <p className="mt-1 text-green-600 ">
        Rating: {product.rating?.rate || "N/A"}
      </p>
    
      <button
        onClick={handleNavigation}
        className=" mt-2  p-1 rounded-lg text-white transition-transform duration-300 hover:scale-110 bg-blue-700"
      >
        Buy Now
      </button>

    </div>
    </>
  );
};

export default Cards;
