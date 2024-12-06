import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useForm } from "react-hook-form";
import BackgroundImage from '../../public/Background.jpg';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <>
        <Navbar />
           <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
               <div className='min-h-screen flex flex-col items-center justify-center'>
               <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md dark:bg-slate-900 dark:text-white'>
               <h1 className='text-2xl md:text-3xl font-bold text-center mb-6'>Contact Us</h1>
                   <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                   {/* Name */}

                   <span className='block text-sm font-medium mb-1'>Name</span>
                   <input type="text" placeholder='Enter your name' className='w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white' {...register("name", { required: true })} />
                   {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
           
                  {/* Email */}
                  <span className='block text-sm font-medium mb-1'>Email</span>
                  <input type="email" placeholder='Enter your email' className='w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white' {...register("email", { required: true })} />
                  {errors.email && <span className='text-sm text-red-500'>This field is required</span>} 

                  {/* Message */}
                  <span className='block text-sm font-medium mb-1'>Message</span>
                  <textarea placeholder='Type your message' className='w-full h-32 px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white' {...register("message", { required: true })}></textarea>
                  {errors.message && <span className='text-sm text-red-500'>This field is required</span>} 

                  <button className='w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300'>Submit</button>
                   </form>
               </div>
               </div>
           </div>
        <Footer />
    </>
  )
}

export default Contact
