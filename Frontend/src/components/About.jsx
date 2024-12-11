import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutImage from '../../public/AboutImage.jpg';

function About() {
  return (
   <>
    <Navbar />
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='min-h-screen  flex flex-col items-center justify-center'>
        <div className='items-center justify-center text-center dark:bg-slate-900 dark:text-white'>
        <div className='min-h-72 px-200 p-10 bg-cover' style={{ backgroundImage: `url(${AboutImage})` }}></div>
        <h1 className='text-2xl md:text-3xl font-bold text-center my-6'>About Us</h1>
        <p>
        Welcome to <span className='text-pink-500 font-bold'>StoryWood</span>, your gateway to a world of imagination and knowledge. We are more than just a bookstore—<span className='text-pink-500 font-bold'>StoryWood</span>is a journey through words, where each book is an adventure waiting to unfold. Our carefully curated collection features a diverse range of genres, from inspiring tales and heartwarming stories to thrilling mysteries and fantastical journeys.
        </p>
        <br />
        <p>
        At <span className='text-pink-500 font-bold'>StoryWood</span>, we are passionate about fostering a love for reading and offering books that resonate with readers of all ages. Whether you're looking to lose yourself in a captivating novel, learn something new, or simply find a good read to relax with, we have something for everyone.
        </p>
        <br />
        <p>
        Join us on a literary adventure, and let <span className='text-pink-500 font-bold'>StoryWood</span> be your trusted companion in discovering stories that stay with you forever.
        </p>
        </div>
        </div>
    </div>
    <Footer />
   </>
  )
}

export default About
