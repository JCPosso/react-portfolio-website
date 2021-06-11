import React from 'react'
import SocialMediaBtn from '../SocialMedia';

import {    
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
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
                        <SocialMediaBtn/>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
