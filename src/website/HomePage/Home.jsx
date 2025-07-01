import React from 'react'
import Header from './Header'
import BannerCarousel from './BannerCarousel'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <main>
        <BannerCarousel/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home;