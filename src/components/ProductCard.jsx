import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext';
import { useState } from 'react';


const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart();

  if (!product) return null;
  
  return (
    <div className='bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-4 flex flex-col'>

      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className='h-35 sm:h-40 md:h-45 w-full object-contain'
        />
      </Link>

      <h2 className='mt-3 font-semibold text-gray-700 text-sm sm:text-base line-clamp-2 truncate'>
        {product.title}
      </h2>


      <div className='flex items-center mt-2'>
        <span className='text-yellow-400 text-lg'>

        </span>
        <span className='ml-2 text-xs sm:text-sm text-gray-500'>
          ({product.rating?.count})
        </span>
      </div>

      <p className='mt-2 text-base sm:text-lg font-bold text-black'>
        ${product.price}
      </p>


      <button
        onClick={() => {
          addToCart(product)
          setAdded(true);
          setTimeout(() => setAdded(false), 1500)
        }}
        className='mt-3 w-full bg-black text-white py-2 text-sm sm:text-base rounded-lg hover:bg-gray-800 transition'>
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
