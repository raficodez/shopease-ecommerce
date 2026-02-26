import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer className='bg-black text-white py-12'>
            <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                    <h3 className='text-xl font-bold mb-4'>
                        ShopEase
                    </h3>
                    <p className='text-gray-400'>
                        Your one-stop shop for quality products at affortable prices.
                    </p>
                </div>

                <div>
                    <h4 className='font-semibold mn-4'>
                        Quick Links
                    </h4>
                    <ul className='space-y-2 text-gray-400'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-semibold mn-4'>
                        Customer Service
                    </h4>
                    <ul className='space-y-2 text-gray-400'>
                        <li>Shipping Policy</li>
                        <li>Returns</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-semibold mn-4'>
                        Contact
                    </h4>
                    <p className='text-gray-400'>
                        Email: Support@moderncart.com
                    </p>
                    <p className='text-gray-400'>
                        Phone: +91 9876543210
                    </p>
                </div>

            </div>
            <div className='text-center text-gray-500 mt-8'>
                © {new Date().getFullYear()} ShopEase. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer