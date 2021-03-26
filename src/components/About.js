import React from 'react';
import api from '../assets/icons/api.svg'
import Skillcard from './Skillscard';
const skills = [
    {
        icon: api,
        title:"Data Science",
        about: "Background with data science.Build some projects in Deep Learning."
    },
    {
        icon: api,
        title:"React Developer",
        about: "Build some amazing single page applications."
    },
    {
        icon: api,
        title:"Microservice Development",
        about: "Have experience, working with distributed systems."
    },
    {
        icon: api,
        title:"Mathematics and Algorithms",
        about: "Professional Problem solver.I am a huge fan of challenging tasks."
    }
]
const About = () => {
        return(
            <div className="about">
                <h6 className="about__intro">
                    Lorem ipsum
                </h6>
                <div className="container about__container">
                    <h6 className="about__heading">What I offer</h6>
                    <div className="row">
                        {
                                skills.map(skill =>
                                    <Skillcard skill={skill}/>
                                    )
                        }

                    </div>
                </div>
            </div>

        );
    };

export default About;