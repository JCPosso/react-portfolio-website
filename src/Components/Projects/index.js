import React from 'react'
import {ProjectsContainer,ProjectLink,ProjectsWrappers,ProjectsCard,ProjectsH1,ProjectsH2,ProjectsP, ProjectsIcon} from './ProjectsElements';
import py from '../../images/py.png';
import js from '../../images/js.png';
import ls from '../../images/Letssuport.PNG';
const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Recent projects</ProjectsH1>
            <ProjectsWrappers>
            <ProjectLink href="https://github.com/Let-s-support/2021-1-PROYCVDS-LetsSupport" target="_blank">                
                <ProjectsCard>
                    <ProjectsIcon src={ls}/>
                    <ProjectsH2>Let's Support</ProjectsH2>
                    <ProjectsP>Final CVDS project, Lets support is an application that 
                        seeks to help with the needs of students in the university community</ProjectsP>
                </ProjectsCard>
            </ProjectLink>
                <ProjectLink href="https://github.com/JCPosso/complexNumbers/" target="_blank">
                <ProjectsCard>
                    <ProjectsIcon src={py} />
                    <ProjectsH2>Complex Numbers</ProjectsH2>
                    <ProjectsP>Complex Numbers is a library for the management of complex numbers, 
                        complex matrices. Useful for the realization of quantum circuit simulations.</ProjectsP>
                </ProjectsCard>
                </ProjectLink>
                <ProjectLink href="https://github.com/JCPosso/SocialPetProject" target="_blank">
                <ProjectsCard>
                    <ProjectsIcon src={js}/>
                    <ProjectsH2>Social Pet</ProjectsH2>
                    <ProjectsP>Front-end model of a website
                         for pet adoption.</ProjectsP>
                </ProjectsCard>
                </ProjectLink>
            </ProjectsWrappers>
        </ProjectsContainer>
    )
}

export default Projects
