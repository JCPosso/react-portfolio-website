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
import imgn from '../../images/dev.png';
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
                <HeroContentWrapper>
                    <HeroRow>
                        <HColumn1>
                            <HeroH1>Hi! Im Juan Camilo</HeroH1>
                            <HeroP>
                                Know me , I am a Systems Engineering student, passionate about life and tecnnology.
                            </HeroP>
                            <HeroBtnWrapper>
                                <Button>
                                    Downland CV
                                </Button>
                            </HeroBtnWrapper>
                        </HColumn1>
                        <HColumn2>
                            <ImgWrap>
                                <Img src={imgn}alt="some"/>
                            </ImgWrap>
                        </HColumn2>
                    </HeroRow>
                </HeroContentWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;