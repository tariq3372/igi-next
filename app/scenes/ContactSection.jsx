import React from 'react'
import { useForm } from 'react-hook-form'

const ContactSection = () => {

    const {
        register,
        trigger,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {

        console.log(e)
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

  return (
    <div id='contact' className='min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[100px]'>
        <div className='mx-10 lg:ml-20'>
            <p className='lg:w-1/2 w-full leading-relaxed text-gray-500 mb-2'>Plan on Placing a Large Order?</p>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>Receive Your Free Quote</h1>
            <div className="h-1 w-20 bg-magic-potion rounded"></div>

        <form 
                target="_blank"
                onSubmit={handleSubmit(onSubmit)}
                action=""
                method="POST"
            >
                <div className='flex flex-col justify-center font-montserrat mt-10'>
                    <label className='text-gray-500 font-semibold'>Name :
                    <input
                        className='w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2'
                        type='text'
                        name='Name'
                        placeholder='Enter your Name'
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    /></label>
                    <label className='text-gray-500 font-semibold'>Email ID :
                    <input
                        className='w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2'
                        type='text'
                        placeholder='Enter your Email ID'
                        {...register("email",{
                            required: true,
                            maxLength: 20,
                        })}
                    /></label>
                    <label className='text-gray-500 font-semibold'>Phone No. :
                    <input
                        className='w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2'
                        type='text'
                        placeholder='Enter your Phone No'
                        {...register("phone",{
                            required: true,
                            maxLength: 20,
                        })}
                    /></label>
                    <label className='text-gray-500 font-semibold'>Query :
                    <textarea
                        className='w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2'
                        type='text'
                        placeholder='Type your query'
                        {...register("query",{
                            required: true,
                            maxLength: 60,
                        })}
                    /></label>    
                    <button className='rounded border-2 border-magic-potion mb-3 md:rounded-full text-magic-potion bg-white px-8 py-1.5'
                            type='submit'
                    >Submit</button>
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
                        src="cottonbro-studio.jpg"
                    />   
                </div>
                </div>
        </div>
    </div>
  )
}

export default ContactSection