import React from 'react'
import { useForm } from 'react-hook-form'
import useMediaQuery from '../hooks/useMediaQuery';
import { useRouter } from 'next/navigation';

const ContactSection = ({dict}) => {
    const route = useRouter();

    const {
        register,
        trigger,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    
    const onSubmit = async (e) => {
        let url = ""
        let message = "New Interaction from your Website:%0a%0aName     = " + e.name +
            "%0aEmail ID = " + e.email +
            "%0aPhone    = " + e.phone +
            "%0aQuery     = " + e.query;
        if (isAboveSmallScreens) {
            url = `https://web.whatsapp.com/send?phone=+966595278489&text=${message}&app_absent=0`
        } else {
            url = `https://api.whatsapp.com/send?phone=+966595278489&text=${message}&app_absent=0`
        }
        route.push(url);
        // window.push(url);
    }

    return (
        <section id='contact' className='min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[100px]'>
            <div className='mx-10 lg:ml-20'>
                <p className='lg:w-1/2 w-full leading-relaxed text-gray-500 mb-2'>{dict.contactInfo}</p>
                <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>{dict.contactContent}</h1>
                <div className="h-1 w-20 bg-magic-potion rounded"></div>

                <form
                    target="_blank"
                    // onSubmit={handleSubmit(onSubmit)}
                    action=""
                    method="POST"
                >
                    <div className='flex flex-col justify-center font-montserrat mt-10'>
                        <label className='text-gray-500 font-semibold'>{dict.contactName} :
                            <input
                                className='w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2'
                                type='text'
                                name='Name'
                                placeholder={dict.contactNameHolder}
                                {...register("name", {
                                    required: true,
                                    maxLength: 20,
                                })}
                            /></label>
                        <label className='text-gray-500 font-semibold'>{dict.contactEmail} :
                            <input
                                className='w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2'
                                type='text'
                                placeholder={dict.contactEmailHolder}
                                {...register("email", {
                                    required: true,
                                    maxLength: 60,
                                })}
                            /></label>
                        <label className='text-gray-500 font-semibold'>{dict.contactPhone} :
                            <input
                                className='w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2'
                                type='text'
                                placeholder={dict.contactPhoneHolder}
                                {...register("phone", {
                                    required: true,
                                    maxLength: 20,
                                })}
                            /></label>
                        <label className='text-gray-500 font-semibold'>{dict.contactQuery} :
                            <textarea
                                className='w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2'
                                type='text'
                                placeholder={dict.contactQueryHolder}
                                {...register("query", {
                                    required: true,
                                    maxLength: 80,
                                })}
                            /></label>
                        <button className='rounded border-2 border-magic-potion mb-3 md:rounded-full text-magic-potion bg-white px-8 py-1.5'
                            type='submit' onClick={handleSubmit(onSubmit)}
                        >{dict.submit}</button>
                    </div>
                </form>
            </div>
            <div className='my-5 mx-10 lg:mx-20 lg:my-0'>
                <div className="p-2.5 bg-magic-potion/20">
                    <div
                        className="overflow-hidden cursor-pointer rounded-sm relative group z-0 before:absolute before:w-full before:max-w-[600px]  before:h-full"
                    >
                        <img
                            alt="House Keeping folded towels"
                            className="object-cover group-hover:scale-110 transition duration-500 ease-in-out z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src="/cottonbro-studio.jpg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection