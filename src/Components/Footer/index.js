import React from 'react'
import {FaFacebook, FaInstagram,FaLinkedin} from 'react-icons/fa';
import {    
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    WebSiteRight,
    SocialLogo

} from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>JCPosso</SocialLogo>
                        <WebSiteRight>JCPosso © {new Date().getFullYear()} All rights  reserved</WebSiteRight>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
