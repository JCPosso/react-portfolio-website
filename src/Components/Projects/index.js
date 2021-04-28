import React from 'react'
import {ProjectsContainer,ProjectsWrappers,ProjectsCard,ProjectsH1,ProjectsH2,ProjectsP, ProjectsIcon} from './ProjectsElements';
const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>My projects</ProjectsH1>
            <ProjectsWrappers>
                <ProjectsCard>
                    <ProjectsIcon/>
                    <ProjectsH2>Name Project1</ProjectsH2>
                    <ProjectsP>description</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon/>
                    <ProjectsH2>Name Project2</ProjectsH2>
                    <ProjectsP>description</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon/>
                    <ProjectsH2>Name Project3</ProjectsH2>
                    <ProjectsP>description</ProjectsP>
                </ProjectsCard>
            </ProjectsWrappers>
        </ProjectsContainer>
    )
}

export default Projects
