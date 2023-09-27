"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
const Landing = ({ dict }) => {
    return (
        <div>
            <section id='services'
                className="h-[75vh] lg:min-h-screen relative bg-hero-image bg-cover bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-black/25"
                ></div>
                <div className="relative px-10 font-montserrat text-start sm:text-left pt-[100px] lg:pt-[250px]">
                    <motion.div
                        className=""
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <h1 className="text-3xl leading-snug tracking-[1.5px] font-extrabold sm:text-5xl">
                            <strong className="block font-extrabold text-white">
                                {dict.serviceSolagan}
                            </strong>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >

                        <p className="mt-4 font-semibold text-white text-md text-md sm:text-xl">
                            {dict.serviceSolagan0}
                        </p>
                    </motion.div>

                    <motion.div className="mt-5 flex flex-wrap gap-4 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.75 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <Link
                            href="/catalog.pdf"
                            download
                            className="block w-full rounded-full bg-white px-5 py-3 text-sm font-medium text-magic-potion border-2 border-magic-potion hover:border-toddy-gold shadow hover:text-toddy-gold focus:outline-2 focus:ring sm:w-auto"
                        >
                            {dict.button04}
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section id='offering'
                className="h-auto relative text-magic-potion bg-cover bg-center bg-no-repeat pt-20 px-5 lg:px-20">
                <motion.div
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <h1 className="text-xl lg:text-3xl font-bold mb-5 lg:mb-8 ">
                        {dict.service01}
                    </h1>
                    <p className="text-md mb-8 lg:mb-10" >{dict.serviceContent01}</p>
                    <h1 className="text-xl lg:text-3xl font-bold mb-5 lg:mb-8 ">
                        {dict.service02}
                    </h1>
                    <p>{dict.serviceContent02}</p>
                </motion.div>
            </section>
        </div>
    )
}

export default Landing