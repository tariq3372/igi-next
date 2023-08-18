import Link from 'next/link'
import React from 'react'


const ProductCard = ({link, img, title} ) => {
    
    return (
        <div className="">
            <Link href={link} >
                <div
                    className="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                >
                    <img
                        alt="First Product"
                        className="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                        src={img}
                    />
                </div>
            </Link>
            <h2 className="text-lg text-center text-gray-900 font-medium title-font mb-4">{title}</h2>
        </div>
    )
}

export default ProductCard