import React from 'react'
import Link from 'next/link'

// slideToScroll CSS
import '../components/slideToScroll/css/embla.css'
import '../components/slideToScroll/css/sandbox.css'

// slideToScroll Component
import EmblaCarousel from '../components/slideToScroll/EmblaCarousel'

import {AiOutlineRight, AiOutlineDown} from 'react-icons/ai'
import GetDictionary from '../utils/dictionaries'


const Product = ({ products, productsContent, lang }) => {
    const dict = GetDictionary(lang);
    const products1 = dict['bed linen'].products;
    const products2 = dict['guest amenities'].products;
    const products3 = dict['homes'].products;
    const products4 = dict['mattresses'].products;
    const products5 = dict['hotel supplies'].products;

    // Extracting First Images from Each category of products & storing it as array
    let img1 = []
    let link01 = []
    let title01 = []
    // Pushing the values to 1st product's array
    Object.keys(products1).forEach(key => {
        img1.push(products1[key].img[0])
        title01.push(products1[key].title)
        link01.push(products1[key].link)
    })

    let img2 = []
    let link02 = []
    let title02 = []
    // Pushing the values to 2nd product's array
    Object.keys(products2).forEach(key => {
        img2.push(products2[key].img[0])
        title02.push(products2[key].title)
        link02.push(products2[key].link)
    })

    let img3 = []
    let link03 = []
    let title03 = []
    // Pushing the values to 3rd product's array
    Object.keys(products3).forEach(key => {
        img3.push(products3[key].img[0])
        title03.push(products3[key].title)
        link03.push(products3[key].link)
    })

    let img4 = []
    let link04 = []
    let title04 = []
    // Pushing the values to 3rd product's array
    Object.keys(products4).forEach(key => {
        img4.push(products4[key].img[0])
        title04.push(products4[key].title)
        link04.push(products4[key].link)
    })

    let img5 = []
    let link05 = []
    let title05 = []
    // Pushing the values to 3rd product's array
    Object.keys(products5).forEach(key => {
        img5.push(products5[key].img[0])
        title05.push(products5[key].title)
        link05.push(products5[key].link)
    })
    

    // Slides
    const OPTIONS = {}
    const SLIDE_COUNT1 = img1.length
    const SLIDE_COUNT2 = img2.length
    const SLIDE_COUNT3 = img3.length
    const SLIDE_COUNT4 = img4.length
    const SLIDE_COUNT5 = img5.length
    
    const SLIDES1 = Array.from(Array(SLIDE_COUNT1).keys())
    const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())
    const SLIDES3 = Array.from(Array(SLIDE_COUNT3).keys())
    const SLIDES4 = Array.from(Array(SLIDE_COUNT4).keys())
    const SLIDES5 = Array.from(Array(SLIDE_COUNT5).keys())

    return (

        <section id='products' className="text-gray-600 mx-5 lg:mx-20">
            <div className="container py-10 lg:pb-10 lg:pt-28">
                <div className="flex flex-wrap w-full mb-10">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-tulip-yellow">{products}</h1>
                        <div className="h-1 w-20 bg-tulip-yellow rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-magic-potion">{productsContent}</p>
                </div>

                {/* First Category of Products */}
                <div className="mb-5">
                    <Link href={dict.langsuffix+"/bed linen"}>
                    <div className="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <div className='flex flex-row gap-4 w-2/4 lg:w-2/12'>
                            <img className='w-10' src={dict['bed linen'].logo} alt="logo" />
                            <h1 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900 underline underline-offset-8">IGI Linen</h1>
                        </div>
                        
                        <div className="h-0.5 w-2/4 lg:w-8/12 bg-gray-400 rounded"></div>
                        <div className='hidden md:flex md:flex-row items-center justify-end w-1/4 lg:w-2/12'>
                        <h2 className="text-right mr-4">View More</h2>
                        <AiOutlineRight />
                        </div>
                    </div>
                    </Link>
                </div>
                <div className='sandbox01'>
                <div className="sandbox01__carousel">
                  <EmblaCarousel slides={SLIDES1} options={OPTIONS} images={img1} titles={title01} links={link01} />
                </div>

                <Link href={dict.langsuffix+"/bed linen"}>
                <div className='py-5 flex flex-row items-center justify-center w-full md:hidden'>
                    <h2 className="text-right mr-4">View More</h2>
                    <AiOutlineDown className='animate-bounce' />
                </div>
                </Link>
                </div>

                {/* Second Category of Products */}
                <div className="mt-10 mb-8">
                    <Link href={dict.langsuffix+"/guest amenities"}>
                    <div className="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <div className='flex flex-row gap-4 w-3/4 lg:w-3/12'>
                            <img className='w-10' src={dict['guest amenities'].logo} alt="logo" />
                            <h1 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900 underline underline-offset-8">Guest Amenities</h1>
                        </div>
                        
                        <div className="h-0.5 w-1/4 lg:w-7/12 bg-gray-400 rounded"></div>
                        <div className='hidden md:flex md:flex-row items-center justify-end w-1/4 lg:w-2/12'>
                        <h2 className="text-right mr-4">View More</h2>
                        <AiOutlineRight />
                        </div>
                    </div>
                    </Link>
                </div>

                <div className='sandbox01'>
                <div className="sandbox01__carousel">
                  <EmblaCarousel slides={SLIDES2} options={OPTIONS} images={img2} titles={title02} links={link02} />
                </div>

                <Link href={dict.langsuffix+"/guest amenities"}>
                <div className='py-5 flex flex-row items-center justify-center w-full md:hidden'>
                    <h2 className="text-right mr-4">View More</h2>
                    <AiOutlineDown className='animate-bounce' />
                </div>
                </Link>
                </div>

                {/* Third Category of Products */}
                <div>
                <div className="mt-10 mb-8">
                    <Link href={dict.langsuffix+"/homes"}>
                    <div className="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <div className='flex flex-row gap-4 w-2/4 lg:w-2/12'>
                            <img className='w-10' src={dict['homes'].logo} alt="logo" />
                            <h1 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900 underline underline-offset-8">Home</h1>
                        </div>
                        
                        <div className="h-0.5 w-2/4 lg:w-8/12 bg-gray-400 rounded"></div>
                        <div className='hidden md:flex md:flex-row items-center justify-end w-1/4 lg:w-2/12'>
                        <h2 className="text-right mr-4">View More</h2>
                        <AiOutlineRight />
                        </div>
                    </div>
                    </Link>
                </div>

                <div className='sandbox01'>
                <div className="sandbox01__carousel">
                  <EmblaCarousel slides={SLIDES3} options={OPTIONS} images={img3} titles={title03} links={link03} />
                </div>
                </div>

                <Link href={dict.langsuffix+"/homes"}>
                <div className='py-5 flex flex-row items-center justify-center w-full md:hidden'>
                    <h2 className="text-right mr-4">View More</h2>
                    <AiOutlineDown className='animate-bounce' />
                </div>
                </Link>
                </div>

                {/* Fourth Category of Products */}
                <div>
                <div className="mt-10 mb-8">
                    <Link href={dict.langsuffix+"/mattresses"}>
                    <div className="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <div className='flex flex-row gap-4 w-2/4 lg:w-2/12'>
                            <img className='w-10' src={dict['mattresses'].logo} alt="logo" />
                            <h1 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900 underline underline-offset-8">Mattress</h1>
                        </div>
                        
                        <div className="h-0.5 w-2/4 lg:w-8/12 bg-gray-400 rounded"></div>
                        <div className='hidden md:flex md:flex-row items-center justify-end w-1/4 lg:w-2/12'>
                        <h2 className="text-right mr-4">View More</h2>
                        <AiOutlineRight />
                        </div>
                    </div>
                    </Link>
                </div>

                <div className='sandbox01'>
                <div className="sandbox01__carousel">
                  <EmblaCarousel slides={SLIDES4} options={OPTIONS} images={img4} titles={title04} links={link04} />
                </div>
                </div>

                <Link href={dict.langsuffix+"/mattresses"}>
                <div className='py-5 flex flex-row items-center justify-center w-full md:hidden'>
                    <h2 className="text-right mr-4">View More</h2>
                    <AiOutlineDown className='animate-bounce' />
                </div>
                </Link>
                </div>

                {/* Fifth Category of Products */}
                <div className=''>
                <div className="mt-10 mb-8">
                    <Link href={dict.langsuffix+"/hotel supplies"}>
                    <div className="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <div className='flex flex-row gap-4 w-3/4 lg:w-3/12'>
                            <img className='w-10' src={dict['hotel supplies'].logo} alt="logo" />
                            <h1 className="sm:text-xl text-lg font-medium title-font mb-2 text-gray-900 underline underline-offset-8">Hotel supplies</h1>
                        </div>
                        
                        <div className="h-0.5 w-1/4 lg:w-7/12 bg-gray-400 rounded"></div>
                        <div className='hidden md:flex md:flex-row items-center justify-end w-1/4 lg:w-2/12'>
                        <h2 className="text-right mr-4">View More</h2>
                        <AiOutlineRight />
                        </div>
                    </div>
                    </Link>
                </div>

                <div className='sandbox01'>
                <div className="sandbox01__carousel">
                  <EmblaCarousel slides={SLIDES5} options={OPTIONS} images={img5} titles={title05} links={link05} />
                </div>
                </div>

                <Link href={dict.langsuffix+"/hotel supplies"}>
                <div className='py-5 flex flex-row items-center justify-center w-full md:hidden'>
                    <h2 className="text-right mr-4">View More</h2>
                    <AiOutlineDown className='animate-bounce' />
                </div>
                </Link>
                </div>
        </div>
        </section>
    )
}

export default Product