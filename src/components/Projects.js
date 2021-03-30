import React from 'react';
import data_projects from './data/projects_data';
import ProjectCard from './ProjectCard';
import {useState} from 'react';
import {motion} from 'framer-motion';
const Projects = () => {
    const [projects, setProjects] = useState(data_projects)

    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
    }
    const project_variant={
        hidden:{
            y: '-30vh',
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delay:0.2,duration:0.7
            }
        }
    }

        return(
            <motion.div className='container projects'
                variant={project_variant}
                initial='hidden'
                animate='visible'
                >
                <div className='projects__navbar'>
                    <div onClick={()=>setProjects(data_projects)}>All</div>
                    <div onClick={()=>handleFilterCategory('react')}>React-js</div>
                    <div onClick={()=>handleFilterCategory('angular')}>Angular</div>
                    <div onClick={()=>handleFilterCategory('Data Science')}>Data Science</div>
                    <div onClick={()=>handleFilterCategory('django')}>Python-Django</div>
                    <div onClick={()=>handleFilterCategory('golang')}>Golang</div>
                </div>
                <div className='row'>
                    {
                        projects.map(project =>
                            <ProjectCard key={project.name} project={project}/>)

                    }

                </div>
                
            </motion.div>

        );
    };

export default Projects;