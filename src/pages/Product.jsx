import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext';

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null)
  const [added, setAdded] = useState(false)
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
  }, [id]);

  if (!product) {
    return <div className='text-center py-20'>
      loading...
    </div>
  }
  return (
    <div className='max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10'>

      <div>
        <img
          src={product.image}
          alt={product.title}
          className='h-96 w-full object-contain'
        />
      </div>

      <div>

        <h1 className='mt-3 md:mt-4 font-semibold text-gray-700 text-sm sm:text-base md:text-lg truncate'>
          {product.title}
        </h1>

        <p className='mt-2 text-base sm:text-lg md:text-xl font-bold text-black'>
          ${product.description}
        </p>
        <p className='mt-2 text-base sm:text-lg md:text-xl font-bold text-black'>
          ${product.price}
        </p>


        <button
          onClick={() => {
          addToCart(product)
          setAdded(true);
          setTimeout(() => setAdded(false), 1500)
        }}
          className='mt- md:mt-4 w-full bg-black text-white  py-3 sm:py-3.5 md:py-4 text-sm sm:text-base rounded-lg hover:bg-gray-800transition'>
          Add to Cart
        </button>

        {added && (
        <p className='text-green-600 mt-2 text-lg'>
          Add to Cart
        </p>
      )}
      </div>

    </div>
  )
}

export default Product
