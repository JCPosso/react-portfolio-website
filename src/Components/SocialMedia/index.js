import React from 'react'
import {FaGithub, FaInstagram,FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import {SocialIcons,SocialIconLink } from './SocialMediaElements';
const index = () => {
    return (
        <SocialIcons>
            <SocialIconLink href="https://www.instagram.com/jcam_pg/?hl=es-la" target="_blank" arial-label="Instagram">
                <FaInstagram size={30}/>
            </SocialIconLink>
            <SocialIconLink href="https://wa.me/573154673969" target="_blank" arial-label="Whatsapp">
                <FaWhatsapp size={30}/>
            </SocialIconLink>
            <SocialIconLink href="https://github.com/JCPosso" target="_blank" arial-label="GitHub">
                <FaGithub size={30}/>
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/juancamilop/" target="_blank" arial-label="LinkedIn">
                <FaLinkedin size={30}/>
            </SocialIconLink>
        </SocialIcons>
    )
}

export default index
