import React from 'react'
import './Skills.css'
import skills from '../../assets/skills'


const Skills = () => {
    return (
        <div>
            <div className='about'>
                <div className="about-title">
                    <h1>Technical Skills</h1>
                     <div className='skills'>
                        
                     {skills.map((skill,index)=>(
 <div key={index} className='skill'>
   <img className='skill-img' src={skill.skill_image} alt="" />
 <h3>{skill.skill_name}</h3>
 
</div>
                        ))}
                        
                         

                         
                         

                         

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Skills