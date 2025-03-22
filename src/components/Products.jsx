import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../featuree/Products/ProductSlice";
import Cards from "./Cards";
import Loading from "../pages/Loading";


const Products = () => {
  const dispatch = useDispatch();
  const { products ,isLoading } = useSelector((state) => state.products);

  
  useEffect(() => {
   
    dispatch(getProducts());
  }, [dispatch]);
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products?.map((product) => (
      <Cards key={product.id} product={product} />
    ))}
  </div>
  
  );
};

export default Products;
