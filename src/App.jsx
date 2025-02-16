import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Honda from './components/Honda/Honda'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
// import Campus from './components/campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] =useState(false);

  return (
    <div>
      <Navbar/>
      <Honda/>
      <div className="container">
        <Title subTitle='OUR PRODUCTS' Title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      {/* <Title subTitle='GALLERY' Title='Campus Photos'/>
      <Campus/> */}
      <Title Title='Why Choose Us'/>
      <Testimonials/>
      <Title subTitle='CONTACT US' Title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
     </div>
  )
}

export default App
