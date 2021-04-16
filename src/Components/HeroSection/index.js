import React,{useState} from 'react'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroP,
    HeroH1,
    HeroBtnWrapper,
    Button
} from './HeroElements';

const HeroSection = () => {
    const[ hover, setHover] =useState(false);

    const onHover =()=>{
        setHover(!hover);
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi! Im Juan Camilo</HeroH1>
                <HeroP>
                    Know me , I am a Systems Engineering student, passionate about life and tecnnology.
                </HeroP>
                <HeroBtnWrapper>
                    <Button>
                        Downland CV
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;