import './HeroSection.css';
import React from 'react'


function HeroSection({
    matches,
    header2,
    describe1,
    describe2,
    describe3,
    describe4,
    img1,
    img2
}) {
    
  return (
    <>
        <div className='matches'>
            <img src={img1}></img>
            <img src={img2}></img>
            <h1 className='header2'>{header2}</h1>
            <div className='describe'>
                <p>{describe1}</p>
                <p>{describe2}</p>
                <p>{describe3}</p>
                <p>{describe4}</p>
            </div>
            
        </div>
    </>
  )
}

export default HeroSection

