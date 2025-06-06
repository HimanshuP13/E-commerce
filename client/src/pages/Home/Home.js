import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

function Home() {

 
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type = "featured"/>
      <Categories/>
      <Contact/>
      <FeaturedProducts type = "trending"/>

    </div>
  )
}

export default Home