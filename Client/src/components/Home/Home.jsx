import React from 'react'
import Community from './Community'
import Footer from './Footer'
import FooterTop from './FooterTop'
import PlacesToVisit from './PlacesToVisit'
import Slider from './Slider'
import Navbar from './Navbar'
import Showinfo from './Showinfo'
import Experiance from './Experiance'
import Payoptions from './Payoptions'
import Aazadi from './Aazadi'
import Carousel from './Carousel'


function Home() {
    return (
        <div>
            <Navbar/>
            <Experiance/>
            <Payoptions/>
            <Aazadi/>
           
            <Carousel/>
            {/* <Showinfo/> */}
            <PlacesToVisit/>
            <Slider/>
            <Community/>
            <FooterTop/>
            <Footer/>
        </div>
    )
}

export default Home
