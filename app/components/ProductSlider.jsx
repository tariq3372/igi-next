import React from 'react'
import ProductCard from './ProductCard'

const ProductSlider = (props) => {

    const {slides,images, links, titles} = props

  return (
    <div className=''>
    <div className='carousel carousel-center flex flex-row flex-nowrap gap-5'>
        {slides.map((index) => (
            <div className='carousel-item md:basis-[25%] basis-[75%]'>
                <div className=''>
                <ProductCard img = {images[index % images.length]} link={links[index % links.length]} title={titles[index % titles.length]}/>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default ProductSlider