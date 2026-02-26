import { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [toast, setToast] = useState('')
    const clearCart = () => {
        setCartItems([])
    }
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    })
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems])


    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }]
        })
        setToast("Add to Cart!")
        setTimeout(() => setToast(""), 2000);
    }


    const increaseQty = (id) => {
        setCartItems((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
        )
    }
    const decreaseQty = (id) => {
        setCartItems((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1, } : item)
        )
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }


    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart, toast, increaseQty, decreaseQty, removeFromCart, }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
