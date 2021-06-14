import React,{useState} from 'react';
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroP,
    HeroH1,
    HeroBtnWrapper,
    Button,
    HeroContentWrapper,
    SocialHeroWrapper
} from './HeroElements';
import imgn from '../../images/background.jpg';
import hv from '../../Documents/Juan-Camilo-Posso-Guevara.pdf';
import SocialMedia from '../SocialMedia';
const HeroSection = () => {
    const[ hover, setHover] =useState(false);

    const onHover =()=>{
        setHover(!hover);
    }
    return (
        <HeroContainer id="home">
            <HeroBg src={imgn} alt="none">
            </HeroBg>
            <HeroContent>
                <HeroContentWrapper>
                            <HeroH1>Hi! I'm Juan Camilo</HeroH1>
                            <HeroP>
                                Get know me , I am a Systems Engineering student,Im passionate about life and tecnnology.
                            </HeroP>
                            <SocialHeroWrapper>
                                <SocialMedia/>
                            </SocialHeroWrapper>
                            <HeroBtnWrapper>
                                <Button to={hv} target="_blank" download>
                                    Download CV
                                </Button>
                            </HeroBtnWrapper>
                        
                </HeroContentWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;