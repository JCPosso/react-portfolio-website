import React,{useState} from 'react';
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroP,
    HeroH1,
    HeroBtnWrapper,
    Button,
    HColumn1,
    HColumn2,
    HeroContentWrapper,
    HeroRow
} from './HeroElements';
import {
    Img,ImgWrap
} from './../InfoSection/InfoElements';
import imgn from '../../images/background.jpg';
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
                            <HeroH1>Hi! Im Juan Camilo</HeroH1>
                            <HeroP>
                                Know me , I am a Systems Engineering student,Im passionate about life and tecnnology.
                            </HeroP>
                            <HeroBtnWrapper>
                                <Button to="">
                                    Download CV
                                </Button>
                            </HeroBtnWrapper>
                        
                </HeroContentWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;