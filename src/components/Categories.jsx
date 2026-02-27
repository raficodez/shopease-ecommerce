import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        { name: "men's clothing", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38" },
        { name: "women's clothing", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d" },
        { name: "jewelery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338" },
        { name: "electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },

    ]
    return (
        <section className='max-w-7xl mx-auto px-6 py-16'>
            <h2 className='text-3xl font-bold text-center mb-12'>
                Shop by Category
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {categories.map((cat, index) => (
                    <Link
                        key={index}
                        to={`/products?category=${encodeURIComponent(cat.name)}`}
                        className='relative group rounded-xl overflow-hidden'
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className='h-32 sm:h-40 md:h-56 w-full object-cover group-hover:scale-110 transition duration-500' />
                        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                            <h2 className='text-xl text-white font-semibold'>
                                {cat.name}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </section >
    )
}

export default Categories
