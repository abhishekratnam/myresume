import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import Bar from './Bar';    
import {motion} from 'framer-motion';
const languages = [
    {
        icon: python,
        name: 'Python',
        level: '85'
    },
    {
        icon: react,
        name: 'Golang',
        level: '67'
    },
    {
        icon: react,
        name: 'HTML',
        level: '50'
    },
    {
        icon: react,
        name: 'react',
        level: '60'
    },
    {
        icon: react,
        name: 'Django',
        level: '80'
    },
    {
        icon: react,
        name: 'Mathematics and Algorithms',
        level: '70'
    }
]

const tools = [
    {
        icon: react,
        name: 'VS-Code',
        level: '85'
    },
    {
        icon: react,
        name: 'My-SQL',
        level: '85'
    },

]


const Resume = () => {
    const resume_variant={
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
    return (
        <motion.div className="container resume"
        variant={resume_variant}
        initial='hidden'
        animate='visible'
        exit='exit'>
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Enginnering
                        </h5>
                        <p className="resume-card__name">
                            Jaipur National University(2016-2020)
                        </p>
                        <p className="resume-card__details">B.tech in Computer Science Engineering from JNU</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern
                        </h5>
                        <p className="resume-card__name">
                            Kloudone(2020)
                        </p>
                        <p className="resume-card__details">Full time software engineer@Kloudone</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language}/>
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
export default Resume;