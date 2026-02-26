import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext';
import { useState } from 'react';


const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart();

  if (!product) return null;
  
  return (
    <div className='bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-5 flex flex-col'>

      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className='h-48 w-full object-contain'
        />
      </Link>

      <h2 className='mt-3 md:mt-4 font-semibold text-gray-700 text-sm sm:text-base md:text-lg truncate'>
        {product.title}
      </h2>


      <div className='flex items-center mt-2'>
        <span className='text-yellow-400 text-lg'>

        </span>
        <span className='ml-2 text-sm text-gray-500'>
          ({product.rating?.count})
        </span>
      </div>

      <p className='mt-2 text-base sm:text-lg md:text-xl font-bold text-black'>
        ${product.price}
      </p>


      <button
        onClick={() => {
          addToCart(product)
          setAdded(true);
          setTimeout(() => setAdded(false), 1500)
        }}
        className='mt-3 md:mt-4 w-full bg-black text-white  py-2 sm:py-2.5 md:py-3 text-sm sm:text-base rounded-lg hover:bg-gray-800transition'>
        Add to Cart
      </button>

      {added && (
        <p className='text-green-600 mt-2 text-sm'>
          Add to Cart
        </p>
      )}
    </div>
  )
}

export default ProductCard
