import React from 'react'
import {
    SidebarContainer,
    Icon,CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements';
import {Button,HeroBtnWrapper} from './../HeroSection/HeroElements';
import hv from '../../Documents/Juan-Camilo-Posso-Guevara.pdf';
const Sidebar = ({isOpen,toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to ='about' onClick={toggle}> About</SidebarLink>
                        <SidebarLink to ='education'onClick={toggle}>Education</SidebarLink>
                        <SidebarLink to ='projects' onClick={toggle}> Projects</SidebarLink>
                        <SidebarLink to ='contact' onClick={toggle}>Contact</SidebarLink>
                        <HeroBtnWrapper><Button  to={hv} target="_blank" download> Download CV </Button></HeroBtnWrapper>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
