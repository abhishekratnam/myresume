import React from 'react';
import api from '../assets/icons/api.svg'
import Skillcard from './Skillscard';
import {motion} from 'framer-motion';
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
    const about_variant={
        hidden:{
            y: '-30vh',
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delay:0.2,duration:0.7
            }
        },
        exit:{
            opacity: 0,
            transition:{
                ease: 'easeInOut'
            }
        }
    }
        return(
            <motion.div className="about"
            variant={about_variant}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
                <h6 className="about__intro">
                    I am a polyglot tech geek always looking/learning to solve realworld Problems.
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
            </motion.div>

        );
    };

export default About;