import Link from "next/link"

const Fabric = ({ dict }) => {
    return (
        <section class="text-gray-600 mx-5 lg:mx-20">
            <div id='fabrics' class="container py-10 lg:pb-10 lg:pt-28">
                <div class="flex flex-wrap w-full mb-10">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-tulip-yellow">{dict.fabric} </h1>
                        <div class="h-1 w-20 bg-tulip-yellow rounded"></div>
                    </div>
                    <p class="lg:w-1/2 w-full leading-relaxed text-magic-potion">{dict.fabricContent}</p>
                </div>
                <div class="mb-5">
                    <div class="w-full mb-2 lg:mb-0 flex flex-row flex-wrap items-center">
                        <h1 class="w-1/4 lg:w-2/12 sm:text-xl text-lg font-medium title-font mb-2 text-gray-900">{dict.fabricTypes}</h1>
                        <div class="h-0.5 w-3/4 lg:w-10/12 bg-gray-400 rounded"></div>
                    </div>
                </div>
                <div class="grid gap-5 grid-cols-1 md:grid-cols-4" >
                    <div class="">
                        {/* <Link href={dict.langsuffix+"/satin stripes"}> */}
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="First Fabric - Satin"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="/satin-stripes.jpg"
                            />
                        </div>
                        {/* </Link> */}
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{dict.fabric01}</h2>
                    </div>
                    <div class="">
                        {/* <Link href={dict.langsuffix+"/plain sateen"}> */}
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Second Fabric - Plain Sateen"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="https://images.pexels.com/photos/8465949/pexels-photo-8465949.jpeg?auhref=dict.langsuffix+compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                        </div>
                        {/* </Link> */}
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{dict.fabric02}</h2>
                    </div>
                    <div class="">
                        {/* <Link href={dict.langsuffix+"/plain percale"}> */}
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group mb-3"
                        >
                            <img
                                alt="Third Fabric - Plain Percale"
                                class="object-cover aspect-square group-hover:scale-110 transition duration-500 ease-in-out"
                                src="/percale.jpg"
                            />
                        </div>
                        {/* </Link>    */}
                        <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-4">{dict.fabric03}</h2>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Fabric