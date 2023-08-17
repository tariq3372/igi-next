import GetDictionary from '../utils/dictionaries';
import { m, LazyMotion, domAnimation } from "framer-motion"

const Landing = ({lang}) => {

    const dict = GetDictionary(lang)

    return (
        <div>
            <LazyMotion features={domAnimation}>
            <section id='services'
                class="h-[75vh] lg:min-h-screen relative bg-[url('/hotel-bed-room.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"
                >
                
                <div
                    class="absolute inset-0 bg-black/25"
                ></div>

                {/* <div
                    class="relative mx-auto max-w-screen-xl pt-60 lg:flex min-h-screen lg:items-center lg:px-8"
                > */}
                    <div class="relative px-10 font-montserrat text-start sm:text-left pt-[100px] lg:pt-[250px]">
                    <m.div
                        class=""
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: {opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}
                    >
                        <h1 class="text-3xl leading-snug tracking-[1.5px] font-extrabold sm:text-5xl">
                            <strong class="block font-extrabold text-white">
                            {dict.serviceSolagan}
                            </strong>
                        </h1>
                    </m.div>

                    <m.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: {opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}
                    >

                        <p class="mt-4 font-semibold text-md text-md sm:text-xl">
                        {dict.serviceSolagan0}
                        </p>
                    </m.div>

                    <m.div class="mt-5 flex flex-wrap gap-4 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.75 }}
                        variants={{
                            hidden: {opacity:0, x:-50},
                            visible: {opacity:1, x:0}
                        }}
                    >
                        {/* <a
                        href="https://wa.me/966594161652"
                        class="block w-full rounded bg-russian-violet px-5 py-3 text-sm font-medium text-white shadow hover:bg-mettalic-gold focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                        {button01}
                        </a> */}

                        <a
                        href="/catalog.pdf"
                        download
                        class="block w-full rounded-full bg-white px-5 py-3 text-sm font-medium text-magic-potion border-2 border-magic-potion hover:border-toddy-gold shadow hover:text-toddy-gold focus:outline-2 focus:ring active:text-rose-500 sm:w-auto"
                        >
                        {dict.button02}
                        </a>
                    </m.div>
                    </div>
                {/* </div> */}
            </section>
            <section id='offering'
                class="h-auto relative text-magic-potion bg-cover bg-center bg-no-repeat pt-20 px-5 lg:px-20">
                    <m.div
                        className=""
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3 }}
                        variants={{
                            hidden: {opacity:0, x:-50},
                            visible: {opacity:1, x:0}
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
                    </m.div>
            </section>
            </LazyMotion>
        </div>
    )
}

export default Landing