import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Success = () => {
  const navigate=useNavigate()
  const {clearCart}=useCart()

  // useEffect(() => {
  //   clearCart();
  // }, [clearCart])
  
  const handleSuccess=()=>{
    clearCart();
    navigate("/")
  }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4'>
      <div className='bg-white shadow-xl rounded-2xl p-8 text-center w-full max-w-md'>
        <div className='text-5xl mb-4'>✅</div>
        <h1 className='text-2xl md:text-3xl font-bold text-green-600'>Payment Sucessfull!</h1>
      <p className='mt-4 text-gray-600 text-sm md:text-base'>Thank you for your purchase. Your order has been placed successfully.</p>
      
      <button 
      onClick={handleSuccess}
      className='mt-6 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-medium'>
        Go Back Home
      </button>
      </div>
    </div>
  )
}

export default Success
