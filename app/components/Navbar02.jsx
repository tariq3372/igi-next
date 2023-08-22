"use client"

import { FaBackward } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const Navbar02 = ({lang}) => {

    const route = useRouter();
    let path = usePathname();
    const [selectLang, setselectLang] = useState("");

    // Language Dropdown
    const options = ['English', 'Arabic'];
    const onOptionChangeHandler = (event) => {
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
    useEffect(() => {
        changelang(lang);
    }, []);

    return (
        <nav className='z-40 w-full fixed top-0 bg-alabaster shadow-md'>
            <div >

                {/* Desktop Nav */}
                <div className='hidden w-full py-4 sm:flex items-center justify-between mx-auto px-20'>

                    <button
                        className="text-magic-potion hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold gap-2"
                        onClick={() => route.back()}
                    >
                        <FaBackward />
                        Back
                    </button>

                    <Link href='/'>
                        <img className='w-12 lg:w-14' src={"/igi-main-logo.png"} alt="Logo" />
                    </Link>

                    <select value={selectLang} onChange={onOptionChangeHandler} className="bg-magic-potion text-white w-[100px] px-2 py-1 rounded-md font-montserrat text-sm hover:bg-tulip-yellow" >
                        {options.map((option, index) => {
                            return <option className='py-2' key={index} >
                                {option}
                            </option>
                        })}
                    </select>
                </div>

                <div className='md:hidden p-4 flex items-center justify-between gap-16'>
                    <a href='/'><img className='w-12 lg:w-14' src="/igi-main-logo.png" alt="Logo" /></a>
                    <select value={selectLang} onChange={onOptionChangeHandler} className="bg-magic-potion text-white px-2 w-[100px] h-[25px] rounded-md font-montserrat text-sm hover:bg-tulip-yellow" >
                        {options.map((option, index) => {
                            return <option className='py-2' key={index} >
                                {option}
                            </option>
                        })}
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Navbar02;