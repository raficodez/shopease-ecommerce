import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { useLocation } from 'react-router-dom';



const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const search = queryParams.get("search");

    useEffect(() => {
        const url=category? `https://fakestoreapi.com/products/category/${category}`: `https://fakestoreapi.com/products`;
        fetch(url).then((res) => res.json())
        .then(data=>{
            let filtered=data;
            if(search){
                filtered=data.filter(product=>
                    product.title.toLowerCase().includes(search.toLowerCase()) ||
                    product.category.toLowerCase().includes(search.toLowerCase()) ||
                    product.description.toLowerCase().includes(search.toLowerCase()) 
                )
            }
            setProducts(filtered)
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
            setLoading(false)

        })
    }, [category, search]);


    if (loading) {
        return ( <div className='flex justify-center items-center h-screen'>
            <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid'></div>
        </div> )
    }
    return (
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-300'>
            <h1 className='text-3xl font-bold mb-8'>
                {category ? category : "All Products"}
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Products
