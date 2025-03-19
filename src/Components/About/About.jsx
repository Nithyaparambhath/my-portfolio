import React from 'react'
import './About.css'
import profile_pic from '../../assets/nit-profpic.jpg'


const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>

            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_pic} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Web developer with 6 years of experience in building scalable web applications. Proficient in React.js, Node.js, Express.js, and MongoDB, with expertise in frontend development. </p>
                        <p>Skilled in Wordpress development, integrating plugins. Passionate about building user-friendly applications and solving complex technical challenges.</p>
                        <p>Developed and maintained parent and child components using state and props in React JS.Built single-page web applications using HTML5, CSS3, React JS, and Bootstrap. Implemented CRUD functionalities using React.js and responsive design principles</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About