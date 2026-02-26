import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Menu,X, ShoppingCart, Search } from "lucide-react"
import { useCart } from '../context/CartContext'


const Navbar = () => {
    const { cartItems }=useCart();
    const totalQuantity=cartItems.reduce((total,item)=>total+item.quantity,0)
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("")
    const navigate=useNavigate()
     const HandleSearch=(e)=>{
        e.preventDefault()
        if(search.trim() !== ""){
            navigate(`/products?search=${search}`)
            setSearch("")
        }
     }
    return (
        <nav className='bg-white shadow-md sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
                {/* logo */}
                <Link to="/" className='text-2xl font-bold text-gray-800' >
                    <div className='flex items-center gap-2 w-50 h-10'>
                        <img src="/logo.png" alt="logo" 
                        className=' object-contain'/>
                        {/* <h1>modern cart</h1> */}
                    </div>
                </Link>
        {/* search bar */}
        <form onSubmit={HandleSearch}
        className='hidden md:flex items-center border rounded-lg overflow-hidden'>
        <input type="text"
        placeholder='Search products...' 
        className='px-3 py-2 outline-none'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
        <button className='px-3 py-3 bg-black text-white'>
            <Search size={18}/>
        </button>
        </form>
                {/* Links */}
                <div className='hidden md:flex items-center gap-6'>

                    <Link to="/" className='text-gray-600 hover:text-black' >
                        Home
                    </Link>
                    <Link to="/products" className='text-gray-600 hover:text-black' >
                        Products
                    </Link>

                    {/* Cart icon */}
                    <div className='relative'>
                    <Link to="/cart" >
                        <ShoppingCart className='w-6 h-6 text-gray-700'/>
                    </Link>
{cartItems.length >0 && (
                        <span className='absolute -top-2 -right-3  bg-red-500 text-white text-xs px-2 py-0.5 rounded-full'>
                            {cartItems.length}
                        </span>

)}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {/* Mobile Dropdown */}
            {isOpen && (
                <div className='md:hidden bg-white px-6 pb-4 space-y-4 shadow'>
                    <Link to="/" className='block text-gray-700' >
                        Home
                    </Link>
                    <Link to="/products" className='block text-gray-700' >
                        Products
                    </Link>
                    <Link to="/cart" className='flex items-center gap-2 text-gray-700' >
                        <ShoppingCart size={20} />
                        Cart ({totalQuantity})
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar


