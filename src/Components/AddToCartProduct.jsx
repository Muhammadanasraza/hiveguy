import React from 'react'
import ProductCard from './ui/ProductCard'
import shoe1 from "../assets/images/shoes.png"

function AddToCartProduct() {

    const products = [
        {
            id: 1,
            title: "For Original ww38 M47 Wireless Smartwatch",
            price: 2903,
            rating: 4,
            Sold: 4000,
            image: shoe1,
            badges: ["Free Shipping", "COD"],
        },
        {
            id: 1,
            title: "For Original ww38 M47 Wireless Smartwatch",
            price: 2903,
            rating: 4,
            Sold: 4000,
            image: shoe1,
            badges: ["Free Shipping", "COD"],
        },
        {
            id: 1,
            title: "For Original ww38 M47 Wireless Smartwatch",
            price: 2903,
            rating: 4,
            Sold: 4000,
            image: shoe1,
            badges: ["Free Shipping", "COD"],
        },
        {
            id: 1,
            title: "For Original ww38 M47 Wireless Smartwatch",
            price: 2903,
            rating: 4,
            Sold: 4000,
            image: shoe1,
            badges: ["Free Shipping", "COD"],
        },
        {
            id: 1,
            title: "For Original ww38 M47 Wireless Smartwatch",
            price: 2903,
            rating: 4,
            Sold: 4000,
            image: shoe1,
            badges: ["Free Shipping", "COD"],
        },
        {
            id: 1,
            title: "For Original ww38 M47 Wireless Smartwatch",
            price: 2903,
            rating: 4,
            Sold: 4000,
            image: shoe1,
            badges: ["Free Shipping", "COD"],
        },
        {
            id: 1,
            title: "For Original ww38 M47 Wireless Smartwatch",
            price: 2903,
            rating: 4,
            Sold: 4000,
            image: shoe1,
            badges: ["Free Shipping", "COD"],
        },
        {
            id: 1,
            title: "For Original ww38 M47 Wireless Smartwatch",
            price: 2903,
            rating: 4,
            Sold: 4000,
            image: shoe1,
            badges: ["Free Shipping", "COD"],
        },
        // Add more products as needed
    ]


    return (
        <>
            <div className='w-6xl my-5 p2 mx-auto '>
                <h1 className='text-2xl font-bold'>You May Like Also</h1>
                <div className='mt-10 grid lg:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-1 px-2 gap-2 text-center mx-auto justify-between'>
                    {products.map((product, index) =>(
                        <ProductCard key={index} {...product} />
                    )) }
                </div>
            </div>

        </>
    )
}

export default AddToCartProduct
