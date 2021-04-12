import React from 'react'
import {
    SidebarContainer,
    Icon,CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements';
const Sidebar = () => {
    return (
        <>
            <SidebarContainer>
                <Icon>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to ='home'> Home</SidebarLink>
                        <SidebarLink to ='education'>Education</SidebarLink>
                        <SidebarLink to ='projects'> Projects</SidebarLink>
                        <SidebarLink to ='contact'>Contact</SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
