import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import { useCart } from './context/CartContext'
import Success from './pages/Success'



const App = () => {
  const { toast }=useCart();
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
      </Routes>
  {
    toast && (
      <div className='fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-5-'>
        {toast}
      </div>
    )
  }
    </div>
  
  )
}

export default App
