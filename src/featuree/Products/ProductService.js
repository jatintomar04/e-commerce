import axios from "axios"

export const fatchProducts  = async () => {
   
    const response = await axios.get("https://fakestoreapi.com/products")
  return response.data
};



export const fatchProduct  = async (id) => {

  const response = await axios.get("https://fakestoreapi.com/products/ "+ id)
  console.log(response);

return response.data
};

 