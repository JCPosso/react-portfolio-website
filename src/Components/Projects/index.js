import React from 'react'

const Services = () => {
    return (
        <ProjectsContainer>
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

export default Services
