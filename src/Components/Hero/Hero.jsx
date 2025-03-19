import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/nit-profpic.jpg'
const Hero = () => {
    return (
        <div className='hero-section'>
            <img src={profile_pic} alt="" />
            <h1><span>I'm Nithya P,</span>  Web Developer in Bangalore </h1>
            <p>I am a frontend developer from Bangalore, with 6 years of experience.</p>
            <div className="connect-btn">Download CV</div>
        </div>
    )
}

export default Hero