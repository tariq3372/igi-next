"use client"

import GetDictionary from "../utils/dictionaries"
import Navbar from "../components/Navbar"
import { useState } from "react";
import About from "../scenes/About";
import Product from "../scenes/Product";
import HomeCarousel from "../scenes/homeCarousel";
import Landing from "../scenes/Landing";
import Footer from "../components/Footer";
import Fabric from "../scenes/Fabric";
import ContactSection from "../scenes/ContactSection";

export default function Page({ params: { lang } }) {
  const dict = GetDictionary(lang) // en
  const [selectedPage, setSelectedPage] = useState('home');
  // const height = window.innerWidth;
  // console.log(height);
  return (
    <div className='font-montserrat'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} home={dict.home} about={dict.about} products={dict.products} contact={dict.contact} services={dict.services} lang={lang} />
      <HomeCarousel dict={dict} />
      <About setSelectedPage={setSelectedPage} aboutTitle={dict.aboutTitle}
        aboutContent={dict.aboutContent}
        button02={dict.button02} button03={dict.button03} />
      <Product products={dict.products} productsContent={dict.productsContent} lang={lang} />
      <Landing dict={dict} />
      <Fabric dict={dict} />
      <ContactSection dict={dict} />
      <div className="md:justify-between md:items-center">
        <div className="mx-5 lg:mx-20">
        <Footer />
        </div>
      </div>
    </div>
  )
}