import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Slider.scss"

function Slider() {
    let[currentSlide,setCurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];

      /// function to slide image 

      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1 );

      }
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
        
      }
  return (
    <div className='slider'>
        <div className="container" style={{transform :`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src= {data[1]}alt="" />
            <img src={data[2]}alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}><ArrowBackIcon/></div>
            <div className="icon" onClick={nextSlide}><ArrowForwardIcon/></div>
        </div>
    </div>
  )
}

export default Slider