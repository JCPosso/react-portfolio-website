import React from 'react'
import {FaFacebook, FaInstagram,FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import {SocialIcons,SocialIconLink } from './SocialMediaElements';
const index = () => {
    return (
        <SocialIcons>
            <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                <FaInstagram size={30}/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Whatsapp">
                <FaWhatsapp size={30}/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                <FaFacebook size={30}/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="LinkedIn">
                <FaLinkedin size={30}/>
            </SocialIconLink>
        </SocialIcons>
    )
}

export default index
