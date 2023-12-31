'use client'

import { useEffect, useRef, useState } from 'react';
import { MdSegment, MdClear } from "react-icons/md";
import { FaHome, FaInfoCircle, FaCartPlus, FaHandsHelping, FaPhoneSquareAlt } from "react-icons/fa"
import GetDictionary from '../utils/dictionaries';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = ({ selectedPage, setSelectedPage, home, about, products, contact, services, lang }) => {

    const route = useRouter();
    let path = usePathname();
    
    const options = ['English', 'Arabic'];
    const [selectLang, setselectLang] = useState("");

    const onOptionChangeHandler = (event) => {
        console.log(lang);

        if (event.target.value === "Arabic") {
            route.push(path.replace("/en", "/ar"))
        } else {
            route.push(path.replace("/ar", "/en"))
        }
        
    }
    const changelang =(lang)=>{
        if (lang === "ar") {
            route.push(path.replace("/en", "/ar"))
            setselectLang("Arabic")
        } else {
            route.push(path.replace("/ar", "/en"))
            setselectLang("English")
        }
    }


    const sections = useRef([]);
    const handleScroll = () => {
        const pageYOffset = window.pageYOffset;
        let newActiveSection = null;
        
        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionOffsetTop - 80 && pageYOffset < sectionOffsetTop + sectionHeight) {
                newActiveSection = section.id;
            }
        });
        setSelectedPage(newActiveSection)
    };

    useEffect(() => {
        changelang(lang);
        sections.current = document.querySelectorAll('section');
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isMenuToggled, setIsMenuToggled] = useState(false);

    return (
        <nav className='z-40 w-full fixed top-0 bg-alabaster shadow-md'>
            <div >

                {/* Desktop Nav */}
                <div className='hidden w-full py-4 md:flex items-center justify-between mx-auto px-20'>

                    <Link className={`${selectedPage === Object.keys({ home })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                        href={`#${Object.keys({ home })[0]}`}
                        onClick={() => setSelectedPage('home')}
                    >
                        <FaHome />
                        {home}
                    </Link>
                    <Link className={`${selectedPage === Object.keys({ about })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                        href={`#${Object.keys({ about })[0]}`}
                        onClick={() => setSelectedPage('about')}
                    >
                        <FaInfoCircle />
                        {about}
                    </Link>
                    <Link className={`${selectedPage === Object.keys({ products })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                        href={`#${Object.keys({ products })[0]}`}
                        onClick={() => setSelectedPage('products')}
                    >
                        <FaCartPlus />
                        {products}
                    </Link>
                    <Link href='/'><img className='w-12 lg:w-14' src="igi-main-logo.png" alt="Logo" /></Link>
                    <Link className={`${selectedPage === Object.keys({ services })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                        href={`#${Object.keys({ services })[0]}`}
                        onClick={() => setSelectedPage('services')}
                    >
                        <FaHandsHelping />
                        {services}
                    </Link>
                    <Link className={`${selectedPage === Object.keys({ contact })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                        href={`#${Object.keys({ contact })[0]}`}
                        onClick={() => setSelectedPage('contact')}
                    >
                        <FaPhoneSquareAlt />
                        {contact}
                    </Link>

                    <select value={selectLang} onChange={onOptionChangeHandler} className="bg-magic-potion text-white w-[100px] px-2 py-1 rounded-md font-montserrat text-sm hover:bg-tulip-yellow" >
                        {options.map((option, index) => {
                            return <option className='py-2' key={index} >
                                {option}
                            </option>
                        })}
                    </select>
                </div>

                {/* Small screens */}
                <div className=' p-4 flex md:hidden items-center justify-between gap-16'>
                    <Link href='/'><img className='w-12 lg:w-14' src="igi-main-logo.png" alt="Logo" /></Link>
                    <select value={selectLang} onChange={onOptionChangeHandler} className="bg-magic-potion text-white px-2 w-[100px] h-[25px] rounded-md font-montserrat text-sm hover:bg-tulip-yellow" >
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
                            <Link className={`${selectedPage === Object.keys({ home })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center text-center font-montserrat text-md font-semibold`}
                                href={`#${Object.keys({ home })[0]}`}
                                onClick={() => { setSelectedPage('home'); setIsMenuToggled(!isMenuToggled) }}
                            >
                                <FaHome />
                                {home}
                            </Link>
                            <Link className={`${selectedPage === Object.keys({ about })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                                href={`#${Object.keys({ about })[0]}`}
                                onClick={() => { setSelectedPage('about'); setIsMenuToggled(!isMenuToggled) }}
                            >
                                <FaInfoCircle />
                                {about}
                            </Link>
                            <Link className={`${selectedPage === Object.keys({ products })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                                href={`#${Object.keys({ products })[0]}`}
                                onClick={() => { setSelectedPage('products'); setIsMenuToggled(!isMenuToggled) }}
                            >
                                <FaCartPlus />
                                {products}
                            </Link>
                            <Link className={`${selectedPage === Object.keys({ services })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                                href={`#${Object.keys({ services })[0]}`}
                                onClick={() => { setSelectedPage('services'); setIsMenuToggled(!isMenuToggled) }}
                            >
                                <FaHandsHelping />
                                {services}
                            </Link>
                            <Link className={`${selectedPage === Object.keys({ contact })[0] ? "text-toddy-gold" : "text-magic-potion"}
                            hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold`}
                                href={`#${Object.keys({ contact })[0]}`}
                                onClick={() => { setSelectedPage('contact'); setIsMenuToggled(!isMenuToggled) }}
                            >
                                <FaPhoneSquareAlt />
                                {contact}
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;