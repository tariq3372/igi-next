import React from 'react';
import { SiInstagram, SiFacebook, SiLinkedin, SiTiktok } from "react-icons/si";

const SocialMediaIcons = ({align}) => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7' >
        <a
        className=''
        href='https://instagram.com/imrangulf_industries?igshid=NjIwNzIyMDk2Mg=='
        target="_blank"
        rel='noreferrer'
        >
            <SiInstagram size={20} className='fill-energy-yellow hover:fill-tulip-yellow transition duration-500' />
        </a>
        <a
        className=''
        href='https://www.tiktok.com/@imrangulfindustries?lang=en'
        target="_blank"
        rel='noreferrer'
        >
            <SiTiktok size={20} className='fill-energy-yellow hover:fill-tulip-yellow transition duration-500' />
        </a>
        {/* <a 
        className=''
        href='www.facebook.com'
        target="_blank"
        rel='noreferrer'
        >
            <SiFacebook size={20} className='fill-energy-yellow hover:fill-tulip-yellow transition duration-500' />
        </a> */}
        <a 
        className=''
        href='https://www.linkedin.com/company/imran-gulf-industries-f-co/about/'
        target="_blank"
        rel='noreferrer'
        >
            <SiLinkedin size={20} className='fill-energy-yellow hover:fill-tulip-yellow transition duration-500' />
        </a>
    </div>
  )
}

export default SocialMediaIcons