import React from 'react'
import "./projectsHome.css"
import flames from "../../assets/background/flames.webp"

function ProjectsHome() {
  return (
    <div id='projects-container'>
        <div id='projects-list-1'>
            <div className='project-card'>
                <img id='pic' src={flames}/>
                <a href='/Projects/flames' target='_blank' className='proj-link'>View Project</a>
            </div>
            <div className='project-card'>
                <img id='pic' src={flames}/>
                <a href='' className='proj-link'>
                    View Project
                </a>
            </div>
            <div className='project-card'>
                <img id='pic' src={flames}/>
                <a href='' className='proj-link'>View Project</a>
            </div>
        </div>
        <div id='projects-list-2'>
            <div className='project-card'>
                <img id='pic' src={flames}/>
                <a href='' className='proj-link'>View Project</a>
            </div>
            <div className='project-card'>
                <img id='pic' src={flames}/>
                <a href='' className='proj-link'>View Project</a>
            </div>
            <div className='project-card'>
                <img id='pic' src={flames}/>
                <a href='' className='proj-link'>View Description</a>           
            </div>
        </div>
    </div>
  )
}

export default ProjectsHome
