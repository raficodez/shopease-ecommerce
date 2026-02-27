import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products`)
            .then((res) => setProducts(res.data))
    }, []);

    return (
        <section className='max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-gray-400 mt-8'>
            <h2 className='text-3xl font-bold text-center mb-10'>
                Featured Products
            </h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default FeaturedProducts