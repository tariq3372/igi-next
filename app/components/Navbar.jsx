'use client'

import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MdSegment, MdClear } from "react-icons/md";
import { FaHome, FaInfoCircle, FaCartPlus, FaHandsHelping, FaPhoneSquareAlt } from "react-icons/fa"
import GetDictionary from '../utils/dictionaries';


const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-toddy-gold" : "text-magic-potion"}
            hover:text-toddy-gold transition-all`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar =  ({ selectedPage, setSelectedPage, home, about, products, contact, services, lang }) => {

    const dict =  GetDictionary(lang) // en

    // Language Dropdown
    const options = ['English', 'Arabic'];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
        // i18n.changeLanguage(event.target.value)
    }

    const [isMenuToggled, setIsMenuToggled] = useState(false);

    return (
        <nav className='z-40 w-full fixed top-0 bg-alabaster shadow-md'>
            <div >

                    {/* Desktop Nav */}
                    <div className='hidden w-full py-4 md:flex items-center justify-between mx-auto px-20'>

                        <AnchorLink className={`${selectedPage === Object.keys({ home })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                            href={`#${Object.keys({ home })[0]}`}
                            onClick={() => setSelectedPage('home')}
                        >
                            <FaHome />
                            {home}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ about })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                            href={`#${Object.keys({ about })[0]}`}
                            onClick={() => setSelectedPage('about')}
                        >
                            <FaInfoCircle />
                            {about}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ products })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                            href={`#${Object.keys({ products })[0]}`}
                            onClick={() => setSelectedPage('products')}
                        >
                            <FaCartPlus />
                            {products}
                        </AnchorLink>
                        <a href='/'><img className='w-12 lg:w-14' src="igi-main-logo.png" alt="Logo" /></a>
                        <AnchorLink className={`${selectedPage === Object.keys({ services })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                            href={`#${Object.keys({ services })[0]}`}
                            onClick={() => setSelectedPage('services')}
                        >
                            <FaHandsHelping />
                            {services}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ contact })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                            href={`#${Object.keys({ contact })[0]}`}
                            onClick={() => setSelectedPage('contact')}
                        >
                            <FaPhoneSquareAlt />
                            {contact}
                        </AnchorLink>

                        <select onChange={onOptionChangeHandler} className="bg-magic-potion text-white px-2 py-1 rounded-md font-montserrat text-sm hover:bg-tulip-yellow" >
                            {options.map((option, index) => {
                                return <option className='py-2' key={index} >
                                    {option}
                                </option>
                            })}
                        </select>
                    </div>

                    {/* Small screens */}
                    <div className=' p-4 flex md:hidden items-center justify-between gap-16'>
                        <a href='/'><img className='w-12 lg:w-14' src="igi-main-logo.png" alt="Logo" /></a>
                        <select onChange={onOptionChangeHandler} className="bg-magic-potion text-white px-2 h-[25px] rounded-md font-montserrat text-sm hover:bg-tulip-yellow" >
                            {options.map((option, index) => {
                                return <option className='py-2' key={index} >
                                    {option}
                                </option>
                            })}
                        </select>
                        <button className='rounded-full p-1'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <MdSegment className='fill-magic-potion' size={30} />
                        </button>
                    </div>

                {/* Mobile Menu Popup */}
                {isMenuToggled && (
                    <div className='fixed right-0 bottom-0 h-full bg-satin-linen w-[200px]'>
                        {/* Close Icon */}
                        <div className='flex justify-end p-12'>
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <MdClear size={30} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className='flex flex-col gap-10 mt-10 mx-20 pt-10 text-2xl items-center'>
                            <AnchorLink className={`${selectedPage === Object.keys({ home })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center text-center font-montserrat text-md font-semibold`}
                                href={`#${Object.keys({ home })[0]}`}
                                onClick={() => {setSelectedPage('home'); setIsMenuToggled(!isMenuToggled)}}
                            >
                                <FaHome />
                                {home}
                            </AnchorLink>
                            <AnchorLink className={`${selectedPage === Object.keys({ about })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                            href={`#${Object.keys({ about })[0]}`}
                            onClick={() => {setSelectedPage('about'); setIsMenuToggled(!isMenuToggled)}}
                        >
                            <FaInfoCircle />
                            {about}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ products })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                            href={`#${Object.keys({ products })[0]}`}
                            onClick={() => {setSelectedPage('products'); setIsMenuToggled(!isMenuToggled)}}
                        >
                            <FaCartPlus />
                            {products}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ services })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                            href={`#${Object.keys({ services })[0]}`}
                            onClick={() => {setSelectedPage('services'); setIsMenuToggled(!isMenuToggled)}}
                        >
                            <FaHandsHelping />
                            {services}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ contact })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                            href={`#${Object.keys({ contact })[0]}`}
                            onClick={() => {setSelectedPage('contact'); setIsMenuToggled(!isMenuToggled)}}
                        >
                            <FaPhoneSquareAlt />
                            {contact}
                        </AnchorLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;