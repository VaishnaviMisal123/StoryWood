import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';
import Image from '../../public/Image.jpg';

function Home() {
  return (
    <>
         <Navbar />
         <Banner />
         <Freebook />
         <Footer />
  </>
  )
}

export default Home
