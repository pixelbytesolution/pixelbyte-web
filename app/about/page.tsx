import Footer from '@/components/footer/Footer'
import AboutPage from '@/components/about/AboutPage'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <main>
        <Navbar/>
        <AboutPage/>
        <Footer/>
    </main>
  )
}

export default page