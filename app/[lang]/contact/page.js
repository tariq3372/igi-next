"use client"

import Footer from "@/app/components/Footer"
import Navbar02 from "@/app/components/Navbar02"
import ContactSection from "@/app/scenes/ContactSection"
import GetDictionary from "@/app/utils/dictionaries"

export default function Page({ params: { lang } }) {
    const dict = GetDictionary(lang) // en
    return (
        <div>
             <Navbar02 lang={lang}/>

             <ContactSection dict={dict} />

             <div className="md:justify-between md:items-center">
                <div className="mx-5 lg:mx-20">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
