import { Headphones, ShieldCheck, Truck } from 'lucide-react'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <section className='bg-gray-100 py-16'>
            <div className='max-w-full mx-auto py-6 text-center'>
                <h2 className='text-3xl font-bold mb-12'>
                    Why Choose Us
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <div className='bg-white p-8 rounded-xl shadow hover:shadow-lg transition'>
                        <Truck className='mx-auto mb-4' size={40} />
                        <h3 className='text-xl font-semibold mb-2'>
                            Free Shipping
                        </h3>
                        <p className='text-gray-600'>
                            Get free shipping on all orders over $50.
                        </p>
                    </div>
                    <div className='bg-white p-8 rounded-xl shadow hover:shadow-lg transition'>
                        <ShieldCheck className='mx-auto mb-4' size={40} />
                        <h3 className='text-xl font-semibold mb-2'>
                            Secure Payment
                        </h3>
                        <p className='text-gray-600'>
                            100% secure payments with trustd partners.
                        </p>
                    </div>
                    <div className='bg-white p-8 rounded-xl shadow hover:shadow-lg transition'>
                        <Headphones className='mx-auto mb-4' size={40} />
                        <h3 className='text-xl font-semibold mb-2'>
                            24/7 Support
                        </h3>
                        <p className='text-gray-600'>
                            Friendly support team always ready to help.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhyChooseUs
