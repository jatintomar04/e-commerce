import axios from "axios"

const register = async(formData) => {
  const response = await axios.post('/api/user/register', formData);
  localStorage.setItem("user", JSON.stringify(response.data))
  return response.data;
}

const Login = async(formData) => {
    const response = await axios.post('/api/user/login', formData);
    localStorage.setItem("user", JSON.stringify(response.data))
    return response.data;
  }
  



const authService = {register, Login}

export default authService