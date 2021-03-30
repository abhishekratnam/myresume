import React from 'react';
import data_projects from './data/projects_data';
import ProjectCard from './ProjectCard';
const Projects = () => {
        return(
            <div className='container projects'>
                <div className='projects__navbar'>
                    <div>All</div>
                    <div>React-js</div>
                    <div>Data Science</div>
                    <div>Python-Django</div>
                    <div>Golang</div>
                </div>
                <div className='row'>
                    {
                        data_projects.map(project =>
                            <ProjectCard key={project.name} project={project}/>)

                    }

                </div>
                
            </div>

        );
    };

export default Projects;