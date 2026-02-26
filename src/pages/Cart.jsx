import React from 'react'
import { useCart } from '../context/CartContext'
import { Trash } from 'lucide-react';
import {  useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate=useNavigate();
  const { cartItems,clearCart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  return (
    <div className='py-6'>
      <h1 className='text-2xl font-bold mb-6'>Your Cart</h1>

      {cartItems.length === 0 && (
        <p>Your Cart is empty.</p>
      )}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className='flex justify-between items-center mb-6 border-b py-5'>

            <div className='flex items-center gap-4'>
              {/* Product Image */}
              <img 
              src={item.image} 
              alt={item.title} 
              className='px-4 w-30 h-30 object-contain bg-white p-2 rounded'/>
            </div>
          <div>
            <h2 className='font-semibold'>
              {item.title}
            </h2>

            <div className='flex items-center gap-2 mt-2'>
              <button onClick={() => decreaseQty(item.id) 
              }
                className='bg-gray-300 px-3 py-1 rounded'
              >
                -
              </button>
              <span>Qantity: {item.quantity}</span>

              <button onClick={() => increaseQty(item.id)}
                className='bg-gray-300 px-3 py-1 rounded'
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className='bg-red-500 p-2 mx-2 rounded text-white text-xl mt-4'
            >
             Remove
            </button>
          </div>
          <p className='font-semibold text-lg mx-4'>
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div
          className='mt-8 p-6 bg-gray-100 rounded-lg'>
          <h2 className='text-xl font-bold'>Order Summery</h2>
          <p className='mt-4'>
            Subtotal: ${totalPrice.toFixed(2)}
          </p>
          <p>Shipping: $0.00</p>

          <h3 className='mt-4 text-lg font-bold'>
            Total: ${totalPrice.toFixed(2)}
          </h3>
          <button 
          type='button'
          onClick={()=>{
            if(window.confirm("Are you sure you want to clear cart?")){
              clearCart();
            }
          }}
          className='mt-4 mb-2 bg-gray-800 text-white px-4 py-2 rounded'>
Clear Cart
          </button>
<hr />
          <button 
          type='button'
          onClick={()=> navigate("/success")}
          className='mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700'>
           Proceed to Pay
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
