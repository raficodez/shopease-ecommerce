import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        {/* Hero Section */}
        <section className='bg-gradient-to-r from-gray-100 to-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
        
            {/* left content */}
            <div className='max-w-xl text-center md:text-left'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
                    Discover the Latest Trends
                </h1>
                 <p className='mt-6 text-gray-600 text-base sm:text-lg'>
                    Shop the newest collection of premium products with modern style
                    and unbeatable quailty.
                 </p>
        
                 <Link
                 to="/products"
                 className='inline-block mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300'
                 >
                    Shop Now
                 </Link>
            </div>
        
            {/* Right Image */}
            <div className='w-full flex justify-center'>
                <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                 alt="Hero"
                 className='w-[280px] sm:w-[350px] md:w-[420px] rounded-xl shadow-lg object-cover'
                 />
            </div>
        </div>
            </section>
    </div>
  )
}

export default Hero
