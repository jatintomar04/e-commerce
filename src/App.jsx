import React from 'react'
import Navbar from './components/navbar'
import Slider from './components/Slider'
import Home from './pages/Home'
import Products from './components/Products'
import Cart from './pages/Cart'
import { BrowserRouter, Routes , Route } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import Loading from './pages/Loading'
import About from './pages/About'
import Contact from './pages/Contact'
import Singleproduct from './pages/Singleproduct'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
   
    
    <Routes>
      
     
      <Route path='/' element ={<Home />} />
      <Route path='*' element ={<Error />} />
      <Route path='/login' element ={<Login />} />
      <Route path='/register' element ={<Register />} />
      <Route path='/about' element ={<About />} />
      <Route path='/products' element ={<Products />} />
      <Route path='/contact' element ={<Contact />} />
      <Route path='/cart' element ={<Cart />} />
      <Route path='/product/:id' element ={<Singleproduct />} />
     </Routes>
     <ToastContainer />
     <Footer />
    </BrowserRouter>
    
 
    </>
  )
}

export default App